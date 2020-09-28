import styled from "styled-components"

export const ContainerWrapper = styled.div`
  /* Styling for the container, though it's mostly just how grid should work on the webbsite. */
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr repeat(12, minmax(auto, 4.2rem)) 0.5fr;
  grid-template-rows: 7.8rem 20rem 5rem auto;
  gap: 0 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: 2rem repeat(6, 1fr) 2rem;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 0.2rem repeat(6, 1fr) 0.2rem;
  }
`
