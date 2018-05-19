import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts" ;

class SimpleBarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        };
    }
 
    renderGraph(){
        console.log(this.props.cual)
        if(this.props.cual == 2){
            return(
                <BarChart width={800} height={300} data={this.props.grafica2}
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="cantidad" fill="#00C49F" />
                </BarChart>);
            
        }
        else{
            return(
                <BarChart width={450} height={300} data={this.props.grafica2}
                        margin={{top: 5, right: 20, left: 10, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="cantidad" fill="#FF8042" />
                </BarChart> );    
        }
    }

    render() {
        return(
            
        <div> {this.renderGraph()} </div>

    );
   }    
}

export default SimpleBarChart;