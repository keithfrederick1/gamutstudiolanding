import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
          </div>
          <div className='hero-content grid-4'>
          {expertise.map(item => (
        <Card key={item.id} data={item} caption="Read more" show={true} path="/expertise" />
      ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
