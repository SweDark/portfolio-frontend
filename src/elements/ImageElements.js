import styled from "styled-components"

export const FeatureImageWrapper = styled.div`
  /* placement of the grid, in desktop mode. */
  grid-column: 1 / span 14;
  grid-row: 2 / span 5;
  overflow: hidden;
  position: relative;

  @media ${props => props.theme.breakpoints.tablet} {
    /* grid placement on a tablet */
    grid-column: 2 / span 6;
    grid-row: 2 / 5;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    /* grid placement on a phone. */
    grid-column: 2 / span 6;
    grid-row: 2 / 2;
    
  }
`
