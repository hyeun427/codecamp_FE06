/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  mode: 'development'
  entry: [hotMiddlewareScript, './index.tsx'],
  target: 'node',
  node: {
    tls:'empty'
  }
}


