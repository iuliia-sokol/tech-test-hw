import styled from "styled-components"

export const UsersList = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
row-gap:26px;
align-items: center;
justify-items:center;
`

export const LoadMoreBtnWrapper = styled.div`
display:flex;
justify-content:center;
margin-top:26px;
`

export const GoBackBtnWrapper = styled.div`
display:flex;
position: relative;
`