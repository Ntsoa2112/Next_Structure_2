import Link from 'next/link';
import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  if (typeof window !== 'undefined') {
    console.log('You are on the browser');
  } else {
    console.log('You are on the server');
  }
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Hello
        <Link href="https://github.com/Ntsoa2112/Webcup_Front" legacyBehavior>
          <a target="_blank"> Ami&apos;Ral! </a>
        </Link>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
