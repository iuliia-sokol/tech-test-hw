import styled from 'styled-components';

export const CardBox = styled.li`
position: relative;
box-sizing:border-box;
width:380px;
height:460px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
padding:28px 36px 36px 36px;
background: ${p => p.theme.colors.bgViolet};
box-shadow: ${p => p.theme.colors.cardBoxShadow};
border-radius: ${p => p.theme.radii.card};
transition:${p => p.theme.transitions.main};
transition-duration:350ms;

&:hover {
    transform:scale(1.03);
}
`

export const LogoWrapper = styled.div`
position:absolute;
top:20px;
left:20px;
display:flex;
justify-content:center;

& img {
    width:76px;
    height:22px;
}
`

export const TopImage = styled.img`
width:${p => p.role === 'tweets'|| p.role === 'followers'? 'auto': '308px'};
height:168px;
`

export const TextWrapper= styled.div`
width:100%;
flex-direction:column;
align-items:center;
justify-content:center;
position: relative;
row-gap:16px;
margin-bottom:26px;
`

export const TextData = styled.p`
text-align:center;
color: ${p => p.theme.colors.mainLight};
font-family: ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.l};
font-weight:${p => p.theme.fontWeights[0]};
line-height: ${p => p.theme.lineHeights.main};
text-transform:uppercase;

&:not(:last-of-type){
    margin-bottom:16px;
}
`

export const AvatarWrapper = styled.div`
position: relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:26px;
border-radius: ${p => p.theme.radii.circle};

`
export const Avatar = styled.img`
border-radius: ${p => p.theme.radii.circle};
z-index:2;
`

export const AvatarCircle = styled.img`
position:absolute;
z-index:20;
`

export const AvatarLine = styled.img`
position:absolute;
z-index:0;
`

export const AwardWrapper = styled.div`
display:${p => p.role === 'tweets'|| p.role === 'followers'? 'flex': 'none'};
position:absolute;
left:${p => p.role === 'tweets'?'10%': '-5%'};
top:${p => p.role === 'tweets'?'-15%': 'unset'};
bottom: ${p => p.role === 'tweets'?'unset': '-5%'};


& img {
    width:42px;
}
`