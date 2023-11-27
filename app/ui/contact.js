import styles from '../page.module.css';

export default function Contact() {
    return(
        <footer className={styles.contact}>
            <a href='https://www.instagram.com/_nonstopstudio_/' target='_blank'>Instagram</a>
            <span> • </span>
            <a href='mailto:myprecious@nonstop.studio'>Contact</a>
        </footer>
    )
}