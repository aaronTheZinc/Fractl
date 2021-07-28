import React, { FC } from "react"
import Fonts from "../../styles/Fonts.module.css"
export enum HomeMarkerEnum {
    tenant,
    rent,
    lease,
}
interface Marker {
    type: HomeMarkerEnum
    text: string
}

export const HomeMarker: FC<Marker> = ({ type, text }): JSX.Element => {
    let color;
        switch(type) {
            case HomeMarkerEnum.tenant: 
                color = "#AFB7FF"
        }
    return (
        <div className="rounded-full flex justify-center align-middle" style={{width: "120px", height: "40px", backgroundColor: color}}>
           <section style={{marginTop: "6px"}} className={Fonts.SairaMedium}>
            
            <span style={{marginTop: "300px"}} className="">{text}</span>
            </section>
        </div>
    )
}