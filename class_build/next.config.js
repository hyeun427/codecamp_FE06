/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 마지막에 슬래쉬를 만들어주겠다는 뜻
  trailingSlash: true,
  generateBuildId: () => "myuniverse",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
