export const appConfig = {
  company: {
    name: "ДВГМУ — Дальневосточный государственный медицинский университет",
    shortName: "ДВГМУ",
    ogrn: "1022700000000",
    inn: "2720000000",
    license: "№ 1234 от 01.01.2020",
    tagline: "Первая медицинская школа премиум-класса на Дальнем Востоке",
  },
  contacts: {
    phones: [
      { label: "+7 (4212) 40-14-10", link: "tel:+74212401410" },
      { label: "+7 (914) 543-28-18", link: "tel:+79145432818" },
      { label: "8 (800) 100-72-26", link: "tel:+88001007226" },
    ],
    emails: ["info@meduniversity.ru", "priem@meduniversity.ru"],
    addresses: [
      "г. Хабаровск, ул. Краснореченская, д. 116",
      "г. Хабаровск, ул. Двинская, д. 2",
    ],
    schedule: "пн-пт: 8:00–20:00, сб: 9:00–15:00",
  },
  social: {
    youtube: "https://youtube.com/meduniversity",
    telegram: "https://t.me/meduniversity",
    vk: "https://vk.com/meduniversity",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} ДВГМУ — Дальневосточный государственный медицинский университет`,
    privacyPolicy: "/privacy",
    terms: "/terms",
    returnPolicy: "/return",
  },
};
