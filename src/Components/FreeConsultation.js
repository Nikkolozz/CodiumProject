import React from 'react'
import Style from './FreeConsultation.module.css'
import line3 from '../images/line3.png'
import Shape6 from '../images/Shape6.png'
import Shape7 from '../images/Shape7.png'
import line4 from '../images/line4.png'
import line5 from '../images/line5.png'
import line6 from '../images/line6.png'

function FreeConsultation() {
    return (
        <div className={Style.freeConsultation_container}>
            <div className={Style.consultation}>
                <div className={Style.container1}>
                    <div className={Style.imgs}>
                        <img src={Shape6} alt='' />
                        <br />
                        <img className={Style.shape_2} src={Shape7} alt='' />
                    </div>
                    <h1>უფასო კონსულტაცია</h1>
                    <br /><br /><br />
                    <img src={line3} alt='' />
                    <br /><br />
                    <p>ჩვენთან ყველაფერი მარტივია, დაგვიკავშირდით და გაიარეთ კონსულტაცია.</p>
                    <p>ჩვენ მოვისმენთ და განვიხილავთ თქვენს იდეებს.</p>

                </div>
            </div>
            <div className={Style.positions}>
                <div className={Style.down_container}>
                    <h2 className={Style.number_1}>01</h2>
                    <div className={Style.left_container}>
                        <h1>მორგებული პირობები</h1>
                        <br />
                        <img src={line4} alt='' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    </div>
                    <h2 className={Style.number_2}>02</h2>
                    <div className={Style.middle_container}>
                        <h1>ხელმისაწვდომი</h1>
                        <br />
                        <img src={line5} alt='' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    </div>
                    <h2 className={Style.number_3}>03</h2>
                    <div className={Style.right_container}>
                        <h1>დახმარება</h1>
                        <br />
                        <img src={line6} alt='' />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeConsultation
