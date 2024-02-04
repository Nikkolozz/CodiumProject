import React from 'react'
import Style from './OurTeam.module.css'
import newShape1 from '../images/newShape1.png'
import smallShape1 from '../images/smallShape1.png'
import smallShape2 from '../images/smallShape2.png'
import middleShape1 from '../images/middleShape1.png'
import middleShape2 from '../images/middleShape2.png'
import Shape_1 from '../images/shape_1.png'
import Shape_2 from '../images/shape_2.png'
import Shape_3 from '../images/Shape_3.png'
import Shape_4 from '../images/Shape_4.png'

function OurTeam() {
    const teamInfo1 = [
        {
            id: 0,
            image: "",
            name: "Nikoloz Tchkoidze",
            position: "Senior Developer",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            id: 1,
            image: "",
            name: "Nikoloz Tchkoidze",
            position: "Senior Developer",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            id: 2,
            image: "",
            name: "Nikoloz Tchkoidze",
            position: "Senior Developer",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },
        {
            id: 3,
            image: "",
            name: "Nikoloz Tchkoidze",
            position: "Senior Developer",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        },

    ];
    const aboutTeam1 = teamInfo1.map((a, i) => (
        <div className={Style.team_cards1}>
            <div className={Style.round}></div>
            <br /> <br />
            <h1>{a.name}</h1>
            <h2>{a.position}</h2>
            <br />
            <p>{a.about}</p>
        </div>
    ))

    return (
        <div className={Style.ourTeam_container}>
            <div className={Style.team_title}>
                <div className={Style.shape_container}>
                    <img className={Style.img2} src={smallShape2} alt='' />
                    <img className={Style.img3} src={smallShape1} alt='' />
                    <img className={Style.img1} src={middleShape2} alt='' />
                    <img src={middleShape1} alt='' />
                </div>
                <div className={Style.title}>
                    <h1>ჩვენი გუნდი</h1>
                    <br />
                    <img src={newShape1} alt='' />
                    <br />
                    <p>Lorem Ipsum is simply dummy text of the</p>
                    <p>printing and typesetting industry</p>
                </div>
            </div>
            <div className={Style.team_card_container}>
                {aboutTeam1}
            </div>
            <div className={Style.btn1_container}>
                <img className={Style.image_1} src={Shape_1} alt='' />
                <img className={Style.image_2} src={Shape_2} alt='' />
                <img className={Style.image_3} src={Shape_3} alt='' />
                <img className={Style.image_4} src={Shape_4} alt='' />
                <button className={Style.btn1}>დაგვიკავშირდი</button>
            </div>
        </div>
    )
}

export default OurTeam
