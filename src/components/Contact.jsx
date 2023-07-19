import React, {useState, useRef} from 'react';
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser'

import {EarthCanvas} from './canvas';
import {slideIn} from "../utils/motion.js";
import {styles} from "../styles.js";
import {SectionWrapper} from '../hoc'
import {github, telegram} from "../assets/index.js";

//NeDuuzy0oBI5QcgwG
// template_sujpgoa
// service_209mkv1

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email:'',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const {target} = event;
    const {name, value} = target;

    setForm({
      ...form,
      [name]:value}
    )};

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
        'service_209mkv1',
        'template_sujpgoa',
        {
          from_name:form.name,
          to_name: 'Rex',
          from_email :form.email,
          to_email : 'rextambua1@gmai.com',
          message: form.message
        },
        'NeDuuzy0oBI5QcgwG'
        ).then(()=>{
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible');
             setForm({
                    name: '',
                    email:'',
                    message: ''
                  })
        },
        (error) =>
    {
      setLoading(false);
      console.log(error)

      alert('Something went wrong.')
    })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-non border-none font-medium'
          />
        </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-non border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
                row='7'
                name='message'
                onChange={handleChange}
                value={form.message}
                placeholder="What do you want to say"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-non border-none font-medium'
            />
          </label>
            <div className='flex gap-10'>
          <button
              type='submit'
              className='bg-tertiary py-3 px-8 outlined-non w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
            <img onClick={() => window.open('https://github.com/rextambua', '_blank')}
                 src={github}
                 alt='github'
                 className='cursor-pointer black-gradient w-10 rounded-full w-1/2 h1/2 object-contain'
            />
                <img onClick={() => window.open('https://t.me/Rexovich', '_blank')}
                     src={telegram}
                     alt='github'
                     className='cursor-pointer w-11 rounded-full object-contain'
                />
            </div>
        </form>
      </motion.div>
      <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')