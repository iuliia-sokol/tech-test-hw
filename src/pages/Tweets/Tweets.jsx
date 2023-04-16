import { useEffect, useState } from "react";
import { fetchAllUsers } from "services/fetchUsers";
import { CardUI } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { ButtonUI } from "components/Button/Button";
import { GoBackBtnUI } from "components/GoBackButton/GoBackButton";
import { FilterUI } from "components/Filter/Filter";
import { GoBackBtnWrapper, LoadMoreBtnWrapper, UsersList } from "./Tweets.styled";

const Tweets = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false)
    const [users, setUsers] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [type, setType] = useState('');
    const PER_PAGE = 12
  
      useEffect(() => {  
          const getUsers = async ({page,per_page,filter})=>{
              try{
                  setIsLoading(true)
              return await fetchAllUsers(page,per_page,filter).then((data) => {
              data.length >= PER_PAGE ? setShowLoadMoreBtn(true) :  setShowLoadMoreBtn(false)
              setUsers([...users, ...data])}
              )}
              catch(err) {console.log(err)}
              finally{
                  setIsLoading(false)
              }
           }
         
          getUsers({page:pageNumber, per_page:PER_PAGE, filter:type})
          // eslint-disable-next-line
        }, [pageNumber,type]);


      const handleLoadMore =() =>{
          setPageNumber(pageNumber+1)
      }

      const handleChangeType = inputType => {
        const { value } = inputType;
        setType(value);
      };
  
      return (
      <main>
          <Container>
          {isLoading && <Loader/>}
          <GoBackBtnWrapper>
          <GoBackBtnUI />
          <FilterUI handleChangeType={handleChangeType} setPageNumber={setPageNumber} setUsers={setUsers}/>
          </GoBackBtnWrapper>
          <UsersList>
          {users.length>0 && users.map(({id, user, avatar,followers,tweets, followed}) => <CardUI key={id} id={id} tweets={tweets} followers={followers} followed={followed} user={user} avatar={avatar} />)}
          </UsersList>
  
           {showLoadMoreBtn &&<LoadMoreBtnWrapper>
              <ButtonUI text='Load more' role='load' onClick={handleLoadMore}/>
          </LoadMoreBtnWrapper>}
          </Container>
      </main>)
    
}

export default Tweets;