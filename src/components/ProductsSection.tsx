import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../src/data/products';

export function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Продуктовые{' '}
            <span className="bg-gradient-to-r from-[var(--color-brand-teal)] to-[var(--color-brand-cyan)] bg-clip-text text-transparent">
              направления
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Поставка и внедрение современного оборудования и ПО
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              icon={product.icon}
              details={product.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
