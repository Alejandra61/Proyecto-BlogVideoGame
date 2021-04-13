import React from "react";
import ReactPlayer from "react-player"

const VideoHeader = () => {
    return (
        <>        
        <div className="content-video" style={{width:'100%', height:'70%'}}>          
            <ReactPlayer
                /* para poder utilizar este paquete hay que instalarlo...npm install react-player --save 
                url="https://www.youtube.com/watch?v=W0qKcvE1ZJ4"
                url={require('../assets/img/video-2.mp4')}*/
                className="video"
                width="100%"              
                height="70%"
                overflow="50px"
                playing
                muted
                loop
            />
        </div>           
        </>
        
    );
};
export default VideoHeader;
/*import React from "react";
<iframe src="//www.youtube.com/embed/BeGgvQIAI9o?rel=0" height="315" width="560" allowfullscreen=" frameborder="0"></iframe>

const VideoHeader = () => {
    return (
        <>
            <div className="header-video">        
                <video src="../assets/img/video-1.mp4" autoPlay loop  />
            </div> 
        </>
        
    );
};
export default VideoHeader;
import React, { Component } from 'react';

 
class VideoHeader extends Component {
 
  render() {
 
    // Datos del Video
 
    const item = [
      {
        id: 1,
        video: 'https://drive.google.com/drive/u/1/my-drive',
        formato: 'video/mp4',
      }
    ];
 
    return (
 
      item.map(item => {
 
        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id }  
 
        return  <div key={ item.id }>
                  <video width='100%' controls autoPlay loop>
                    <source src={ item.video} type={ item.formato }/>
                  </video>
                </div>
       
 
      })
 
    )
    
 
  }
 
};
 
export default VideoHeader;*/