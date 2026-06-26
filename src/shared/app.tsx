export const appConfig = {
  company: {
    name: "ДВГМУ — Дальневосточный государственный медицинский университет",
    shortName: "ДВГМУ",
    ogrn: "1032700296078",
    inn: "2721020896",
  },
  contacts: {
    phones: [
      { label: "+7 (4212) 76-13-99", link: "tel:+74212761399" },
      { label: "+7 (4212) 70-35-59", link: "tel:+74212703559" },
      { label: "+7 (4212) 40-14-10", link: "tel:+74212401410" },
      { label: "+7 (914) 543-28-18", link: "tel:+79145432818" },
    ],
    emails: [
      "fpk@fesmu.ru",
      "kiko@fesmu.ru",
      "info@meduniversity.ru",
      "priem@meduniversity.ru",
    ],
    addresses: ["г. Хабаровск, ул. Муравьева-Амурского, 35"],
    schedule: "пн-пт: 8:00–20:00, сб: 9:00–15:00",
  },
  social: {},
  footer: {
    copyright: `© ${new Date().getFullYear()} ДВГМУ — Дальневосточный государственный медицинский университет`,
    privacyPolicy: "/privacy",
    // terms: "/terms",
    // returnPolicy: "/return",
  },
};
