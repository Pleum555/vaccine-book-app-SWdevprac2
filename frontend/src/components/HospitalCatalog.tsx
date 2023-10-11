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
        <div className='block ring-1 rounded-lg mx-6 my-6 bg-sky-50 shadow-lg py-1 '>
        Explore {hospitalJsonReady.count} models in our catalog
        <div style={{margin:"20px", display:"flex", 
            flexDirection:"row", justifyContent:"space-around", 
            alignContent:"space-around",flexWrap:"wrap",}}>
                {
                    hospitalJsonReady.data.map((hospitalItem:Object)=>(
                        <Link href={`/hospital/${hospitalItem.id}`} className='w-1/5'>
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