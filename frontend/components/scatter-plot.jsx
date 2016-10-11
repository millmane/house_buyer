import React        from 'react';
import d3           from 'd3';
import DataCircles  from './data-circles';
import XYAxis       from './x-y-axis';

// Returns the largest X coordinate from the data set
// const xMax   = (data)  => d3.max(data, (d) => d[0]);
const xMax = (data) => d3.extent(data, (d) => {return new Date(d.date)}
);
// Returns the highest Y coordinate from the data set
// const yMax   = (data)  => d3.max(data, (d) => d[1]);
const yMax   = (data)  => d3.max(data, (d) => d.price);

// const yMax = (data) => d3.extent(data, (d) => d.price);

// Returns a function that "scales" X coordinates from the data to fit the chart
// const xScale = (props) => {
//   return d3.scale.linear()
//     .domain([0, xMax(props.data)])
//     .range([props.padding, props.width - props.padding * 2]);
// };

const xScale = (props) => {
  return d3.time.scale()
    .domain(xMax(props.data))
    .range([props.padding, props.width - props.padding]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
// const yScale = (props) => {
//   return d3.scale.linear()
//     .domain([0, yMax(props.data)])
//     .range([props.height - props.padding, props.padding]);
// };

const yScale = (props) => {
  return d3.scale.linear()
    .domain([0,yMax(props.data)])
    .range([props.height - props.padding, 10]);
};

export default (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return <svg className="scatter" width={props.width} height={props.height}>
    <DataCircles {...props} {...scales} />
    <XYAxis {...props} {...scales} />
  </svg>
}
