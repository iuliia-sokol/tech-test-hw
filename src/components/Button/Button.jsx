import { ButtonMain, ButtonText } from './Button.styled';

export const ButtonUI = ({ text, onClick, selected, role }) => {
    return (
      <ButtonMain type='button' selected={selected} onClick={onClick} role={role}>
        <ButtonText>{text}</ButtonText>
      </ButtonMain>
    );
  };