import {
  SendTransactionRequest,
  useTonAddress,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { useTonWallet } from "@tonconnect/ui-react";
import { useCallback, useState } from "react";
import { TonProofDemoApi } from "../../utils/TonProofDemoApi";

const myTransaction: SendTransactionRequest = {
  validUntil: 0,
  messages: [
    {
      address:
        "0:76ab63fe8ba87bd870134da7e5a7a3bfef556e55666336fafb6b725233850a40", // destination address
      amount: "20000000", //Toncoin in nanotons,
    },
  ],
};
const UserAddress = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  const [data, setData] = useState([]);

  const wallet: any = useTonWallet();

  const [tonConnectUI, setOptions] = useTonConnectUI();

  // console.log(wallet, "wallet");

  const handleClick = useCallback(async () => {
    if (!wallet) {
      return;
    }
    console.log(wallet.account,"accc")
    const response = await TonProofDemoApi.getAccountInfo(wallet.account);

    setData(response as any);
  }, [wallet]);

  return (
    <div>
      User Address are below
      {userFriendlyAddress && (
        <div>
          <span>User-friendly address: {userFriendlyAddress}</span> <br />
          <span>Raw address: {rawAddress}</span> <br />
        </div>
      )}
      {wallet && (
        <div>
          <span>Connected wallet: {wallet.name}</span> <br />
          <span>Device: {wallet.device.appName}</span> <br />
        </div>
      )}
      <div>
        <button
          onClick={() => {
            console.log(myTransaction, "myTranas");
            const res = tonConnectUI.sendTransaction(myTransaction);
            console.log(res, "sendResponse");
          }}
        >
          Send transaction Button
        </button>
      </div>
      <div>
        <button onClick={handleClick}>
          Call backend getAccountInfo() Button
        </button>
      </div>
    </div>
  );
};

export default UserAddress;
