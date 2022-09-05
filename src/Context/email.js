import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { sendEmail } from '../api/api';

const EmailContext = createContext();

export const useEmail = () => useContext(EmailContext)

export const EmailProvider = ({ children }) => {
    //bu statelerin hiç bir anlamı yok sadece ileri zamanlarda belki kullanabiliriz diye şuanlık tutuyorum.
    const [emailTitle, setEmailTitle] = useState("Title")
    const [emailContent, setEmailContent] = useState("Content")
    
    const handleEmail = ({title,content}) => {
        sendEmail({title:title ,content:content}).then(
            response=>{
                console.log(response)
                setEmailTitle(title)
                setEmailContent(content)
        })
    }   

    return (
        <EmailContext.Provider value={{emailTitle,emailContent,
            handleEmail
        }}>
            {children}
        </EmailContext.Provider>
    );
}
EmailProvider.propTypes = {
    children: PropTypes.node.isRequired
};