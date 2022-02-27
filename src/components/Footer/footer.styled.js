import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: grey;
  color: #fff;
  padding: 20px 0 20px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: 400) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
