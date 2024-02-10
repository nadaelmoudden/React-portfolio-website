import React from 'react';
import './hero.css';

export default function Hero() {
    return (
        <section className='hero flex'>
            <div className='left-section'>
                <div className='parent-avatar flex'>
                    <img src="./sec.png" className='avatar' alt="" />
                    <div className='icon-verified'></div>
                </div>
                <h1 className='title'>Fullstack Web Developer</h1>
                <p className='sub-title'>
                    I'm Nad El Mouuden, a passionate Fullstack Web Developer with experience in building web applications using various technologies such as React and Laravel.
                </p>
                <div className="all-icons flex">
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>
            <div className='right-section animation border'>
                cc
            </div>
        </section>
    )
}
