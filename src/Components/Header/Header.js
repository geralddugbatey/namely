import React from 'react'
import {Section, Inside, Bag,Tabs,In } from './headerelements'
import './header.css'
const Header = () => {
    return (
        <Section>
            <Inside>
                <h1 className="h1">namely</h1>
                <Bag/>
            </Inside>
            <Tabs>
                <In font='#fff' color='black'>
                    <p className="p1" >Account</p>
                </In>
                <In font='black' color='#fff'>
                    <p className="p1">Wishlist</p>

                </In>
                <In font='#fff' color='black'>
                    <p className="p1">Cart</p>

                </In>

            </Tabs>
        </Section>
    )
}

export default Header
