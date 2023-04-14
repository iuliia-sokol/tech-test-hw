import { ButtonUI } from "components/Button/Button";
import { Avatar, AvatarCircle, AvatarLine, AvatarWrapper, CardBox, LogoWrapper, TextData, TextWrapper, TopImage } from "./Card.styled";
import { useState } from "react";

import logo from '../../images/logo-min.png';
import top from '../../images/top-min.png';
import ellipse from '../../images/ellipse-min.png';
import line from '../../images/line-min.png';
import { updateUserData } from "services/fetchUsers";

export const CardUI = ({ id, user,avatar,followed,tweets,followers }) => {
    const userID = 777
    const [selection, setSelection] = useState(followed)
    const [followersCount, setFollowersCount] = useState(followers.length)
   

    const handleBtnClick = () => {
        setSelection(!selection)
        if(selection ) {
            updateUserData(id,{user,avatar,followed:!selection,tweets, followers: followers.filter(follower => 
                follower !== userID
                )})

            setFollowersCount(followersCount-1)

        }
        if(!selection) {
            updateUserData(id,{user,avatar,followed:!selection,tweets,followers:[...followers,userID]})
           
            setFollowersCount(followersCount+1)
        }
       
    }

    

//    useEffect(()=>{
   
//    }, [])

    return (
      <CardBox key={id}>
        <LogoWrapper>
            <img src={logo} alt="logo"/>
        </LogoWrapper>
        <TopImage alt="decoration" src={top}/>

        <AvatarWrapper>
            <AvatarLine  alt='line' src={line} height={8}/>
            <AvatarCircle  alt='frame' src={ellipse} width={80} height={80} />
           <Avatar src={avatar} alt={user} width={62} height={62}/>
        </AvatarWrapper>
        <TextWrapper>
        <TextData>{tweets.length} tweets</TextData>
        <TextData>{followersCount} followers</TextData>
        </TextWrapper>
        <ButtonUI text={selection? "Following" : "Follow"} onClick={handleBtnClick} selected={selection}/>
      </CardBox>
    );
  };