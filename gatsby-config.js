module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-react-helmet",

    {
      resolve: "gatsby-source-microcms",

      options: {
        // microCMSのAPIキーを環境変数から参照する(node.jsではprocess.envで環境変数が渡される)
        apiKey: process.env.MICROCMS_API_KEY,
        // microCMSのサービスID
        serviceId: "takashi",

        // apiはホワイトリスト形式で記述（今回はpostとcategoryのapiを利用する）
        apis: [
          {
            endpoint: "post",
          },
          {
            endpoint: "category",
          },
        ],

      },

    },
  ],
};
