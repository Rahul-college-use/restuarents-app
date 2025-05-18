import React, { useEffect, useRef } from 'react';
import table from '../../assets/table.jpg';
import pizza from '../../assets/pizza.gif';
import burger from '../../assets/burger.png';
import dessert from '../../assets/Prosciutto.gif';
import './HomeMain.css';

function HomeMain() {
    const counter = useRef(0);
    const slidesRef = useRef([]);
    const imageBoxesRef = useRef([]);
    const textBoxesRef = useRef([]);

    const images = [pizza, burger, dessert];
    const texts = [
        { top: 'Welcome to Pizza World!', bottom: 'Best taste guaranteed 🍕' },
        { top: 'Try Our Juicy Burgers', bottom: '100% grilled goodness 🍔' },
        { top: 'Sweetest Desserts', bottom: 'Indulge in delight 🍰' },
    ];

    useEffect(() => {
        // Set initial position of each slide
        slidesRef.current.forEach((slide, idx) => {
            if (slide) slide.style.left = `${idx * 100}%`;
        });

        // Show first slide initially
        slideImage();

        // Set interval to auto-slide every 3 seconds
        const intervalId = setInterval(() => {
            goToNext();
        }, 3000);

        // Cleanup interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    const slideImage = () => {
        slidesRef.current.forEach((slide, index) => {
            if (slide) {
                slide.style.transform = `translateX(-${counter.current * 100}%)`;
                slide.style.opacity = counter.current === index ? '1' : '0.5';
            }
        });

        imageBoxesRef.current.forEach((box, index) => {
            if (box) {
                if (counter.current === index) {
                    box.style.right = '100px';
                    const img = box.querySelector('img');
                    if (img) {
                        img.classList.add('animate-pizza');
                        setTimeout(() => {
                            img.classList.remove('animate-pizza');
                        }, 1000);
                    }
                } else {
                    box.style.right = '-100%';
                }
            }
        });

        textBoxesRef.current.forEach((text, index) => {
            if (text) {
                text.classList.toggle('show', counter.current === index);
            }
        });
    };

    const goToNext = () => {
        const totalSlides = slidesRef.current.length;
        counter.current = (counter.current + 1) % totalSlides;
        slideImage();
    };

    const goToPrev = () => {
        const totalSlides = slidesRef.current.length;
        counter.current = (counter.current - 1 + totalSlides) % totalSlides;
        slideImage();
    };

    return (
        <div className="main">
            {/* Slides */}
            {[table, table, table].map((src, idx) => (
                <div className="slide-wrapper" key={idx}>
                    <img
                        src={src}
                        className="slide"
                        alt=""
                        ref={(el) => (slidesRef.current[idx] = el)}
                    />
                    <div className="gradient-overlay" />
                </div>
            ))}

            {/* Text per slide */}
            {texts.map((text, idx) => (
                <div
                    key={idx}
                    className="slide-text"
                    ref={(el) => (textBoxesRef.current[idx] = el)}
                >
                    <div className="text-top">{text.top}</div>
                    <div className="text-bottom">{text.bottom}</div>
                </div>
            ))}

            {/* Animated image boxes */}
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className="pizzaBox"
                    ref={(el) => (imageBoxesRef.current[idx] = el)}
                >
                    <img src={img} className="pizza" alt="" />
                </div>
            ))}

            {/* Manual nav buttons */}
            <button className="nav-btn left" onClick={goToPrev}>⟵</button>
            <button className="nav-btn right" onClick={goToNext}>⟶</button>
        </div>
    );
}

export default HomeMain;
