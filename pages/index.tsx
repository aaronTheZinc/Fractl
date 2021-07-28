
import Head from 'next/head'
import { createRef } from "react"
import styles from '../styles/Home.module.css'
import Fonts from "../styles/Fonts.module.css"
import { ChartCard, Header, HousingCard } from './components'

export default  (): JSX.Element => {

  const tickerScroll = createRef()
  return (
    <div className={styles.container}>
      <Head>
        <title>Fractl</title>
      </Head>
      <Header />
      <div>
    <div
     className="flex overflow-auto scrollbar-hide ">
      {
        [1, 2,1,4,5,6].map((i) => (<ChartCard
          isProfit={i == 1? true: false}
          profit=""
          street="2890 Lantern Drive"
        />))
      }
      </div>
      </div>
      <div>
        <div className="m-20">
        <section className={Fonts.SairaMedium}>
          <label className="text-3xl">
            Suggested Properties
          </label>
        </section>
        <section className="flex mt-10">
          {
            [1,2,3].map((i) => (
              <HousingCard
              key={i}
               />
            ))
          }
        </section>
        </div>
      </div>

    </div>
  ) 
}
