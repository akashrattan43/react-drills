import React, {Component} from 'react'

export default class Image extends Component {
    render (){
        return (
            <div>
            <img src = {this.props.url}/>
            <div>ERROR 404</div>
            </div>
        )
    }
}