import { GoBackBtn, GoBackBtnWrapper, Hint } from "./GoBackButton.styled"
import sprite from '../../images/icons_sprite.svg';

export const GoBackBtnUI = ({onClick}) =>{
    return(
    <GoBackBtnWrapper>
    <GoBackBtn type='button' onClick={onClick}>
        <svg>
        <use href={sprite + `#up-arrow`} />
        </svg>     
    </GoBackBtn>
    <Hint>
        Go back
    </Hint>
    </GoBackBtnWrapper>
    )
}