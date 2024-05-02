
import { ButtonContainer } from './styles';

const Buttom = ({label, onClick}) => {
  return (
    <ButtonContainer onClick={onClick} >
      {label}
    </ButtonContainer>
  );
}

export default Buttom;