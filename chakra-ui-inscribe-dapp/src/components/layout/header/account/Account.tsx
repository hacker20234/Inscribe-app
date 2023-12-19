import { useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { useNavigate } from "react-router-dom";
import { AccountsModal } from "./accounts-modal";
import { Wallet } from "./wallet";
import "./styles.css";

function Account() {
  const { account, accounts } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // 获取导航函数

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToHome = () => {
    navigate("/ceshi"); // 跳转到/ceshi路由
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <div>
          {/* 头部中间每个功能 */}
          <button type="button" onClick={goToHome} className="home-button">
            首页
          </button>
          <button type="button" onClick={goToHome} className="home-button">
            首页
          </button>
          <button type="button" onClick={goToHome} className="home-button">
            首页
          </button>
          <button type="button" onClick={goToHome} className="home-button">
            首页
          </button>

          {/* 头部右侧链接钱包 */}
          <button type="button" onClick={openModal} className="wallet-button">
            Connect Your Wallet
          </button>
        </div>
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}

export { Account };
