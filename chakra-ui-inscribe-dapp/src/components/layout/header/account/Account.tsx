import { useState } from "react";
import { useAccount } from "@gear-js/react-hooks";
import { useNavigate } from "react-router-dom";
import { AccountsModal } from "./accounts-modal";
import { Wallet } from "./wallet";
import "./styles.css";

function Account() {
  const { account, accounts } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(""); // 追踪被点击的按钮
  const navigate = useNavigate(); // 获取导航函数

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToHome = (button: string) => {
    setSelectedButton(button); // 更新被点击的按钮
    navigate("/ceshi");
  };

  return (
    <>
      {account ? (
        <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <div>
          {/* 头部中间每个功能 */}
          <button
            type="button"
            onClick={() => goToHome("deploy")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "deploy" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            Deploy
          </button>
          <button
            type="button"
            onClick={() => goToHome("Mint")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "Mint" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            Mint
          </button>
          <button
            type="button"
            onClick={() => goToHome("Burn")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "Burn" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            Burn
          </button>
          <button
            type="button"
            onClick={() => goToHome("QueryInscrible")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "QueryInscrible" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            QueryInscrible
          </button>
          <button
            type="button"
            onClick={() => goToHome("QueryInscribleByActorId")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "QueryInscribleByActorId" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            QueryInscribleByActorId
          </button>
          <button
            type="button"
            onClick={() => goToHome("QueryInscribleById")} // 将按钮标识传递给 goToHome 函数
            className={selectedButton === "QueryInscribleById" ? "home-button active" : "home-button"} // 根据按钮标识添加样式类名
          >
            QueryInscribleById
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
