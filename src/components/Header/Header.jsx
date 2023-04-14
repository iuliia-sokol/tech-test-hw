import { NavLink } from 'react-router-dom';
import { Container } from "components/Container/Container"
import { HeaderContentWrapper, HeaderWrapper, LinkItem, LinksWrapper } from "./Header.styled"

export const Header =()=>{
    return  (<HeaderWrapper>
      <Container>
      <HeaderContentWrapper>
        <LinksWrapper>
        <LinkItem>
        <NavLink to="/">Home</NavLink>
        </LinkItem>

        <LinkItem>
        <NavLink to="/tweets">Tweets</NavLink>
        </LinkItem>

        </LinksWrapper>
      </HeaderContentWrapper>
    </Container>
  </HeaderWrapper>)
}