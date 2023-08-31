import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard({ImgSrc, Topic, Description}:{ImgSrc:string, Topic:string, Description:string}) {
    return (
        <div className='w-1/5 h-[350px] rounded-lg shadow-lg mx-8'>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={ImgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[30%] text-black'>
                <h1 className='text-center font-semibold'>{Topic}</h1>
                <h3>
                    {Description}
                </h3>
            </div>
        </div>
    )
}