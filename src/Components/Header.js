import React from 'react'
import Style from './Header.module.css'
import Logo from '../images/Logo.png'
import CodiumLogoSymbol from '../images/Codium Logo Symbol.png'

function Header() {
    return (
        <div className={Style.header_container}>
            <div className={Style.nav_container}>
                <div className={Style.logo}>
                    <img src={Logo} alt='' />
                </div>
                <div className={Style.lists}>
                    <ul>
                        <li className={Style.active}>მთავარი გვერდი</li>
                        <li className={Style.hovers}>საიტის დამზადება</li>
                        <li className={Style.hovers}>სერვისები</li>
                        <li className={Style.hovers}>ჩვენ შესახებ</li>
                        <li className={Style.hovers}>კონტაქტი</li>
                    </ul>
                </div>
                <div className={Style.languages}>
                    <ul>
                        <li className={Style.active2}>GEO</li>
                        <li className={Style.hovers}>EN</li>
                        <li className={Style.hovers}>RU</li>
                    </ul>
                </div>
            </div>
            <div className={Style.aboutus}>
                <div className={Style.left_container}>
                    <h1 className={Style.font1}>WE'RE CODIUM</h1>
                    <h1 className={Style.font2}>ვებ-დეველოპმენტი და</h1>
                    <h1 className={Style.font2}>ციფრული სერვისები</h1>
                    <div className={Style.line1}></div>
                    <p className={Style.font3}>საიტის შემადგენელი ნაწილი იგი წარმოადგენს ინფორმაციის წყაროს და შეიცავს</p>
                    <p className={Style.font3}>ჰიპერტექსტებს, რომელთა საშუალებითაც ხდება სხვადასხვა დოკუმენტის მოძიება და კავშირი</p>
                    <button className={Style.font4}>დაგვიკავშირდი</button>
                </div>
                <div className={Style.right_container}>
                    <img src={CodiumLogoSymbol} alt='' />
                </div>
            </div>
        </div>
    )
}
export default Header
