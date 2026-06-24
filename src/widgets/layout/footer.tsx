import { appConfig } from "@/shared/app";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center text-[#c9a84c] text-lg font-serif border border-[#c9a84c]/20">
                ДВ
              </div>
              <div>
                <div className="text-white font-serif text-lg">
                  {appConfig.company.shortName}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] font-sans">
                  Medical University
                </div>
              </div>
            </div>
            <p className="text-sm text-white/30 font-serif">
              {appConfig.company.name}
            </p>
            <p className="text-xs text-white/20 mt-2 font-sans">
              ОГРН: {appConfig.company.ogrn} | ИНН: {appConfig.company.inn}
            </p>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-4">Контакты</h5>
            {appConfig.contacts.phones.map((phone, i) => (
              <a
                key={i}
                href={phone.link}
                className="block text-sm hover:text-[#c9a84c] transition font-sans mb-2"
              >
                {phone.label}
              </a>
            ))}
            <a
              href={`mailto:${appConfig.contacts.emails[0]}`}
              className="block text-sm hover:text-[#c9a84c] transition font-sans"
            >
              {appConfig.contacts.emails[0]}
            </a>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-4">Адреса</h5>
            {appConfig.contacts.addresses.map((addr, i) => (
              <p key={i} className="text-sm font-sans mb-2">
                {addr}
              </p>
            ))}
            <p className="text-sm font-sans mt-2">
              {appConfig.contacts.schedule}
            </p>
          </div>

          <div>
            <h5 className="text-white font-serif text-lg mb-4">Сведения</h5>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <a href="#" className="hover:text-[#c9a84c] transition">
                  Документы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c9a84c] transition">
                  Руководство
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c9a84c] transition">
                  Образовательные стандарты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c9a84c] transition">
                  Доступная среда
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/5 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <span>{appConfig.footer.copyright}</span>
          <div className="flex gap-6">
            <a
              href={appConfig.footer.privacyPolicy}
              className="hover:text-[#c9a84c] transition"
            >
              Политика конфиденциальности
            </a>
            <a
              href={appConfig.footer.terms}
              className="hover:text-[#c9a84c] transition"
            >
              Пользовательское соглашение
            </a>
            <a
              href={appConfig.footer.returnPolicy}
              className="hover:text-[#c9a84c] transition"
            >
              Возврат
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
