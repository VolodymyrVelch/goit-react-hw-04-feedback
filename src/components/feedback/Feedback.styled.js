import styled from 'styled-components';
const btnColors = {
  good: '#057B11',
  neutral: '#FF8D33',
  bad: '#FF3333',
};

export const BtnBlock = styled.div`
  gap: 10px;
  padding: 15px;
`;

export const FeedbackBtn = styled.button`
  padding: 10px;
  margin: 10px;
  width: 80px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${props => btnColors[props.name]};
  border-radius: 8px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  transition: all 200ms ease;
  &:hover,
  &:focus {
    background-color: ${props => btnColors[props.name]};
    color: white;
    transition: all 500ms ease;
  }
`;
