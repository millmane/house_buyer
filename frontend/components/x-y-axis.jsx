import React  from 'react';
import Axis   from './axis';
import d3 from 'd3'

export default (props) => {
  const xSettings = {
    translate: `translate(0, ${props.height - props.padding})`,
    scale: props.xScale,
    orient: 'bottom',
    // ticks: props.width / 150,
    ticks: 20,
    text: "xaxis",
    className: "x axis"
  };

  const yLabel = (node) => {
    node.selectAll("text.y-label").remove()
    node.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -55)
    .attr("x", -props.height/2 + 20)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Price ($)")
    .attr("class", "y-label")
  }

  const ySettings = {
    translate: `translate(${props.padding }, 0)`,
    scale: props.yScale,
    orient: 'left',
    ticks: 10,
    text: "yaxis",
    label: yLabel,
    className: "y axis"
  };

  return <g className="xy-axis">
    <Axis {...xSettings}/>
    <Axis {...ySettings}/>
  </g>
}
