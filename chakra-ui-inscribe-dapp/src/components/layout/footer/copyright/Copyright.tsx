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
        <Button variant="link" onClick={handleButtonClick} color="blue">
          Inscribe
        </Button>
        , {year} hackathon
      </small>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Team information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>captain -- differs (SmartContract Developer)</p>
            <p>team member -- XXXX (Web3 Developer)</p>
            <p>team member -- baobei (Front-end development)</p>
          </ModalBody>
          <ModalFooter>{/* 可选的底部内容 */}</ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export { Copyright };
