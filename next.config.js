/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      product_mode: "demo",
      production_mode: "demo",
      backend_url:
        process.env.NODE_ENV === "production"
          ? "http://192.168.0.142:4200/"
          : "http://192.168.0.142:4200/",
      socket_io_url:
        process.env.NODE_ENV === "production"
          ? "http://192.168.0.142:4200/"
          : "http://192.168.0.142:4200/",
      is_laravel_backend: 'false',
    },
    images: {
      domains: ['appstick.s3.ap-southeast-1.amazonaws.com'],
    },
  };
  
  module.exports = nextConfig
  
  //http://localhost:4200/
  //https://realstateexpress.appstick.com.bd/
  // production_mode: "demo || live",