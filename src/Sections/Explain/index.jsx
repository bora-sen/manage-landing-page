import React from 'react'
import style from './Explain.module.css'

/*

TEXTS:

What’s different about Manage? 
Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.

01 Track company-wide progress 
See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.

02 Advanced built-in reports 
Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.

03 Everything you need in one place 
Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.

*/

function Explain() {
  return (
    <section className={style.explain_container}>
      <div className='md:my-auto'>
        <h3 className={style.explain_header}>What’s different about Manage?</h3>
        <p className={style.explain_disc}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>

      <div>
        <div className={style.explain_card}>
          <div className={style.explain_card_header}>
            <span>01</span>
            <h4>Track company-wide progress</h4>
          </div>
          <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>

        <div className={style.explain_card}>
          <div className={style.explain_card_header}>
            <span>02</span>
            <h4>Advanced built-in reports</h4>
          </div>
          <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>

        <div className={style.explain_card}>
          <div className={style.explain_card_header}>
            <span>03</span>
            <h4>Everything you need in one place</h4>
          </div>
          <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
      </div>
    </section>
  )
}

export default Explain