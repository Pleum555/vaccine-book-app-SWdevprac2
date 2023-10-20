"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function Booking() {
    
    const bookingItems = useAppSelector( (state)=> state.bookSlice.bookingItems )
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            {   bookingItems.length!=0?
                bookingItems.map((bookingItem)=>(
                    <div className="bg-slate-200 w-[80vw] rounded-lg shadow-lg ring-1 space-y-4 m-5 p-5 text-black"
                    // key={bookingItem.name}
                    >
                        <div className="text-xl">{bookingItem.hospitalName}</div>
                        <div className="text-sm">Pick-up {bookingItem.pickupDate}</div>
                        <div className="text-sm">Pick-up {bookingItem.name} {bookingItem.surName}</div>
                        <div className="text-sm">Identification ID: {bookingItem.identificationId}</div>
                        <button className='rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 text-white shadow-sm'
                        onClick={()=> dispatch(removeBooking(bookingItem))}>
                            Remove Booking
                        </button>
                    </div>
                ))
                : <div className="text-center text-black text-xl my-5">No Vaccine Booking</div>
            }
        </>
    )
}