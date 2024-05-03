import { useState } from 'react';
import { InputForm, TextArea, Button, LabelForm} from './index'
import { validateEmail } from '../../utils/helpers';

function Form() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [result, setResult] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        setErrorMessage('');
        if (target.name === 'email') {
            setEmail(target.value);
        } else if (target.name === 'text') {
            setName(target.value);
        } else if (target.name === 'message') {
            setMessage(target.value);
        }
    };
    
    const handleInputBlur = (e) => {
        const { target } = e;

        if( name === '' || email ==='' || message === '')
        {
            if(target.name === 'text' && name === ''){
                setErrorMessage('Name is invalid !');
            }
            else if(target.name === 'email' && (email ==='' || !validateEmail(email))) {
                setErrorMessage('Email is required !');
            }
            else if(target.name === 'message' && message === ''){
                setErrorMessage('Message is required !');
            }

            return;
        }
        else if(!validateEmail(email)) {
            setErrorMessage('Your Email is invalid !');
            return;
        } else {
            setErrorMessage('');
            return;
        }
    };

    const handleFormSubmit = () => {
        
    }

    return (
        <form className='space-y-3 mt-3 pl-6' onSubmit={handleFormSubmit }>
            <InputForm name="text" type="text" placeHolder="Name" value={name} onChange={handleInputChange} onBlur={handleInputBlur}/>
            <InputForm name="email" type="email" placeHolder="Email Address" value={email} onChange={handleInputChange} onBlur={handleInputBlur}/>
            <TextArea name="message" value={message} onChange={handleInputChange} onBlur={handleInputBlur}/>
            {errorMessage && (
                <LabelForm message={errorMessage} />
            )}
            <Button />
        </form>
    );
}

export default Form;