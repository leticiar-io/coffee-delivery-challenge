import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 768px) {
    display: block;

    img {
      margin-top: 1rem;
      width: 10rem;
    }
  }
  @media (max-width: 820px) {
    & img {
      width: 20rem;
    }
  }
  @media (min-width: 1215px) {
    & img {
      width: 47rem;
    }
  }
`

export const InfoSuccesContainer = styled.div``

export const Header = styled.header`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`
export const Title = styled.p`
  font-size: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;

  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`

export const BoxReceipt = styled.div`
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme['yellow-dark']};
  border-radius: 6px 36px 6px 36px;
`
export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
