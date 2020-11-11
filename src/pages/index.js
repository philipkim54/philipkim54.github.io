import React from 'react'

import Layout from '../components/layout'

import './style/index.less'
import headshot from '../../static/assets/headshot.jpg'
import facebook from '../../static/assets/f_logo_RGB-Blue_58.png'

const Home = (props) => (
  <Layout page='home'>
    <div className='home'>
      <div className='hero'>
        <div className='welcome-wrapper'>
          <div className='welcome'>Welcome</div>
          <div className='sub-welcome'>Your new home awaits!</div>
        </div>
      </div>

      <div className='main'>
        <div className='bio'>
          <div className='container'>
            <div className='headshot-wrapper'>
              <img className='headshot' src={headshot} alt='Phil Kim headshot' />
            </div>
            <div className='name'>Philip Kim</div>
            <div className='intro'>
              All real estate agents aren't built the same. Those who claim to provide home-buyers
              and sellers with professional, responsive and attentive real estate services are only
              doing the bare minimum. Want an agent who'll really listen to what you want in a home?
              Need an agent who knows how to effectively market your home so it sells? Need an agent
              to watch your back? Give me a call, let's see if we're a good fit for each other and
              go from there.
            </div>
          </div>
        </div>

        <div className='contact'>
          <div className='container'>
            <div className='contact-me'>Contact Me</div>

            <div className='contact-info'>
              <span className='contact-address'>
                Direct: <a href='tel:917-699-3666'>917.699.3666</a>
              </span>
              <span className='contact-address'>
                Office: <a href='tel:516-922-2878'>516.922.2878</a>
              </span>
              <span className='contact-address'>
                <a href='mailto:philk@nestseekers.com' target='_blank' rel='noreferrer'>
                  philk@nestseekers.com
                </a>
              </span>
            </div>

            <div className='social-media'>
              <a href='https://www.facebook.com/philkrealtor' target='_blank' rel='noreferrer'>
                <img className='facebook-logo' src={facebook} alt='Facebook' />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Areas placeholder */}

        {/* My Listings placeholder */}
      </div>
    </div>
  </Layout>
)

export default Home
