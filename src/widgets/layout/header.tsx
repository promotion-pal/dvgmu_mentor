import { appConfig } from "@/shared/app";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#1a1a2e] text-[#c9a84c] rounded-full flex items-center justify-center text-xl font-serif font-bold border-2 border-[#c9a84c]/30">
            ДВ
          </div>
          <div>
            <div className="text-lg font-serif font-bold text-[#1a1a2e] tracking-wide">
              {appConfig.company.shortName}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] font-sans">
              Medical University
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-widest font-sans">
          {[
            "О нас",
            "Программы",
            "Преподаватели",
            "Мероприятия",
            "Контакты",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#1a1a2e] hover:text-[#c9a84c] transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#c9a84c] after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={appConfig.contacts.phones[0].link}
            className="hidden md:flex items-center gap-2 text-sm font-sans text-[#1a1a2e] hover:text-[#c9a84c] transition"
          >
            <span className="text-[#c9a84c]">✦</span>
            {appConfig.contacts.phones[0].label}
          </a>
          <button className="bg-[#1a1a2e] text-white px-6 py-2.5 rounded-full text-sm font-sans uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#1a1a2e] transition-all duration-300 shadow-lg hover:shadow-xl">
            Вступить
          </button>
        </div>
      </div>
    </header>
  );
};
