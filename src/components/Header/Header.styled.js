import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  z-index: 100;
  padding-top:16px;
`;

export const Line = styled.img`
width:100%;
max-height:15px;
box-shadow: ${p => p.theme.colors.cardBoxShadow};
`
export const HeaderContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LinksWrapper = styled.ul`
  width: 100%;
  gap: 32px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const LinkItem = styled.li`
&:hover, &:focus {
    transform:scale(1.1);
}
`

export const HeaderNavLink = styled(NavLink)`
text-decoration:none;
color: ${p => p.theme.colors.mainLight};
font-family: ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.l};
font-weight:${p => p.theme.fontWeights[1]};
line-height: ${p => p.theme.lineHeights.main};
transition: ${p => p.theme.transitions.main};
text-transform: uppercase;


`