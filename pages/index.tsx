import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Жилой комплекс Чкалов</title>
        <meta name="description" content="Современный жилой комплекс комфорт класса в престижном Пушкинском районе СПб, в Шушарах. Квартиры с отделкой от 3,5 млн. Срок сдачи 4 кв 2023 года." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

      </main>
    </>
  );
}
