import { ButtonMain, ButtonText } from './Button.styled';

export const ButtonUI = ({ text, onClick, selected }) => {
    return (
      <ButtonMain type='button' selected={selected} onClick={onClick}>
        <ButtonText>{text}</ButtonText>
      </ButtonMain>
    );
  };