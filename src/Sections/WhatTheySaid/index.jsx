import React from 'react'
import * as Assets from './Assets'
import style from './WhatTheySaid.module.css'


/*

What they’ve said 

Ali Bravo 
“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” 

Anisha Li 
“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” 

Richard Watts 
“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” 

Shanai Gough 
“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”

*/

function WhatTheySay() {
  return (
    <section className='p-4 mb-24'>

      <div className='text-center mb-24'>
        <h6 className='font-bold text-5xl'>What they've said</h6>
      </div>

      <div className={style.comment_container}>
        <div className={style.comment_card}>
          <img src={Assets.AvatarAli} alt="Placeholder" />
          <div className={style.comment_card_bottom}>
            <h5>Ali Bravo</h5>
            <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” </p>
          </div>
        </div>

        <div className={style.comment_card}>
          <img src={Assets.AvatarAnisha} alt="Placeholder" />
          <div className={style.comment_card_bottom}>
            <h5>Anisha Li</h5>
            <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
          </div>
        </div>

        <div className={style.comment_card}>
          <img src={Assets.AvatarRichard} alt="Placeholder" />
          <div className={style.comment_card_bottom}>
            <h5>Richard Watts</h5>
            <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
          </div>
        </div>

        <div className={style.comment_card}>
          <img src={Assets.AvatarShanai} alt="Placeholder" />
          <div className={style.comment_card_bottom}>
            <h5>Shanai Gough</h5>
            <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
          </div>
        </div>
      </div>


      <div className='flex justify-center mt-4'>
        <button className={style.comment_section_button}>Get Started</button>
      </div>


    </section>
  )
}

export default WhatTheySay