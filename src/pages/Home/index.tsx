import {
  LayoutContainer,
  HomeSection,
  TextContainer,
  IconsTable,
  TitleAndSubtitleContainer,
  CoffeeSection,
  CoffeesTable,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import coffee from '../../assets/coffee.svg'
import { InfoIcon } from '../../components/InfoIcon'
import { CardCoffee } from './CardCoffee'
import { coffees } from '../../mock/coffees'

export function Home() {
  return (
    <LayoutContainer>
      <HomeSection>
        <TextContainer>
          <TitleAndSubtitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </TitleAndSubtitleContainer>

          <IconsTable>
            <InfoIcon
              icon={<ShoppingCart size={16} color="white" weight="duotone" />}
              text={'Compra simples e segura'}
              backgroundColor={'orange'}
            />
            <InfoIcon
              icon={<Timer size={16} color="white" weight="duotone" />}
              text={'Entrega rápida e rastreada'}
              backgroundColor={'yellow'}
            />
            <InfoIcon
              icon={<Package size={16} color="white" weight="duotone" />}
              text={'Embalagem mantém o café intacto'}
              backgroundColor={'gray'}
            />
            <InfoIcon
              icon={<Coffee size={16} color="white" weight="duotone" />}
              text={'O café chega fresquinho até você'}
              backgroundColor={'purple'}
            />
          </IconsTable>
        </TextContainer>

        <img src={coffee} alt="Ilustração do copo da Coffee Delivery" />
      </HomeSection>

      <CoffeeSection>
        <h1>Nossos cafés</h1>

        <CoffeesTable>
          {coffees.map((coffee) => (
            <CardCoffee key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesTable>
      </CoffeeSection>
    </LayoutContainer>
  )
}
