import React, { useState } from 'react'
import FoodListing from './FoodListing';
import RestarantListing from './RestarantListing';
import '../../Styles/Toogle.css'


export default function ToogleMode({goTo}) {
    const currentmode = goTo;
    const [mode , SetMode] = useState(currentmode)

    const ModeToRes = () => {
        SetMode('Reservation')
    }

    const ModeToOrder = () => {
        SetMode('Order')
    }

    if(mode === 'Order') {
        return(
            <div>
                <div className='toggleBTN'>
                    <div className='btn-holder'>
                        <button className='NonActiveMode' onClick={ModeToRes}>Reservation</button>
                    </div>
                    <div className='btn-holder'>
                        <button className='ActiveMode' onClick={ModeToOrder}>Order</button>
                    </div>
                </div>
                <FoodListing />
            </div>
        )
    }
    else {
        return(
            <div>
                <div className='toggleBTN'>
                    <div className='btn-holder'>
                        <button className='ActiveMode' onClick={ModeToRes}>Reservation</button>
                    </div>
                    <div className='btn-holder'>
                        <button className='NonActiveMode' onClick={ModeToOrder}>Order</button>
                    </div>
                </div>
                <RestarantListing />
            </div>
        )
    }
}
