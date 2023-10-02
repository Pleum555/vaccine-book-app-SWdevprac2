import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'
import CardPanel from '@/components/CardPanel'
import { PromoteCard } from '@/components/PromoteCard'

export default function Home() {
  return (
    <main className='h-screen bg-stone-200'>
        <Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/Background3.jpg', '/img/Background4.jpg']} 
          topic='Vaccine Book App' desc='explore to vaccine book application'/>
        <PromoteCard></PromoteCard>
    </main>
  )
}
