import React from 'react';

import * as S from './styled';
import './accordion.css';

const Accordion = ({
  projectName,
  projectDescription,
  projectSiteLink,
  githubLink,
}) => (
  <S.DetailsWrapper activeClassName="active">
    <S.SummaryWrapper>{projectName}</S.SummaryWrapper>
    <S.ProjectInfos>
      <p>{projectDescription}</p>
      <ul>
        <li>
          <a href={projectSiteLink} target="_blank" rel="noreferrer">
            Ir para o site
          </a>
        </li>
        <li>
          <a href={githubLink} target="_blank" rel="noreferrer">
            Github do projeto
          </a>
        </li>
      </ul>
    </S.ProjectInfos>
  </S.DetailsWrapper>
);

export default Accordion;
