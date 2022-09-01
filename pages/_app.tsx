import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from "../components/footer"
import Header from "../components/header"
import Profile from "../components/profile"
import ProjectPreview from "../components/project_preview"
import Layout from "../components/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className='text-slate-700 flex flex-col gap-6'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  )  
}

export default MyApp
