import styled from "styled-components";
import Select from 'react-select';

export const FilterBox = styled.form`
    z-index:200;
    position: absolute;
    left: 50%;
    transform:  translateX(-50%);
    background: ${p => p.theme.colors.mainDark};
    height: 40px;
    border-radius: 40px;
    padding: 10px;

    &:hover > div,
    &:focus > div {
    width: 240px;
    padding: 0 6px;
    }

    & div.css-b62m3t-container {
      opacity: 1;
      visibility:1;
      width: 240px;
    }

    &:not(:hover) div.css-b62m3t-container {
        opacity: 0;
        width:0px;
        visibility:0;
        float:left;
        transition:  ${p => p.theme.transitions.main};
        transition-duration:400ms;
    }

    &:hover > button,
    &:focus > button {
    background:  ${p => p.theme.colors.accentGreen};
    color : ${p => p.theme.colors.mainLight};
    }
`

export const FilterInput = styled.div`
    border:none;
    background: none;
    outline:none;
    float:left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition:  ${p => p.theme.transitions.main};
    transition-duration:400ms;
    line-height: 40px;
    width: 0px;
`

export const FilterButton = styled.button`
    color: white;
    width: 40px;
    height: 40px;
    border-radius: ${p => p.theme.radii.circle};
    background: ${p => p.theme.colors.bgViolet};
    box-shadow: ${p => p.theme.colors.cardBoxShadow};
    display: flex;
    justify-content: center;
    align-items: center;
    transition:  ${p => p.theme.transitions.main};
    transition-duration:400ms;
`

export const SelectStyled = styled(Select)`
  & .react-select__control {
    outline: none;
    box-shadow: none;  
    border:none;  
    width: 100%;
    height: 34px;
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[1]};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.main};
    background-color:transparent;
    color : ${p => p.theme.colors.mainLight};
    

    &--is-focused,
    &--menu-is-open {
      outline: none;
      background-color: ${p => p.theme.colors.mainDark};
    }

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      box-shadow: 0 0 0 1px transparent;
      background-color: ${p => p.theme.colors.mainDark};
    }

    & .react-select__value-container {
      height: 100%;
      width:100%;
      display: flex;
      align-items: center;
      background-color: ${p => p.theme.colors.mainDark};


      & .react-select__single-value {
        display: flex;
        align-items: center;
        height: 21px;
        background-color: ${p => p.theme.colors.mainDark};
      }
    }
  }

  & .react-select__single-value {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[1]};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.main};
    color : ${p => p.theme.colors.mainLight};
    background-color: ${p => p.theme.colors.accentGreen};
  }

  & .react-select-container {
    box-shadow: none;
    outline: none;
    border-color: transparent;
    background-color: ${p => p.theme.colors.mainDark};

    &:focus,
    &:active,
    &:hover,
    &::selection {
      outline: none;
      border-color: transparent;
      background-color: ${p => p.theme.colors.mainDark};
    }
  }

  & .react-select__menu-list {
    border-radius: 0px 0px 6px 6px;
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[1]};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.main};
    color : ${p => p.theme.colors.mainLight};
    text-align: left;
    background-color: ${p => p.theme.colors.mainDark};
    
  }

  & .react-select__option {
    background-color: ${p => p.theme.colors.mainDark};

  
    &:focus,
    &:active,
    &:hover,
    &::selection {
      background-color: ${p => p.theme.colors.accentGreen};
    }

  }

  & .react-select__dropdown-indicator {
   color: ${p => p.theme.colors.mainLight};
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__menu {
    margin: 0;
    border-radius: 0px 0px 6px 6px;
  }
`;
