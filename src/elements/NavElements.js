import styled from "styled-components"

export const NavWrapper = styled.nav`
  /* main style for the navigation wrapper. */
  grid-column: 3 / span 10;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  /* padding: ${props => props.theme.spacings.medium}; */

  img {
    height: 30px;

  }

  .navmenu {
    /* This styling is only for the menu */
    background-color: ${props => props.theme.colors.main1};
    font-weight: 1000;
    font-size: 1.2rem;
    border-radius: 1rem;
    margin: 0.2rem;
    color: ${props => props.theme.colors.light2};
    
  }
  .navmenu:hover {
    filter: brightness(110%);
  }

  a {
    /* styling for all elements in nav, even the image. */
    padding: ${props => props.theme.spacings.small};
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const StyledBurger = styled.div`
/* Burger styling for mobile. */
@media ${props => props.theme.breakpoints.mobile} {
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px; 
  right: 25px;
  z-index: 20;
  display: none;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'}; 
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`;

export const Ul = styled.ul`
list-style: none;
display: flex;
flex-flow: row nowrap;

@media ${props => props.theme.breakpoints.mobile} { 
  /* How stuff should look in the burger menu */
  flex-flow: column nowrap;
  background-color: ${props => props.theme.colors.main1};
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  height: 100vh; 
  width: 35vh; 
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 15;

   .navmenu{
    border-radius: 0rem;
    margin: 0;
  } 

  ul{
    list-style: none;
    padding: 0;
  }

  li{
    background-color:${props => props.theme.colors.main1};
  }

  li:hover{
    filter: brightness(110%);
  }

  a{
    color: ${props => props.theme.colors.light1};
    padding: ${props => props.theme.spacings.small};
    display:block;
    width: 100%;
    height: 100%;
  }

}

`;