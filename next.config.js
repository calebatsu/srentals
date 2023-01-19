/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    MONGO_URI: "mongodb+srv://calebatsu:calebatsu@cluster0.r751ujm.mongodb.net/?retryWrites=true&w=majority"
  }
}
