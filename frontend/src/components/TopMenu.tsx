import Image from 'next/image';
import styles from './topmenu.module.css'
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';

export default function TopMenu() {
    return(
        <div className={styles.menucontainer}>
            <Link href={'/'}>
                <Image src={'/img/vaccine-6017110_1280.png'} className={styles.logoimg} alt='logo'
                width={0} height={0} sizes='100vh'/>
            </Link>
            <TopMenuItem title={'Booking'} pageRef='/booking'/>
        </div>
    );
} 