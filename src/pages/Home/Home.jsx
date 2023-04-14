import { CardUI } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "services/fetchUsers";
import { UsersList } from "./Home.styled";
import { Loader } from "components/Loader/Loader";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState([])

  const getUsers = async ()=>{
    try{
        setIsLoading(true)
    return await fetchAllUsers().then((data) => {
    setUsers(data)})}
    catch(err) {console.log(err)}
    finally{
        setIsLoading(false)
    }
 }

    useEffect(() => {    
            getUsers()
      }, []);


    return (
    <main>
        <Container>
        {isLoading && <Loader/>}
        <UsersList>
        {users&& users.map(({id, user, avatar,followers,tweets, followed}) => <CardUI id={id} tweets={tweets.length} followers={followers.length} followed={followed} user={user} avatar={avatar} />)}
        </UsersList>
        </Container>
    </main>)
}

export default Homepage;