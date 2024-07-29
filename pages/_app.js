import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import './expertise/shape.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
