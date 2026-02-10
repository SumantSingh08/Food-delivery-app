import React from 'react'

function Button({
    children,
    type,
    className,
    ...props
}) {
    return (
        <button className={className} type={type} {...props} >
            {children}
        </button>
    )
}

export default Button
