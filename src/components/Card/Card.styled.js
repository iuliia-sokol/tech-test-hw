import styled from 'styled-components';

export const CardBox = styled.div`
width:380px;
height:460px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background: ${p => p.theme.colors.bgViolet};
box-shadow: ${p => p.theme.colors.cardBoxShadow};
border-radius: ${p => p.theme.radii.card};

`