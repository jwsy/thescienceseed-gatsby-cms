import React from 'react'
import PropTypes from 'prop-types'
import { ProgramsRatesPageTemplate } from '../../templates/programs-rates-page';

const ProgramsRatesPagePreview = ({ entry, widgetFor }) => (
  <ProgramsRatesPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ProgramsRatesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProgramsRatesPagePreview
