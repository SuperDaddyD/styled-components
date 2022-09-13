import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.20);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({layout})=>layout || 'row'};
  & > div{
    flex:1;
    
  }
  img{
    width:80%;
  }
  p {
    line-height: 1.5;
  }
  @media(max-width:${({theme})=>theme.mobile}px){
    flex-direction: column;
  }
`;
