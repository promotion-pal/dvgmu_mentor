import {
  ArrowRightIcon,
  AwardIcon,
  BuildingIcon,
  CheckCircleIcon,
  Clock,
  FileCheckIcon,
  FileText,
  GraduationCap,
  Mail,
  Phone,
  TargetIcon,
  User,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { appConfig } from "../shared/app";

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-serif antialiased">
      {/* ===== ГЕРОЙ ===== */}
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
                Дополнительное профессиональное образование
              </span>
              <span className="w-8 sm:w-12 h-[2px] bg-[#c9a84c]"></span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1]">
              Организация системы
              <br />
              <span className="text-[#c9a84c] relative">
                наставничества
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#c9a84c]/30"></span>
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl block mt-2 text-white/80">
                в учреждениях здравоохранения
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl text-white/60 font-serif font-light mt-4 sm:mt-8 max-w-2xl leading-relaxed">
              Дополнительная профессиональная программа повышения квалификации
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] text-base sm:text-xl flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans">
                    Объем
                  </div>
                  <div className="text-white font-serif text-sm sm:text-lg">
                    18 академических часов
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] text-base sm:text-xl flex-shrink-0">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
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
                href="#about"
                className="border border-white/20 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 transition flex-1 sm:flex-none text-center"
              >
                Смотреть программу
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== НАВИГАЦИОННОЕ ОГЛАВЛЕНИЕ ===== */}
      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-10 sm:w-16 h-[1px] bg-[#c9a84c]"></span>
                <span className="text-[#c9a84c] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-light">
                  Содержание
                </span>
                <span className="w-10 sm:w-16 h-[1px] bg-[#c9a84c]"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1a1a2e]">
                Что вы найдете на этой странице
              </h3>
              <p className="text-gray-400 font-sans text-xs sm:text-sm mt-2">
                Быстрая навигация по основным разделам
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  label: "О центре",
                  icon: BuildingIcon,
                  href: "#about-center",
                  desc: "Дальневосточный учебно-методический центр по наставничеству в здравоохранении создан на базе ДВГМУ. Объединяет ведущих экспертов и практиков для подготовки квалифицированных наставников.",
                  stats: ["Основан в 2026", "Ведущие эксперты ДВГМУ"],
                },
                {
                  label: "О программе",
                  icon: TargetIcon,
                  href: "#about",
                  desc: "Дополнительная профессиональная программа повышения квалификации. Совершенствование компетенций в области организации, внедрения и сопровождения системы наставничества.",
                  stats: ["Заочная форма с ДОТ"],
                },
                {
                  label: "Документы",
                  icon: FileCheckIcon,
                  href: "#documents",
                  desc: "Нормативно-правовая база наставничества: Федеральный закон № 424-ФЗ, Положение о наставничестве (приказ № 167н), Заявка на обучение в ИНПОА.",
                  stats: ["Основные документы"],
                },
                {
                  label: "Состав УМЦ",
                  icon: UsersIcon,
                  href: "#teachers",
                  desc: "Учебно-методический центр возглавляют ведущие специалисты ДВГМУ: проректоры, директора институтов, деканы факультетов — 6 экспертов.",
                  stats: ["Доктора и кандидаты наук"],
                },
                {
                  label: "Контакты",
                  icon: Phone,
                  href: "#contacts",
                  desc: "По вопросам образовательной деятельности и методического сопровождения наставников вы можете обратиться по указанным телефонам и электронной почте.",
                  stats: ["Телефон и email"],
                },
                {
                  label: "Вопросы",
                  icon: AwardIcon,
                  href: "#faq",
                  desc: "Ответы на часто задаваемые вопросы о наставничестве: кто должен проходить, сколько длится, где можно проходить, что будет при непрохождении.",
                  stats: ["Подробные ответы"],
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group relative p-6 sm:p-8 bg-white border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block overflow-hidden"
                  >
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#c9a84c]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10 flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#f8f6f0] group-hover:bg-[#c9a84c]/10 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#c9a84c] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-lg sm:text-xl font-serif text-[#1a1a2e] group-hover:text-[#c9a84c] transition-colors duration-300 font-semibold">
                        {item.label}
                      </span>
                    </div>

                    <p className="relative z-10 text-gray-500 font-sans text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="relative z-10 flex flex-wrap gap-3">
                      {item.stats.map((stat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-sans text-[#c9a84c] bg-[#c9a84c]/5 px-3 py-1 rounded-full"
                        >
                          <span className="w-1 h-1 bg-[#c9a84c] rounded-full"></span>
                          {stat}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-10 mt-4 flex items-center gap-2 text-[#c9a84c] font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Перейти к разделу</span>
                      <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    <div className="absolute -bottom-2 -right-2 text-[#c9a84c]/5 font-serif text-7xl font-bold">
                      {String(
                        [
                          "О центре",
                          "О программе",
                          "Документы",
                          "Состав УМЦ",
                          "Контакты",
                          "Вопросы",
                        ].indexOf(item.label) + 1,
                      ).padStart(2, "0")}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="about-center">
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
                Дальневосточный учебно-методический центр
                <br />
                <span className="text-[#c9a84c]">по наставничеству</span>
              </h2>
              <p className="text-gray-600 font-serif text-base sm:text-lg leading-relaxed">
                Дальневосточный учебно-методический центр по наставничеству в
                здравоохранении создан на базе ДВГМУ. Мы объединяем ведущих
                экспертов и практиков здравоохранения для подготовки
                квалифицированных наставников, способных эффективно сопровождать
                молодых специалистов в медицинских организациях.
              </p>
              <p className="text-gray-500 font-serif text-base sm:text-lg leading-relaxed mt-4">
                Наша миссия — создание системы наставничества, которая
                обеспечивает качественную адаптацию и профессиональное развитие
                медицинских кадров на Дальнем Востоке.
              </p>

              <div>
                <div className="text-2xl sm:text-3xl font-serif text-[#c9a84c]">
                  2026
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-sans">
                  Год основания
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#f8f6f0]" id="about">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                О программе
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4">
              Цель программы
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 border border-gray-100 mb-8">
              <p className="text-gray-600 font-serif text-base sm:text-lg leading-relaxed">
                Совершенствование компетенций слушателей в области организации,
                внедрения и сопровождения системы наставничества в учреждениях
                здравоохранения, включая разработку локальных документов,
                сопровождение адаптации молодых специалистов и оценку
                эффективности наставнической работы.
              </p>
              <p className="text-gray-500 font-serif text-sm mt-4">
                Программа ориентирована на практическое применение: от
                нормативной базы и модели наставничества до индивидуального
                плана сопровождения и итогового анализа результатов.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-[#1a1a2e] text-center mb-6">
              Планируемые результаты
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Организовывать систему наставничества в подразделении или учреждении",
                "Разрабатывать положение, приказ, план наставничества и индивидуальный маршрут адаптации",
                "Распределять функции между наставником, руководителем и кадровой службой",
                "Проводить сопровождение, обратную связь и оценку результатов адаптации",
                "Проводить диагностику и коррекцию процесса психологической адаптации на рабочем месте",
                "Использовать показатели мониторинга для анализа эффективности наставничества",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 border border-gray-100 hover:border-[#c9a84c]/30 transition bg-white hover:shadow-md"
                >
                  <CheckCircleIcon className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-serif text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="documents">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Документы
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h3 className="text-2xl font-serif text-[#1a1a2e] text-center mb-8">
              Нормативно-правовая база
            </h3>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Заявка на цикл ИНПОА 2026",
                  description:
                    "Документ для подачи заявки на обучение по программе наставничества в Институте непрерывного профессионального образования и аккредитации (ИНПОА)",
                  file: "Заявка на цикл ИНПОА 2026.doc",
                  icon: "📄",
                },
                {
                  title: "Положение о наставничестве",
                  description:
                    "Утверждено приказом Минздрава России от 5 марта 2026 года № 167н. Регулирует организацию и проведение наставничества в медицинских организациях",
                  file: "Положение о наставничестве от 5.03.2026 № 167н.pdf",
                  icon: "⚖️",
                },
                {
                  title: "Федеральный закон № 424-ФЗ",
                  description:
                    "Федеральный закон от 17 ноября 2025 года № 424-ФЗ «О внесении изменений в отдельные законодательные акты Российской Федерации»",
                  file: "17 ноября 2025 года № 424-ФЗ .pdf",
                  icon: "📜",
                },
              ].map((doc, i) => (
                <a
                  key={i}
                  href={`/documents/${doc.file}`}
                  download
                  className="group p-6 bg-[#f8f6f0] border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 hover:shadow-xl block"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {doc.icon}
                  </div>
                  <h4 className="font-serif text-[#1a1a2e] text-base sm:text-lg mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {doc.title}
                  </h4>
                  <p className="text-gray-500 font-sans text-xs sm:text-sm leading-relaxed">
                    {doc.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[#c9a84c] font-sans text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Скачать</span>
                    <span className="text-lg">↓</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-[#f8f6f0]" id="teachers">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                ДВГМУ
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4">
              Состав учебно-методического центра
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Злаказов Олег Владимирович",
                  position:
                    "Руководитель УМЦ — и.о. проректора по лечебной работе и региональному развитию здравоохранения ФГБОУ ВО ДВГМУ Минздрава России, к.м.н.",
                },
                {
                  name: "Жмеренецкий Константин Вячеславович",
                  position:
                    "Заместитель руководителя УМЦ — и.о. проректора по учебно-воспитательной работе и молодежной политике, член-корреспондент РАН, д.м.н.",
                },
                {
                  name: "Дорофеев Александр Леонидович",
                  position: "Директор ИНПОА, к.м.н.",
                },
                {
                  name: "Лемещенко Ольга Валентиновна",
                  position:
                    "Декан ФОЦКТ, доцент кафедры общественного здоровья и здравоохранения, к.м.н.",
                },
                {
                  name: "Казакевич Елена Васильевна",
                  position:
                    "Зам. декана по работе с обучающимися, д.м.н, профессор",
                },
                {
                  name: "Пестушко Наталья Анатольевна",
                  position: "Зам. директора ИНПОА",
                },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-white p-6 border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-6 h-6 text-[#c9a84c]" />
                  </div>
                  <h4 className="font-serif text-[#1a1a2e] text-base font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 font-sans text-xs sm:text-sm mt-2 leading-relaxed">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 bg-white" id="contacts">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Контакты
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3 mb-4">
              Сопровождение наставничества
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
            <p className="text-gray-500 font-serif text-sm sm:text-base mt-4">
              По всем вопросам организации и проведения наставничества вы можете
              обратиться в Дальневосточный учебно-методический центр
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            <div className="group p-8 border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 hover:shadow-xl bg-[#f8f6f0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                  <GraduationCap className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3 className="font-serif text-[#1a1a2e] text-lg group-hover:text-[#c9a84c] transition-colors duration-300">
                  Образовательная деятельность
                </h3>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:fpk@fesmu.ru"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>fpk@fesmu.ru</span>
                </a>
                <a
                  href="tel:+74212761399"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>(4212) 76-13-99</span>
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-400 font-sans text-xs">
                  Зачисление на обучение, оформление документов
                </p>
              </div>
            </div>

            <div className="group p-8 border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-300 hover:shadow-xl bg-[#f8f6f0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c9a84c]/10 rounded-full flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                  <UsersIcon className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3 className="font-serif text-[#1a1a2e] text-lg group-hover:text-[#c9a84c] transition-colors duration-300">
                  Методическое сопровождение
                </h3>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:kiko@fesmu.ru"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>kiko@fesmu.ru</span>
                </a>
                <a
                  href="tel:+74212703559"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>(4212) 70-35-59</span>
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-400 font-sans text-xs">
                  Помощь наставникам, методические консультации
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 p-8 border border-[#c9a84c]/20 bg-white hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-serif text-[#1a1a2e] text-center text-lg mb-6">
              Контакты{" "}
              <span className="text-[#c9a84c]">
                {appConfig.company.shortName}
              </span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {appConfig.contacts.phones.map((phone, i) => (
                <a
                  key={i}
                  href={phone.link}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>{phone.label}</span>
                </a>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              {appConfig.contacts.emails.map((email, i) => (
                <a
                  key={i}
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#c9a84c] transition font-sans text-sm group"
                >
                  <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  <span>{email}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-12 sm:py-24 bg-[#f8f6f0]" id="faq">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
                Информация
              </span>
              <span className="w-6 sm:w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1a1a2e] mt-3">
              Все о наставничестве
            </h2>
            <div className="w-16 sm:w-20 h-[2px] bg-[#c9a84c] mx-auto mt-4"></div>
            <p className="text-gray-500 font-serif text-base sm:text-lg mt-6 max-w-2xl mx-auto">
              Цель наставничества — создать условия для быстрой адаптации
              молодого специалиста к реальным условиям труда, углубить его
              знания через передачу практического опыта и развить внутреннюю
              дисциплину, ориентируя на долгосрочное сотрудничество.
            </p>
            <p className="text-gray-400 font-sans text-sm mt-4">
              Федеральный закон от 17 ноября 2025 N 424-ФЗ «О внесении изменений
              в отдельные законодательные акты Российской Федерации»
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {[
              {
                q: "Кто должен проходить наставничество?",
                a: "Наставничество проходят выпускники медицинских колледжей, специалитета и ординатуры, которые впервые прошли первичную или первичную специализированную аккредитацию после 1 марта 2026 года, независимо от формы обучения (бюджетной или платной).",
              },
              {
                q: "Нужно ли проходить наставничество, если диплом получен раньше 1 марта 2026 года?",
                a: "Требование распространяется только на специалистов, которые получили диплом и впервые прошли аккредитацию после 1 марта 2026 года.",
              },
              {
                q: "Где можно проходить наставничество?",
                a: "Наставничество проходит в медицинских организациях, работающих в системе обязательного медицинского страхования (ОМС). Списки таких организаций размещены на сайтах региональных органов исполнительной власти в сфере здравоохранения. Специалисты, обучавшиеся по целевому направлению, проходят наставничество в организации, с которой заключен договор.",
              },
              {
                q: "Можно ли изменить место прохождения наставничества?",
                a: "Да. Место наставничества можно менять. Главное условие — суммарно пройти установленный срок наставничества, определенный для специальности.",
              },
              {
                q: "Сколько длится наставничество?",
                a: "Срок наставничества может составлять до 3 лет. Конкретная продолжительность зависит от специальности и места работы, устанавливается Министерством здравоохранения Российской Федерации (приказ №166н от 05.03.26).",
              },
              {
                q: "На какой объем занятости нужно работать наставляемому? И возможно ли совместительство?",
                a: "Наставничество осуществляется только по основному месту работы на любой объем занятости, определенный Трудовым кодексом РФ. Совместительство разрешено, в том числе в медицинских организациях, не участвующих в программах госгарантий.",
              },
              {
                q: "Можно ли продолжить обучение на следующем уровне образования (ординатура-аспирантура), если не прошел наставничество?",
                a: "Да, можно. Во время обучения в ординатуре специалист может работать по специальности, полученной ранее, и проходить наставничество. Решение учиться и работать — добровольное. По окончании обучения в ординатуре также предусмотрено наставничество.",
              },
              {
                q: "Есть ли сокращенные сроки наставничества?",
                a: "Да. Сокращенный срок может применяться для специалистов, работающих в небольших населенных пунктах, городах с населением до 50 тысяч человек, а также в новых регионах.",
              },
              {
                q: "Что будет, если не пройти наставничество?",
                a: "Наставничество является обязательным условием для допуска к периодической аккредитации. Если специалист в течение 5 лет после первичной или первичной специализированной аккредитации не прошел установленный период наставничества, он не допускается к периодической аккредитации и должен будет заново пройти процедуру первичной аккредитации. Штрафы за непрохождение наставничества законом не установлены.",
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#c9a84c] text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-sans font-light">
              Запись на обучение
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mt-3 mb-4">
              Заявка на обучение
            </h2>
            <p className="text-white/60 font-serif text-base sm:text-lg">
              Заполните форму, и наши методисты свяжутся с вами для оформления
              документов
            </p>
          </div>

          <form className="mt-8 sm:mt-12 max-w-3xl mx-auto space-y-4 sm:space-y-6 text-left">
            <div className="bg-white/5 p-4 sm:p-6 border border-white/10">
              <h3 className="text-[#c9a84c] font-serif text-base sm:text-lg mb-4">
                Информация о заявителе
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Ф.И.О. полностью
                  </label>
                  <input
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Место жительства
                  </label>
                  <input
                    type="text"
                    placeholder="г. Хабаровск, ул. ..."
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Место работы
                  </label>
                  <input
                    type="text"
                    placeholder="Название организации"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Должность
                  </label>
                  <input
                    type="text"
                    placeholder="Ваша должность"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Контактный телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 sm:p-6 border border-white/10">
              <h3 className="text-[#c9a84c] font-serif text-base sm:text-lg mb-4">
                Информация об организации (для юридических лиц)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Организация, Ф.И.О. руководителя, должность
                  </label>
                  <input
                    type="text"
                    placeholder="ООО ... , Иванов И.И., главный врач"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Юридический адрес ЛПУ
                  </label>
                  <input
                    type="text"
                    placeholder="г. Хабаровск, ул. ..."
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-sans block mb-1">
                    Банковские реквизиты ЛПУ
                  </label>
                  <input
                    type="text"
                    placeholder="ИНН, КПП, БИК, р/с"
                    className="w-full bg-white/5 border border-white/10 rounded-none px-4 sm:px-6 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition font-serif text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-3">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5 border-white/20 bg-white/5 checked:bg-[#c9a84c] rounded flex-shrink-0"
              />
              <label className="text-white/40 text-[10px] sm:text-sm font-sans">
                Я даю согласие на{" "}
                <Link
                  href="/privacy"
                  className="text-[#c9a84c] hover:text-[#d4b85c] transition hover:underline"
                  target="_blank"
                >
                  обработку персональных данных
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c9a84c] text-[#1a1a2e] py-3 sm:py-4 rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm hover:bg-[#d4b85c] transition"
            >
              Отправить заявку
            </button>

            <div className="text-center text-white/30 text-xs font-sans">
              Заявка направляется по электронной почте:{" "}
              <a
                href="mailto:fpk@mail.fesmu.ru"
                className="text-[#c9a84c] hover:underline"
              >
                fpk@mail.fesmu.ru
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
