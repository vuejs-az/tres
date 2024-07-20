import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { esConfig } from './es'
import { deConfig } from './de'
import { frConfig } from './fr'
import { sharedConfig } from './shared'
import { zhConfig } from './zh'
import { nlConfig } from './nl'
import { azConfig } from './az'

export default defineConfig({
  ...sharedConfig,

  locales: {
    root: { label: 'English', lang: 'en-US', link: '/', ...enConfig },
    az: { label: 'Azərbaycanca', lang: 'az-AZ', link: '/az/', ...azConfig },
    de: { label: 'Deutsch', lang: 'de-DE', link: '/de/', ...deConfig },
    es: { label: 'Español', lang: 'es-ES', link: '/es/', ...esConfig },
    fr: { label: 'Français', lang: 'fr-FR', link: '/fr/', ...frConfig },
    nl: { label: 'Nederlands', lang: 'nl-NL', link: '/nl/', ...nlConfig },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
  },
})
