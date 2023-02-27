import React from 'react'
import style from './Footer.module.css'
import * as SocialIcons from './Assets'
import {ManageLogoWhite} from '../Header/Assets'

function Footer() {
  return (
    <>
    <footer>
      <div className={style.footer_container}>
        <div className={style.footer_left}>
          <img src={ManageLogoWhite} alt="Placeholder for manage logo" />
          <ul>
            <li><a href="/"><img src={SocialIcons.Facebook} alt="Facebook Icon Placeholder"/></a></li>
            <li><a href="/"><img src={SocialIcons.Youtube} alt="Youtube Icon Placeholder"/></a></li>
            <li><a href="/"><img src={SocialIcons.Twitter} alt="Twitter Icon Placeholder"/></a></li>
            <li><a href="/"><img src={SocialIcons.Pinterest} alt="Pinterest Icon Placeholder"/></a></li>
            <li><a href="/"><img src={SocialIcons.Instagram} alt="Instagram Icon Placeholder"/></a></li>
          </ul>
        </div>
        <div className={style.footer_center}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
          <ul>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/">Privacy Policy</a></li>
          </ul>
        </div>

        <div className={style.footer_right}>
          <div className={style.footer_inbox}>
            <input type="text" placeholder='Updates in your inbox...' />
            <button>GO</button>
          </div>
        </div>
      </div>
    </footer>
    <section className='text-dark-grey-blue text-center text-xs bg-darker-blue'>
      Copyright 2023 | <a href='https://github.com/bora-sen'>github.com/bora-sen</a>
    </section>
    </>
  )
}

export default Footer