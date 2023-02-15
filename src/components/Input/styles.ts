import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  border: 0;
  padding: 12px;

  background: ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  :focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`
