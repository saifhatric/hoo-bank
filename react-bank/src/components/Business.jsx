import React from 'react'
import styles, { layout } from '../style';
import { features } from '../constants';
import Button from "./Button";


const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo} >
                <h2 className={styles.heading2} >
                    You do the business, <br className="sm:block hidden" /> we’ll handle
                    the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
                    With the right credit card, you can improve your financial life by
                    building credit, earning rewards and saving money. But with hundreds
                    of credit cards on the market.
                </p>
                <Button />
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <div key={feature.id} className={`flex flex-row p-6 rounded-[20px] 
                    ${index !== features.length - 1 ? "mb-5" : "mb-0"} feature-card`}>
                        <div className={`w-[60px] h-[60px] rounded-full ${styles.flexCenter} 
                        bg-dimBlue`} >
                            <img src={feature.icon} alt="icon" className='w-[50%] h-[50%] object-contain ' />
                        </div>
                        <div className='flex flex-1 flex-col ml-3'>
                            <h4 className='font-poppins font-semibold text-white text-[18px]
                            leading-[23px] mb-1'>
                                {feature.title}
                            </h4>
                            <p className='font-poppins font-normal text-dimWhite text-[18px]
                            leading-[24px] mb-1'>{feature.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default Business