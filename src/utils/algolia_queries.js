const postsQuery = `{
  posts: allMarkdownRemark(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
          title
        }
        excerpt(pruneLenght: 5000)
      }
    }
  }
}`;

const flatten = (array) =>
  array.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: 'Posts', // overrides main index name, optional
    settings: {
      attributesToSnippet: ['excerpt:20'], // busca de 20 em 20
      // optional, any index settings
    },
  },
];

module.exports = queries;
