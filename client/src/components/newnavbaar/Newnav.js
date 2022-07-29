import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./newnav.css";

const Newnav = () => {
    return (
        <>
        
        <div className='new_nav'>
        
            <div className="nav_data">
                <div className="left_data">
                    <p>National</p>
                    <p>Institute</p>
                    <p>of</p>
                    <p>Technology</p>
                    <p>Raipur</p>
                    <p>Student</p>
                    <p>Zone</p>
                    {/*<p>Today's deal</p>
                    <p>Amazon Pay</p>*/}
                </div>
                {/*<div className="right_data">
                    <img src="./nav.jpg" alt="navata" />
                </div>*/}
            </div>
            {/*<div className='new_nav_name'>NITRR Student Zone</div>*/}
        </div>
        </>
    )
}

export default Newnav
