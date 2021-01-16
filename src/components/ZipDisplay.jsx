import { Component } from "react";

class ZipDisplay extends Component{
    render(){
        console.log("this is display")
        return <div>
            <h1>{this.props.head}</h1>
           
                <p>State: {this.props.abbrev}</p>
                <p>Population: {this.props.pop}</p>
                <p>Wages: {this.props.wage}</p>
        </div>
    }

}
export default ZipDisplay