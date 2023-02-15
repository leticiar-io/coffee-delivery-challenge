import styled from 'styled-components'

export const LayoutContainer = styled.div`
  gap: 1rem;

  background-color: red;

  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-800']};
    padding-bottom: 1rem;
  }
`
