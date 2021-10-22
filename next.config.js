module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/settings",
        destination: "/settings/user",
        permanent: true,
      },
    ];
  },
};
