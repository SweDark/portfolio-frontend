import styled from "styled-components"


export const PostWrapper = styled.main`
  /* Styling for the singlepost page. */
  grid-column: 2 / span 12;
  grid-row: 2 / span 5;
  background-color: ${props => props.theme.colors.light3};
  padding: ${props =>
    `${props.theme.spacings.small} ${props.theme.spacings.xxLarge}`}; 
  z-index: 10;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.dark1};
  }

  h1:not(:first-child),
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1rem;
  }

  h1 {
    font-size: 2.3rem;
    line-height: 2.5rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 400;
  }

  h3 {
    font-size: 1.35rem;
    line-height: 1.625rem;
    font-weight: 700;
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 700;
  }

  h6 {
    font-size: 0.9rem;
    line-height: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 1.225rem;
    line-height: 1.875rem;
    font-weight: 400;
    color: ${props => props.theme.colors.dark1};
    margin-top: 1rem;
  }

  a {
    color: ${props => props.theme.colors.main1};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  blockquote p {
    font-style: italic;
    font-size: 1.6rem;
    line-height: 2.425rem;
    text-align: center;
    max-width: 33rem;
    margin: 2.5rem auto;
  }

  ul,
  ol {
    color: ${props => props.theme.colors.dark1};
    font-weight: 400;
    margin: 1rem 0 2rem 2.5rem;
  }

  li {
    margin: 0.25rem 0;
  }

  code {
    font-family: ${props => props.theme.fonts.code};
    font-size: 1rem;
    line-height: 1.875rem;
    color: ${props => props.theme.colors.main1};
    background-color: ${props => props.theme.colors.dark2};
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.blue};
    opacity: 0.6;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${props => props.theme.colors.blue};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }

  tr,
  th {
  
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.small}`};
    th,
    td {
      text-align: left;
      padding: 0.1rem;

    }
  }
`

