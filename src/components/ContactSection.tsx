import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Москва, ул. Тверская, д. 1',
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@futuret.ru',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00-18:00',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
              с нами
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-foreground/70">{item.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 rounded-xl bg-muted">
              <h4 className="font-semibold mb-3">Почему выбирают нас?</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Быстрый ответ на заявку</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Индивидуальный подход</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Прозрачное ценообразование</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Гарантия качества</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Оставить заявку</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
