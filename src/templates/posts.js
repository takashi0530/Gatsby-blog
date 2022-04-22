import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

const PostsPage = (props) => {
    const posts = props.data.allMicrocmsPost.nodes;
    const { currentPage, numPages } = props.pageContext;

    console.log(props.pageContext) // contextで渡した値を表示

    return (
        // レイアウト
        <Layout>

            {/* ヘッダー部分 */}
            <Helmet>
                <title>Nisshing Blog</title>
                <meta
                    name="description"
                    content="開発ブログです"
                />
            </Helmet>

            {/* 記事一覧 */}
            <PostList posts={posts} />

            {/* ページネーション */}
            <Pagination currentPages={currentPage} numPages={numPages} />

        </Layout>
    );
};

// $skip, $limitはgatsby-node.jsからcontextで渡されたもの
export const query = graphql`
    query PostsQuery($skip: Int!, $limit: Int!) {
        allMicrocmsPost(skip: $skip, limit: $limit) {
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

export default PostsPage;
