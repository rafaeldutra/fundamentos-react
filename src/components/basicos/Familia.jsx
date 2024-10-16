import { type } from '@testing-library/user-event/dist/type';
import React, { cloneElement } from 'react'

export default function (props) {
    
    return (
        <div>
            {
                props.children.map( (child, i) => {
                    return cloneElement(child, {...props, key: i});
                })
            }
        </div>
    )
}