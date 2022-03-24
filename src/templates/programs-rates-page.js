import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ProgramsRatesPageTemplate = ({ title, content, image, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const heroImage = getImage(image) || image;

  return (
    <div>
      <FullWidthImage img={heroImage} title="Programs & Rates" subheading="" />
      <section className="section section--gradient py-4">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section py-4">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProgramsRatesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProgramsRatesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProgramsRatesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

ProgramsRatesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProgramsRatesPage;

export const ProgramsRatesPageQuery = graphql`
  query ProgramsRatesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
