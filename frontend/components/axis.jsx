import React from 'react';
import d3    from 'd3';

export default class Axis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var node  = this.refs.axis;
    var axis = d3.svg.axis()
    .orient(this.props.orient)
    .ticks(this.props.ticks)
    .scale(this.props.scale);
    d3.select(node).call(axis)
    if (this.props.label) {
      this.props.label(d3.select(node))
    }
  }

  render() {
    return <g className={this.props.className} ref="axis" transform={this.props.translate}></g>
  }
}
