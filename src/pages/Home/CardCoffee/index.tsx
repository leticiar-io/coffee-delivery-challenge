import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  Container,
  HeaderContainer,
  Badge,
  InfoContainer,
  TitleCoffee,
  DescriptionCoffee,
  Footer,
  PriceFooter,
  Price,
  QuantityInput,
  ButtonAddCart,
} from './styles'

export interface CardCoffeeProps {
  id: string
  badge: string
  title: string[]
  description: string
  photo: string
  price: number
  quantity: number
}

interface CoffeeCardProps {
  coffee: CardCoffeeProps
}

export function CardCoffee({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  // criando o incremento
  function handleIncreaseCoffeesQuantity() {
    setQuantity((e) => e + 1)
  }

  function handleDecreaseCoffeesQuantity() {
    setQuantity((e) => e - 1)
  }

  console.log(quantity)

  return (
    <Container id={coffee.id}>
      <HeaderContainer>
        <img src={coffee.photo} alt="Imagem ilustrativa do café" />

        <div>
          <Badge>{coffee.badge}</Badge>
        </div>
      </HeaderContainer>
      <InfoContainer>
        <TitleCoffee>{coffee.title}</TitleCoffee>
        <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
      </InfoContainer>
      <Footer>
        <PriceFooter>
          <span>R$</span>
          <Price>{coffee.price}</Price>
        </PriceFooter>

        <QuantityInput
          type="number"
          placeholder="0"
          min={0}
          quantity={quantity}
          onIncrease={handleIncreaseCoffeesQuantity}
          onDecrease={handleDecreaseCoffeesQuantity}
        />

        <ButtonAddCart>
          <ShoppingCart size={20} weight="duotone" />
        </ButtonAddCart>
      </Footer>
    </Container>
  )
}
