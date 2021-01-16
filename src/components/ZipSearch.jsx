import {Component} from "react";

import ZipDisplay from './ZipDisplay'
class ZipSearch extends Component{
    constructor(props){
            super(props)
            this.state={
                display:false,
                cities:[]
            }
    }
    search=(event)=>{
        let link="http://ctp-zip-api.herokuapp.com/zip/"+event.target.value
        fetch(link)
        .then((response)=>response.json())
       .then((response) => {
        this.setState({cities:response})
        console.log(this.state.cities)
     })
     .catch((error) => console.error("No result"));
      
    }
    toggleDisplay=()=>{
        this.setState({display:true})
    }
    render(){
            return <div>
                <div style={{backgroundColor:"black", color:"white", height:250}}><h1 style={{paddingTop:100}}>Zip Search</h1></div>
                <br/>
                <br/>
                <label for="search">Zip Search</label>
                <input type="text" name="search" onChange={this.search}/>
                <br/>
                <br/>
            {this.state.cities.map((city)=>
            <ZipDisplay head={city.LocationText} abbrev={city.State} pop={city.EstimatedPopulation} wage={city.TotalWages}/>)
    }
            </div>
        }
    }
export default ZipSearch