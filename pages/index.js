import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
