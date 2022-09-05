import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { sendBlog } from '../api/api';

const BlogPostContext = createContext();

export const useBlogPost = () => useContext(BlogPostContext)

export const BlogPostProvider = ({ children }) => {

    const [blogTitle, setBlogTitle] = useState("Title")
    const [blogContent, setBlogContent] = useState("Content")
    const [blogUploadFile, setBlogUploadFile] = useState("UploadFile")
    
    const handleBlog = ({title,content,uploadFile}) => {
        sendBlog({title:title ,content:content,uploadFile:uploadFile}).then(
            response=>{
                console.log(response)
                setBlogTitle(title)
                setBlogContent(content)
                setBlogUploadFile(uploadFile)
        })
    }   

    

    return (
        <BlogPostContext.Provider value={{blogTitle,blogContent,blogUploadFile
            ,handleBlog
        }}>
            {children}
        </BlogPostContext.Provider>
    );
}
BlogPostProvider.propTypes = {
    children: PropTypes.node.isRequired
};