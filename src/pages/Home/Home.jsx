import { useEffect, useState } from "react";
import { fetchAllUsers } from "services/fetchUsers";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { CardUI } from "components/Card/Card";
import { BgWrapper, HeroTitle, HeroWrapper, RatingBlockTitle, RatingBlocksWrapper, RatingBox } from "./Home.styled";

const Homepage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [usersByFollowers, setUsersByFollowers] = useState([])
    const [usersByTweets, setUsersByTweets] = useState([])

    useEffect(() => {  
        const getUsers = async ({page,per_page,filter})=>{
            try{
                setIsLoading(true)
            return await fetchAllUsers(page,per_page,filter).then((data) => {
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
        getUsers({page:'', per_page:'', filter:''})  
      }, []);

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
                <RatingBlockTitle>Top 3 popular users</RatingBlockTitle>
                <RatingBlocksWrapper>
                {usersByFollowers.length>0 && usersByFollowers.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} role='followers' />)}
                </RatingBlocksWrapper>
                <RatingBlockTitle>Top 3 active users</RatingBlockTitle>
                <RatingBlocksWrapper>
                {usersByTweets.length>0 && usersByTweets.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} role='tweets' />)}
                </RatingBlocksWrapper>
                </RatingBox>
            </Container>
        </main>)
}

export default Homepage;