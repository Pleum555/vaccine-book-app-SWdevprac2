import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className='h-screen bg-stone-200'>
        <Banner imgSrc='/img/Background2.jpg' topic='Booking Statement' desc='Welcome to booking'/>
    </main>
  )
}
