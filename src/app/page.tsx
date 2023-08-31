import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className='h-screen bg-stone-200'>
        <Banner imgSrc='/img/Background.jpg' topic='Vaccine Book App' desc='explore to vaccine book application'/>
        <div className='mt-[50px] mx-[20px] flex row flex-wrap'
        // style={{marginTop:"50px", marginInline:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}
        >
          <ProductCard ImgSrc='/img/chula.jpg' Topic='Chulalongkorn Hospital' Description='This is a chulalongkorn hospital.'/>
          <ProductCard ImgSrc='/img/rajavithi.jpg' Topic='Rajavithi Hospital' Description='This is a rajavithi hospital.'/>
          <ProductCard ImgSrc='/img/thammasat.jpg' Topic='Thammasat University Hospital' Description='This is a thammasat university hospital.'/>
        </div>
    </main>
  )
}
