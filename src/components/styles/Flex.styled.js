import styled from "styled-components";

export const Flex = styled.div`
display: flex;
align-items: center;
& > descent-override,
& > ul{
    flex:1;
}
`