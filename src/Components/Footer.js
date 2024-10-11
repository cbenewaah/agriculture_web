import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-customGreen flex flex-col'>
            <div className='flex flex-row justify-between mx-5'>
                <a href='#logo'>
                    <img src='/Freshfield logo.svg' alt='Logo of FreshField' className='my-10' />
                </a>
                <div className='flex flex-row mx-9 my-12'>
                    <a href="https://www.twitter.com/"><FaTwitter className='border bg-customColor text-green-900 w-6 h-6 rounded-full mx-3' /></a>
                    <a href='https://www.facebook.com/'><FaFacebookF className='border bg-customColor text-green-900 w-6 h-6 rounded-full mx-2' /></a>
                    <a href='https://www.messenger.com/'><FaFacebookMessenger className='border bg-customColor text-green-900 w-6 h-6 rounded-full mx-2' /></a>
                    <a href='https://www.instagram.com/'><FaSquareInstagram className='border bg-customColor text-green-900 w-6 h-6 rounded-full mx-2' /></a>
                </div>
            </div>
            <div className='flex flex-row justify-between text-gray-300 mx-5'>
                <div className='flex flex-col'>
                    <ul>
                        <h2 className='text-2xl font-bold my-3'>Navigate</h2>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#our-story'>Our Story</a></li>
                        <li><a href='#our-harvest'>Our Harvest</a></li>
                        <li><a href='#benefits'>Benefits</a></li>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#contact-us'>Contact Us</a></li>
                        <li><a href='#privacy-policy'>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <ul>
                        <h2 className='text-2xl font-bold my-3'>Utility</h2>
                        <li><a href="/styleguide/get-started" class="">Get Started</a></li>
                        <li><a href="/styleguide/style-guide" class="">Styleduide</a></li>
                        <li><a href="/styleguide/licenses" class="">License</a></li>
                        <li><a href="/styleguide/changelog" class="">Changelog</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold my-3'>FreshField</h2>
                    <div>
                        <p>FreshField Farm, 1234</p>
                        <p>Harvest Lane, Countryside,</p>
                        <p>IL 54321, United States</p>
                    </div>
                    <p><a href="tel:+1000000000" class="my-2">+1 000 000 000</a></p>
                    <p><a href="mailto:help@freshfield.io" class="my-3">help@freshfield.io</a></p>
                </div>
                <div>
                    <img src='/veggies.png' className='text-gray-400' alt='vegetables' />
                </div>
            </div>
            <div className='flex flex-row justify-between mx-5'>
                <div className='text-white'>
                   Copyright ⓒ FreshField Webflow Template. Designed by 
                    <a href="https://www.ego-cms.com/the-store" class="mx-1 text-customColor">EGO</a>
                </div>
                <div className='flex flex-row'>
                <div><a href="https://webflow.com/templates/designers/ego-creative-innovations" className='text-orange-600 mx-8'>More Templates</a></div>
                <div className='flex flex-row'>
                    <p className='text-white'>Powered by</p>
                    <a href="https://webflow.com/" target="" className='mx-1 text-orange-600'>Webflow</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
