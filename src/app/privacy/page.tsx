import { appConfig } from "@/shared/app";
import {
    CheckCircle,
    Database,
    Eye,
    FileText,
    Lock,
    Server,
    Shield,
    Users,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Обработка персональных данных | ДВГМУ",
  description:
    "Политика обработки персональных данных в ДВГМУ. Защита и конфиденциальность информации пользователей медицинского университета.",
  keywords: [
    "персональные данные",
    "политика конфиденциальности",
    "ДВГМУ",
    "защита данных",
  ],
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-serif antialiased pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
            <span className="text-[#c9a84c] text-sm uppercase tracking-[0.3em] font-sans font-light">
              Конфиденциальность
            </span>
            <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a2e] mb-4">
            Обработка персональных данных
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a84c] mx-auto"></div>
          <p className="text-gray-500 font-serif text-lg mt-6 max-w-2xl mx-auto">
            Мы ценим ваше доверие и гарантируем защиту ваших персональных данных
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Конфиденциальность",
                desc: "Все данные надежно защищены и не передаются третьим лицам",
              },
              {
                icon: Lock,
                title: "Безопасность",
                desc: "Используем современные методы шифрования и защиты информации",
              },
              {
                icon: Eye,
                title: "Прозрачность",
                desc: "Вы всегда знаете, как и для чего используются ваши данные",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="group p-8 text-center border border-gray-100 hover:border-[#c9a84c]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-[#c9a84c]/20 group-hover:border-[#c9a84c] rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#c9a84c]/10">
                    <Icon
                      className="w-7 h-7 text-[#1a1a2e] group-hover:text-[#c9a84c] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-serif text-[#1a1a2e] text-lg mb-2 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-sans text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f8f6f0] p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-serif text-[#1a1a2e] mb-4">
                  1. Общие положения
                </h2>
                <p className="text-gray-600 font-serif leading-relaxed">
                  Настоящая политика обработки персональных данных определяет
                  порядок обработки и защиты информации о пользователях сайта{" "}
                  {appConfig.company.shortName} и обучающихся в нашем
                  университете. Мы соблюдаем требования Федерального закона от
                  27.07.2006 № 152-ФЗ «О персональных данных».
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[
              {
                icon: Database,
                title: "2. Какие данные мы собираем",
                items: [
                  "Фамилия, имя, отчество",
                  "Контактный телефон и email",
                  "Данные об образовании и квалификации",
                  "Информация о месте работы",
                  "Данные, которые вы указываете в формах обратной связи",
                ],
              },
              {
                icon: Users,
                title: "3. Цели обработки данных",
                items: [
                  "Зачисление на обучение и оформление документов",
                  "Обратная связь и консультации по программам обучения",
                  "Информирование о новых курсах и мероприятиях",
                  "Улучшение качества образовательных услуг",
                  "Ведение статистики и аналитики",
                ],
              },
              {
                icon: Server,
                title: "4. Хранение и защита данных",
                items: [
                  "Данные хранятся на защищенных серверах в России",
                  "Используется шифрование и современные средства защиты",
                  "Доступ к данным имеют только уполномоченные сотрудники",
                  "Данные хранятся в течение срока, установленного законодательством",
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 p-8 md:p-10 hover:border-[#c9a84c]/30 transition"
              >
                <div className="flex items-start gap-4">
                  <section.icon className="w-6 h-6 text-[#c9a84c] flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-serif text-[#1a1a2e] mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-600 font-serif"
                        >
                          <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1a1a2e] text-white p-8 md:p-12">
            <h2 className="text-2xl font-serif text-[#c9a84c] mb-4">
              5. Ваши права
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Получить информацию о своих персональных данных",
                "Требовать изменения или удаления данных",
                "Отозвать согласие на обработку данных",
                "Получить копию своих данных",
                "Обжаловать действия оператора данных",
                "Требовать ограничения обработки данных",
              ].map((right, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 font-serif text-sm">
                    {right}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-8 border border-[#c9a84c]/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
              <span className="text-[#c9a84c] text-sm uppercase tracking-[0.3em] font-sans font-light">
                Контакты
              </span>
              <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
            </div>
            <p className="text-gray-600 font-serif mb-4">
              По вопросам обработки персональных данных вы можете обратиться:
            </p>
            <div className="space-y-2">
              <p className="font-serif text-[#1a1a2e]">
                Email:{" "}
                <a
                  href={`mailto:${appConfig.contacts.emails[0]}`}
                  className="text-[#c9a84c] hover:underline"
                >
                  {appConfig.contacts.emails[0]}
                </a>
              </p>
              <p className="font-serif text-[#1a1a2e]">
                Телефон:{" "}
                <a
                  href={appConfig.contacts.phones[0].link}
                  className="text-[#c9a84c] hover:underline"
                >
                  {appConfig.contacts.phones[0].label}
                </a>
              </p>
              <p className="text-sm text-gray-400 font-sans mt-4">
                Актуальная версия политики от 1 января 2026 года
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#f8f6f0] border-l-4 border-[#c9a84c]">
            <p className="text-sm text-gray-600 font-sans">
              <span className="font-bold text-[#1a1a2e]">Согласие:</span>{" "}
              Продолжая использовать сайт и оставляя свои данные, вы даете
              согласие на обработку персональных данных в соответствии с
              настоящей политикой.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#c9a84c] hover:text-[#d4b85c] transition font-sans text-sm uppercase tracking-widest"
            >
              ← Вернуться на главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
