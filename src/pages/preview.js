import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import PostContent from "../components/PostContent";


// 自分の作ったサービスのURL
const apiHost = "https://takashi.microcms.io/";

const PostPage = (props) => {
    const [post, setPost] = useState(null);

    // URLSearchParams でURLのパラメータをまるごと取得する。getでkeyを指定個別に取得する
    const params = new URLSearchParams(props.location.search);
    const contentId = params.get("contentId");  // プレビューする記事のコンテンツID.   部分を取得
    const draftKey  = params.get("draftKey");   // プレビューする記事のdraftキー(下書き保存されるときに生成されるキー)
    const apiKey    = params.get("apiKey");     // apiキー

    useEffect(() => {
        // コンテンツid、APIキーのどちらかが存在しない場合
        if (!contentId || !apiKey) {
            alert('パラメータがありません');
            return;
        }

        // プレビュー記事を取得
        fetch(`${apiHost}/api/v1/post/${contentId}?draftKey=${draftKey}`, {
            headers: {
                'X-MICROCMS-API-KEY': apiKey
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.status + res.statusText);
                }
                return res.json();
            })
            .then((res) => setPost(res))
            .catch((err) => alert(err));
    }, [apiKey, draftKey, contentId]);

    if (!post) {
        return <p>ロード中</p>
    }

    return (
        <Layout>

            <Helmet>
                <title>{post.title}</title>
                <meta name="description" content={`${post.title}`} />
            </Helmet>

            <PostContent post={post} />
        </Layout>
    );
};

export default PostPage;