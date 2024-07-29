import React from "react"
import Link from "next/link"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Looking to start a new project?' /> <br />
            <TitleLogo title='Let us take it to the next level!' />
          </div>
          <div>
            <Link href='/contact'>
              <button className='button-primary'>Reach Out</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
