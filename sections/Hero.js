import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import { motion, useScroll, useTransform } from 'framer-motion';
import React from "react"

const Hero = () => {
  const word = "Don't be the only one not taking advantage of automation.";
  const { scrollY } = useScroll();
  
  // Map the scroll position to a range of vertical movement
  const yTransform = useTransform(scrollY, [0, 500], [0, 200]);
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='logo'></div>
          <h1 className="hero-title">
        {word.split(" ").map((w, index) => {
          if (w.toLowerCase() === "not") {
            return (
              <span key={index} className="gradient-text">
                {w}
              </span>
            );
          }
          return <span key={index}> {w} </span>;
        })}
      </h1>
          <div style={{marginTop: '-30px', marginBottom: '15px'}}>
          </div>
          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='AUTOMATION' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' /><span>.</span>
            <TitleSm title='REPUTATION MGMT' /> 
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title="No...Seriously. It's 2025." />
            <p style={{ 'fontSize': '24px'}}>At Gamut Studio, we build badass, high-performance digital solutions that turn clicks into conversions and ideas into revenue. Scalable tech, seamless UX, and straight-up results—because slow and clunky doesn’t cut it Let’s make your business move fast and break limits.
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
