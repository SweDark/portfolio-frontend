import styled from "styled-components"

export const CardWrapper = styled.article`
  /* Styling for the post articles on the allposts page */
  margin-top: 1.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
  border-color: ${props => props.theme.colors.blue};
  border-radius: 0.7rem;
  width: 48%;
  justify-content:space-between;


  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`
