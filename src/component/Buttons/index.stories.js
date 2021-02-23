import React from 'react'

import Button from './index'

export default {
    title: 'Button',
    component: Button,
    args: {
        label: "Button",
        fs: "20px",
        label:"Button",
        margin:"10px",
        padding:"12px 24px"
    }
}



// Other way of defining compnonents usefull to share coman args 
const Template = args => <Button {...args}  />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
    type: "primary",

}

export const ButtonDisable = Template.bind({})
ButtonDisable.args = {
    type: "disable"
}
