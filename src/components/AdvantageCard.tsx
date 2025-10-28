import React from 'react';
import * as LucideIcons from 'lucide-react';

interface AdvantageCardProps {
  title: string;
  description: string;
  icon: string;
}

export function AdvantageCard({ title, description, icon }: AdvantageCardProps) {
  const Icon = (LucideIcons as any)[icon] || LucideIcons.Star;

  return (
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
