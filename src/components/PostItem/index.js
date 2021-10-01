import React from 'react';

import * as S from './styled';

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>30 de junho de 2019 - 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Diga não ao medium: tenha sua plataforma
        </S.PostItemTitle>
        <S.PostItemDescription>
          Algumas razões para você ter sua própria plataforma, ao invés de
          soluções como o medium
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

export default PostItem;
