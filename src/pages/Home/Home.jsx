import { useEffect, useState } from "react";

import { Container } from "components/Container/Container";
import { BgWrapper, HeroTitle, HeroWrapper, RatingBlockTitle, RatingBlocksWrapper, RatingBox } from "./Home.styled";

import { Loader } from "components/Loader/Loader";
import { fetchAllUsers } from "services/fetchUsers";
import { CardUI } from "components/Card/Card";

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [usersByFollowers, setUsersByFollowers] = useState([])
    const [usersByTweets, setUsersByTweets] = useState([])

    useEffect(() => {  
        const getUsers = async ()=>{
            try{
                setIsLoading(true)
            return await fetchAllUsers().then((data) => {
                setUsersByFollowers(data.sort(function (a, b) {
                var A = a.followers;
                var B = b.followers;
                return A < B ? 1 : -1; 
              }).slice(0, 3))
              setUsersByTweets(data.sort(function (a, b) {
                var A = a.tweets.length;
                var B = b.tweets.length;
                return A < B ? 1 : -1; 
              }).slice(0, 3))
            }
            )}
            catch(err) {console.log(err)}
            finally{
                setIsLoading(false)
            }
         }
        getUsers()
       
      }, []);
      console.log(usersByFollowers);
      console.log(usersByTweets);

    return (
        <main>
            <BgWrapper></BgWrapper>
            <Container>
            {isLoading && <Loader/>}
                <HeroWrapper>
                    <HeroTitle>
                        <h1>TweeTest</h1>
                        <span>let's tweet</span>
                    </HeroTitle>
                </HeroWrapper>
                <RatingBox>
                <RatingBlockTitle>Most popular tweeters</RatingBlockTitle>
                <RatingBlocksWrapper>
                {usersByFollowers.length>0 && usersByFollowers.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} role='followers' />)}
                </RatingBlocksWrapper>
                <RatingBlockTitle>Most active tweeters</RatingBlockTitle>
                <RatingBlocksWrapper>
                {usersByTweets.length>0 && usersByTweets.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} role='tweets' />)}
                </RatingBlocksWrapper>
                </RatingBox>
            </Container>
        </main>)
}

export default Homepage;