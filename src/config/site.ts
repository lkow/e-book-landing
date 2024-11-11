export const siteConfig = {
  domain: 'https://watercolor-with-iwa.com',
  author: 'Iwa Kowalska',
  social: {
    instagram: 'https://instagram.com/iwakowalska.pl',
    facebook: 'https://www.facebook.com/iwakowalskapl/',
    pinterest: 'https://pinterest.com/iwakowalskaart'
  },
  hashtag: '#WatercolorWithIwa',
  pricing: {
    en: {
      regular: '$49.99',
      special: '$29.99',
      savings: '40%'
    },
    pl: {
      regular: '199 zł',
      special: '119 zł',
      savings: '40%'
    }
  },
  links: {
    en: {
      privacy: 'https://iwakowalska.pl/policies/privacy-policy',
      terms: 'https://iwakowalska.pl/policies/privacy-policy',
      contact: 'https://iwakowalska.pl/pages/contact'
    },
    pl: {
      privacy: 'https://iwakowalska.pl/policies/privacy-policy',
      terms: 'https://iwakowalska.pl/policies/privacy-policy',
      contact: 'https://iwakowalska.pl/pages/contact'
    }
  }
} as const;

export type SiteConfig = typeof siteConfig;