import { expertise, packages } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import  PackageCard  from "./PackageCard"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {expertise.map((item) => (
               <Card key={item.id} data={item} caption="Read more" show={true} path="/expertise" />
            ))}
          </div>
        </div>
      </section>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PACKAGES' /> <br />
            <br />
            <Title title='Get the most out of your digital experiences' className='title-bg' />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '20px' }}>
          {packages.map(pkg => (
          <PackageCard key={pkg.id} packageData={pkg} />
         ))}
    </div>
        </div>
      </section>      
    </>
  )
}

export default Services
