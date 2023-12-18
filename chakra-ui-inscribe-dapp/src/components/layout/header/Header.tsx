import { Account } from "./account";
import styles from "./Header.module.scss";
import logoImage from "../../../assets/images/logo.png";

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <img src={logoImage} alt="Logo" style={{ width: "95px", height: "76px" }} />

      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
