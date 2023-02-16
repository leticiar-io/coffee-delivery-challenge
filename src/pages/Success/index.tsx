import {
  LayoutContainer,
  InfoSuccesContainer,
  Header,
  Title,
  Subtitle,
  BoxReceipt,
  AddressBox,
} from './styles'
import ilustration from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { InfoIcon } from '../../components/InfoIcon'

export function Success() {
  return (
    <LayoutContainer>
      <InfoSuccesContainer>
        <Header>
          <Title>Uhu! Pedido Confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
        </Header>

        <BoxReceipt>
          <AddressBox>
            <InfoIcon
              icon={<MapPin />}
              text={`Entrega em Rua João Daniel Martinelli, 102`}
              text2={`Farrapos - Porto Alegre, RS`}
              backgroundColor={'purple'}
            />
            <InfoIcon
              icon={<Timer />}
              text={`Previsão de entrega`}
              text2={`20 min - 30 min `}
              backgroundColor={'yellow'}
            />
            <InfoIcon
              icon={<CurrencyDollar />}
              text={`Pagamento na entrega`}
              text2={`Cartão de Crédito`}
              backgroundColor={'orange'}
            />
          </AddressBox>
        </BoxReceipt>
      </InfoSuccesContainer>
      <img src={ilustration} alt="" />
    </LayoutContainer>
  )
}
