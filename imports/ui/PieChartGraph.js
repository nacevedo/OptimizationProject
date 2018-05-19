import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {PieChart, Pie, Legend} from "recharts" ;

class PieChartGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        };
    }
 

    render() {
        return(
            
    <PieChart width={800} height={400}>
        <Pie startAngle={180} endAngle={0} data={this.props.grafica1} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
    </PieChart>

    );
   }    
}

export default PieChart;