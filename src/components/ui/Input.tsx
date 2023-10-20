/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'
import cn from 'classnames'

//rafc
type InputProps = {
    label?: string
    id?: string
    type?: HTMLInputTypeAttribute
    register?: UseFormRegister<any>
    error?: string
    placeholder?: string
    className?: string
    name?: string
    height?: boolean
}

export const Input = ({
    label,
    id,
    register,
    type = 'text',
    error,
    placeholder,
    className = '',
    name,
    height = true
}: InputProps) => {
    return (
        <div className={cn({ className }, { 'h-[80px]': height = true })}>
            {!!label && (
                <label className="text-white" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                className="mt-8 w-full text-white rounded-6 bg-[#333]"
                {...register?.(name)}
            />
            <div className='flex justify-end'>
                {!!error && <p className="text-red-500 text-14">{error}</p>}
            </div>

        </div>
    )
}
