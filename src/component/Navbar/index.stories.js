import React from 'react'
import Navbar from '.'

export default {
    title:"Navbar",
    component:Navbar,
    args:{
        width:"100%",
        height:"50px",
        btnType:"primary"
    }
}

const  Template = args => <Navbar {...args} />

export const DarkNavBar = Template.bind({})
DarkNavBar.args = {
    bg:"green",
    color:"#fff",
    btnType:"disabled"
}

export const LightNavBar = Template.bind({})
LightNavBar.args = {
    bg:"grey",
    color:"#000",
    btnType:"primary"
}