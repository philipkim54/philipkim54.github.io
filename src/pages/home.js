import React from 'react'

import Layout from '../components/layout'

import headshot from '../../static/assets/headshot.jpg'
import facebook from '../../static/assets/f_logo_RGB-Blue_58.png'

const Home = (props) => (
  <Layout page='home'>
    <div className='home'>
      <div className='hero flex flex-col justify-center items-center bg-home-hero bg-center bg-cover h-hero-sm md:h-hero-md lg:h-hero-lg'>
        <div className='font-montserrat font-bold text-white text-center max-w-lg'>
          <div className='text-4xl md:text-6xl lg:text-7xl my-2.5 md:my-3.5'>Welcome</div>
          <div className='text-md md:text-lg lg:text-xl my-3.5 md:my-5'>Your new home awaits!</div>
        </div>
      </div>

      <div className='mt-12 md:mt-24 mx-9 md:mx-16 mb-0'>
        <div className='bio'>
          <div className='flex flex-col items-center'>
            <div>
              <img
                className='w-40 md:w-56 lg:w-full rounded-3xl'
                src={headshot}
                alt='Phil Kim headshot'
              />
            </div>
            <div className='my-5 md:my-8 text-2xl md:text-3xl lg:text-4xl uppercase font-roboto-slab'>
              Philip Kim
            </div>
            <div className='intro font-quicksand font-light text-sm md:text-xl lg:text-2xl text-center md:text-left w-full md:w-3/4 lg:w-3/5 leading-7 md:leading-9 lg:leading-10'>
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
          <div className='flex flex-col items-center'>
            <div className='mt-6 md:mt-12 mr-0 mb-3 md:mb-9 text-lg md:text-2xl font-roboto-slab uppercase'>
              Contact Me
            </div>

            <div className='flex flex-col md:flex-row justify-around text-center md:text-left font-quicksand mb-5 md:mb-6 w-3/5 md: w-full'>
              <span className='text-sm md:text-xl mb-1.5 md:mb-0'>
                Direct:{' '}
                <a className='text-blue-700' href='tel:917-699-3666'>
                  917.699.3666
                </a>
              </span>
              <span className='text-sm md:text-xl mb-1.5 md:mb-0'>
                Office:{' '}
                <a className='text-blue-700' href='tel:516-922-2878'>
                  516.922.2878
                </a>
              </span>
              <span className='text-sm md:text-xl mb-1.5 md:mb-0'>
                <a
                  className='text-blue-700'
                  href='mailto:philk@nestseekers.com'
                  target='_blank'
                  rel='noreferrer'>
                  philk@nestseekers.com
                </a>
              </span>
            </div>

            <div>
              <a href='https://www.facebook.com/philkrealtor' target='_blank' rel='noreferrer'>
                <img className='w-8 md:w-10' src={facebook} alt='Facebook' />
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
