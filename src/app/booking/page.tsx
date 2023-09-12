import Banner from '@/components/Banner'
import { FullName, HospitalOption, RegisterDate, NationalID } from '@/components/RegisterForm'

export default function Bookings() {
  return (
    <main className='h-screen bg-stone-200 w-[100%] flex flex-col items-center space-y-4'>
        {/* <Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/corona-5974596_1280.png']} topic='Booking Statement' desc='Welcome to booking'/> */}


        <div className='bg-slate-200 w-[80vw] rounded-lg shadow-lg ring-1 py-5 space-y-4 my-4'>
            <div className='text-xl font-medium text-black flex flex-row justify-center'>New Booking</div>

            <div className='text-md text-left text-gray-600 pl-12'>ชื่อ-นามสกุล</div>
            <FullName/>

            <div className='text-md text-left text-gray-600 pl-12'>รหัสประจำตัวประชาชน</div>
            <NationalID/>

            <div className='text-md text-left text-gray-600 pl-12'>โรงพยาบาล</div>
            <HospitalOption/>

            <div className='text-md text-left text-gray-600 pl-12'>วันที่ต้องการรับวัคซีน</div>
            <RegisterDate/>
            
            <div className='flex flex-row justify-end pr-5'> 
              <button className='rounded-md bg-sky-600 hover:bg-indigo-600 px-6 py-2 text-white shadow-sm'>Check Hospital Availability</button>
            </div>
        </div>
        
    </main>
  )
}
