import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Header from "./header";

export default function Layout(props)
{


    const isMobile =(useMediaQuery('(max-width:600px)'));

    
    return( 
        <div id="container" style={{background:"rgb(244, 244, 244)",width:"100vw",height:"100vh",overflow:"auto"}}>
        <Header></Header>

            {
                // render header if only if page is home
            props.page=="HOME"?(<header style={styles.header}>
            <h1 color="#f6dfe2" style={{color:"white"}}>Veeraj Blogs</h1>
            <p color="#f6dfe2" style={{color:"white"}}>Join me on my journeys of exploring new things in life.</p>
            </header>):<></>
            }
        
        {
        // children  and aboutMe links container
        }
        <div style={{display:"flex",gap:"24px", alignContent:"center", flexDirection:isMobile?"column":"row", padding:isMobile?"0px":"20px"}}>
        
        {
        //children
        }

        <div style={{...styles.section,width:isMobile? "100vw":"60vw",backgroundColor:"rgb(255 239 239 / 39%)"}}>
          
                {props.children}
           
        </div>

        {
            //aboutme and links container
        }
        <div style={{width:isMobile? "100vw":"45vw",     display: "flex",flexDirection: "column",alignItems: "center", gap:"20px"}}>

        {
            //about me  
        }
        <div style={{...styles.section,backgroundColor:"rgb(255 239 239 / 39%)"}}>
                <h2  style={{color:"white",backgroundColor:"#828282",padding:0,margin:0,textAlign:"center", borderTopRightRadius:"8px",borderTopLeftRadius:"8px"}}>About Me</h2>
                <p style={{padding: "20px",margin: "10px 0",}}>

                I’m Veeraj, the passionate writer behind this space where ideas come to life. With a diverse background in  gaming and software devololpement, I’ve always been driven by a curiosity to explore new perspectives and share insights that matter. Through this blog, I aim to bring you thoughtful content on technologys ,places and Lifestyle, blending my expertise with a touch of creativity.
                </p>
        </div>
        
        {
            // links
        }
        <div style={{...styles.section,backgroundColor:"rgb(255 239 239 / 39%)"}}>

            <h2 style={{color:"white",backgroundColor:"#828282",padding:0,margin:0,textAlign:"center", borderTopRightRadius:"8px",borderTopLeftRadius:"8px"}}>Links</h2>
            <div style={{padding: "20px",margin: "10px 0",display:"flex",gap:"15px",justifyContent:"space-between",flexWrap:"wrap"}}>
              
              <div style={{    display: "flex",alignItems: "center",flexDirection: "column"}}>
                    <img width={"60px"} height={"40px"}  src="https://1.bp.blogspot.com/-zaoiLHspoKI/XeI_0uFAeCI/AAAAAAAAF38/CyHgdY8bdOQ7d979yOJ0voSIA8b5bAF2wCLcBGAsYHQ/s1600/Youtube-Icon-2000x2000.png" ></img>
                    <a href="https://www.youtube.com/@veeraj_gaming" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
  
              <div style={{    display: "flex",alignItems: "center",flexDirection: "column"}}> 
                    <img width={"60px"} height={"40px"}  src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" ></img>
                    <a href="none" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
  
              <div style={{    display: "flex",alignItems: "center",flexDirection: "column"}}>
                    <img width={"60px"} height={"40px"}  src="https://1000logos.net/wp-content/uploads/2017/06/Twitter-Log%D0%BE.png" ></img>
                    <a href="none" target="_blank" rel="noopener noreferrer">Twitter</a></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  const styles = {
    header: {
      textAlign: "center",
      padding: "50px 0",
      background: "rgb(241 237 237)",
      marginBottom: "20px",
      background:"url(https://images6.alphacoders.com/409/409996.jpg)"
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    section: {
      background: "#fff",
      
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width:"100%",
      
      textAlign: "left",
    },
}
