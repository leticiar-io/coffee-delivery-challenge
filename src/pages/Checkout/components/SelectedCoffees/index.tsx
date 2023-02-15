import {
  Container,
  PriceContainer,
  PriceTotal,
  ConfirmOrderButton,
} from './styles'

export function SelectedCoffees() {
  return (
    <Container>
      <PriceContainer>
        <div>
          <p>Total de itens</p>
          <p>R$ 66</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <PriceTotal>Total</PriceTotal>
          <PriceTotal>R$ 66</PriceTotal>
        </div>
      </PriceContainer>

      <ConfirmOrderButton type="submit">Confirmar Pedido</ConfirmOrderButton>
    </Container>
  )
}
