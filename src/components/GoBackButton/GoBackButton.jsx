import { GoBackBtn, GoBackBtnWrapper, Hint } from "./GoBackButton.styled"
import sprite from '../../images/icons_sprite.svg';

export const GoBackBtnUI = () =>{
    return(
    <GoBackBtnWrapper>
    <GoBackBtn to='/'>
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