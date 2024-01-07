import styled from 'styled-components'

export const SectionContainer = styled.div.attrs(props => ({
    id: props?.id
  }))`
    font-family: 'DM Sans', sans-serif;
    width: ${p => p.width};
    height: ${p => p.height};
    margin: ${p => p.margin};
    padding: ${p => p.padding};
  `