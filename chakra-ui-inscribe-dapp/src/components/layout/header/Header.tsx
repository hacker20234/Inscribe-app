import { useState } from "react";
import { Account } from "./account";
import styles from "./Header.module.scss";
import logoImage from "../../../assets/images/logo.png";

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClickLogo = () => {
    setShowMessage(true);
  };

  const handleKeyDownLogo = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      setShowMessage(true);
    }
  };

  return (
    <header className={styles.header}>
      <button type="button" onClick={handleClickLogo} onKeyDown={handleKeyDownLogo} style={{ border: "none", background: "none", padding: 0 }}>
        <img src={logoImage} alt="Logo" style={{ width: "95px", height: "76px", cursor: "pointer" }} />
      </button>

      {isAccountVisible && <Account />}

      {showMessage && <p style={{ marginTop: "10px" }}>今日的晴空万里，也不及你的一抹笑意</p>}
    </header>
  );
}

export { Header };
