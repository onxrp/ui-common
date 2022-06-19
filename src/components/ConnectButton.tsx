import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import * as Sentry from "@sentry/react";
import { io, Socket } from "socket.io-client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useTheme from "@mui/material/styles/useTheme";
import axios from "axios";
import _ from "lodash";
import { formatNumber } from "../utils";

type SignInData = {
  expired: boolean;
  account?: string;
  issuedUserToken?: string;
};

interface ConnectButtonProps {
  globalContext: any;
  reactSession: any;
}

export default function ConnectButton({
  globalContext,
  reactSession,
}: ConnectButtonProps) {
  const theme = useTheme();
  const { state, loadAccount, signOutAccount } = useContext(
    globalContext as any
  );
  const activeInterval = useRef<any>();
  const [uuid, setUuid] = useState(null);
  const [signObj, setSignObj] = useState(null);
  const [qrCode, setQrcode] = useState(null);
  const [isSigning, setIsSigning] = useState(false);
  const [signInLink, setSignInLink] = useState(null);

  useEffect(() => {
    let socket: Socket<{ signin: (data: any) => void }, any>;
    if (uuid) {
      socket = io(`${process.env.REACT_APP_AXIOS_ROOT_URL}`);
      socket.emit("subscribe-uuid", uuid);
      socket.on("signin", (data: SignInData) => {
        if (!data.expired) {
          if (data.account) {
            reactSession.set("xpunk-account", data.account);
            reactSession.set("xpunk-userToken", data.issuedUserToken);
            clearInterval(activeInterval.current);
            loadAccount();
            setUuid(null);
            setSignObj(null);
            setQrcode(null);
            setIsSigning(false);
          }
        } else {
          // expired
        }
        socket.off("signin");
      });
    }
    return () => {
      if (socket) socket.disconnect();
    };
  }, [uuid]);

  const _handleConnectAccount = () => {
    axios
      .post(`/api/account/connect-wallet`)
      .then((res) => {
        setUuid(res.data.uuid);
        setSignObj(res.data);
        setSignInLink(res.data.next.always);
        setQrcode(res.data.refs.qr_png);
        setIsSigning(true);
      })
      .catch((err) => {
        Sentry.captureException(err);
      });
  };

  const _handleConnectAccountDebounce = useCallback(
    _.debounce(_handleConnectAccount, 500),
    []
  );

  const _cancelTransaction = () => {
    axios
      .get(`/api/trade/cancel-payload/${uuid}`)
      .then((res) => {
        setUuid(null);
        setSignObj(null);
        setQrcode(null);
        clearInterval(activeInterval.current);
        setIsSigning(false);
      })
      .catch((err) => {
        Sentry.captureException(err);
      });
  };

  const _cancelTransactionDebounce = useCallback(
    _.debounce(_cancelTransaction, 500),
    [uuid, activeInterval]
  );

  return (
    <>
      {isSigning ? (
        <Dialog
          open={isSigning}
          keepMounted
          // @ts-ignore
          PaperComponent="div"
        >
          <DialogContent
            sx={{
              backgroundColor: "background.modalBody",
              borderRadius: "24px",
              padding: { md: "40px", xs: "24px" },
              textAlign: "center",
              minWidth: { xs: "320px", md: "500px" },
            }}
          >
            <Grid
              container
              justifyContent={"space-between"}
              alignItems="center"
              mb={3}
            >
              <Grid item>
                <Typography
                  color="text.modal"
                  fontSize="1.5rem"
                  marginBottom={0}
                  component="h2"
                >
                  Connect to Wallet
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    padding: "3px",
                    borderRadius: "50%",
                    backgroundColor: "text.modal",
                    cursor: "pointer",
                  }}
                  onClick={_cancelTransactionDebounce}
                >
                  <CloseRoundedIcon
                    sx={{
                      display: "flex",
                      fontSize: "0.625rem",
                      stroke: "background.modalBody",
                      strokeWidth: "2px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
            {signInLink ? (
              <Grid
                container
                sx={{
                  display: { md: "none", xs: "block" },
                  justifyContent: "center",
                }}
              >
                <a
                  href={signInLink}
                  rel="noreferrer"
                  // @ts-ignore
                  alt="Open in Xumm"
                  target="_blank"
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    display: "block",
                    marginBottom: "1.2rem",
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    className="gradient-button"
                    sx={{
                      p: 1.5,
                      borderRadius: "24px",
                    }}
                  >
                    Open in XUMM
                  </Button>
                </a>
              </Grid>
            ) : null}
            <Grid container justifyContent="center">
              {qrCode ? (
                <img
                  src={qrCode}
                  alt="Scan QR Code"
                  style={{ maxWidth: "250px", width: "100%" }}
                />
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </DialogContent>
        </Dialog>
      ) : null}

      {!state.account ? (
        <Button
          color="primary"
          variant="contained"
          onClick={_handleConnectAccountDebounce}
        >
          Connect Wallet
        </Button>
      ) : (
        <>
          <Box display={{ md: "flex", xs: "none" }}>
            {state?.baseCoin ? (
              <>
                <Typography>
                  {formatNumber(state.baseBalance, 4)} {state?.baseCoin?.ticker}
                </Typography>
                <Typography sx={{ mx: "20px" }}>|</Typography>
              </>
            ) : null}
            <Typography>
              {formatNumber(state.quoteBalance, 4)} {state?.quoteCoin?.ticker}
            </Typography>
          </Box>
          <Box display={{ md: "table" }}>
            <Button
              color="primary"
              variant="contained"
              onClick={signOutAccount}
            >
              Disconnect
            </Button>
          </Box>
        </>
      )}
    </>
  );
}
