import React from "react"
import { ContainerWrapper } from "../elements"
import {Footer} from "../components"
import Navigationbar from '../components/Nav/Navbar'

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Navigationbar/>
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
