const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 10000, // Carregue arquivos menores que 10KB como base64
        },
      },
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/v4",
        permanent: true, // Redirecionamento permanente (HTTP 301)
      },
    ];
  },
});
