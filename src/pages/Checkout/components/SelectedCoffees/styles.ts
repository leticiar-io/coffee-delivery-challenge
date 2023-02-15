import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;

  max-width: 28rem;
`
export const PriceContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
`
export const PriceTotal = styled.span`
  width: 100%;
`
export const ConfirmOrderButton = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  width: 100%;
  margin-top: 1.5rem;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 0;
  border-radius: 6px;

  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
