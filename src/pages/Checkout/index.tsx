import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { LayoutContainer, Container } from './styles'

export function Checkout() {
  return (
    <LayoutContainer>
      <Container>
        <h3>Complete seu pedido</h3>
        <AddressForm />
        <PaymentForm />
      </Container>

      <Container>
        <h3>Cafés selecionados</h3>
        <SelectedCoffees />
      </Container>
    </LayoutContainer>
  )
}
