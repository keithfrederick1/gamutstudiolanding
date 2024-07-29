import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='TIPS & TRICKS' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            {post.jsx}
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Enhancing Client Engagement and Acquisition with AI Automations and Psychological Tools' />

              <p className='desc-p'>
At Gamut Studio, we leverage cutting-edge AI automations to streamline client interactions and appointment bookings, ensuring a seamless and efficient experience. Our advanced AI systems can promptly respond to client inquiries, schedule appointments, and manage follow-ups, freeing up valuable time for business owners. Additionally, we specialize in designing websites that enhance client acquisition by integrating proven psychological tools used by big tech enterprises. These strategies, rooted in human behavior and user experience research, help convert visitors into loyal customers, driving business growth and maximizing revenue potential.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
