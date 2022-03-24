import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import facebook from "../img/social/facebook.svg";
import logo from "../img/tss-logo-sq.svg";
import logoWords from "../img/logo-words-50.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
      showLogoWords: (props.loc && 'pathname' in props.loc) ? 'is-sr-only' : 'show',
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    // console.log(`navbar props: ${JSON.stringify(this.props)}`);
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" role="navigation">
          <div className="navbar-brand" role="navigation">
            <Link to="/" 
              className={`navbar-item ${this.state.showLogoWords}` }
              title="Logo">
              <img src={logo} alt="TheScienceSeed" 
                // style={{ width: "88px" }}
              />
              <img src={logoWords} alt="TheScienceSeed" 
                className={`${this.state.showLogoWords}`}
                style={{ height: "27px", width: "171px" }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              aria-label="Toggle nav menu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
              style={{ 
                outline: 'thin',
                color: 'white',
                backgroundColor: 'rgba(125, 190, 74, 0.8)',
              }}
            >
              <span role="none" />
              <span role="none" />
              <span role="none" />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div role="tablist" className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Teachers & Testimonials
              </Link>
              <Link className="navbar-item" to="/programs-rates">
                Programs & Rates
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://github.com/jwsy/thescienceseed-gatsby-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>

            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/thescienceseedllc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
