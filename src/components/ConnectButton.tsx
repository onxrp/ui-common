import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import * as Sentry from "@sentry/react";
import { io, Socket } from "socket.io-client";
import {
  Box,
  Link,
  Typography,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  useTheme,
} from "@mui/material";
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

export default function ConnectButton({ globalContext, reactSession }: ConnectButtonProps) {
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
              backgroundColor: "#040f30",
              borderRadius: "15px",
              padding: { md: 4, xs: 2 },
              textAlign: "center",
            }}
          >
            <Typography
              color={(theme.palette as any).white.main}
              fontSize="1.2rem"
              marginBottom={2}
            >
              SIGN IN WITH XUMM
            </Typography>
            {signInLink ? (
              <a
                href={signInLink}
                rel="noreferrer"
                // @ts-ignore
                alt="Open in Xumm"
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
                    borderRadius: "15px",
                    display: { md: "none", xs: "block" },
                  }}
                >
                  Click Here to Open in Xumm
                </Button>
              </a>
            ) : null}
            {qrCode ? (
              <img
                src={qrCode}
                alt="Scan QR Code"
                style={{ maxWidth: "250px", width: "100%" }}
              />
            ) : (
              <CircularProgress />
            )}

            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {signInLink ? (
                <Link
                  href={signInLink}
                  rel="noreferrer"
                  target="_blank"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    display: { md: "inline-block", xs: "none" },
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    className="gradient-button"
                    sx={{
                      mt: "30px",
                      p: 1,
                      borderRadius: "15px",
                      color: "white.main",
                    }}
                  >
                    Sign with Xumm
                  </Button>
                </Link>
              ) : null}
              <Button
                variant="text"
                size="small"
                onClick={_cancelTransactionDebounce}
                sx={{
                  mt: "30px",
                  p: 1,
                  borderRadius: "15px",
                  color: "white.main",
                }}
              >
                Cancel
              </Button>
            </Box>
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
            {state.altCoin ? (
              <>
                <Typography>
                  {formatNumber(state.altBalance, 4)} {state.altCoin.ticker}
                </Typography>
                <Typography sx={{ mx: "20px" }}>|</Typography>
              </>
            ) : null}
            <Typography>{formatNumber(state.xrpBalance, 4)} XRP</Typography>
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
