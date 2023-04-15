import styled from "styled-components";

export const GoBackBtnWrapper = styled.div`
position: relative;

&:hover div, &:focus div {
opacity:1;
visibility:1;
}
`
export const GoBackBtn =styled.button`
width:fit-content;
/* position: relative; */
display:flex;
justify-content:center;
background-color:transparent;
border:none;
margin-bottom:26px;

& svg {
    /* position:absolute; */
    width: 50px;
    height:50px;
    transform:rotate(270deg);
}

`

export const Hint = styled.div`
position:absolute;
top:20%;
left:100%;
opacity:0;
visibility:0;
display:inline-flex;
text-transform:uppercase;
width:max-content;
color: ${p => p.theme.colors.mainLight};
font-family: ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.l};
font-weight:${p => p.theme.fontWeights[1]};
transition: ${p => p.theme.transitions.main};
`