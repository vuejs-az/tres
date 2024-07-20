import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/tresjs/tres/edit/main/docs/:path',
      text: 'Səhifə məzmununa düzəliş edin',
    },
    sidebar: [
      {
        text: 'Kitabça',
        items: [
          // Bura `/guide/index.md` səhifəsini göstərir.
          { text: 'Rəhbər', link: '/az/guide/' },
          { text: 'Başlanğıc', link: '/az/guide/getting-started' },
          { text: 'İlk Səhnənizi Yaradın', link: '/az/guide/your-first-scene' },
          { text: 'Nuxt', link: '/az/guide/nuxt' },
          { text: 'Xəta Diaqnostikası', link: '/az/guide/troubleshooting' },
          { text: 'v1-dən Miqrasiya', link: '/az/guide/migration-guide' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'TresCanvas', link: '/az/api/tres-canvas' },
          {
            text: 'Nüsxələr, arqumentlər və parametrlər',
            link: '/az/api/instances-arguments-and-props',
          },
          {
            text: 'Yığma funksiyalar',
            link: '/az/api/composables',
          },
          {
            text: 'Hadisələr',
            link: '/az/api/events',
          },
        ],
      },
      {
        text: 'İrəli səviyyə',
        items: [
          { text: 'Genişləndirmə', link: '/az/advanced/extending' },
          { text: 'Primitivlər', link: '/az/advanced/primitive' },
          {
            text: 'Performansı Qaldırmaq 🚀',
            link: '/az/advanced/performance',
          },
          { text: 'Xəbərdarlıqlar', link: '/az/advanced/caveats' },
        ],
      },
      {
        text: 'Debaq',
        items: [{ text: 'Devtools', link: '/az/debug/devtools' }],
      },
      {
        text: 'Təlimat 🍳🧑‍🍳',
        link: '/az/cookbook/',
        items: [
          { text: 'Orbit İdarələri', link: '/az/cookbook/orbit-controls' },
          { text: 'Sadə Animasiyalar', link: '/az/cookbook/basic-animations' },
          {
            text: 'Təkmilləşmiş Animasiyalar',
            link: '/az/cookbook/advanced-animations',
          },
          { text: 'Qruplar', link: '/az/cookbook/groups' },
          { text: 'Tekstura Yükləmək', link: '/az/cookbook/load-textures' },
          { text: 'Model Yükləmək', link: '/az/cookbook/load-models' },
          { text: 'Mətn Yükləmək', link: '/az/cookbook/text-3d' },
          { text: 'İşıqlar və Kölgələr', link: '/az/cookbook/lights-shadows' },
          { text: 'Kölgələndiricilər', link: '/az/cookbook/shaders' },
        ],
      },
      {
        text: 'Direktivlər',
        collapsed: true,
        items: [
          { text: 'v-log', link: '/az/directives/v-log' },
          { text: 'v-light-helper', link: '/az/directives/v-light-helper' },
          { text: 'v-distance-to', link: '/az/directives/v-distance-to' },
        ],
      },
      {
        text: 'Ekosistem',
        items: [
          {
            text: 'Cientos 💛',
            link: 'https://cientos.tresjs.org/',
          },
          {
            text: 'Nuxt module',
            link: 'https://github.com/Tresjs/nuxt',
          },
          {
            text: 'TresLeches 🍰',
            link: 'https://tresleches.tresjs.org/',
          },
          {
            text: 'Post-processing (Soon)',
          },
        ],
      },
    ],
    nav: [
      { text: 'Rəhbər', link: '/az/guide/' },
      { text: 'API', link: '/az/api/tres-canvas' },
      /* { text: 'API', link: '/az/api/' },
      { text: 'Konfiqurasiya', link: '/az/config/' }, */
      {
        text: 'Mənbələr',
        items: [
          { text: 'Komanda', link: '/az/team' },
          {
            text: 'Buraxılışlar',
            link: 'https://github.com/Tresjs/tres/releases',
          },
          { text: 'Qaralama', link: 'https://play.tresjs.org/' },
          { text: 'GitHub', link: 'https://github.com/Tresjs/tres/' },
          { text: 'Problemlər', link: 'https://github.com/Tresjs/tres/issues' },
          {
            text: 'Ekosistem',
            items: [
              {
                text: 'Cientos 💛',
                link: 'https://cientos.tresjs.org/',
              },
              {
                text: 'Nuxt modulu',
                link: 'https://github.com/Tresjs/nuxt',
              },
              {
                text: 'TresLeches 🍰',
                link: 'https://tresleches.tresjs.org/',
              },
            ],
          },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Axtarın',
                buttonAriaLabel: 'Axtarın',
              },
              modal: {
                displayDetails: 'Müfəssəl siyahını göstərin',
                resetButtonTitle: 'Axtarışı təmizləyin',
                backButtonTitle: 'Axtarışı bağlayın',
                noResultsText: 'Nəticə tapılmadı:',
                footer: {
                  selectText: 'seçmək üçün',
                  selectKeyAriaLabel: 'enter',
                  navigateText: 'hərəkət etmək üçün',
                  navigateUpKeyAriaLabel: 'yuxarı ox',
                  navigateDownKeyAriaLabel: 'aşağı ox',
                  closeText: 'bağlamaq üçün',
                  closeKeyAriaLabel: 'escape',
                },
              },
            },
          },
        },
      },
    },
    outline: {
      label: 'Mündəricat',
    },
    docFooter: {
      next: 'Növbəti səhifə',
      prev: 'Əvvəlki səhifə',
    },
    darkModeSwitchLabel: 'Görünüş',
    lightModeSwitchTitle: 'İşıqlı görünüşə keçin',
    darkModeSwitchTitle: 'Tünd görünüşə keçin',
    sidebarMenuLabel: 'Menyu',
    returnToTopLabel: 'Yuxarıya qayıdın',
    langMenuLabel: 'Dili dəyişin',
  },
}
