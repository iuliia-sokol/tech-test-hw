import styled from "styled-components";

import Img from '../../images/top2x-min.png'
import Img2x from '../../images/top3x-min.png'

export const BgWrapper= styled.div`
position:absolute;
width:100%;
height:100%;
opacity:0.3;
z-index:-1;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${Img});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Img2x});
  }

`
export const HeroWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const HeroTitle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
font-family: ${p => p.theme.fonts.signature};
text-align:center;
color: ${p => p.theme.colors.mainLight};
margin-bottom:32px;
margin-top:16px;

& h1{
font-size: ${p => p.theme.fontSizes.xxl};
font-weight:${p => p.theme.fontWeights[0]};
line-height: ${p => p.theme.lineHeights.main};
}

& span {
    font-weight:${p => p.theme.fontWeights[1]};
    font-size: ${p => p.theme.fontSizes.l};
}
`

export const RatingBlocksWrapper=styled.ul`
display:flex;
justify-content:space-between;
`

export const RatingBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:26px;
`

export const RatingBlockTitle= styled.h3`
color: ${p => p.theme.colors.mainLight};
font-family: ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.xl};
font-weight:${p => p.theme.fontWeights[1]};
line-height: ${p => p.theme.lineHeights.main};
transition: ${p => p.theme.transitions.main};
text-transform: uppercase;
margin-bottom:16px;
margin-top:16px;
`