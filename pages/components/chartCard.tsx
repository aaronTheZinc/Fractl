import React, { FC } from 'react'
import Fonts from "../../styles/Fonts.module.css"
import Image from "next/image"

export interface ChartCardType {
    isProfit: boolean
    street: string
    profit: string
}
const ChartCard: FC<ChartCardType> = ({ isProfit, street, profit }): JSX.Element => {
    return (
        <div className="bg-white-offWhite h-56 w-5/12 rounded-3xl ml-16">
            <div className=" font-bold pt-10">
                <div className="flex">
                    <section className="ml-10 text-xl">
                        <label style={{ fontWeight: "bolder" }} className={Fonts.SairaLight}>
                            {street}
                        </label>
                    </section>
                    <section className=" ml-28">
                        <Image
                            src="/upArrow.png"
                            width={60}
                            height={35}
                        />
                    </section>
                </div>
                {
                    isProfit ? (
                        <section className="text-4xl ml-10 mt-16 text-green-positiveGreen">
                            <label className={Fonts.SairaExtraBold}>
                                +$5,901.93
                            </label>
                        </section>
                    ) :
                        (
                            <section className="text-4xl ml-10 mt-16 text-red-negativeRed">
                                <label className={Fonts.SairaExtraBold}>
                                    -$2,901.93
                                </label>
                            </section>
                        )

                }

            </div>
        </div>
    )
}

export { ChartCard }
