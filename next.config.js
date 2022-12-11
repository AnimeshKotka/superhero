/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGOOS: "mongodb+srv://animeshkotka:Animesh99@cluster0.pdshpw0.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
