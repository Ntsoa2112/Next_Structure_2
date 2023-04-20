import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact</a>
      </Link>
      <Link href="/export" legacyBehavior>
        <a>Export</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
