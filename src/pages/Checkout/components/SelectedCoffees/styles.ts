import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;

  max-width: 28rem;

  @media (max-width: 768px) {
    padding: 1rem;

    max-width: 100%;
  }

  @media (max-width: 820px) {
    padding: 1rem;
    max-width: 100%;
  }
`

export const SelectedCoffeesContainer = styled.div``

export const PriceContainer = styled.div`
  div {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    font-weight: 400;
  }
`
export const PriceTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 12px;
  }
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
