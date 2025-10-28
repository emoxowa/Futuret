import React from 'react';
import { ServiceCard } from './ServiceCard';
import { services } from '../src/data/services';

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Наши{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
              услуги
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Полный спектр ИТ-услуг для развития вашего бизнеса
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              details={service.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
