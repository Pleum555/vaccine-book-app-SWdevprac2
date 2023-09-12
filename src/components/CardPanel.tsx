'use client'
import { Component, useReducer } from 'react'
import ProductCard from "./ProductCard";

export default function CardPanel(){

    const reducerRating = (ratingList:Map<string, number>, action:{type:string, hospitalName:string, rating:number})=>{
        switch(action.type){
            case 'add': {

                return new Map(ratingList.set(action.hospitalName,action.rating))
            }
            case 'remove': {
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }

    const dvds = new  Map<string, number>()

    const [ ratingList, dispatchRating ] = useReducer(reducerRating, new Map<string, number>())

    return(
        <div className='block ring-1 rounded-lg mx-6 my-6 bg-sky-50 shadow-lg py-1 '>
            <div className='mt-[50px] mx-[20px] flex row flex-wrap'
            // style={{marginTop:"50px", marginInline:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}
            >
                <ProductCard ImgSrc='/img/chula.jpg' Topic='Chulalongkorn Hospital' rating = {ratingList.get('Chulalongkorn Hospital')??0}
                onRating={(hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating})}/>
                <ProductCard ImgSrc='/img/rajavithi.jpg' Topic='Rajavithi Hospital' rating = {ratingList.get('Rajavithi Hospital')??0}
                onRating={(hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating})}/>
                <ProductCard ImgSrc='/img/thammasat.jpg' Topic='Thammasat University Hospital' rating = {ratingList.get('Thammasat University Hospital')??0}
                onRating={(hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating})}/>
            </div>
            <div className='block ring-1 rounded-lg mx-6 my-6 bg-amber-100 shadow-lg py-1 w-[30vw]'>
                <div className='w-full text-xl font-medium text-black pl-14'>Rating List: {ratingList.size}</div>
                {Array.from(ratingList).map(([hospital, rating]) => 
                    <div className='text-black pl-20' key={hospital}
                        onClick={() => {
                            dispatchRating({ type: 'remove', hospitalName: hospital, rating: rating });
                            
                        }}>{hospital}: {rating}
                    </div>)}
            </div>
        </div>
    )
}