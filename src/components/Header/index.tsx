import {
  HeaderContainer,
  LocationContainer,
  NavContainer,
  ShoppingCartContainer,
} from './styles'
import logoCoffee from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />

      <NavContainer>
        <NavLink to="/">
          <LocationContainer>
            <MapPin size={24} weight="duotone" />
            <span>Fortaleza, CE</span>
          </LocationContainer>
        </NavLink>

        <NavLink to="/checkout">
          <ShoppingCartContainer>
            <ShoppingCart size={24} weight="duotone" />
          </ShoppingCartContainer>
        </NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
