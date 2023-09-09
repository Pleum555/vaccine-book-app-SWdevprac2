"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Input, MenuItem, Select } from "@mui/material"

export function RegisterDate(){
    return(
        <div className="pl-16">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
        </div>
    )
}
export function HospitalOption(){
    return(
        <div className=" pl-16">
            <Select variant="standard" name="hospital" id="hospital"
            className="h-[2em] w-[200px] bg-white rounded-lg px-3 py-2 ring-1">
                <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    )
}

export function FullName(){
    return(
        <div className='flex flex-row space-x-5 pl-16' id="fullname">
            <Input type='text' name='name' id='name' placeholder='ชื่อ' 
                className='placeholder:text-gray-400 px-3 py-2 ring-1 ring-inset bg-white rounded'/>
            <Input type='text' name='surname' id='surname' placeholder='นามสกุล' 
                className='placeholder:text-gray-400 px-3 py-2 ring-1 ring-inset bg-white rounded'/>
        </div>
    )
}

export function NationalID(){
    return(
        <div className="pl-16">
            <Input type='text' name='nationalid' id='nationalid' placeholder='รหัสประจำตัวประชาชน' 
                className='placeholder:text-gray-400 pl-3 py-2 ring-1 ring-inset bg-white rounded'/>
        </div>
    )
}