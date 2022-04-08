import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostList from "../components/PostList";

// const posts = [
//   {
//     slug: "react",
//     title: "Reactサイコー！",
//     content: `<p>ReactはFacebookの提供するUIライブラリ。コンポーネント志向ですごく書きやすい。</p>`,
//     publishedAt: "2020.12.21 14:23",
//     category: {
//       slug: "dev",
//       name: "開発",
//     },
//     thumbnail: {
//       url: "/gatsby-icon.png",
//     },
//   },
//   {
//     slug: "figma",
//     title: "Figmaはいいぞ",
//     content: "<p>Figmaの良さが伝わると嬉しい。</p>",
//     publishedAt: "2020.12.22 23:11",
//     category: {
//       slug: "design",
//       name: "デザイン",
//     },
//     thumbnail: {
//       url: "/gatsby-icon.png",
//     },
//   },
//   {
//     slug: "gatsby",
//     title: "Gatsbyもいいぞ",
//     content: "<p>Gatsbyを使うと爆速サイトができるからいいよ</p>",
//     publishedAt: "2020.12.23 07:34",
//     category: {
//       slug: "dev",
//       name: "開発",
//     },
//     thumbnail: {
//       url: "/gatsby-icon.png",
//     },
//   },
// ];

const IndexPage = (props) => {
  const posts = props.data.allMicrocmsPost.nodes;

  return (
    <Layout>
      <Helmet>
        <title>Gatsby Blog</title>
        <meta
          name="description"
          content="GatsbyとHeadless CMSを組み合わせて作るサンプルアプリケーションです。"
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
