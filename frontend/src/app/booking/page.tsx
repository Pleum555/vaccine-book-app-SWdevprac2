"use client"
import Banner from '@/components/Banner'
import { FullName, HospitalOption, RegisterDate, IdentificationId } from '@/components/RegisterForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { BookingItem } from '../../../interfaces'
import { addBooking } from '@/redux/features/bookSlice'

export default function Booking() {

  // const urlParams = useSearchParams()
  // const hid = urlParams.get('id')
  // const hospital = urlParams.get('hospital')
  
  const dispatch = useDispatch<AppDispatch>()

  const makeBooking = () => {
    if(name && surName && identificationId && hospitalName && pickupDate) {
      const bookingItem:BookingItem = {
        name: name,
        surName: surName,
        identificationId: identificationId,
        hospitalName: hospitalName,
        pickupDate: dayjs(pickupDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(bookingItem))
    }
  }

  const [name, setName] = useState<string>("")
  const [surName, setSurName] = useState<string>("")
  const [identificationId, setIdentificationId] = useState<string>("")
  const [hospitalName, setHospitalName] = useState<string>("Chulalongkorn Hospital")
  const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

  // const session = await getServerSession(authOptions)
  // if(!session || !session.user.token) return null

  // const profile = await getUserProfile(session.user.token)
  // var createdAt = new Date(profile.data.createdAt)
  
  return (
    <main className='h-full bg-stone-200 w-[100%] flex flex-col items-center space-y-4 '>
        {/* <Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/corona-5974596_1280.png']} topic='Booking Statement' desc='Welcome to booking'/> */}

        {/* <div className='bg-slate-200 w-[80vw] rounded-lg shadow-lg ring-1 space-y-4 m-5 p-5'>
        <div className='text-2xl text-black '>{profile.data.name}</div>
        <table className='table-auto border-separate border-spacing-2 text-black'><tbody>
          <tr><td>Email</td><td>{profile.data.email}</td></tr>
          <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
          <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
        </tbody></table>
        </div> */}

        <div className='bg-slate-200 w-[80vw] rounded-lg shadow-lg ring-1 py-5 space-y-4 my-4'>
            <div className='text-xl font-medium text-black flex flex-row justify-center'>New Booking</div>
            {/* <div className='text-xl font-medium text-black flex flex-row justify-center'>Hospital: {hospital}</div> */}

            <div className='text-md text-left text-gray-600 pl-12'>ชื่อ-นามสกุล</div>
            <FullName onNameChange={(value:string)=>{setName(value)}} onSurNameChange={(value:string)=>{setSurName(value)}}/>

            <div className='text-md text-left text-gray-600 pl-12'>รหัสประจำตัวประชาชน</div>
            <IdentificationId onIdentificationIdChange={(value:string)=>{setIdentificationId(value)}}/>

            <div className='text-md text-left text-gray-600 pl-12'>โรงพยาบาล</div>
            <HospitalOption onHospitalChange={(value:string)=>{setHospitalName(value)}}/>

            <div className='text-md text-left text-gray-600 pl-12'>วันที่ต้องการรับวัคซีน</div>
            <RegisterDate onDateChange={(value:Dayjs)=>{setPickupDate(value)}}/>
            
            <div className='flex flex-row justify-end pr-5'> 
              <button className='rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 text-white shadow-sm'
              onClick={makeBooking}>
                Make Booking
              </button>
            </div>
        </div>
        
    </main>
  )
}
