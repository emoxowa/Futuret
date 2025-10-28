import React from 'react';
import { partners } from '../src/data/partners';

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Наши{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
              партнеры
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Работаем с ведущими мировыми производителями ИТ-решений
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[var(--color-brand-cyan)]/10 to-[var(--color-brand-teal)]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] bg-clip-text text-transparent">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {partner.name}
                </p>
                <p className="text-xs text-foreground/50 mt-1 capitalize">
                  {partner.category === 'infrastructure' && 'Инфраструктура'}
                  {partner.category === 'security' && 'Безопасность'}
                  {partner.category === 'software' && 'ПО'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Статус сертифицированного партнера позволяет нам предлагать лучшие условия 
            на поставку оборудования и лицензий, а также гарантировать высокое качество внедрения.
          </p>
        </div>
      </div>
    </section>
  );
}
