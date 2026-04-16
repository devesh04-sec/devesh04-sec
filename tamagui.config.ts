import { createTamagui } from 'tamagui'
import { config as tamaguiConfig } from '@tamagui/config/v3'

const config = createTamagui({
  ...tamaguiConfig,
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
