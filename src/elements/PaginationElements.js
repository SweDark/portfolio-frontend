import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  /* Pagination styling */
  grid-column: 2 / span 12;
  padding: ${props => props.theme.spacings.medium} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem -1rem 0;
  width: 100%;

  a:nth-child(1) {
    /* "previous page" button */
    color: ${props =>
      props.isFirst ? props.theme.colors.dark1 : props.theme.colors.light2};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(2) {
    /* "next page" button */
    color: ${props =>
      props.isLast ? props.theme.colors.dark1 : props.theme.colors.light2};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / span 6;
    margin-right: 0.5rem;
    text-align: center;

  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  // styling for both pagination buttons.
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-decoration: none;
  margin: 0 2rem;
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.theme.colors.blue};
  border-radius: 0.5rem;
  font-weight: 700;
  width: fit-content;
  transition: filter 0.3s ease;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
