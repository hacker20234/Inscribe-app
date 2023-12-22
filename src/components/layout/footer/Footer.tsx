import { Socials } from "./socials";
import { Copyright } from "./copyright";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Socials />
      <span>
        <span style={{ fontSize: "14px" }}>For Support & Marketing inquiries : </span>
        <span style={{ fontWeight: "bold", fontSize: "14px" }}>scottermias@gmail.com</span>
      </span>
      <Copyright />
    </footer>
  );
}

export { Footer };
