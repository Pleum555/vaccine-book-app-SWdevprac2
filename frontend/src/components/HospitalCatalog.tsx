import Link from "next/link";
import ProductCard from "./ProductCard";
import { useReducer } from 'react'

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    // const reducerRating = (ratingList:Map<string, number>, action:{type:string, hospitalName:string, rating:number})=>{
    //     switch(action.type){
    //         case 'add': {

    //             return new Map(ratingList.set(action.hospitalName,action.rating))
    //         }
    //         case 'remove': {
    //             ratingList.delete(action.hospitalName)
    //             return new Map(ratingList)
    //         }
    //         default: return ratingList
    //     }
    // }
    
    // const [ ratingList, dispatchRating ] = useReducer(reducerRating, new Map<string, number>())
    
    const hospitalJsonReady = await hospitalJson

    return (
        <div className='block ring-1 rounded-lg bg-sky-50 shadow-lg mx-6 my-6 py-1'>
        Explore {hospitalJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", 
            flexDirection:"row", justifyContent:"space-around", 
            alignContent:"space-around",flexWrap:"wrap", padding:"10px"}}>
                {
                    hospitalJsonReady.data.map((hospitalItem:Object)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} 
                        className='w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%]
                        p-2 sm:p-4 md:p-4 lg:p-8'>
                        <ProductCard ImgSrc={hospitalItem.picture} Topic={hospitalItem.name} 
                            // rating = {ratingList.get(hospitalItem.name)??0}
                            // onRating={(hospital:string, rating:number)=>dispatchRating({type:'add', hospitalName:hospital, rating:rating})}
                        />
                        </Link>
                ))}
                
        </div>
        </div>
    )
}