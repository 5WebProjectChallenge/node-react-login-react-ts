import React from 'react'
import JumboContainer from '.'
import CustomButton from '../Buttons'

export default {
    title:"JumboContainer",
    component:JumboContainer,
    args:{
        fs:"20px",
        padding:"10px",
        width:"80%",
        height:"30%",
        children:<CustomButton label="Button" />
    }
}

const Template = args => <JumboContainer {...args} />

export const JumboLight = Template.bind({})
JumboContainer.args = {
    bg:"grey",
    color:"#000"
}

export const JumboDark = Template.bind({})
JumboDark.args = {
    bg:"green",
    color:"#000",
    children:<CustomButton label="Button" type="diabled"/>
}