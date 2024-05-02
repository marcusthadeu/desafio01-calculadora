
import { InputContainer } from './stytes';

const Input = ({value}) => {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  );
}

export default Input;