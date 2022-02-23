import styled from "styled-components";

export const StyledCard = styled.div`
  display: inline-grid;
  width: 33.3%;
  background-color: #f7f8f5;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px;
  padding: 5px;
  text-align: center;
  img {
    border-radius: inherit;
    width: 100px;
  }
  & > div {
    flex: 1;
  }
  .des {
    color: #0c0c0c;
  }
`;
