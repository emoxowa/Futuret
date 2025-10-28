import React, { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { toast } from 'sonner@2.0.3';
import { Send, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Имитация отправки формы
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      toast.success('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      reset();
    } catch (error) {
      toast.error('Произошла ошибка. Попробуйте позже или свяжитесь с нами по телефону.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Имя *</Label>
          <Input
            id="name"
            type="text"
            placeholder="Ваше имя"
            {...register('name', { required: 'Введите имя' })}
            className={errors.name ? 'border-destructive' : ''}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Некорректный email',
              },
            })}
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            {...register('phone', {
              required: 'Введите телефон',
              pattern: {
                value: /^[\d\s+()-]+$/,
                message: 'Некорректный формат',
              },
            })}
            className={errors.phone ? 'border-destructive' : ''}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Компания</Label>
          <Input
            id="company"
            type="text"
            placeholder="Название компании"
            {...register('company')}
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Сообщение *</Label>
        <Textarea
          id="message"
          placeholder="Опишите ваш проект или задачу..."
          rows={5}
          {...register('message', { required: 'Введите сообщение' })}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-teal)] text-white rounded-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Отправка...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Отправить заявку</span>
          </>
        )}
      </button>

      <p className="text-sm text-foreground/60">
        * Обязательные поля. Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  );
}
