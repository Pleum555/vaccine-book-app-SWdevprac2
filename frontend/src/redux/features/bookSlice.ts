import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookingItem } from "../../../interfaces"

type BookingState = {
    bookingItems: BookingItem[]
}

const initialState:BookingState = { bookingItems:[] }

export const bookSlice = createSlice ({
    name: "book",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems =  state.bookingItems.filter( obj => {
                return ( (obj.name != action.payload.name)
                || (obj.surName != action.payload.surName))
            })
            remainItems.push(action.payload)
            state.bookingItems = remainItems
        },
        removeBooking: (state, action:PayloadAction<BookingItem>)=>{
            const remainItems =  state.bookingItems.filter( obj => {
                return ( (obj.name != action.payload.name)
                || (obj.surName != action.payload.surName))
            })
            state.bookingItems = remainItems
        }
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer