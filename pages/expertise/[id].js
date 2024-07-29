import { useRouter } from 'next/router'
import { expertise } from '../../assets/data/dummydata' // Adjust the path to your data file



const descriptions = {
    'Web Design & Development' : `Essential Package:

    Professionally designed website spanning 2-3 pages
    Tailored to your business needs
    $199 one-time payment + $159/month
    Ongoing support and maintenance included
    Standard Package:
    
    Everything in Essential Package, plus:
    Reputation management services
    $299 one-time payment + $159/month
    Build trust and manage your online reputation effectively
    Platinum Package:
    
    Everything in Standard Package, plus:
    Advanced AI automations
    SEO optimization for improved search engine visibility
    $399 one-time payment + $159/month
    Streamline operations and engage your audience intelligently
    Landing Pages:
    
    Templated landing page of your choice
    Web hosting and management included
    $159 one-time payment + $99/month
    Quickly establish your online presence
    Custom Web Application:
    
    Fully customized web app tailored to your business
    Mobile-first design for accessibility
    Cybersecurity and authentication features
    SEO optimization for better online visibility
    $1299-$4000 one-time payment + $159/month
    Quick turnarounds and free SAAS add-ons included`,

    'Digital Marketing': `Social Media Marketing:

    Increase brand awareness, customer engagement, and sales
    Tailored campaigns for Facebook, Instagram, Twitter
    Drive website traffic and generate leads
    $199 one time payment + $159/mo
    Marketing Campaigns:
    
    Maximum impact and ROI for your business
    Email marketing, content creation, digital ads
    Promote products, special offers, raise brand awareness
    $299 one time payment + $159/mo
    Reputation Management:
    
    Maintain a positive online presence
    Monitor reviews, address customer feedback
    Build credibility and trust with your audience
    $399 one time payment + $159/mo
    SEO (Search Engine Optimization):
    
    Improve website ranking and visibility
    Drive targeted traffic and increase leads
    Boost sales and revenue
    Included in Platinum package
    $399 one time payment + $159/mo
    `,
    'Artificial Intelligence': `AI Chatbots for Websites:

    Engage visitors 24/7 with AI-powered chatbots, providing instant responses and personalized interactions.
    Convert more leads by capturing visitor information and answering common queries in real-time.
    Automated Messaging:
    
    Ensure no missed calls with automated text and email follow-ups for missed calls and voicemails.
    Keep customers informed and engaged with timely reminders, confirmations, and updates.
    Lead Nurturing:
    
    Use AI-driven workflows to nurture leads through personalized communication sequences, increasing conversion rates.
    Automatically segment and target leads based on behavior and interactions.
    Appointment Scheduling:
    
    Simplify booking processes with AI-driven appointment scheduling and reminders, reducing no-shows and improving customer satisfaction.
    Integrate seamlessly with your calendar to keep your schedule organized and up-to-date.
    Review Management:
    
    Automate review requests and follow-ups to build a positive online reputation effortlessly.
    Monitor and respond to reviews across multiple platforms to maintain a strong online presence.`,

    'Branding & Creative Services': `Comprehensive Branding Solutions:

    Develop a cohesive brand identity, including logos, color schemes, and messaging, to differentiate your business and build customer loyalty.
    Offer brand guidelines and training to ensure consistent application across all channels and touchpoints.
    Innovative Packaging Design:
    
    Create visually appealing and functional packaging that enhances the unboxing experience and aligns with your brand identity.
    Provide sustainable packaging options and prototype development to test designs before full-scale production.
    Product Development & Manufacturing Expertise:
    
    Assist with product design, development, and scalability, ensuring manufacturability and cost-effectiveness.
    Implement robust quality control processes and support scaling up production to meet growing demand without compromising quality.
    Supply Chain Optimization:
    
    Optimize supply chains for cost savings, efficiency, and reliability, sourcing high-quality materials from trusted suppliers.
    Marketing & Rebranding Services:
    
    Refresh and modernize your brand to stay relevant in a changing market with market research and competitor analysis.
    Create compelling brand stories and narratives to connect emotionally with customers and enhance brand recognition.`


}

const ExpertiseDetail = () => {
  const router = useRouter()
  const { id } = router.query

  // Find the item that matches the id
  const itemData = expertise.find(item => item.id === parseInt(id))

  if (!itemData) {
    return <div>Loading...</div>
  }

  return (
    <div className='item-detail' style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1>{itemData.title}</h1>
      {/* Render additional item details here if needed */}
        <p>{descriptions[itemData.title]}</p>
       
    </div>
  )
}

export default ExpertiseDetail