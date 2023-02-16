import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  padding: 1.2rem;
  margin-bottom: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  @media (max-width: 768px) {
    display: flex;
    padding: 0;
    justify-content: start;

    img {
      width: 2rem;
    }
  }
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
export const OptionsContainer = styled.div`
  margin: 1rem;
  margin-top: 0rem;

  div {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
  }
`

export const InputNumber = styled.input`
  background: ${(props) => props.theme['gray-400']};
  border: 0;
  padding: 5.7px;
  font-size: 0.85rem;

  text-align: center;
  border-radius: 6px;
  height: 1.5rem;
  width: 4.6875rem;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 2.6875rem;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => props.theme['gray-400']};

  transition: all 0.2s;
  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    width: auto;
    font-size: 0.55rem;
  }
`

export const PriceValue = styled.p`
  font-size: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`
