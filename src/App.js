import React, { Component } from 'react';
import Video from './Components/Video/component';
import Dropit from './Components/Droppable/component';
import './main.css';

class App extends Component {
    constructor(){
        super();
        this.state={
            droppable:{
                ready:true,
                options:{
                    supportedType: ['video/mp4','video/ogg','video/webm']
                }
            },
            video:{
                src:"",
                moment:3000
            }
        }
    }
    //Get src from droppable comp and swtich the view
    setVideoSrc(src){
        this.setState(
            {
                video: {
                    src:src,
                },
                droppable:{
                    ready:false
                }
        })
    }
    render() {
        let videoElement,
            videoDroppable;
        if(this.state.video.src){
            videoElement = <Video src={this.state.video.src}/>
        }
        if(this.state.droppable.ready){
            videoDroppable = <Dropit options={this.state.droppable.options} onSelect={this.setVideoSrc.bind(this)}/>
        }
        return (
            <div className="App">
                <div className="header">
                    DraDroVi
                    
                </div>
                {videoDroppable}
                {videoElement}
            </div>
        );
    }
}
export default App;
