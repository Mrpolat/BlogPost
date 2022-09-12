import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { sendEmail } from '../api/api';

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext)

export const EmailProvider = ({ children }) => {
    //bu statelerin hiç bir anlamı yok sadece ileri zamanlarda belki kullanabiliriz diye şuanlık tutuyorum.
    const [email, setEmail] = useState("email")
    const [emailContent, setEmailContent] = useState("Content")

    const handleEmail = ({ email, content }) => {
        sendEmail({ email: email, content: content }).then(
            response => {
                console.log(response)
                setEmail(email)
                setEmailContent(content)
            })
    }

    return (
        <EmailContext.Provider value={{
            email, emailContent,
            handleEmail
        }}>
            {children}
        </EmailContext.Provider>
    );
} 
EmailProvider.propTypes = {
    children: PropTypes.node.isRequired
};