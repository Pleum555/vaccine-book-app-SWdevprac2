'use client'
import { useReducer, useRef } from 'react'
import ProductCard from "./ProductCard";
import Link from 'next/link';

export default function CardPanel(){

    // const countRef = useRef(0)
    // const inputRef = useRef<HTMLInputElement>(null)

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

    const [ ratingList, dispatchRating ] = useReducer(reducerRating, new Map<string, number>())

    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]

    return(
        <div className='block ring-1 rounded-lg mx-6 my-6 bg-sky-50 shadow-lg py-1 '>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"space-around",flexWrap:"wrap",
            }}
            >
                {mockHospitalRepo.map((hospitalItem)=>(
                        <Link href={`/hospital/${hospitalItem.hid}`} className='w-1/5'>
                        <ProductCard ImgSrc={hospitalItem.image} Topic={hospitalItem.name} rating = {ratingList.get(hospitalItem.name)??0}
                        onRating={(hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating})}/>
                        </Link>
                ))}
                
            </div>
            <div className='block ring-1 rounded-lg mx-24 my-6 bg-amber-100 shadow-lg py-1 w-[20vw]'>
                <div className='w-full text-xl font-medium text-black text-center '>Rating List: {ratingList.size}</div>
                {Array.from(ratingList).map(([hospital, rating]) => 
                    <div className='text-black' key={hospital}
                        onClick={() => {
                            dispatchRating({ type: 'remove', hospitalName: hospital, rating: rating });
                            
                        }}>{hospital}: {rating}
                    </div>)}
            </div>
            {/* <div className='mx-24'>
            <button className=' block rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 
            text-white shadow-sm'
            onClick={()=>{countRef.current = countRef.current + 1; alert(countRef.current)}}>
                Count with Ref Object
            </button>
            
            <input type="text" placeholder="Please fill" className="block text-gray-900 text-sm rounded-lg
            p-2 my-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            focus:outline-none focus:bg-purple-200 focus:ring-2"
            ref={inputRef}/>
            
            <button className='block rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 
            text-white shadow-sm'
            onClick={()=>{ if(inputRef.current!=null) inputRef.current.focus() }}>
                Focus Input
            </button>
            </div> */}
        </div>
    )
}