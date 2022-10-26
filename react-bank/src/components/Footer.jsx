import React from 'react';
import styles, { layout } from '../style';
import { logo } from "../assets"
import { footerLinks } from '../constants';

const year = new Date();
const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`} >
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={logo} alt="hoobank"
                    className='w-[266px] h-[72px] object-contain ' />
                <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div className='flex w-full flex-[1.5] flex-wrap flex-row 
                justify-between md:mt-0 mt-10 '>
                {footerLinks.map((footerLinks) => (
                    <div key={footerLinks.id} className="flex flex-col ss:my-0 my-4 
                        min-w-[150px] ">
                        <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white '>
                            {footerLinks.title}
                        </h4>
                        <ul className='list-none mt-4'>
                            {footerLinks.links.map((link, index) => (
                                <li key={link.name}
                                    className={`${index !== footerLinks.length - 1 ? "mb-4" : "mb-0"} 
                                    font-poppins font-normal text-[16px]
                                    leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}
                                >
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h3 className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mb-2">
                Devloped By <span className='text-gradient'> Saif Benzamit</span>
            </h3>
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright &copy;{year.getFullYear()} HooBank. All Rights Reserved.
            </p>
        </div>
    </section>
)


export default Footer