import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import PostItem from '../components/PostItem/index';
import Pagination from '../components/Pagination';

const BlogList = (props) => {
  const postList = props.data.allMarkdownRemark.edges;

  const { numPages, currentPage } = props.pageContext;
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === numPages;
  const previousPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
          <PostItem
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        numPages={numPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
          wordCount {
            words
          }
        }
      }
    }
  }
`;

export default BlogList;
