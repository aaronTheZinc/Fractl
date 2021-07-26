
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ChartCard, Header } from './components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    <div className="flex">
      {
        [1, 2].map((i) => (<ChartCard
          isProfit={i == 1? true: false}
          profit=""
          street="2890 Lantern Drive"
        />))
      }
      </div>

    </div>
  ) 
}
