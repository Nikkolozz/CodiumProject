import React from 'react'
import Style from './Aboutus.module.css'
import Shape1 from '../images/Shape1.png'
import Shape2 from '../images/Shape2.png'
import Shape3 from '../images/Shape3.png'
import Shape4 from '../images/Shape4.png'
import Shape5 from '../images/Shape5.png'
import Logo2 from '../images/Codium Logo Smybol2.png'
import Logo3 from '../images/Codium Logo3.png'

function aboutus() {
  return (
    <div className={Style.consultation_container}>
      <div className={Style.aboutus_container}>
        <img src={Shape1} alt='' />
        <img src={Shape2} alt='' />
        <h1>ჩვენ შესახებ</h1>
        <img src={Shape3} alt='' />
        <img src={Shape4} alt='' />
        <img src={Shape5} alt='' />
      </div>
      <div className={Style.left_right_container}>
        <img className={Style.img1} src={Logo2} alt='' />
        <div className={Style.line2}></div>
        <div className={Style.left_container}>
          <h1>WE ARE</h1>
          <h1>CREATIVE AGENCY</h1>
          <br />
          <p>ვმუშაობთ სწრაფად, ხარისხიანად და ეფექტურად ჩაგაბარებთ პროექტს იმ დროში, რომელზეც შევთანხმდებით
            ჩვენ გთავაზობთ ტექნიკურ მხარდაჭერას, არ აქვს მნიშვნელობა სად იმყოფებით დაგვიკავშირდით და დაგეხმარებით
          </p>
        </div>
        <div className={Style.right_container}>
          <img className={Style.img2} src={Logo3} alt='' />
        </div>
        <div className={Style.border_container1}></div>
        <div className={Style.border_container2}></div>
      </div>
    </div>
  )
}

export default aboutus
