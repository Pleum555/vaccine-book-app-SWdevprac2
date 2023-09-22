'use client'
import { useReducer } from 'react'
import ProductCard from "./ProductCard";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

    const [ ratingList, dispatchRating ] = useReducer(reducerRating, new Map<string, number>())

    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"}
    ]
    const router = useRouter()

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
        </div>
    )
}