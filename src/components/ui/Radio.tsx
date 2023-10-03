import { CheckboxRef, Radio as RadioA, RadioGroupProps, RadioProps as RadioPropsA } from 'antd'
import { RadioButtonProps } from 'antd/es/radio/radioButton'
import React from 'react'
type RaidoObject = {
    (props: RadioPropsA): JSX.Element
    Group: React.MemoExoticComponent<React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>>
    Button: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<CheckboxRef>>
}
export const Radio:RaidoObject = (props) => {
    return (
        <RadioA {...props}/>
    )
}

Radio.Group = RadioA.Group
Radio.Button = RadioA.Button