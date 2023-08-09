import React from 'react'
import { headerData } from './Constant'
import '../App.css'

const TableHeader = () => {
    return (
        <>
            <thead>
                <tr>
                    {headerData.map((item, index) => (
                        <th className='size' key={index}>{item}</th>
                    ))}

                </tr>
            </thead>
        </>
    )
}

export default TableHeader