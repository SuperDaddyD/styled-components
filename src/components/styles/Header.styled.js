import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  h1 {
    color: ${({ theme }) => theme.colors.check};

    &:hover {
      color: green;
    }
  }
  &:hover {
    background: #ebefff;
  }
  p {
    line-height: 1.5;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    /* border: 1rem solid pink; */
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}px) {
   margin-bottom:40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media(max-width: ${({theme})=>theme.mobile}px){
    margin:40px 0px 30px;
  }

`;
