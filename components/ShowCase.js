import React from "react"
import { Title } from "./common/Title"
import { showcase } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const ShowCase = () => {
  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='hero-content grid-3 py'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
