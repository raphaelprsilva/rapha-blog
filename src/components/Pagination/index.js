import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as S from './styled';

import getThemeColor from '../../utils/getThemeColor';

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  numPages,
  previousPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    {!isFirstPage && (
      <AniLink
        to={previousPage}
        cover
        direction="left"
        bg={getThemeColor()}
        duration={0.6}
      >
        ← pagina anterior
      </AniLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLastPage && (
      <AniLink
        to={nextPage}
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
      >
        proxima pagina →
      </AniLink>
    )}
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
