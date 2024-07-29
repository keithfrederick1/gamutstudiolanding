import { useRouter } from 'next/router'
import { expertise } from '../assets/data/dummydata' // Adjust the path to where your data file is located

const ServicePage = () => {
  const router = useRouter()
  const { id } = router.query

  const itemData = expertise.find(item => item.id === parseInt(id))

  if (!itemData) {
    return <div>Loading...</div>
  }

  return (
    <div className='item-detail'>
      <h1>{itemData.title}</h1>
      <img src={itemData.cover} alt={itemData.title} />
      <ul>
        {itemData.desc.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServicePage