import styles from '../page.module.css';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <Image 
            src={`/Nonstop.svg`}
            alt='Nonstop'
            width={97}
            height={16}
            priority
            className={`${styles.logo} ${styles.logoNonstop}`}
            />
            <Image 
            src={`/Studio.svg`}
            alt='Studio'
            width={97}
            height={16}
            priority
            className={`${styles.logo} ${styles.logoStudio}`}
            />
        </header>
    )
}