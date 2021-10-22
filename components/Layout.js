import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Sense med Mia</title>
        <link rel="shortcut icon" href="/static/favicon.ico"/>
      </Head>
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}