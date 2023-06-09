import styled from 'styled-components';

export const ButtonMain = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  z-index:5;
  width: 196px;
  height: 50px;
  border: none;
  border-radius: ${p => p.theme.radii.btn};
  box-shadow: ${p => p.theme.colors.btnBoxShadow};
  background-color: ${p => p.selected? p.theme.colors.accentGreen : p.theme.colors.mainLight };
  transition: ${p => p.theme.transitions.main};

  &:hover, &:focus {
  transform: ${p => p.role === 'load' ? 'scale(1.1)' : 'unset'};
 
}
  
`;

export const ButtonText = styled.span`
   font-family: ${p => p.theme.fonts.main};
   font-weight: ${p => p.theme.fontWeights[1]};
   font-size: ${p => p.theme.fontSizes.m};
   line-height: ${p => p.theme.lineHeights.main};
   color: ${p => p.theme.colors.mainDark};
   text-align: center;
   text-transform: uppercase;
`;
