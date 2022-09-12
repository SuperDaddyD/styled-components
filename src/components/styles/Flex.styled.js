import styled from "styled-components";

export const Flex = styled.div`
display: flex;
align-items: center;
& > descent-override,
& > ul{
    flex:1;
}
@media (max-width:${({theme})=>theme.mobile}px){
  text-align:center ;
  flex-direction:column;
}
`