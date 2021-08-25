module.exports = {
  reactStrictMode: true,
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
