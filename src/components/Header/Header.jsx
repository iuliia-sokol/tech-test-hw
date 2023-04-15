
import { Container } from "components/Container/Container"
import { HeaderContentWrapper, HeaderNavLink, HeaderWrapper, Line, LinkItem, LinksWrapper } from "./Header.styled"

import line from '../../images/line-min.png';


export const Header =()=>{
    return  (<HeaderWrapper>
    
      <Container>
      <HeaderContentWrapper>
        <LinksWrapper>

        <LinkItem>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        </LinkItem>

        <LinkItem>
        <HeaderNavLink to="/tweets">Tweets</HeaderNavLink>
        </LinkItem>

        </LinksWrapper>
      </HeaderContentWrapper>
    </Container>
    <Line  alt='line' src={line} height={8}/>
  </HeaderWrapper>)
}