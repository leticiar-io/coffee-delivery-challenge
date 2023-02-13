import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavContainer = styled.div`
  display: flex;
  gap: 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`

export const ShoppingCartContainer = styled.a`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  padding: 10px;
  border-radius: 8px;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: auto;

  padding: 10px;
  border-radius: 8px;
`
