import { ButtonUI } from "components/Button/Button";
import { Avatar, AvatarCircle, AvatarLine, AvatarWrapper, CardBox, LogoWrapper, TextData, TextWrapper, TopImage } from "./Card.styled";
import { useState } from "react";

import logo from '../../images/logo-min.png';
import top from '../../images/top-min.png';
import ellipse from '../../images/ellipse-min.png';
import line from '../../images/line-min.png';
import { updateUserData } from "services/fetchUsers";

export const CardUI = ({ id, user,avatar,followed,tweets,followers }) => {
    const [selection, setSelection] = useState(followed)

    const handleBtnClick = () => {
        setSelection(!selection)
        updateUserData(id,{user,avatar,followed:!selection,tweets,followers})
    }
    return (
      <CardBox key={id}>
        <LogoWrapper>
            <img src={logo} alt="logo"/>
        </LogoWrapper>
        <TopImage alt="decoration" src={top}/>

        <AvatarWrapper>
            <AvatarLine  alt='line' src={line} />
            <AvatarCircle  alt='frame' src={ellipse} width={80} height={80} />
           <Avatar src={avatar} alt={user} width={62} height={62}/>
        </AvatarWrapper>
        <TextWrapper>
        <TextData>{tweets.length}</TextData>
        <TextData>{followers.length}</TextData>
        </TextWrapper>
        <ButtonUI text={selection? "Following" : "Follow"} onClick={handleBtnClick} selected={selection}/>
      </CardBox>
    );
  };