"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Input, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"

export function RegisterDate({onDateChange}:{onDateChange:Function}){

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)

    return(
        <div className="pl-16">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate}
                onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
            </LocalizationProvider>
        </div>
    )
}
export function HospitalOption({onHospitalChange}:{onHospitalChange:Function}){

    const [hospital, setHospital] = useState<string>("Chulalongkorn Hospital")

    return(
        <div className=" pl-16">
            <Select variant="standard" name="hospital" id="hospital" value={hospital}
            onChange={(e)=>{setHospital(e.target.value); onHospitalChange(e.target.value)}}
            className="h-[2em] w-[200px] bg-white rounded-lg px-3 py-2 ring-1">
                <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    )
}

export function FullName({onNameChange, onSurNameChange}:{onNameChange:Function, onSurNameChange:Function}){
    
    const [name, setName] = useState<string>("")
    const [surName, setSurName] = useState<string>("")

    return(
        <div className='flex flex-row space-x-5 pl-16' id="fullname">
            <Input type='text' name='name' id='name' placeholder='ชื่อ' value={name}
                onChange={(e)=>{setName(e.target.value); onNameChange(e.target.value)}}
                className='placeholder:text-gray-400 px-3 py-2 ring-1 ring-inset bg-white rounded'/>
            <Input type='text' name='surname' id='surname' placeholder='นามสกุล' value={surName}
                onChange={(e)=>{setSurName(e.target.value); onSurNameChange(e.target.value)}}
                className='placeholder:text-gray-400 px-3 py-2 ring-1 ring-inset bg-white rounded'/>
        </div>
    )
}

export function IdentificationId({onIdentificationIdChange}:{onIdentificationIdChange:Function}){

    const [identificationId, setIdentificationId] = useState<string>("")

    return(
        <div className="pl-16">
            <Input type='text' name='nationalid' id='nationalid' placeholder='รหัสประจำตัวประชาชน' value={identificationId}
                onChange={(e)=>{setIdentificationId(e.target.value); onIdentificationIdChange(e.target.value)}}
                className='placeholder:text-gray-400 pl-3 py-2 ring-1 ring-inset bg-white rounded'/>
        </div>
    )
}