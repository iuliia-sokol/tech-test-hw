import { CardUI } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "services/fetchUsers";
import { LoadMoreBtnWrapper, UsersList } from "./Home.styled";
import { Loader } from "components/Loader/Loader";
import { ButtonUI } from "components/Button/Button";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false)
  const [users, setUsers] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const PER_PAGE = 12

    useEffect(() => {  
        const getUsers = async ({page,per_page})=>{
            try{
                setIsLoading(true)
            return await fetchAllUsers(page,per_page).then((data) => {
            data.length >= PER_PAGE ? setShowLoadMoreBtn(true) :  setShowLoadMoreBtn(false)
            setUsers([...users, ...data])}
            )}
            catch(err) {console.log(err)}
            finally{
                setIsLoading(false)
            }
         }
       
        getUsers({page:pageNumber, per_page:PER_PAGE})
        // eslint-disable-next-line
      }, [pageNumber]);

    const handleLoadMore =() =>{
        setPageNumber(pageNumber+1)
    }

    return (
    <main>
        <Container>
        {isLoading && <Loader/>}
        <UsersList>
        {users.length>0 && users.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} />)}
        </UsersList>

         {showLoadMoreBtn &&<LoadMoreBtnWrapper>
            <ButtonUI text='Load more' onClick={handleLoadMore}/>
        </LoadMoreBtnWrapper>}
        </Container>
    </main>)
}

export default Homepage;