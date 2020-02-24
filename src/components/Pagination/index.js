import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import * as s from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => {
  return (
    <s.PaginationWrapper>
      {!isFirst && <Link to={prevPage}>página anterior </Link>}

      <p>{`${currentPage} de ${numPages}`}</p>

      {!isLast && <Link to={nextPage}>próxima página </Link>}
    </s.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
}

// Specifies the default values for props:
Pagination.defaultProps = {
  prevPage: '',
  nextPage: '',
}

export default Pagination
