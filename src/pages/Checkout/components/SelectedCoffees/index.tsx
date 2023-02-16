import { CardCoffeeCard } from '../CartCoffeeCard'
import {
  Container,
  PriceContainer,
  PriceTotalContainer,
  ConfirmOrderButton,
  SelectedCoffeesContainer,
} from './styles'

export function SelectedCoffees() {
  return (
    <Container>
      <SelectedCoffeesContainer>
        <CardCoffeeCard
          img={'coffee1-expresso.svg'}
          title={'Expresso Tradicional'}
          price={0}
        />
        <CardCoffeeCard
          img={'coffee1-expresso.svg'}
          title={'Expresso Tradicional'}
          price={0}
        />
      </SelectedCoffeesContainer>
      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ 66</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
      </PriceContainer>
      <PriceTotalContainer>
        <p>Total</p>
        <p>R$ 66</p>
      </PriceTotalContainer>

      <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
    </Container>
  )
}
