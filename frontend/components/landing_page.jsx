import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import Footer from './footer'

class LandingPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoClick = this.demoClick.bind(this);
  }

  demoClick(){
    // e.preventDefault()
      hashHistory.push("/houses/search")
  }

  handleSubmit() {
    return e => {
      //without preventDefault the state will not update.
      //Putting in a time delay on hashHistory.push will let the state update
      //need clarification on why this happens

      // console.log(this.autocomplete.getPlace());
      e.preventDefault()
      //southwest lng
      const swlng = this.autocomplete.getPlace().geometry.viewport.b.b;
      //northeast lng
      const nelng = this.autocomplete.getPlace().geometry.viewport.b.f;
      //northeast lat
      const nelat = this.autocomplete.getPlace().geometry.viewport.f.b;
      //southwest lat
      const swlat = this.autocomplete.getPlace().geometry.viewport.f.f;

      const bounds = {
        northEast: {
          lat: nelat,
          lng: nelng
        },
        southWest: {
          lat: swlat,
          lng: swlng
        }
      };

      const center = {
        lat: (swlat + nelat)/2,
        lng: (swlng + nelng)/2
      }

      // const lat = this.autocomplete.getPlace().geometry.location.lat()
      // const lng = this.autocomplete.getPlace().geometry.location.lng()
      // const center = {
      //   lat: lat,
      //   lng: lng
      // }

      const options = {
        center,
        zoom: 13
      }
      //
      // const options2 = Object.assign({}, this.state, options);
      //
      this.props.updateFilter("mapOptions", options)

      // this.props.updateFilter("bounds", bounds)
      // setTimeout(function(){hashHistory.push("/houses/search")}, 3000);
      hashHistory.push("/houses/search")
      // this.props.router.push("/houses/search");
      // console.log(options2);
      // this.props.createHouse({house});
      // this.props.router.push({
      //   pathname: "houses/search",
      //   query: center
      // })
    }
  }

  componentDidMount(){
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.refs.mapSearch), {
        types: ['geocode']
    });
  }

  render(){
    return(
      <div>
        <div className="jumbotron" id="landing-page">
          <div className="container>">
            <h1 className="tag-line">Find Your House</h1>
            <h4>Search around the world to find an investment property. Your perfect place is waiting.</h4>
              <form className="form-inline landing-page-form"
                onSubmit={this.handleSubmit()}>
                <div className="form-group landing-page-form-group">
                  <input
                    type="text"
                    ref="mapSearch"
                    id="landing-page-input"
                    className="form-control input-lg"
                    placeholder="Search Any Location (San Francisco for Demo)"/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">Search</button>
                <button type="submit" className="btn btn-primary btn-lg" onClick={this.demoClick}>Demo</button>
              </form>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
};
export default LandingPage;

// <ButtonToolbar>
// {/* Standard button */}
// <Button>Default</Button>
//
// {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
// <Button bsStyle="primary">Primary</Button>
//
// {/* Indicates a successful or positive action */}
// <Button bsStyle="success">Success</Button>
//
// {/* Contextual button for informational alert messages */}
// <Button bsStyle="info">Info</Button>
//
// {/* Indicates caution should be taken with this action */}
// <Button bsStyle="warning">Warning</Button>
//
// {/* Indicates a dangerous or potentially negative action */}
// <Button bsStyle="danger">Danger</Button>
//
// {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
// <Button bsStyle="link">Link</Button>
// </ButtonToolbar>
