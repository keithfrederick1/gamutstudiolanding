import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='logo'></div>
          <TitleLogo title='.io' caption='gamutstud' className='logobg' />
          <h1 className='hero-title'>THE ULTIMATE GROWTH PARTNER FOR YOUR BUSINESS</h1>
          <div style={{marginTop: '-30px', marginBottom: '15px'}}>
          </div>
          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' /><span>.</span>
            <TitleSm title='REPUTATION MGMT' /> 
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="Generate More $$$" />
            <p style={{ 'fontSize': '32px'}}>Gamut Studio is a strategic full-service digital agency for companies in need of scalable client acquisition solutions and high converting websites. 
           </p> </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ShowCase />
      <Banner />
      <Testimonial />
      <Expertise />
      <Brand />
      <BlogCard />
    </>
  )
}

export default Hero
