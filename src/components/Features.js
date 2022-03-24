import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { navigate } from "gatsby";

const FeatureGrid = ({ gridItems }) => {

  const handleKeyDown = (ev) => {
    // check keys if you want
    if (ev.keyCode === 13) {
      console.log("handleKeyDown")
    }
  };

  return (
    <div className="columns is-multiline">
      {gridItems.map((item, i) => (
        // https://stackoverflow.com/a/62743794
        <div 
          key={item.text} className="column is-6"
          onClick={() => navigate(item.url)}
          onKeyDown={handleKeyDown}
          role="link"
          tabIndex={i}
        >
          <section className="section y-4 py-5 clickableSection">
            <div className="has-text-centered">
              <div
                style={{
                  width: "240px",
                  display: "inline-block",
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <h3 className="title is-size-5 my-1">{item.title}</h3>
            <ReactMarkdown remarkPlugins={[[remarkGfm],]}>{item.text}</ReactMarkdown>
          </section>
        </div>
      ))}
    </div>
  )
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
