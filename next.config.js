module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      // {
      //   source: "/",
      //   destination: "/home/dashboard",
      //   permanent: true,
      // },
      {
        source: "/home",
        destination: "/home/dashboard",
        permanent: true,
      },
      {
        source: "/settings",
        destination: "/settings/user",
        permanent: true,
      },
    ];
  },
};
