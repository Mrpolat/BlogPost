import axios from "axios";

export const sendEmail = (emailTitle,emailContent) =>{
    console.log("burası Email api",emailContent,emailTitle)
    let sd = new FormData()
    sd.append('title', emailTitle)
    sd.append('content',emailContent)
 return axios({
    method: 'post',
    url: `yusufun vereceği URL`,
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
   url: `yusufun vereceği URL`,
   data:sd,
   headers: { "Content-Type": "multipart/form-data" },
 });
}