const { withTamagui } = require('@tamagui/next-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  appDir: true,
})(nextConfig)
