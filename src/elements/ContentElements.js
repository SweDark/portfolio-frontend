import styled from "styled-components"

export const ContentWrapper = styled.main`
  /* This is the styling of the main content, the grid below is used to put the content close to the navigation. It also makes the feature image in desktop mode 
  more like a background. */
  grid-column: 2 / span 12;
  grid-row: 2 / span 5;
  background-color: ${props => props.theme.colors.light2};
  padding: ${props =>
    `${props.theme.spacings.medium} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  opacity: 0.9;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    grid-row: 4 / span 5;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    grid-row: 3 / span 5;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
  }
`
