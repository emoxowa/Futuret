import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export function ServiceCard({ title, description, icon, details }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = (LucideIcons as any)[icon] || LucideIcons.Star;

  return (
    <>
      <div className="group h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex flex-col h-full">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-foreground/70 mb-4 flex-grow">{description}</p>
          <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <span>Подробнее</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span>{title}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <p className="text-foreground/80">{description}</p>
            <div>
              <h4 className="font-semibold mb-3">Что входит в услугу:</h4>
              <ul className="space-y-2">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
