'use client';
const dictionaries = {
  en: {
    navigation: {
      submenuHeaders: {
        Featured: {
          title: "Featured",
          subitems: [
            { title: 'New Arrivals', href: `/new-arrivals` },
            { title: 'Best Sellers', href: `/best-sellers` },
            { title: 'Gift Guide', href: `/gift-guide` }
          ]
        },
        Jewelry: {
          title: "Jewelry",
          subitems: [
            { title: 'All Jewelry', href: `/all` },
            { title: 'Rings', href: `/rings` },
            { title: 'Bracelets', href: `/bracelets` },
            { title: 'Necklaces', href: `/necklaces` },
            { title: 'Chains', href: `/chains` },
            { title: 'Pendants', href: `/pendants` }
          ]
        },
        Watches: {
          title: "Watches",
          subitems: [
            { title: 'All Watches', href: `/watches` },
            { title: 'Luxury Watches', href: `/watches/luxury` },
            { title: 'Smart Watches', href: `/watches/smart` },
            { title: 'Sport Watches', href: `/watches/sport` }
          ]
        },
        Collections: {
          title: "Collections",
          subitems: [
            { title: 'Classic', href: `/collections/classic` },
            { title: 'Modern', href: `/collections/modern` },
            { title: 'Sport', href: `/collections/sport` },
            { title: 'Business', href: `/collections/business` }
          ]
        },
        Occasions: {
          title: "Occasions",
          subitems: [
            { title: 'Wedding', href: `/occasions/wedding` },
            { title: 'Party', href: `/occasions/party` },
            { title: 'Daily', href: `/occasions/daily` },
            { title: 'Special Events', href: `/occasions/special` }
          ]
      },
    },

      men: "MEN",
      women: "WOMEN",
      newIn: "NEW IN",
      sale: "SALE",
      about: "ABOUT",
      search: "Search",
      account: "Account",
      cart: "Cart"
    },
    common: {
      back: "Back",
      next: "Next",
      loading: "Loading...",
      error: "An error occurred",
      close: "Close"
    }
  },

  am: {
    navigation: {
      submenuHeaders: {
        Featured: {
          title: "Առաջարկվող",
          subitems: [
            { title: 'Նոր ժամանումներ', href: `/new-arrivals` },
            { title: 'Լավագույն վաճառվողներ', href: `/best-sellers` },
            { title: 'Նվերների ուղեցույց', href: `/gift-guide` }
          ]
        },
        Jewelry: {
          title: "Զարդեր",
          subitems: [
            { title: 'Բոլոր զարդերը', href: `/all` },
            { title: 'Մատանիներ', href: `/rings` },
            { title: 'Թևնոցներ', href: `/bracelets` },
            { title: 'Վզնոցներ', href: `/necklaces` },
            { title: 'Շղթաներ', href: `/chains` },
            { title: 'Կախազարդեր', href: `/pendants` }
          ]
        },
        Watches: {
          title: "ժամացույցներ",
          subitems: [
            { title: 'Բոլոր ժամացույցները', href: `/watches` },
            { title: 'Շքեղ ժամացույցներ', href: `/watches/luxury` },
            { title: 'Խելացի ժամացույցներ', href: `/watches/smart` },
            { title: 'Սպորտային ժամացույցներ', href: `/watches/sport` }
          ]
        },
        Collections: {
          title: "Հավաքածուներ",
          subitems: [
            { title: 'Դասական', href: `/collections/classic` },
            { title: 'Ժամանակակից', href: `/collections/modern` },
            { title: 'Սպորտ', href: `/collections/sport` },
            { title: 'Բիզնես', href: `/collections/business` }
          ]
        },
        Occasions: {
          title: "Առիթներ",
          subitems: [
            { title: 'Հարսանիք', href: `/occasions/wedding` },
            { title: 'Խնջույք', href: `/occasions/party` },
            { title: 'Ամենօրյա', href: `/occasions/daily` },
            { title: 'Հատուկ միջոցառումներ', href: `/occasions/special` }
          ]
        }
      },
      men: "ՏՂԱՄԱՐԴԿԱՆՑ",
      women: "ԿԱՆԱՆՑ",
      newIn: "ՆՈՐՈՒՅԹ",
      sale: "ԶԵՂՉ",
      about: "ՄԵՐ ՄԱՍԻՆ",
      search: "Որոնել",
      account: "Իմ էջը",
      cart: "Զամբյուղ"
    },
    common: {
      back: "Հետ",
      next: "Առաջ",
      loading: "Բեռնվում է...",
      error: "Սխալ է տեղի ունեցել",
      close: "Փակել"
    }
  },

  ru: {
    navigation: {
      submenuHeaders: {
        Featured: {
          title: "Рекомендуемые",
          subitems: [
            { title: 'Новинки', href: `/new-arrivals` },
            { title: 'Хиты продаж', href: `/best-sellers` },
            { title: 'Подарочный гид', href: `/gift-guide` }
          ]
        },
        Jewelry: {
          title: "Ювелирные изделия",
          subitems: [
            { title: 'Все украшения', href: `/all` },
            { title: 'Кольца', href: `/rings` },
            { title: 'Браслеты', href: `/bracelets` },
            { title: 'Ожерелья', href: `/necklaces` },
            { title: 'Цепочки', href: `/chains` },
            { title: 'Кулоны', href: `/pendants` }
          ]
        },
        Watches: {
          title: "Часы",
          subitems: [
            { title: 'Все часы', href: `/watches` },
            { title: 'Роскошные часы', href: `/watches/luxury` },
            { title: 'Умные часы', href: `/watches/smart` },
            { title: 'Спортивные часы', href: `/watches/sport` }
          ]
        },
        Collections: {
          title: "Коллекции",
          subitems: [
            { title: 'Классика', href: `/collections/classic` },
            { title: 'Современные', href: `/collections/modern` },
            { title: 'Спорт', href: `/collections/sport` },
            { title: 'Бизнес', href: `/collections/business` }
          ]
        },
        Occasions: {
          title: "Поводы",
          subitems: [
            { title: 'Свадьба', href: `/occasions/wedding` },
            { title: 'Вечеринка', href: `/occasions/party` },
            { title: 'На каждый день', href: `/occasions/daily` },
            { title: 'Особые мероприятия', href: `/occasions/special` }
          ]
        }
      },
      men: "МУЖСКОЕ",
      women: "ЖЕНСКОЕ",
      newIn: "НОВИНКИ",
      sale: "СКИДКИ",
      about: "О НАС",
      search: "Поиск",
      account: "Аккаунт",
      cart: "Корзина"
    },
    common: {
      back: "Назад",
      next: "Вперед",
      loading: "Загрузка...",
      error: "Произошла ошибка",
      close: "Закрыть"
    }
  }
};

export function useTranslations(locale) {
  return dictionaries[locale] || dictionaries.en;
}