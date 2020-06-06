import React, { Component } from 'react'

export default class DemoComponent extends Component {
    render() {
        return (
            <div >
              Card-{this.props.color}  
            </div>
        )
    }
}
