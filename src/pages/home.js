import React, {useState} from 'react'
import {isEmpty} from 'lodash'
import {validate as validateEmail} from 'isemail'
import * as validatePhone from 'phone'

import Layout from '../components/layout'

import headshot from '../../static/assets/headshot.jpg'
import facebook from '../../static/assets/f_logo_RGB-Blue_58.png'
import cell_city from '../../static/assets/cell_phone_city.png'

export default (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  const onClickSend = (e) => {
    e.preventDefault()
    let errorCount = 0
    if (isEmpty(name)) {
      errorCount++
    }
    console.log('after name:', errorCount)
    if (isEmpty(phone) || !validatePhone(phone, 'USA')) {
      errorCount++
    }
    if (isEmpty(email) || !validateEmail(email)) {
      errorCount++
    }
    if (errorCount > 1) {
      setError(true)
      return
    }
    fetch('/submit-contact', {
      method: 'POST',
      body: JSON.stringify({name, email, phone}),
      headers: {'Content-Type': 'application/json'},
    }).then(() => {
      setError(false)
    })
  }

  return (
    <Layout page='home'>
      <div className='home'>
        <div className='hero flex flex-col justify-center items-center bg-home-hero bg-center bg-cover h-hero-sm md:h-hero-md lg:h-hero-lg'>
          <div className='font-montserrat font-bold text-white text-center max-w-lg'>
            <div className='text-4xl md:text-6xl lg:text-7xl my-2.5 md:my-3.5'>Welcome</div>
            <div className='text-md md:text-lg lg:text-xl my-3.5 md:my-5'>
              Your new home awaits!
            </div>
          </div>
        </div>

        <div className='mt-12 md:mt-24 mb-0'>
          <div className='bio mx-9 md:mx-16'>
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
                and sellers with professional, responsive and attentive real estate services are
                only doing the bare minimum. Want an agent who'll really listen to what you want in
                a home? Need an agent who knows how to effectively market your home so it sells?
                Need an agent to watch your back? Give me a call, let's see if we're a good fit for
                each other and go from there.
              </div>
            </div>
          </div>

          <div className='contact py-6 mx-9 md:mx-16'>
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

          <div className='sign-up flex pt-6'>
            <div className='w-1/2 bg-gray-200'>
              <img className='w-full' src={cell_city} alt='Phone Illustration' />
            </div>
            <div className='w-1/2 flex flex-col items-center justify-around bg-blue-700 py-8 px-6'>
              <div className='sign-up-headers'>
                <div className='font-montserrat text-3xl text-center text-white mb-2'>
                  Sign up for my newsletter
                </div>
                <div className='font-quicksand text-lg text-center text-white'>
                  Get weekly updates about new homes and market activities
                </div>
              </div>
              <div className='name w-11/12'>
                <input
                  type='text'
                  value={name}
                  placeholder='Your Name'
                  className='w-full h-14 py-1 px-4'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='email w-11/12'>
                <input
                  type='text'
                  value={email}
                  placeholder='Your Email'
                  className='w-full h-14 py-1 px-4'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='phone w-11/12'>
                <input
                  type='text'
                  value={phone}
                  placeholder='Your Phone Number'
                  className='w-full h-14 py-1 px-4'
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {error && (
                <div className='font-lora text-red-500 text-center'>
                  Please enter your name and your email and/or your phone number.
                </div>
              )}
              <div
                className='w-36 mt-3 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 cursor-pointer'
                role='button'
                tabIndex={0}
                onClick={onClickSend}>
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
