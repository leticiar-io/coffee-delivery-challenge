import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 1rem;
  min-width: 11.125rem;

  display: flex;
  align-items: center;
  justify-items: center;

  text-transform: uppercase;
  gap: 1rem;

  border: 0;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 4px;

  cursor: pointer;
  :hover {
    background: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
    width: 100%;
  }
  @media (max-width: 820px) {
    margin-bottom: 10px;
    min-width: 7rem;
  }
`
