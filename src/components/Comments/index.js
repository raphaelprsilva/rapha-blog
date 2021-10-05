import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './styled';

const Comments = ({ url, title }) => {
  const completeUrl = `http://localhost:8000${url}`;
  console.log(completeUrl);
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="prsraphael"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  );
};

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Comments;