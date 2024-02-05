import React from 'react'
import Style from './OurWorks.module.css'
import rightArrow1 from '../images/rightArrow1.png'

function OurWorks() {
    return (
        <div className={Style.ourWork_container}>
            <div className={Style.title1}>
                <h1>ჩვენი ნამუშევრები</h1>
            </div>
            <div className={Style.card_container}>
                <div className={Style.card1}>
                    <h1>GAMEKEY</h1>
                    <h1>WEB UI</h1>
                    <br /> <br />
                    <button className={Style.hovers_1}>ვრცლად</button>
                </div>
                <div className={Style.card1}>
                    <h1>CODIUM</h1>
                    <h1>WEB</h1>
                    <br /> <br />
                    <button className={Style.hovers_1}>ვრცლად</button>
                </div>
                <div className={Style.card1}>
                    <h1>NEW</h1>
                    <h1>THEME</h1>
                    <br /> <br />
                    <button className={Style.hovers_1}>ვრცლად</button>
                </div>
                <div className={Style.next}>
                    <img src={rightArrow1} alt='' />
                </div>
            </div>
        </div>
    )

}

export default OurWorks
