import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const TeacherGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      // https://stackoverflow.com/a/62743794
      <div key={item.text} className="column is-6">
        <section className="section y-4 clickableSection">
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
          <h5 className="title is-size-5 my-1">{item.title}</h5>
          {/* <p>{item.text}</p> */}
          <ReactMarkdown remarkPlugins={[[remarkGfm],]}>{item.text}</ReactMarkdown>
        </section>
      </div>
    ))}
  </div>
);

TeacherGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default TeacherGrid;
