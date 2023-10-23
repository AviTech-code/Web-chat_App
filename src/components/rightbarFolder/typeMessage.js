import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addConv } from '../../store/features/sendingMessage';

function MessageTyping({ id }) {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        // reset input value when contact component changes
        setInput('');
    }, [id]);

    const getIdAndInput = (e) => {
        e.preventDefault();
        if (input === '') {
            alert('Please enter a message!');
            return;
        }
        let value = {
            id: id,
            input: input
        };
        dispatch(addConv(value));
        setInput('');
    };

    return (
        <div className="message-typing">
            <form onSubmit={getIdAndInput}>
                <input
                    placeholder='Type your message here'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className='sendBtn'>
                    <button type='submit'>SEND</button>
                </div>
            </form>
        </div>
    );
}

export default MessageTyping;
