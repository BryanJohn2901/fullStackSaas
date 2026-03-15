import Header from './_components/header'
import Hero from './_components/hero'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <Header />
      <div>
        <Hero />
      </div>
    </div>
  )
}

export default Home