import { Trash } from 'phosphor-react'
import {
  Container,
  Title,
  OptionsContainer,
  InputNumber,
  Button,
  PriceValue,
} from './styles'

interface CardCoffeeProps {
  img: string
  title: string
  price: number
}

export function CardCoffeeCard({ img, title, price }: CardCoffeeProps) {
  return (
    <Container>
      <img src={img} alt={title} />
      <OptionsContainer>
        <Title>{title}</Title>
        <div>
          <InputNumber type="number" placeholder="1" min={1} />
          <Button>
            <Trash color="#8047F8" size={16} />
            <span>REMOVER</span>
          </Button>
        </div>
      </OptionsContainer>
      <PriceValue>R$ {price}</PriceValue>
    </Container>
  )
}
