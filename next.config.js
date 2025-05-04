/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//     output: 'export',
//   }
   const nextConfig = {
  output: 'export', // Eğer zaten varsa dokunmayın
  images: {
    unoptimized: true,
  },
};
  module.exports = nextConfig