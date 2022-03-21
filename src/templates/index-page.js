import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import logo from "../img/tss-logo-sq.svg";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const svgWhiteStyle = {
    fill: "#fff",
    height: "1em",
    filter: "brightness(0%) saturate(100%) invert(100%)",
  };

  return (
    <div>
      <FullWidthImage img={heroImage} title="" subheading="" />
      <section className="section section--gradient pt-4">
        <div className="container">
          <div className="section pt-0">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h2 className="title">{mainpitch.title}</h2>
                    </div>
                    <div className="tile">
                      <span>{mainpitch.description}</span>
                    </div>
                    <div className="tile pt-4">
                      <button className="button is-large is-primary is-fullwidth" 
                        role="link" 
                        onClick={()=>{navigate("/contact")}} >
                        <span>Contact us &nbsp;</span>
                        <span>
                          <img src={logo} style={svgWhiteStyle} alt="TheScienceSeed" />
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold">
                        {heading}
                      </h3>
                      <ReactMarkdown remarkPlugins={[[remarkGfm],]}>{intro.description}</ReactMarkdown>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <button className="button is-large is-primary is-fullwidth" 
                        role="link" 
                        onClick={()=>{navigate("/contact")}} >
                        <span>Contact us &nbsp;</span>
                        <span>
                          <img src={logo} style={svgWhiteStyle} alt="TheScienceSeed" />
                        </span>
                      </button>
                      {/* <Link className="btn" to="/products">
                        See all products
                      </Link> */}
                    </div>
                  </div>
                  <div className="column is-12">
                    {/* <h3 className="has-text-weight-semibold">
                      Latest stories
                    </h3> */}
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            title
            text
          }
          heading
          description
        }
      }
    }
  }
`;
