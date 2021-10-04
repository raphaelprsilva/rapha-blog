import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import * as S from './styled';

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  previousPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirstPage && <Link to={previousPage}>← pagina anterior</Link>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLastPage && <Link to={nextPage}>proxima pagina →</Link>}
  </S.PaginationWrapper>
);

Pagination.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  previousPage: PropTypes.string.isRequired,
  nextPage: PropTypes.string.isRequired,
};

export default Pagination;
