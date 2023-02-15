import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 1rem;

  div {
    display: flex;

    Input {
      margin: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 100%;
  }
  @media (max-width: 820px) {
    padding: 0.5rem;
    width: 100%;
  }
  @media (min-width: 1215px) {
    width: 45rem;
  }
  @media (min-width: 1315px) {
    width: 100rem;
  }
`
export const HeaderContainer = styled.header`
  display: flex;
  gap: 1rem;
`
export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
`
export const Title = styled.h6`
  font-size: 1.125rem;
  font-weight: 700;
`
export const Subtitle = styled.span`
  font-size: 1rem;
`
