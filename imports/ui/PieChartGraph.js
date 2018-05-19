import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import { PieChart, Pie, Sector, Cell } from "recharts" ;

class PieChartGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            COLORS: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
        };
    }
 

    render() {
        return(
            
     <PieChart width={450} height={200} onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.props.grafica1} 
          cx={200} 
          cy={120} 
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80} 
          fill="#8884d8"
          paddingAngle={5}
        >
            {
          this.props.grafica1.map((entry, index) => <Cell fill={this.state.COLORS[index % this.state.COLORS.length]}></Cell>)
          }
        </Pie>
      </PieChart>

    );
   }    
}

export default PieChartGraph;