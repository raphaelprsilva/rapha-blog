import styled from 'styled-components';

export const DetailsWrapper = styled.details`
  margin: 1rem 1.5rem;
  border-radius: 5px;
  border: 1px solid var(--borders);
  cursor: pointer;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background: var(--mediumBackground);
  color: var(--white);
  font-weight: bolder;
  transition: 0.3s;
`;

export const SummaryWrapper = styled.summary`
  padding-left: 0.75rem;
  transition: 0.3s;
  color: var(--texts);

  :hover {
    color: var(--highlight);
  }
`;

export const ProjectInfos = styled.div`
  p {
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    margin: 0;
  }

  ul {
    font-size: 1rem;
    margin: 0;
  }
`;
