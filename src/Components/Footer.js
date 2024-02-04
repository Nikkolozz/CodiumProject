import React from 'react'
import Style from './Footer.module.css'
import { faEnvelope, faHeadphones, faGlobe, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faLinkedin, faSquareFacebook, } from '@fortawesome/free-brands-svg-icons'




function Footer() {
    return (
        <>
            <footer>
                <div className={Style.footerAbout_container}>
                    <div className={Style.containers1}>
                        <div className={Style.titles_1}>
                            <h1>კონტაქტი</h1>
                            <br />
                            <p><FontAwesomeIcon icon={faHeadphones} className={Style.icons1} /> <span>Phone: +995 555 555</span></p>
                            <p><FontAwesomeIcon icon={faEnvelope} className={Style.icons1} /> <span>Email: <span className={Style.colors_5}>info@codium.ge</span></span></p>
                            <p><FontAwesomeIcon icon={faGlobe} className={Style.icons1} /> <span>Website: <span className={Style.colors_5}>www.codium.ge</span></span></p>
                        </div>
                    </div>
                    <div className={Style.containers1}>
                        <h1>გვერდები</h1>
                        <br />
                        <p>About Us</p>
                        <p>Our Projects</p>
                        <p>Codum Team</p>
                        <p>Contact</p>
                    </div>
                    <div className={Style.containers1}>
                        <h1>სიახლეები</h1>
                        <br />
                        <p>Subscribe to our newsletter and</p>
                        <p>stay up to date with all updates.</p>
                        <div className={Style.inputs_container}>
                            <input className={Style.input_1} type="text" placeholder='Your email adress' />
                            <div className={Style.submit_1}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={Style.copyright_socials_container}>
                <div className={Style.containers}>
                    <div className={Style.about_3}>
                        <h1>© Copyright 2024 <span>Codium</span></h1>
                    </div>
                    <div className={Style.about_1}>
                        <h1>Support</h1>
                        <h1 className={Style.test_5}>|</h1>
                        <h1>Contact Us</h1>
                        <h1 className={Style.test_5}>|</h1>
                        <h1>About Us</h1>
                        <h1 className={Style.test_5}>|</h1>
                        <h1>Privacy Policy</h1>
                    </div>
                    <div className={Style.about_2}>
                        <h2><FontAwesomeIcon icon={faSquareFacebook} /></h2>
                        <h2><FontAwesomeIcon icon={faLinkedin} /></h2>
                        <h2><FontAwesomeIcon icon={faInstagram} /></h2>
                        <h2><FontAwesomeIcon icon={faGoogle} /></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
