import { ButtonUI } from "components/Button/Button";
import { CardBox } from "./Card.styled";
import { useState } from "react";

export const CardUI = ({ text }) => {

    const [selection, setSelection] = useState(false)

    const handleBtnClick = () => {
        setSelection(!selection)

    }
    return (
      <CardBox>
        
        <ButtonUI text={selection? "Following" : "Follow"} onClick={handleBtnClick} selected={selection}/>
      </CardBox>
    );
  };