import { useTonAddress } from "@tonconnect/ui-react";
import { useTonWallet } from "@tonconnect/ui-react";

const UserAddress = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  const wallet:any = useTonWallet();

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
    </div>
  );
};

export default UserAddress;
