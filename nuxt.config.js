import i18n from './config/i18n'
export default{
    components: true,
    buildModules: [
        [
         'nuxt-i18n',
         {
           vueI18nLoader: true,
           strategy: 'prefix',
           defaultLocale: 'es-es',
           seo: true,
            locales: [
             {
                code: 'en-us',
                name: 'English',
                iso: 'en-US'
             },
             {
                code: 'es-es',
                name: 'Español',
                iso: 'es-ES'
             }
           ],
           vueI18n: i18n
         }
        ]
       ],
   css: ['~/assets/sass/app.scss'],
   build: {
      extractCSS: true,
      loaders: {
         limit: 0,
      }
   },  
}


 
