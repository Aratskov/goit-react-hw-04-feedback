import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Btn = styled.button`
  height: 40px;
  min-width: 120px;
  border-radius: 15px;
  font-size: 18px;

  &:active {
    background-color: blue;
  }
`;
