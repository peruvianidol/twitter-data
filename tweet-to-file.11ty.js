class TweetsToFile {
  data() {
    return {
      tweets: require("./tweet.js"),
      pagination: {
        data: "tweets",
        size: 1,
        alias: "tweet"
      },
      permalink: data => `/${data.tweet.id_str}/`
    };
  }

  async render(data) {
    return `<!doctype html>
    <title>@peruvianidol's Tweet: ${data.tweet.full_text}</title>
    ${data.tweet.full_text}`;
  }
}

module.exports = TweetsToFile;