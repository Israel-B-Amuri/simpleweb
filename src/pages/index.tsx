import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })
import  style from '../styles/Home.module.css'
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <section className={style.container}></section>
    </main>
  )
}