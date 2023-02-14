import styled from 'styled-components'

export const LayoutContainer = styled.div`
  padding: 2rem 16rem 20rem 16rem; /* top | right | bottom | left */

  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 1324px) {
    padding: 1rem 3.5rem 10rem 3.5rem;
  }
`
