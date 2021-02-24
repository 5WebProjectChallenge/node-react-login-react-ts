import React from "react";

import Input from "./index";

var value_ = undefined

export default {
    title:"Input",
    component:Input,
    args: {
        label:"Enter name",
        fs: "20px",
        label:"Button",
        margin:"10px",
        padding:"12px 24px",
        value:"value",
        handleOnChange:()=>undefined
    }
}


const Template = args => <Input {...args} />

export const PlainInput = Template.bind()
PlainInput.args = {
    label:null
}


export const LabelInput = Template.bind()
LabelInput.args = {
}