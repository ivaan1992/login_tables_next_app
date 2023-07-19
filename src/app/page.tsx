import Image from 'next/image'
import styles from './page.module.css'
import Login from '@/components/login'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Welcome</h1>
        <Login />
    </main>
  )
}
