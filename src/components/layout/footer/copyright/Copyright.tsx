import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, // 添加 Button 组件的引入
} from "@chakra-ui/react";
import styles from "./Copyright.module.scss";

function Copyright() {
  const year = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <small className={styles.copyright}>
        All rights reserved by{" "}
        <Button variant="link" onClick={handleButtonClick} color="purple">
          Inscribe
        </Button>
        <a href="https://github.com/hacker20234/hackathon-2023-winter" target="_blank" rel="noreferrer">
          {" "}
          , {year} hackathon
        </a>
      </small>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Team information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>captain -- <a href="https://github.com/differs"  target="_blank" rel="noreferrer noopener" >differs</a>(SmartContract Developer)</p>
            <p>team member -- <a href="https://github.com/baize336699" className="custom-link" target="_blank"rel="noreferrer noopener" >baize336699 </a>(Web3 Frontend Developer)</p>
            <p>team member -- <a href="https://github.com/xgocn"  className="custom-link" target="_blank" rel="noreferrer noopener">xgocn </a>(Web3 Frontend Developer)</p>
            <p>team member -- <a href="web3-crypto-designer" className="custom-link" target="_blank" >DAO UI Design </a>(UI / ARTIST)</p>
          </ModalBody>
          <ModalFooter>{/* 可选的底部内容 */}</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export { Copyright };
