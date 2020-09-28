import styled from "styled-components"

export const FooterWrapper = styled.footer`
  /* main wrapper for the footer */
  grid-column: 1 / span 14;
  min-height: 11.25rem;
  padding: 3.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  /* This wrapper is within the footerwrapper, and it's mainly to place and centralize the icons and text. */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  /* This is only for the icons, and it's just some styling and placing. */
  flex: 0 0 100%;
  margin-bottom: 1.5rem;

  img {
    height: 25px;
    padding: 0 1rem;
    transition: filter 0.4s ease;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
