import styles from './page.module.css'
import Link from 'next/link'

const Header = () => {
    <header className={styles.main}>
      <nav >
        <ul className={styles.flex}>
          <li className={styles.links}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.links}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.links}>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
}

export default Header;
