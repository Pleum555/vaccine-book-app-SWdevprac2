import Image from 'next/image';
import styles from './topmenu.module.css'
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)
    

    return(
        <div className={styles.menucontainer}>
            <Link href={'/'}>
                <Image src={'/img/vaccine-6017110_1280.png'} className={styles.logoimg} alt='logo'
                width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title={'Booking'} pageRef='/booking'/>

            {
                session? <Link href="/api/auth/signout">
                    <div className='flex items-center absolute left-2 h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out of {session.user?.name}</div></Link>
                : <Link href="/api/auth/signin">
                    <div className='flex items-center absolute left-2 h-full px-2 text-cyan-600 text-sm'>Sign-In</div></Link>
            }
        </div>
    );
} 