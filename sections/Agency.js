import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Gamut Studio' /> <br />
            <br />
            <Title title='OUR BUSINESS IS YOUR BUSINESS - WIN, WIN!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Stop leaving money on the table' />
              <p className='desc-p'>At Gamut Studio, we specialize in creating digital products designed to drive lead generation, increase revenue, and unlock growth potential for business owners. Leveraging enterprise-level software, we deliver innovative solutions that stand out in the digital landscape. Our services include AI-driven marketing strategies that intelligently target and engage potential customers, tailored social media marketing campaigns that amplify brand presence and reach, and cutting-edge web design and application development that ensures an exceptional user experience. By combining these powerful tools, we help businesses attract new customers, retain existing ones, and achieve their growth objectives.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>17</h1>
                  <h3>Successfully developed and delivered projects</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>100%</h1>
                  <h3>Satisfaction gurantee</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At Gamut Studio, our mission is to empower businesses of all backgrounds and industries by creating innovative digital products that drive lead generation and revenue growth. We leverage enterprise-level software, AI-driven marketing strategies, and tailored social media campaigns to elevate brand presence and engage customers. Through exceptional web design and application development, we deliver solutions that unlock growth potential and achieve lasting success.</p>
            </div>
          </div>
          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='A word from our founder' />
              <p className='desc-p'>My name is Keith Frederick, I'm passionate about merging creativity with technical expertise. Having been in  the tech industry for the past 5 years, and with my background in design and ecommerce, I bring a wealth of experience to every project we undertake. Not only that, but I actually worked in the home improvement industry growing up, so I know a thing or two about what works and what doesn't as far as getting new clients. I've been helping business owners in this area since I was a child, so that coupled with tech is a unique advantage that, if YOU utilize correctly, can generate revenue in your sleep - literally! My journey has been marked by a committment to delivering innovative solutions, whether in website design, development, paid ads, branding or re-branding initiatives.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience in tech</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>7+</h1>
                  <h3>Years in graphic and digital design</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>100%</h1>
                  <h3>Satisfaction guaranteed. If service doesn't meet expectations, it's FREE! Our business is growing Your business.</h3>
                </div>
              </div>
            </div>
            <div className='right w-30 ml'>
              <img src='/images/IMG_4347.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
