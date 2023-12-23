import facebookIcon from "assets/images/socials/facebook.png";
import instagramIcon from "assets/images/socials/instagram.png";
import telegramIcon from "assets/images/socials/telegram.png";
import twitterIcon from "assets/images/socials/twitter.png";
import whatsappIcon from "assets/images/socials/whatsapp.png";
import qqIcon from "assets/images/socials/qq.png";
import weixinIcon from "assets/images/socials/weixin.png";


import styles from "./Socials.module.scss";

const socials = [
  { href: "https://www.facebook.com/profile.php?id=61550205246256", icon: facebookIcon },
  { href: "https://twitter.com/gear_techs1", icon: instagramIcon },
  { href: "https://twitter.com/gear_techs2", icon: telegramIcon },
  { href: "https://twitter.com/gear_techs3", icon: twitterIcon },
  { href: "https://twitter.com/gear_techs4", icon: whatsappIcon },
  { href: "https://wpa.qq.com/msgrd?v=3&uin=2665702300&site=qq&menu=yes", icon: qqIcon },
  { href: "https://im/chat?chat_type=wpa&uin=2665702300&version=1&src_type=web&web_src=oicqzone.com", icon: weixinIcon },

];
export function Socials() {
  const handleQQClick = () => {
    window.location.href = 'https://wpa.qq.com/msgrd?v=3&uin=your_QQ_number&site=qq&menu=yes';
  };
  const getItems = () =>
    socials.map(({ href, icon }) => (
      <li key={href}>
      {href.includes("qq.com") ? (
        <button onClick={handleQQClick}>
        <img src={icon} alt="Social Icon" style={{ width: "30px", height: "30px" }} />
          </button>
        ) : (
      
        <a href={href} target="_blank" rel="noreferrer">
          <img src={icon} alt="Social Icon" style={{ width: "30px", height: "30px" }} />
        </a>
        )}
      </li>
    ));

  return <ul className={styles.socials}>{getItems()}</ul>;
}
