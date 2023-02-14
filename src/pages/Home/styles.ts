import styled from 'styled-components'

export const LayoutContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HomeSection = styled.section`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & img {
    width: 29.75rem;
    //background-color: yellow;
  }

  @media (max-width: 768px) {
    display: block;

    & img {
      width: 20rem;
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

export const TitleAndSubtitleContainer = styled.div`
  margin-bottom: 4.125rem;
`

export const TextContainer = styled.div`
  //width: 36.75rem;
  //background-color: blue;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 130%;
  }

  h3 {
    font-weight: 400;
    color: ${(props) => props.theme['gray-800']};
    font-size: 1.25rem;
  }

  @media (min-width: 1355px) {
    width: 50%;

    h1 {
      font-size: 3.5rem;
    }
  }
`

export const IconsTable = styled.div`
  display: grid;
  column-gap: 10px;
  grid-template-columns: 50% 50%;
  row-gap: 1.25rem;
`

export const CoffeeSection = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 130%;
  }
`

export const CoffeesTable = styled.div`
  display: grid;
  column-gap: 10px;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 768px) {
    display: grid;
    column-gap: 10px;
    grid-template-columns: auto;
  }
  @media (max-width: 820px) {
    display: grid;
    column-gap: 10px;
    grid-template-columns: auto auto;
  }
`
