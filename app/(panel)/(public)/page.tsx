import Header from './_components/header'
import Hero from './_components/hero'
import Professionals from './_components/professionals'
import Footer from './_components/footer'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <Header />
      <div>
        <Hero />
        <Professionals />
        <Footer />
      </div>
    </div>
  )
}

export default Home