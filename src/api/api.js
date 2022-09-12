import axios from "axios";

export const sendEmail = (email,emailContent) =>{
    console.log("burası Email api",emailContent,email)
    let sd = new FormData()
    sd.append('title', email)
    sd.append('content',emailContent)
 return axios({
    method: 'post',
    url: ` URL`,
    data:sd,
    headers: { "Content-Type": "multipart/form-data" },
  });
 }
 
export const sendBlog = (title,content,uploadFile) =>{
   console.log("burası Blog api",title,content,uploadFile)
   let sd = new FormData()
   sd.append('title', title)
   sd.append('content',content)
   sd.append('uploadFile',uploadFile)
return axios({
   method: 'post',
   url: `URL`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },
 });
}
export const Login = (userID,password) =>{
   console.log("burası login api",userID,password)
   let sd = new FormData()
   sd.append('title', userID)
   sd.append('content',password)
return axios({
   method: 'post',
   url: ` URL`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },
 });
}