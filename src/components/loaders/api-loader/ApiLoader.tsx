import React, { useEffect } from "react";
import styles from "./ApiLoader.module.scss";

function ApiLoader() {
  useEffect(() => {
    // 延迟加载动画样式
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ellipsis {
        33% {
          content: '..';
        }
        66% {
          content: '...';
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return <p className={`${styles.loader} ${styles.animate}`}>Initializing API</p>;
}

export { ApiLoader };