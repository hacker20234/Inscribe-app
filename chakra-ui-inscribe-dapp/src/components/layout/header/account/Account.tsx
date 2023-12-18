import { useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { AccountsModal } from "./accounts-modal";
import { Wallet } from "./wallet";

function Account() {
  const { account, accounts } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <div>
          {/* 头部中间每个功能 */}
          <span
            style={{
              marginRight: "100px",
            }}
          >
            132
          </span>
          <span
            style={{
              marginRight: "100px",
            }}
          >
            132
          </span>
          <span
            style={{
              marginRight: "100px",
            }}
          >
            132
          </span>
          <span
            style={{
              marginRight: "100px",
            }}
          >
            132
          </span>

          {/* 头部右侧链接钱包 */}
          <button
            type="button"
            onClick={openModal}
            style={{
              border: "1px solid black",
              borderRadius: "14px",
              width: "200px",
              height: "45px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Connect Your Wallet
          </button>
        </div>
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}

export { Account };
