import React from 'react';
import d3 from 'd3';
// var parseDate = d3.time.format("%d-%b-%y").parse;
//

//
// d3.csv("data.csv", function(error, data) {
//   console.log(data);
//   data.forEach(function(d) {
//       d.date = parseDate(d.date);
//       d.close = +d.close;
//   });
//
//   x.domain(d3.extent(data, function(d) { return d.date; }));
//   y.domain([0, d3.max(data, function(d) { return d.close; })]);
//
// });
//
// const renderLine = (props) => {
//   return (coords, index) => {
//     const lineProps = {
//       x: props.xScale(coords[0]),
//       y: props.yScale(coords[1]),
//       key: index
//     };
//     return <path {...lineProps}></path>
//   };
// };
//
// const renderCircles = (props) => {
//   return (coords, index) => {
//     const circleProps = {
//       cx: props.xScale(coords[0]),
//       cy: props.yScale(coords[1]),
//       r: 2,
//       key: index
//     };
//     return <circle {...circleProps} />;
//   };
// };

export default (props) => {
  // props.data.forEach( (d) => {
  //
  // })
  // data.forEach(function(d) {

  const valueLine = d3.svg.line()
      .x(function(d) {
        return props.xScale(new Date(d.date))
      })
      .y(function(d) { return props.yScale(d.price) })
  // const valueLine2 = d3.svg.line()
  //     .x(function(d) { return d[0] })
  //     .y(function(d) { return d[1] })

  return <g><path d={valueLine(props.data)}
                  stroke="#d5e1ef"
                  strokeWidth="1.5"
                  fill="none"
                  /></g>
}
