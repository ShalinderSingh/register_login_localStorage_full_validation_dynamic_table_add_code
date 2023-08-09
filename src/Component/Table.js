import React, { useState } from 'react'
import '../App.css'
import InputAddBtn from './InputAddBtn'
import TableData from './TableData'

const Table = () => {
    const [inputvalue, setInputValue] = useState({
        name: '',
        class: '',
        rollno: ''
    })
    const [submitValue, setSubmitValue] = useState([])
    const [showInput, setShowInput] = useState(true);
    const [error, setError] = useState('');
    const [editIndex, setEditIndex] = useState(-1);
    const [button, seButton] = useState(false)

    const handleInputChange = (e) => {
        setInputValue({ ...inputvalue, [e.target.name]: e.target.value })
    }
    const inputSubmit = () => {
        if (inputvalue.name.trim() === '' || inputvalue.class.trim() === '' || inputvalue.rollno.trim() === '') {
            setError('Please fill in all fields');
            return;
        }

        if (editIndex === -1) {
            setSubmitValue([...submitValue, inputvalue]);
        } else {
            const updatedSubmitValue = [...submitValue];
            updatedSubmitValue[editIndex] = inputvalue;
            setSubmitValue(updatedSubmitValue);
            setEditIndex(-1);

        }

        setInputValue({

            name: '',
            class: '',
            rollno: ''
        })
        setShowInput(false);
        setError('');
    }

    const editInput = (index) => {
        setInputValue(submitValue[index]);
        setEditIndex(index);
        setShowInput(!showInput);
        setError('');

    };
    const showInputFields = () => {
        setInputValue({ ...inputvalue, name: '', class: '', rollno: '' });
        setShowInput(true);
        setError('');
        seButton(true)
    }


    return (
        <div>
            <h1>Table</h1>
            <InputAddBtn showInputFields={showInputFields} />
            {/* <table className="table-container">

                <thead>
                    <tr>
                        <th className='size'>Name</th>
                        <th className='size'>Class</th>
                        <th className='size'>RollNo.</th>
                        <th className='action'>Action</th>
                    </tr>
                </thead>
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
            </table> */}
            <TableData editIndex={editIndex} handleInputChange={handleInputChange}
                inputvalue={inputvalue} editInput={editInput} showInput={showInput}
                submitValue={submitValue} inputSubmit={inputSubmit} button={button} />

            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Table