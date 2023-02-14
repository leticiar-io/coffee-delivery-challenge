import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['gray-200']};

  width: 16rem;
  height: 19.375rem;
  padding: 1.25rem;

  align-items: center;
  text-align: center;

  border-radius: 6px 36px 6px 36px;
  margin-top: 2.125rem;

  @media (max-width: 768px) {
    width: 15rem;
    height: auto;
    padding: 1.25rem;
  }
`
export const HeaderContainer = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -3.25rem;
    margin-bottom: 12px;
  }
`
export const Badge = styled.span`
  padding: 8px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: 700;
  line-height: 130%;
  font-size: 1rem;

  border-radius: 100px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.0625rem;
`

export const TitleCoffee = styled.span`
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme['gray-800']};
`
export const DescriptionCoffee = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme['gray-600']};
`
export const Footer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-around;
`
export const PriceFooter = styled.span`
  font-size: 14px;
  font-weight: 400;
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 0.5rem;

  color: ${(props) => props.theme['gray-700']};
`

export const QuantityInput = styled.input`
  width: 4.5rem;
  height: 2.375rem;

  background: ${(props) => props.theme['gray-400']};
  border: 0;
  padding: 8.5px;
  text-align: center;
  border-radius: 6px;
`
export const ButtonAddCart = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  padding: 8px;

  border-radius: 6px;
  border: 0;

  cursor: pointer;
`
