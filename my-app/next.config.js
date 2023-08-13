const dotenv = require('dotenv');

module.exports = () => {
  dotenv.config();

  const nextConfig = {
    reactStrictMode: true,
    // Your additional Next.js configuration options go here
  };

  return nextConfig;
};

if (
  process.env.LD_LIBRARY_PATH == null ||
  !process.env.LD_LIBRARY_PATH.includes(
    `${process.env.PWD}/node_modules/canvas/build/Release:`,
  )
) {
  process.env.LD_LIBRARY_PATH = `${
    process.env.PWD
  }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}