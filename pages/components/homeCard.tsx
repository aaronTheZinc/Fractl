import React, { FC } from "react"
import Image from "next/image"
import Fonts from "../../styles/Fonts.module.css"
import { HomeMarker, HomeMarkerEnum } from "./homeType"
import FadeIn from "react-fade-in/lib/FadeIn"
export interface HousingCard {
    key: number
}
export const HousingCard: FC<HousingCard> = ({key}): JSX.Element => {
    return (
        <FadeIn>
        <div style={{marginLeft: key == 1? "0px": "50px"}} className="">
            <div>
                <div className=" rounded-3xl">
                    <Image 
                    className=" rounded-px50"
                    src="https://static.dezeen.com/uploads/2020/06/royal-william-kaven-portland-oregon_dezeen_hero.jpg"
                    width={600}
                    height={400}
                    />
                </div>
                <div className="flex mt-10">
                    <section className={Fonts.SairaExtraBold}>
                    <label className="text-2xl pt-36">
                    898 Mase St
                    </label>
                    </section>
                    <section className="ml-10">
                        <HomeMarker
                         type={HomeMarkerEnum.tenant}
                         text="4 tenants"
                         />
                    </section>
                </div>
            </div>
        </div>
        </FadeIn>
    )
}
