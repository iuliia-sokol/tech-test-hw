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
width:308px;
height:168px;
margin-bottom:18px;
`

export const TextWrapper= styled.div`
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:26px;
`
export const TextData = styled.p`
color: ${p => p.theme.colors.mainLight};
font-family: ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.l};
text-transform:uppercase;
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