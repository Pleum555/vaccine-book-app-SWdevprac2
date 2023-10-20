import Link from 'next/link';
import styles from './topmenu.module.css'

export default function TopMenuItem({title, pageRef}:{title:string, pageRef:string}){
    return (
        <Link className={styles.itemcontainer} href={pageRef}>
            {/* <h4>Menu Item</h4> */}
            {title}
        </Link>
    );
}