import styled from 'styled-components'
export type BackgroundColorType = 'yellow' | 'orange' | 'gray' | 'purple'

const backgroundColorType = {
  yellow: 'yellow',
  orange: 'yellow-dark',
  gray: 'gray-700',
  purple: 'purple',
} as const

interface InfoIconStylesProps {
  backgroundColor: BackgroundColorType
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    display: block;
  }
`

export const IconCircle = styled.div<InfoIconStylesProps>`
  width: 2rem;
  height: 2rem;
  padding: 8px;

  background: ${(props) =>
    props.theme[backgroundColorType[props.backgroundColor]]};
  border-radius: 9999px;

  color: ${(props) => props.theme.white};
`
