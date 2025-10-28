import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Hero3D } from './Hero3D';

export function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <Hero3D />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">
              Надежные ИТ-решения для бизнеса
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
              Цифровая трансформация
            </span>
            <br />
            вашего бизнеса
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            Комплексные ИТ-услуги и решения для компаний любого масштаба. От
            аудита инфраструктуры до разработки ПО и круглосуточной поддержки.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleScrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] text-white rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Начать проект</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-muted hover:bg-accent text-foreground rounded-lg transition-colors duration-300"
            >
              Узнать больше
            </a>
          </div>

          {/* Stats
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Проектов' },
              { value: '15+', label: 'Лет опыта' },
              { value: '200+', label: 'Клиентов' },
              { value: '24/7', label: 'Поддержка' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
