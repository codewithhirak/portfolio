import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-black">
      <Navbar />
      <main className="mt-20 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default App
