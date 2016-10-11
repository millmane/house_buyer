// unfinished/src/components/chart.jsx
import React       from 'react';
import ScatterPlot from './scatter-plot';
import d3 from 'd3'
import ReactDOM from 'react-dom'

// const styles = {
//   width   : 1000,
//   height  : 500,
//   padding : 50,
// };

// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

export default class Chart extends React.Component{
  constructor(props) {
    super(props);

    this.randomizeData2 = this.randomizeData2.bind(this)
    this.handleResize = this.handleResize.bind(this)
    // const data = this.randomizeData2();
    // console.log(props.data);
    // console.log(ReactDOM.findDOMNode(this.refs))
    // this.styles = {
    //   width   : 1000,
    //   height  : 500,
    //   padding : 50,
    // };
      var parseDate = d3.time.format("%d-%b-%y").parse;

      const data = [
        [parseDate("1-Sep-16"), 50],
        [parseDate("4-Sep-16"), 55],
        [parseDate("8-Sep-16"), 50],
        [parseDate("11-Sep-16"), 55],
        [parseDate("20-Sep-16"), 50],
      ]

    this.state = {
      data: props.data,
        width: window.innerWidth - 30,
        height: 500,
        padding: 50
    };
    // this.state = {data: data}
    // this.state = { data: randomDataSet() };

  }

  handleResize(e){
    // this.setState({
    //   width: window.innerWidth - 30
    // });

    this.setState({
      width: this.refs.chartRef.clientWidth,
      height: (9 / 16) * this.refs.chartRef.clientWidth
    })

  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount(){
    this.setState({
      width: this.refs.chartRef.clientWidth,
      height: (9 / 16) * this.refs.chartRef.clientWidth

    })
    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(){

  }

  componentDidUpdate(){
    // console.log(this.refs.chartRef.clientWidth);
    // if (this.state.width !== this.refs.chartRef.clientWidth) {
    //   this.setState({
    //     width: this.refs.chartRef.clientWidth
    //   })
    // }
    //
    // console.log(this.refs.chartRef.clientWidth);
    // console.log(this.refs.test.clientWidth);
    // this.styles.width = this.refs.test.clientWidth
    // this.styles = {
    //   width   : this.refs.chart.clientWidth,
    //   height  : this.refs.chart.clientHeight,
    //   padding : 50,
    // };
    // console.log(this.refs);
    // console.log(this.refs.chart.clientHeight);
    // console.log(this.refs.chart.clientWidth);

    // console.log(this.refs.chart.style.width);
    // console.log(this.refs.chart.style.height);

    // console.log("updated");
    // this.setState({ data: this.props.data});
  }

  componentWillReceiveProps(nextProps){
    this.setState({ data: nextProps.data});
    // this.styles.width = this.refs.test.clientWidth

    // this.styles = {
    //   width   : this.refs.chart.clientWidth,
    //   height  : this.refs.chart.clientHeight,
    //   padding : 50,
    // };
  }
  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  randomizeData2() {
    const data = []
    const volatility = .10
    const min = 0
    const max = 1
    // let old_price = Math.round((Math.random() * (max - min) + max) * 100) / 100; // generate number, 0 <= x < 1.0
    let old_price = 1000 ;
    for (var i = 0; i < 100; i++) {
      let rnd = Math.random(); // generate number, 0 <= x < 1.0
      let change_percent = 2 * volatility * rnd;
      if (change_percent > volatility)
          change_percent -= (2 * volatility);
      let change_amount = old_price * change_percent;
      let new_price = Math.round((old_price + change_amount) * 100) / 100;
      old_price = new_price
      data.push([i,new_price])
    }
    return data
  }

  render() {
    return (
      <div className="chart-container" ref="chartRef">
        <h4 className="chart-title">Price History</h4>
        <ScatterPlot {...this.state} />
      </div>
    )
  }
}
