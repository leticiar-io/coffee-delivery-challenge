import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import {
  AddressFormContainer,
  HeaderContainer,
  TitleAndSubtitleContainer,
  Title,
  Subtitle,
} from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <HeaderContainer>
        <MapPinLine size={22} color="#C47F17" />

        <TitleAndSubtitleContainer>
          <Title>Endereço de Entrega</Title>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TitleAndSubtitleContainer>
      </HeaderContainer>

      <div>
        <Input name="CEP" />
      </div>
      <div>
        <Input name="Rua" />
      </div>

      <div>
        <Input name="Número" />
        <Input name="Complemento" />
      </div>

      <div>
        <Input name="Bairro" />
        <Input name="Cidade" />
        <Input name="UF" />
      </div>
    </AddressFormContainer>
  )
}
