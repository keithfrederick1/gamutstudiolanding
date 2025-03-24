import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"
import Calendar from '../components/calendar';
import { CssBaseline, Container, Typography } from '@mui/material';


const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Gamutstud.io</title>
      </Head>
      <Container>
      <CssBaseline />
      <Calendar />
    </Container>
      <Contact />
    </>
  )
}

export default contact
