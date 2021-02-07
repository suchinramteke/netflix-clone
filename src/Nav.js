import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener('scroll', transitionNavBar) 


    }, [])

    return (
        <div className={`nav ${show &&  'nav__black'}`}>
            <div className="nav__content">
                <img className="nav__logo"
                    src="https://www.citypng.com/public/uploads/small/11594682142zfvmyyi7wtpxqdggweilgak0d0ys35ktrf9ssm6jyafxrmn3ipwkvghhm2ilbx4sckpnlditunervtidvw2xlww1hcpbrmi40hhs.png" alt="" />
                <img className="nav__avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />

            </div>

        </div>


    )
}

export default Nav
