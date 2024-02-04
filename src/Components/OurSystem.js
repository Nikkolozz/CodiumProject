import React from 'react'
import Style from './OurSystem.module.css'
import Icon1 from '../images/Icon1.png'
import Icon2 from '../images/Icon2.png'
import Icon3 from '../images/Icon3.png'

function OurSistem() {
    return (
        <div className={Style.aboutus_container}>
            <div className={Style.container1}>
                <img src={Icon1} alt='' />
                <br /><br />
                <h1>თქვენზე მორგებული</h1>
                <br /><br />
                <p>ბოლომდე თქვენზე ან თქვენს ბიზნეს</p>
                <p>იდეაზე მორგებული ვებსაიტი</p>
            </div>
            <div className={Style.container2}>
            <img src={Icon2} alt='' />
                <br /><br />
                <h1>ძალიან სწრაფად</h1>
                <br /><br />
                <p>შეკვეთიდან უმოკლეს დროში</p>
                <p>დასრულებული პროექტი</p>
            </div>
            <div className={Style.container3}>
            <img src={Icon3} alt='' />
                <br /><br />
                <h1>დაგეგმვა & მხარდაჭერა</h1>
                <br /><br />
                <p>ჩვენი გუნდი დაგეხმარებათ</p>
                <p>სასურველი შედეგის მიღწევაში</p>
            </div>
        </div>
    )
}

export default OurSistem
