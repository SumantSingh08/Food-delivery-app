import React, {useId, forwardRef} from 'react'

function Input({
    label,
    type = "text",
    placeholder = "",
    className,
    ...props
}, ref)
{
    const id = useId()
    return (
        <div>
            {label && <label className='font-semibold font-sans' >
            {label}
        </label>}
        <input ref={ref} id={id} type={type} placeholder={placeholder} className={className} {...props}/>
        </div>
    )
}

export default forwardRef(Input)
