import styled from 'styled-components';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { useFormspark } from "@formspark/use-formspark";
import { Spring, animated } from 'react-spring/renderprops';

const ContactContainer = styled.div`
display: flex;
justify-content: center; 
align-itemes: center;
color: white;
flex-direction: column;
`;

const Title = styled.h2`
color: #C36D3C; 
text-align: center;
margin-top: 50px;
margin-bottom: 50px;
font-size: 40px;
`;

const FormContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center; 
align-itemes: center; 
flex-flow: column-wrap;
`;

const ThankYouContainer = styled.div`
display: block;
margin: 0 auto;
`;

const ThankYouText = styled.h2`
display: block;
color: #C36D3C;  
`;
const ClearButton = styled.button`
display: block;
margin: 0 auto;
font-size: 14px;
Padding: 8px 12px;
text-decoration: none;
background-color: #C36D3C;  
border: none;
cursor: pointer; 
color: white;
text-transform: uppercase;
border-radius: 4px;
outline: none;

&:hover {
  text-decoration: underline;
}
`;


//Function after form been submitted
function ResetButton(props) {
    return (
        <ClearButton onClick={props.handleOnClick}>Back</ClearButton>
    )
}

//Thank you message after form been submitted
function ThankYou() {
    return (
        <ThankYouContainer>
            <ThankYouText>Thank you! I'll be in touch</ThankYouText>
        </ThankYouContainer>
    )
}


const FORMSPARK_FORM_ID = "kQlOMWv9";

const Contact = () => {
    const [name, setName] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showThanks, setShowThanks] = useState(false);
    const [button, setButton] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [showEmailErrorBorder, setShowEmailErrorBorder] = useState(false);
    const [showTextErrorBorder, setShowTextErrorBorder] = useState(false);


    const [formSpark] = useFormspark({
        formId: FORMSPARK_FORM_ID,
    });

    //Form validation
    const [formerror, setFormError] = useState('');

    const getError = () => {
        if (name === null && email === null) {
            setFormError("Fill in the empty fields");
        } else if (name === null || name === '') {
            setFormError("Write your name");
            setShowTextErrorBorder(true);
            if (email !== null || email !== '') {
                setShowEmailErrorBorder(false);
            }
        } else if (email === null || email === '') {
            setFormError("Type your email");
            setShowEmailErrorBorder(true);
            if (name !== null || name !== '') {
                setShowTextErrorBorder(false);
            }
        } else {
            setFormError('');
            setShowEmailErrorBorder(false);
            setShowTextErrorBorder(false);
            return false;
        }

        return true;
    };

    //Form handle on submit function 
    const handleSubmit = (e) => {
        e.preventDefault();

        formSpark({ name, email, message });

        if (!getError()) {
            setName('');
            setShowForm(false);
            setShowThanks(true);
            setButton(true);
        }
    }

    //Form handle on clicked button
    const handleOnClick = e => {
        e.preventDefault();
        setShowForm(true);
        setShowThanks(false);
        setButton(false);
        setMessage('');
    }

    return (
        <ContactContainer>

            <Spring
                from={{ opacity: 0, marginTop: -500 }}
                to={{ opacity: 1, marginTop: 0 }}
                config={{ delay: 50, duration: 400 }}>
                {props => (
                    <animated.div style={props}>
                        <Title>Contact</Title>
                    </animated.div>
                )}
            </Spring>


            <FormContainer>
                {showForm ? <ContactForm
                    name={name}
                    setName={setName}
                    showTextErrorBorder={showTextErrorBorder}
                    email={email}
                    setEmail={setEmail}
                    showEmailErrorBorder={showEmailErrorBorder}
                    message={message}
                    setMessage={setMessage}
                    handleSubmit={handleSubmit}
                    formerror={formerror}
                    setFormError={setFormError}
                /> : null}
                {showThanks ? <ThankYou /> : null} <br /><br /></FormContainer>
            {button ? <ResetButton handleOnClick={handleOnClick} /> : null}

        </ContactContainer >
    );
}

export default Contact;