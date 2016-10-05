import React from 'react';
import { Link } from 'react-router';

const Footer = function() {
  return(
    <footer id="app-footer">
    	<section id="main-footer">
    		<div className="container-fluid">
    			<div className="row">

    				<div className="col-sm-4">
    					<div className="footer-widget">
                <img alt="footer-logo" src="assets/100x100.png"/>
    						<p>
                  HouseBuyer is a web design and development studio. We build responsive HTML5 and CSS3 templates, integrating best web design practices and up-to-date web technologies to create great user experiences. We love what we do and we hope you do too!
                </p>
    					</div>
    				</div>

    				<div className="col-sm-3 col-sm-offset-1">
    					<div className="footer-widget">
    						<h3>HouseBuyer</h3>
    						<address>
    							<p>
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>&nbsp;1234 Market St.<br/>
    								San Francisco, CA USA <br/>
                  <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>&nbsp;555.123.4567 <br/>
    								<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;CEO@HouseBuyer.com
                  </p>
  							</address>
  						</div>
  					</div>
  					<div className="col-sm-3 col-sm-offset-1">
  						<div className="footer-widget">
  							<h3>Follow us, we are social</h3>
  							<ul className="footer-social-network">
  								<li>
                    <a href="#" className="tips" title="follow us on Facebook">
                      <i className="fa fa-facebook footer-icon-rounded" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="follow us on Twitter">
                      <i className="fa fa-twitter footer-icon-rounded" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="follow us on Google+">
                      <i className="fa fa-google-plus footer-icon-rounded" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="follow us on LinkedIn">
                      <i className="fa fa-linkedin footer-icon-rounded" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="follow us on Dribbble">
                      <i className="fa fa-dribbble footer-icon-rounded" aria-hidden="true"></i>
                    </a>
                  </li>
  							</ul>
  						</div>
  					</div>

  				</div>
  			</div>
  		</section>

  		<section className="footer-rights">
  			<div className="container-fluid">
  				<div className="row">
  					<div className="col-md-12">
  						<p>Copyright © 2016 <Link to="/" target="blank">HouseBuyer</Link> / All rights reserved.</p>
  					</div>

  				</div>
  			</div>
  		</section>

    </footer>
  );
};

export default Footer;
