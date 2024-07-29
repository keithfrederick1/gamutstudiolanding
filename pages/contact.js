import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"
import Calendar from '../components/calendar';
import { CssBaseline, Container, Typography } from '@mui/material';


const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - 7Creative</title>
      </Head>
      <Container>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Schedule a Call
      </Typography>
      <Calendar />
    </Container>
      <Contact />
    </>
  )
}

export default contact
