import React from 'react'
import styles, { layout } from '../style';
import { clients } from '../constants';

const Clients = () => (

    <section className={`${styles.flexCenter} my-4 flex `}>
        <div className={`${styles.flexCenter} flex-wrap w-full flex`} >
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter}
                min-w-[190px]   `} >
                    <img src={client.logo} alt="client"
                        className='my-[20px] w-[140px] sm:w-[192px]  object-contain Hover  flex' />
                </div>
            ))}
        </div>
    </section>


)
export default Clients;