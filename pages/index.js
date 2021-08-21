import Head from 'next/head'
import Footer from '../components/Footer'
import Images from '../components/Images'
import LargeCard from '../components/LargeCard'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar/>
     <Images/>
     <div className="h-screen p-10 max-w-screen-xl mx-auto">
       
       <LargeCard
          img="https://links.papareact.com/4cj"
          title="Checkout my Projects"
          description="This is my brand new Portfolio"
          buttonText="Get Inspired"
        />
     </div>
    <Footer/>
     


    </div>
  )
}
