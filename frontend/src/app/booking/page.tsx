import Banner from '@/components/Banner'
import { FullName, HospitalOption, RegisterDate, NationalID } from '@/components/RegisterForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'

export default async function Bookings() {
  
  const session = await getServerSession(authOptions)
  if(!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  var createdAt = new Date(profile.data.createdAt)
  
  return (
    <main className='h-screen bg-stone-200 w-[100%] flex flex-col items-center space-y-4 '>
        {/* <Banner imgSrc={['/img/Background.jpg', '/img/Background2.jpg', '/img/corona-5974596_1280.png']} topic='Booking Statement' desc='Welcome to booking'/> */}

        <div className='bg-slate-200 w-[80vw] rounded-lg shadow-lg ring-1 space-y-4 m-5 p-5'>
        <div className='text-2xl text-black '>{profile.data.name}</div>
        <table className='table-auto border-separate border-spacing-2 text-black'><tbody>
          <tr><td>Email</td><td>{profile.data.email}</td></tr>
          <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
          <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
        </tbody></table>
        </div>

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
