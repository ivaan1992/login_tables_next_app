import Link from 'next/link';
import styles from '../app/page.module.css'

const Login = () => {
    return (
        <>
           <Link href="/sign-in" className={styles.loginLink}>Sign In</Link>
           <Link href="/sign-up" className={styles.loginLink}>Sign Up</Link>
        </>
    )
}

export default Login;