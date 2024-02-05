import React, { useEffect, useState } from 'react';
import arrowUp from '../images/arrowUp.png';
import { hover } from '@testing-library/user-event/dist/hover';

function BackToTopButton() {
    const [backToTopButton, setBacktoTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setBacktoTopButton(true);
            } else {
                setBacktoTopButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollUp = () => {
        const scrollStep = -window.scrollY / 60;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <div>
            {backToTopButton && (
                <button
                    style={{
                        position: "fixed",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        bottom: "12rem",
                        height: "50px",
                        width: "50px",
                        right: "9rem",
                        fontSize: "50px",
                        background: "#111121",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 1
                    }}
                    onClick={scrollUp}
                >
                    <img src={arrowUp} alt="Arrow Up" />
                </button>
            )}
        </div>
    );
}

export default BackToTopButton;