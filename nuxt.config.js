import i18n from './config/i18n'
export default{
    components: true,
    buildModules: [
        [
         'nuxt-i18n',
         {
           vueI18nLoader: true,
           defaultLocale: 'es-es',
            locales: [
             {
                code: 'en-us',
                name: 'English'
             },
             {
                code: 'es-es',
                name: 'Spanish'
             }
           ],
           vueI18n: i18n
         }
        ]
       ],
}


 
