import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/component/Banner'
import ProductCard from '@/component/ProductCard'

export default function Home() {
  return (
    <main style={{backgroundColor:"whitesmoke", height:"100vh"}} >
        <Banner/>
        <div style={{marginTop:"50px", marginInline:"20px", display:"flex", flexDirection:"row",
      flexWrap:"wrap", 
      // justifyContent:"space-around", alignContent:"space-around"
      }}>
          <ProductCard/>
          {/* <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}
        </div>
    </main>
  )
}
