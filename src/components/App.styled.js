import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 20px;
  font-size: 40;
  color: #010101;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const BtnBlock = styled.div`
  gap: 10px;
  padding: 15px;
`;

export const FeddbackBtn = styled.button`
  padding: 5px;
  margin: 10px;
  width: 60px;
`;
