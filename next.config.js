const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  output: 'export',
  images: {
    unoptimized: true, 
  },
};
