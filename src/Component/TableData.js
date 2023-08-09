import React from 'react'
import TableHeader from './TableHeader'

const TableData = ({ editIndex, handleInputChange, inputvalue, editInput, showInput, submitValue, inputSubmit, button }) => {

    return (
        <div>

            <table className="table-container">
                <TableHeader />

                {button && (<>
                    {submitValue.map((item, index) => (
                        <tbody key={index}>
                            <tr>

                                <>
                                    <td>{editIndex === index ? <input type='text' name='name' value={inputvalue.name} className='input-box' onChange={handleInputChange} /> : item.name}</td>
                                    <td>{editIndex === index ? <input type='text' name='class' value={inputvalue.class} className='input-box' onChange={handleInputChange} /> : item.class}</td>
                                    <td>{editIndex === index ? <input type='number' name='rollno' value={inputvalue.rollno} className='input-box' onChange={handleInputChange} /> : item.rollno}</td>
                                    <td>
                                        {editIndex === index ? (
                                            <button onClick={inputSubmit}>{editInput === -1 ? 'Save' : 'Update'}</button>
                                        ) : (
                                            <button onClick={() => editInput(index)}>Edit</button>
                                        )}
                                    </td>
                                </>

                            </tr>
                        </tbody>
                    ))}
                    {showInput && editIndex === -1 && (
                        <tr>
                            <td>
                                <input type='text' name='name' value={inputvalue.name} className='input-box' onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type='text' name='class' value={inputvalue.class} className='input-box' onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type='number' name='rollno' value={inputvalue.rollno} className='input-box' onChange={handleInputChange} />
                            </td>
                            <td>
                                <button onClick={inputSubmit}>Save</button>
                            </td>
                        </tr>
                    )}
                </>)}
            </table>

        </div>
    )
}

export default TableData