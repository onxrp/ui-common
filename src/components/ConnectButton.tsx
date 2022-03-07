import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  CircularProgress,
  useTheme,
} from "@mui/material";
import axios from "axios";
// @ts-ignore
import { ReactSession } from "react-client-session";
import _ from "lodash";
import { formatNumber } from "../utils";

interface ConnectButtonProps {
  globalContext: any;
}

export default function ConnectButton({ globalContext }: ConnectButtonProps) {
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
    if (uuid) {
      activeInterval.current = setInterval(() => {
        axios
          .get(`/api/trade/get-payload/${uuid}`)
          .then((res: any) => {
            const account = res?.data?.response?.account;
            if (account) {
              ReactSession.set("xpunk-account", account);
              ReactSession.set("xpunk-xummObj", res?.data);
              clearInterval(activeInterval.current);
              loadAccount();
              setUuid(null);
              setSignObj(null);
              setQrcode(null);
              setIsSigning(false);
            }
          })
          .catch((err: any) => {
            console.log(err);
          });
      }, 3000);
    }
  }, [uuid]);

  const _handleConnectAccount = () => {
    axios
      .post(`/api/account/connect-wallet`)
      .then((res: any) => {
        setUuid(res.data.uuid);
        setSignObj(res.data);
        setSignInLink(res.data.next.always);
        setQrcode(res.data.refs.qr_png);
        setIsSigning(true);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const _handleConnectAccountDebounce = useCallback(
    _.debounce(_handleConnectAccount, 500),
    []
  );

  const _cancelTransaction = () => {
    axios
      .get(`/api/trade/cancel-payload/${uuid}`)
      .then((res: any) => {
        setUuid(null);
        setSignObj(null);
        setQrcode(null);
        clearInterval(activeInterval.current);
        setIsSigning(false);
      })
      .catch((err: any) => {
        console.log("err", err);
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
            <Button
              // @ts-ignore
              variant="secondary"
              onClick={_cancelTransactionDebounce}
              fullWidth
              sx={{
                mt: "30px",
                p: 1,
                borderRadius: "15px",
                color: "white.main",
              }}
            >
              Cancel
            </Button>
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
          <Box display={{ md: "table" }} ml={2}>
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
