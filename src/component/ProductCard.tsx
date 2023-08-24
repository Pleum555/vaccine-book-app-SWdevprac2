import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/diana-polekhina-dw6tvK_PuxM-unsplash.jpg'}
                alt='Product Picture'
                fill={true}
                style={{
                    borderTopLeftRadius:"10px",
                    borderTopRightRadius:"10px"
                }}
                objectFit='cover'/>
            </div>
            <div className={styles.cardtext}>
                <h1>Vaccine 1</h1>
                <h3>
                    Description to My app about vaccine bookup...
                </h3>
            </div>
        </div>
    )
}