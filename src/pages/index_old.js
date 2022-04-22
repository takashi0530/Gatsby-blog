import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

const IndexPage = (props) => {
  const posts = props.data.allMicrocmsPost.nodes;

  return (
    <Layout>
      <Helmet>
        <title>Nisshing Blog</title>
        <meta
          name="description"
          content="開発ブログです"
        />
      </Helmet>

      <PostList posts={posts} />

    </Layout>
  );
};

export const query = graphql`
  query {
    allMicrocmsPost {
      nodes {
        slug
        title
        content
        publishedAt(formatString: "YYYY.MM.DD hh:mm")
        category {
          slug
          name
        }
        thumbnail {
          url
        }
      }
    }
  }
`;

export default IndexPage;
