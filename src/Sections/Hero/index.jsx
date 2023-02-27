import React from 'react'
import * as Assets from './Assets'
import style from './Hero.module.css'

function Hero() {
  return (
    <section className='flex items-center mb-24'>
      <div className={style.hero_container}>
        <div className={style.hero_left}>
          <h2>Bring everyone together to build better products.</h2>
          <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger teams goals in view.</p>
          <button className=''>Get Started</button>
        </div>
        <div className={style.hero_right}>
          <img src={Assets.HeroIMG} className='mx-auto' alt="Hero" />
        </div>
      </div>
    </section>
  )
}

export default Hero