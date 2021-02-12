import { createI18n } from 'vue-i18n'

import English from '@/i18n/localizations/en.json'
import Russian from '@/i18n/localizations/ru.json'

const i18n = createI18n({
    messages:
        {
            en: English,
            ru: Russian
        },
    fallbackLocale: 'en'
})

export default i18n
