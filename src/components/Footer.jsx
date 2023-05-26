import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitch,
    FaTwitter
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div >
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
                <li className='py-1'>Marketing</li>
                <li className='py-1'>Analyitics</li>
                <li className='py-1'>Commerce</li>
                <li className='py-1'>Data</li>
                <li className='py-1'>Cloud</li>
            </ul>
        </div>
        <div >
            <h6 className='font-bold uppercase pt-2'>Suport</h6>
            <ul>
                <li className='py-1'>Pricing</li>
                <li className='py-1'>Documentaion</li>
                <li className='py-1'>Guides</li>
                <li className='py-1'>API status</li>
            </ul>
        </div>
        <div >
            <h6 className='font-bold uppercase pt-2'>Company</h6>
            <ul>
                <li className='py-1'>About</li>
                <li className='py-1'>Blog</li>
                <li className='py-1'>Jobs</li>
                <li className='py-1'>Press</li>
                <li className='py-1'>Partner</li>
                
            </ul>
        </div>
        
            <div>
            <h6 className='font-bold uppercase pt-2'>Legal</h6>
            <ul>
                <li className='py-1'>Claims</li>
                <li className='py-1'>Privacy</li>
                <li className='py-1'>Terms</li>
                <li className='py-1'>Policies</li>
                <li className='py-1'>Conditions</li>
                
            </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase '>Subscibe to our newsletter</p>
            <p className='py-4'>The latest news,articles, and resources, sent to your inbox</p>
            <form className='flex flex-col sm:flex-row'>
                <input className='w-full p-2 mr-4 rounded-md mb=4'  type='email' placeholder='Enter you email'/>
                <button className='p-2 mb-4'>Subscribe</button>
            </form>
        </div>
        </div>
        <div className='flex flex-col px-2 py-4 max-w-[1240px]  mx-auto  justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2022 Workflow,LLC ,all right reserved</p>
            <div className='flex justify-between  sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
                <FaTwitch />
            </div>
        </div>
    </div>
  )
}

export default Footer;