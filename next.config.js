module.exports = {
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
};
