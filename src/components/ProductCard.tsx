'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import { useState } from 'react';
import { Rating } from '@mui/material';

export default function ProductCard({ImgSrc, Topic, rating, onRating}:{ImgSrc:string, Topic:string, rating:number, onRating:Function}) {

    return (
        <InteractiveCard contentName={ Topic }>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={ImgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>

            <div className='w-full h-[15%] text-black font-semibold pt-2 text-center'>{Topic}</div>
            
            <Rating name="rating" value={rating} precision={0.5}
            onChange={(e, newValue)=>{onRating(Topic, newValue);}}
            onClick={(e)=>{e.stopPropagation();}}
            />
        </InteractiveCard>
    )
}