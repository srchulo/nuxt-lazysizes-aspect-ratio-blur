export default {
  /*
   ** Rendering mode
   ** Doc: https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/api/configuration-css
   */
  css: ["~/assets/styles/main.css"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "~/plugins/lazysizes.js",
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guide/modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org
    "@nuxt/http",
    // TODO: Remove it if you want to eject from codeSandbox
    "./codesandbox",
    "@bazzite/nuxt-optimized-images"
  ],

  optimizedImages: {
    imagesName: ({ isDev }) => (isDev ? '[path][name][hash:optimized].[ext]' : 'img/[name]_[contenthash:7].[ext]'),
    responsive: {
        sizes: [320, 640, 768, 960, 1024, 1280, 1600, 1920],
        name: 'img/[name]_[contenthash:7]-[width].[ext]',
    },
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: "img-loader",
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  /*
   ** HTTP module configuration
   */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },

  /*
   ** Build configuration
   ** Doc: https://nuxtjs.org/api/configuration-build
   */
  build: {
    // transpile: ['vue-instantsearch', 'instantsearch.js/de'],
    postcss: {
      // extractCSS: true,
      plugins: {
        "postcss-import": {},
        "postcss-advanced-variables": {},
        "postcss-nested": {},
        "postcss-percentage": {}
      },
      // Change the postcss-preset-env settings
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        ctx.loaders.vue.transformAssetUrls.img = ["data-src", "src"];
        ctx.loaders.vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  }
};
