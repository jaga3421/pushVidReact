import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './style.css';

class Droppable extends Component {


    onDrop(files){
        let fileType = files[0].type;
        if(this.props.options.supportedType.indexOf(fileType) > -1){
            let url = URL.createObjectURL(files[0]);
            this.props.onSelect(url);
        }
        else {
            alert('invalid file')
        }

    }
    render() {
        return (
            <div className="droppable">
                <Dropzone onDrop={this.onDrop.bind(this)}>
                    <div>
                        Drag and drop your video file
                    </div>
                </Dropzone>
            </div>
        );
    }

}
export default Droppable;
