import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';

const BlogPostContext = createContext();

export const useBlogPost = () => useContext(BlogPostContext)

export const BlogPostProvider = ({ children }) => {

    const [selectedID, setSelectedID] = useState("sa");//router yapısında ki urlden gelen id yi setler   
    console.log(selectedID)
    const HandleBlogPostID = (e) => setSelectedID(e);

    return (
        <BlogPostContext.Provider value={{
            selectedID,
            setHandleBlogPostID: HandleBlogPostID,
        }}>
            {children}
        </BlogPostContext.Provider>
    );
}
BlogPostProvider.propTypes = {
    children: PropTypes.node.isRequired
};