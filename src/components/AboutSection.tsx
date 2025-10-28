import React from 'react';
import { AdvantageCard } from './AdvantageCard';
import { advantages } from '../src/data/advantages';

export function AboutSection() {

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            О компании{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
              FUTURET
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Мы — технологический партнер для компаний, стремящихся к цифровой трансформации. 
            Предоставляем полный спектр ИТ-услуг: от аудита и консалтинга до разработки ПО и круглосуточной поддержки.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((advantage) => (
            <AdvantageCard
              key={advantage.id}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
