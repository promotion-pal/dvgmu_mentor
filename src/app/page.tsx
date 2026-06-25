import {
  AwardIcon,
  BookOpen,
  Briefcase,
  Building2,
  ChevronRightIcon,
  ClipboardListIcon,
  GraduationCap,
  Handshake,
  MonitorIcon,
  Shield,
  Stethoscope,
  Target,
  Trophy,
  UserCircleIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { appConfig } from "../shared/app";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-serif antialiased">
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTAgNTB2M0gzN3YtM2gxM3pNNTAgMzh2M0gzN3YtM2gxM3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

        <div className="hidden md:block absolute top-20 right-20 w-64 h-px bg-gradient-to-l from-[#c9a84c] to-transparent"></div>
        <div className="hidden md:block absolute bottom-20 left-20 w-64 h-px bg-gradient-to-r from-[#c9a84c] to-transparent"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#c9a84c]/5 rounded-full"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 sm:pt-32 pb-12 sm:pb-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-[2px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Est. 2026
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#c9a84c]"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1]">
              Медицинское
              <br />
              <span className="text-[#c9a84c] relative">
                наставничество
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#c9a84c]/30"></span>
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/60 font-serif font-light mt-4 sm:mt-8 max-w-2xl leading-relaxed">
              {appConfig.company.tagline}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] text-base sm:text-xl flex-shrink-0">
                  01
                </div>
                <div>
                  <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans">
                    Длительность
                  </div>
                  <div className="text-white font-serif text-sm sm:text-lg">
                    1 месяц (144 ч)
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] text-base sm:text-xl flex-shrink-0">
                  02
                </div>
                <div>
                  <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans">
                    Документ
                  </div>
                  <div className="text-white font-serif text-sm sm:text-lg">
                    Удостоверение о ПК
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">
              <Link
                href="#form"
                className="bg-[#c9a84c] text-[#1a1a2e] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-[#d4b85c] transition shadow-2xl hover:shadow-[#c9a84c]/20 flex-1 sm:flex-none text-center"
              >
                Записаться на курс
              </Link>
              <a
                href="#program"
                className="border border-white/20 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 transition flex-1 sm:flex-none text-center"
              >
                Изучить программу
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Процесс обучения
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4">
              Как проходит обучение
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
            <p className="text-gray-500 font-serif text-base sm:text-lg mt-6 max-w-2xl mx-auto">
              Пошаговый путь от знакомства с программой до получения
              заслуженного удостоверения
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 relative">
              {[
                {
                  icon: ClipboardListIcon,
                  step: "01",
                  title: "Оформление заявки",
                  desc: "Оставьте заявку на сайте, и наш методист свяжется с вами для консультации и оформления документов",
                  duration: "1 день",
                },
                {
                  icon: UserCircleIcon,
                  step: "02",
                  title: "Личный кабинет",
                  desc: "Получите доступ к платформе с обучающими материалами, вебинарами и общением с кураторами",
                  duration: "Сразу после оплаты",
                },
                {
                  icon: BookOpen,
                  step: "03",
                  title: "Теоретические модули",
                  desc: "Изучайте лекции в PDF, смотрите вебинары и проходите тесты для закрепления знаний",
                  duration: "2 недели",
                },
                {
                  icon: MonitorIcon,
                  step: "04",
                  title: "Практические задания",
                  desc: "Решайте реальные кейсы, разбирайте ситуации и получайте обратную связь от экспертов",
                  duration: "1 неделя",
                },
                {
                  icon: UsersIcon,
                  step: "05",
                  title: "Поддержка куратора",
                  desc: "Персональный куратор помогает на всех этапах, проверяет работы и дает рекомендации",
                  duration: "Весь курс",
                },
                {
                  icon: AwardIcon,
                  step: "06",
                  title: "Финальная аттестация",
                  desc: "Сдайте итоговое тестирование и получите удостоверение о повышении квалификации",
                  duration: "1 день",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <article
                    key={i}
                    className="group relative bg-white p-6 sm:p-8 border overflow-hidden border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/50 to-[#c9a84c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[#c9a84c] font-serif text-xl sm:text-2xl font-light">
                        {item.step}
                      </span>
                      <span className="text-[10px] sm:text-xs font-sans text-gray-400 uppercase tracking-widest">
                        {item.duration}
                      </span>
                    </div>

                    <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 flex items-center justify-center bg-[#f8f6f0] group-hover:bg-[#c9a84c]/10 transition-colors duration-300">
                      <Icon
                        className="w-5 h-5 sm:w-7 sm:h-7 text-[#1a1a2e] group-hover:text-[#c9a84c] transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-serif text-[#1a1a2e] text-lg sm:text-xl mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {i < 5 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#c9a84c]/30 group-hover:text-[#c9a84c]/60 transition-colors duration-300">
                        <ChevronRightIcon className="w-6 h-6" />
                      </div>
                    )}

                    <div className="absolute -bottom-2 -right-2 text-[#c9a84c]/5 font-serif text-6xl sm:text-7xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 sm:px-8 py-4 bg-white border border-[#c9a84c]/20 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#c9a84c] flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-sans text-[#1a1a2e]">
                    Полная поддержка
                  </span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#c9a84c] flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-sans text-[#1a1a2e]">
                    Гибкий график
                  </span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#c9a84c] flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm font-sans text-[#1a1a2e]">
                    Гос. удостоверение
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Преимущества
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4">
              В чем наша особенность?
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
            <p className="text-gray-500 font-serif text-base sm:text-lg mt-6 max-w-2xl mx-auto">
              Пространство для тех, кто ценит не только образование, но и
              искусство безупречного развития в окружении единомышленников
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Академия чемпионского класса",
                desc: "Программы высшего уровня подготовки",
              },
              {
                icon: Shield,
                title: "Закрытая атмосфера",
                desc: "Эксклюзивное сообщество профессионалов",
              },
              {
                icon: Stethoscope,
                title: "Наставники мирового уровня",
                desc: "Эксперты с международным опытом",
              },
              {
                icon: Building2,
                title: "Премиум-инфраструктура",
                desc: "Современные центры и лаборатории",
              },
              {
                icon: Briefcase,
                title: "Бизнес-зона для встреч",
                desc: "Пространство для нетворкинга",
              },
              {
                icon: Trophy,
                title: "Мероприятия и конференции",
                desc: "Ежегодные профессиональные события",
              },
              {
                icon: Handshake,
                title: "Партнерская программа",
                desc: "Сотрудничество с лидерами отрасли",
              },
              {
                icon: Target,
                title: "Клубные развлечения",
                desc: "Баланс работы и отдыха",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 sm:p-8 text-center bg-white border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 w-20 sm:w-24 h-20 sm:h-24 bg-[#c9a84c]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center border-2 border-[#c9a84c]/20 group-hover:border-[#c9a84c] rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c9a84c]/10">
                      <Icon
                        className="w-6 h-6 sm:w-7 sm:h-7 text-[#1a1a2e] group-hover:text-[#c9a84c] transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="font-serif text-[#1a1a2e] text-base sm:text-lg mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-3 right-4 text-[#c9a84c]/10 font-serif text-4xl sm:text-6xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#1a1a2e] relative">
                  <img
                    src="/intro.jpg"
                    alt="ДВГМУ — Дальневосточный государственный медицинский университет"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 via-transparent to-[#1a1a2e]/20"></div>

                  <div className="absolute inset-3 sm:inset-4 border border-[#c9a84c]/20 rounded-xl pointer-events-none"></div>

                  <div className="absolute top-3 sm:top-6 left-3 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#c9a84c]/40"></div>
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#c9a84c]/40"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#c9a84c]/40"></div>
                  <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#c9a84c]/40"></div>
                </div>

                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border-2 border-[#c9a84c]/20 rounded-full"></div>
                <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-[#c9a84c]/20 rounded-full"></div>

                <div className="absolute top-1/2 -right-3 sm:-right-5 w-2 sm:w-3 h-2 sm:h-3 bg-[#c9a84c] rounded-full"></div>
                <div className="absolute bottom-1/2 -left-3 sm:-left-5 w-2 sm:w-3 h-2 sm:h-3 bg-[#c9a84c]/50 rounded-full"></div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                О нас
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4 sm:mb-6">
                Медицинское образование
                <br />
                <span className="text-[#c9a84c]">нового поколения</span>
              </h2>
              <p className="text-gray-600 font-serif text-base sm:text-lg leading-relaxed">
                Наш университет — это эксклюзивное пространство для будущих
                лидеров здравоохранения. Мы объединяем вековые традиции
                медицинского образования с инновационными методиками
                преподавания.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#c9a84c]">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-sans">
                    Трудоустройство
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#c9a84c]">
                    200+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-sans">
                    Экспертов-преподавателей
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#c9a84c]">
                    25
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-sans">
                    Лет на рынке
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-[#c9a84c]">
                    5000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-sans">
                    Выпускников
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="program">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
              Программа
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3">
              Структура курса
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto mt-4"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
            <div className="lg:w-2/3 w-full">
              <div className="space-y-4 sm:space-y-6">
                {[
                  "Модуль 1. О наставничестве в медицинской организации",
                  "Модуль 2. Участники наставничества",
                  "Модуль 3. Цели и задачи наставничества",
                  "Модуль 4. Рекомендации по организации процесса",
                  "Модуль 5. Модели наставничества",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 border-b border-gray-100 group hover:border-[#c9a84c]/30 transition"
                  >
                    <span className="text-[#c9a84c] font-serif text-xl sm:text-2xl min-w-[40px] sm:min-w-[60px] font-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[#1a1a2e] font-serif text-base sm:text-lg">
                        {item}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1">
                        {i === 0 && "Введение в систему наставничества"}
                        {i === 1 && "Роли и ответственности участников"}
                        {i === 2 && "Постановка целей и задач"}
                        {i === 3 && "Практические рекомендации"}
                        {i === 4 && "Различные подходы к наставничеству"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 border-2 border-[#c9a84c]/20 bg-[#f8f6f0]">
                <p className="text-[#1a1a2e] font-serif text-base sm:text-lg">
                  🎁 БОНУС: Пакет документов (положения, приказы, анкеты)
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
              <div className="sticky top-32 bg-[#1a1a2e] p-6 sm:p-8 text-white">
                <div className="text-center">
                  <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans">
                    Инвестиция в развитие
                  </span>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#c9a84c] mt-3 sm:mt-4">
                    15 500 ₽
                  </div>
                  <div className="text-white/40 text-xs sm:text-sm line-through">
                    22 500 ₽
                  </div>
                  <p className="text-white/60 text-xs sm:text-sm mt-3 font-sans">
                    Рассрочка <span className="text-[#c9a84c]">0%</span> на 6
                    месяцев
                  </p>
                  <hr className="border-white/10 my-4 sm:my-6" />
                  <div className="text-left space-y-2 sm:space-y-3 text-xs sm:text-sm font-sans">
                    <div className="flex justify-between">
                      <span className="text-white/60">Форма обучения</span>
                      <span className="text-white">Заочная с ДОТ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Специальность</span>
                      <span className="text-white">Все специальности</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Документ</span>
                      <span className="text-white">Удостоверение о ПК</span>
                    </div>
                  </div>
                  <a
                    href="#form"
                    className="block w-full bg-[#c9a84c] text-[#1a1a2e] text-center py-3 sm:py-3.5 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm mt-4 sm:mt-6 hover:bg-[#d4b85c] transition"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#f8f6f0]" id="teachers">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
              Эксперты
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3">
              Наставники и преподаватели
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { name: "Виноградова Т.А.", title: "к.м.н., невролог" },
              { name: "Ольга Ржавцева-Ферж", title: "Клинический психолог" },
              { name: "Светлана Решетко", title: "Практикующий психолог" },
              { name: "Вильгельм Вольман", title: "Эксперт в сфере ИИ" },
              { name: "Александр Силяев", title: "Специалист по безопасности" },
              { name: "Денис Скирда", title: "Юрист, 25+ лет" },
              { name: "Наталья Купкина", title: "Директор центра" },
              { name: "Екатерина Смирнова", title: "Специалист юротдела" },
            ].map((teacher, i) => (
              <div
                key={i}
                className="group text-center p-4 sm:p-8 bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#c9a84c]/30"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full border-2 border-[#c9a84c]/20 group-hover:border-[#c9a84c] transition flex items-center justify-center text-xl sm:text-3xl font-serif text-[#1a1a2e] bg-[#f8f6f0]">
                  {teacher.name[0]}
                </div>
                <h4 className="font-serif text-[#1a1a2e] text-sm sm:text-lg mt-2 sm:mt-4 group-hover:text-[#c9a84c] transition">
                  {teacher.name}
                </h4>
                <p className="text-gray-400 text-[10px] sm:text-sm font-sans mt-1">
                  {teacher.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="faq">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
              Информация
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3">
              Часто задаваемые вопросы
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {[
              {
                q: "Как проводится обучение?",
                a: "Обучение проходит в дистанционном формате на нашей платформе. Вы смотрите лекции, выполняете задания и проходите тесты в удобное время.",
              },
              {
                q: "Какой документ выдаётся?",
                a: "Выдаётся удостоверение о повышении квалификации установленного образца и именной сертификат университета.",
              },
              {
                q: "Кто может пройти программу?",
                a: "Программа для руководителей, HR-специалистов, врачей и всех, кто планирует развивать систему наставничества в медорганизациях.",
              },
              {
                q: "Есть ли поддержка во время курса?",
                a: "Да, за вами закрепляется персональный куратор и эксперты, которые проверяют работы и дают обратную связь.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border-b border-gray-100 py-4 sm:py-6 open:border-[#c9a84c]/30"
              >
                <summary className="flex justify-between items-center cursor-pointer text-[#1a1a2e] font-serif text-sm sm:text-lg hover:text-[#c9a84c] transition">
                  <span className="pr-4">{item.q}</span>
                  <span className="text-[#c9a84c] text-xl sm:text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-gray-500 font-serif text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#1a1a2e] text-white" id="form">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
              Связь с нами
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 mb-4">
              Остались вопросы?
            </h2>
            <p className="text-white/60 font-serif text-base sm:text-lg">
              Напишите нам, и наши методисты оперативно ответят
            </p>

            <form className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 text-left">
              <div>
                <label className="text-white/40 text-[10px] sm:text-sm uppercase tracking-widest font-sans block mb-1 sm:mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  placeholder="Имя и фамилия"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-white/40 text-[10px] sm:text-sm uppercase tracking-widest font-sans block mb-1 sm:mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="text-white/40 text-[10px] sm:text-sm uppercase tracking-widest font-sans block mb-1 sm:mb-2">
                  Ваш вопрос
                </label>
                <textarea
                  placeholder="Опишите ваш запрос..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base resize-none"
                />
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 border-white/20 bg-white/5 checked:bg-[#c9a84c] rounded flex-shrink-0"
                />
                <label className="text-white/40 text-[10px] sm:text-sm font-sans">
                  Я даю согласие на обработку персональных данных
                </label>
              </div>
              <button className="w-full bg-[#c9a84c] text-[#1a1a2e] py-3 sm:py-4 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-[#d4b85c] transition">
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
