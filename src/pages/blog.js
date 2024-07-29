import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Component/layout";

 export default function Blog()
 {
   

    const [blogData,setBlogData]=useState(useLocation().state)
     const [blogDesign,setBlogDesign]=useState([])

     async function MakeTags(description)
     {  var updateddescription=await description.replace(/<MAKELINK>(.*?)<\/MAKELINK>/g, (match, content) =>{ 
        var data=content.split(",")
        if (data.length === 2) { 
            return `<a href="${data[0]}">${data[1]}</a>`;
        } else {
            return "";
        }

     })
     updateddescription=await updateddescription.replace(/<MAKEIMG>(.*?)<\/MAKEIMG>/g, (match, content) =>{ 
        
            return `<br><div style="width:100%;display:flex;justify-content: center;"><img width="70%" src="${content}"></a></div></br>`
     })

     updateddescription = await updateddescription.replace(/<MAKEVIDEO>(.*?)<\/MAKEVIDEO>/g, (match, content) => { 
        if (content.includes('youtube.com/watch?v=')) {
            const videoId = new URL(content).searchParams.get('v');
            return `
                <div style="width:100%; display:flex; justify-content: center;">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
        }
        else{
            return `  <br><div style="width:100%; display:flex; justify-content: center;">
                                <video controls width="640" height="360">
                                    <source src="${content}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <br>`;
        }
    
});
       
       return updateddescription
     }

    useEffect(()=>{
        try{
            if(blogData)
            {
                sessionStorage.setItem('description', blogData.description);
                sessionStorage.setItem('title', blogData.title);
                sessionStorage.setItem('image',blogData.image)
                sessionStorage.setItem('date',blogData.date)

            }
            else{
                if(sessionStorage.get('title'))
                {
                
                    const description = sessionStorage.getItem('description');
                    const title = sessionStorage.getItem('title');
                    const image = sessionStorage.getItem('image');
                    const date = sessionStorage.getItem('date');
            
                    setBlogData( { description, title, image, date })
                }
                
            }
        }
        catch(e)
        {
            
        }
        

       
    },[])
    async function generateDesign()
    {
        try{
            var design=[]
            if(blogData)
                {
                
                var description = sessionStorage.getItem('description');
                const title = sessionStorage.getItem('title');
                const image = sessionStorage.getItem('image');
                const date = sessionStorage.getItem('date');
                description=await MakeTags(description)
                design.push(
                    <div style={{width:"100%"}}>
                    <h1 style={ {textAlign:"center"}}>{title}</h1>
                    <img  style={{ width:"100%",height:"300px"}} src={image}></img>
                    <div style={{width:"auto",padding:"15px"}}>
                    <p>{date}</p>
                    <p style={{textAlign:"start",wordWrap:"break-word",wordBreak:"break-word"}}>
                    <div dangerouslySetInnerHTML={{ __html: description }} />

                    </p>
                    </div>
            
                    </div>
                )
                setBlogDesign(design);
                }
            }
            catch(e)
            {

            }
    } 
    // gnerate blog
    useEffect(()=>{
   
        generateDesign();
    },[blogData])
    return(<Layout page="BLOG" children={blogDesign}></Layout>)
 }