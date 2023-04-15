import styled from "styled-components";

import Img from '../../images/top2x-min.png'
import Img2x from '../../images/top3x-min.png'

export const BgWrapper= styled.div`
position:absolute;
width:100%;
height:100%;
opacity:0.3;
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