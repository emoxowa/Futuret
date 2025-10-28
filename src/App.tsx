import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import './styles/globals.css';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'futuret-theme';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  
  const stored = localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored) return stored;
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

const setThemeClass = (theme: Theme): void => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem(THEME_KEY, theme);
};

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
