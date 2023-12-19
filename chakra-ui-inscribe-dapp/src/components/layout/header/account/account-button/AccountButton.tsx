import Identicon from "@polkadot/react-identicon";
import { buttonStyles } from "@gear-js/ui";
import { Button } from "@chakra-ui/react";
import "./style.css";

type Props = {
  address: string;
  name: string | undefined;
  onClick: () => void;
  isActive?: boolean;
  block?: boolean;
};

function AccountButton({ address, name, onClick, ...rest }: Props) {
  return (
    <Button backgroundColor="green.600" borderRadius="30px" onClick={onClick} {...rest}>
      <Identicon value={address} className={buttonStyles.icon} theme="polkadot" size={28} />
      {name}
    </Button>
  );
}

export { AccountButton };
