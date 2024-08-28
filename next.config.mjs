/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    // assetPrefix: 'https://srv1427-files.hstgr.io/1e6afa19003c7b5d/files/public_html',
    images: {
            domains: ['ncrs.gov.ng'], // Add the external domain here
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '/img/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  