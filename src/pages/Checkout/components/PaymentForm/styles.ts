import styled from 'styled-components'

export const PaymentFormContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const PaymentContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
`
export const HeaderContainer = styled.header`
  display: flex;
  gap: 1rem;
`
export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  gap: 0px;
`
export const Title = styled.h6`
  font-size: 1.125rem;
  font-weight: 700;
`
export const Subtitle = styled.span`
  font-size: 1rem;
`
