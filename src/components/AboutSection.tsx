import React from 'react';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import { AdvantageCard } from './AdvantageCard';
import { advantages } from '../src/data/advantages';

export function AboutSection() {
  const industries = [
    { icon: Building2, name: 'Финансы' },
    { icon: Users, name: 'Ритейл' },
    { icon: TrendingUp, name: 'Производство' },
    { icon: Award, name: 'Госсектор' },
  ];

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
            Предоставляем полный спектр ИТ-услуг: от аудита и консалтинга до разработки и круглосуточной поддержки.
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

        {/* Industry Expertise */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Отраслевая экспертиза
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">{industry.name}</span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-foreground/70 mt-8 max-w-2xl mx-auto">
            Наши инженеры имеют успешный опыт реализации проектов в различных отраслях, 
            понимают специфику бизнеса и готовы предложить оптимальные решения.
          </p>
        </div>
      </div>
    </section>
  );
}
