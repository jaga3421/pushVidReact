import React, { Component } from 'react';
import videojs from 'video.js';
import jQuery from 'jquery';

import './style.css';

class Video extends Component{

    hookEvents(elem,player){
        jQuery('.vjs-big-play-button').one('click',()=>{
            console.log(1);
            let duration = player.duration();
            //Brothers and Sisters of JS, please forgive me
            let threshold,currentSeek,analyticsObj;
            window.threshold = [25,50,75,100];
            window.currentSeek = 0;
            window.analyticsObj = [];
            window.player = player;

            let analytics = function(){
                let duration = player.duration(),
                    currentTime=player.currentTime(),
                    percentage = Math.round(currentTime/duration*100);
                //console.log(percentage);
                if(percentage >= 100 && window.currentSeek<4){
                    clearInterval(analytics);
                    window.analyticsObj.push(Math.round(player.currentTime()));
                    window.currentSeek++;
                    console.log(window.analyticsObj)
                    jQuery('.result span').show().html(window.analyticsObj.toString())
                }
                else {
                    if(percentage >= window.threshold[window.currentSeek] && window.currentSeek <4){
                        window.analyticsObj.push(Math.round(player.currentTime()));
                        window.currentSeek++;
                        console.log(window.analyticsObj);
                        jQuery('.result span').show().html(window.analyticsObj.toString())
                    }
                }
            };
            setInterval(analytics, 1000);

        })

    }
    componentDidMount() {
        let elem = document.getElementById('dropVid');
        let player = videojs(elem);
        this.hookEvents(elem,player);
    }
    render() {
        return (
            <div className="Video">
                <video id="dropVid" className="video-js" controls preload="auto" data-setup="{}">
                    <source src={this.props.src} type='video/mp4'/>
                </video>
                <div className="result">
                    25%,50%,75%,100% reached in <span></span> seconds respectively
                </div>
            </div>
        );
    }

}


export default Video;
