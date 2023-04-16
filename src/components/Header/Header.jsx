import { Container } from "components/Container/Container"
import { HeaderContentWrapper, HeaderNavLink, HeaderWrapper, Line, LinkItem, LinksWrapper, Title } from "./Header.styled"

import line from '../../images/line-min.png';


export const Header =()=>{
    return  (<HeaderWrapper>
    
      <Container>
      <HeaderContentWrapper>
      <Title>TweeTest</Title>
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