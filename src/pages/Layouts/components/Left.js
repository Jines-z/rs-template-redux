import React from 'react'
import SideMenu from '@/components/SideMenu'

const Left = () => {
    return (
        <div className='left'>
            <div className='logo'>
                <img src='https://jines-z.github.io/images/rs-admin-cli-white.png' />
            </div>
            <SideMenu />
        </div>
    )
}

export default Left
