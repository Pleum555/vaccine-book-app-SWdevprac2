import Image from 'next/image'
import InteractiveCard from './InteractiveCard'

export default function ProductCard({ImgSrc, Topic, Description}:{ImgSrc:string, Topic:string, Description:string}) {
    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg '>
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
        </InteractiveCard>
    )
}