import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DocCard } from '../components/DocCard';
import { Search, Send, FileText, Users, CreditCard, Shield, Clock, MessageCircle, Bot } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const quickActions = [
    'Məzuniyyət qaydaları',
    'İş saatları',
    'Bonus sistemi',
    'Şikayət proseduru',
  ];

  const documents = [
    {
      icon: FileText,
      tag: 'Yeni',
      tagVariant: 'new' as const,
      title: '2025 Məzuniyyət Qaydaları',
      description: 'Yenilənmiş məzuniyyət müddətləri və müraciət prosedurları.',
      date: '10 Mar 2025',
    },
    {
      icon: Users,
      tag: 'Yeni',
      tagVariant: 'new' as const,
      title: 'İşçi Davranış Kodeksi',
      description: 'Mağaza və ofis işçiləri üçün davranış standartları.',
      date: '8 Mar 2025',
    },
    {
      icon: CreditCard,
      tag: 'Yeniləndi',
      tagVariant: 'updated' as const,
      title: 'Maaş Ödəniş Prosedurları',
      description: 'Maaş hesablanması, bonuslar və ödəniş tarixləri.',
      date: '5 Mar 2025',
    },
    {
      icon: Shield,
      tag: 'Yeniləndi',
      tagVariant: 'updated' as const,
      title: 'İş Təhlükəsizliyi Qaydaları',
      description: 'Mağaza və anbar üçün təhlükəsizlik protokolları.',
      date: '1 Mar 2025',
    },
    {
      icon: Clock,
      tag: 'Yeniləndi',
      tagVariant: 'updated' as const,
      title: 'İş Saatları və Növbə Cədvəli',
      description: 'Mağaza və ofis iş saatları, növbə dəyişikliyi qaydaları.',
      date: '28 Feb 2025',
    },
    {
      icon: MessageCircle,
      tag: 'Yeniləndi',
      tagVariant: 'updated' as const,
      title: 'Müştəri Şikayətləri Proseduru',
      description: 'Müştəri şikayətlərinin qəbulu və həlli qaydaları.',
      date: '25 Feb 2025',
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="text-center pt-[60px] pb-10">
          <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--araz-text)' }}>
            Necə kömək edə bilərik?
          </h1>
          <p className="text-base max-w-[500px] mx-auto" style={{ color: 'var(--araz-text-secondary)' }}>
            AI köməkçimiz vasitəsilə şirkət qaydaları və sənədlər haqqında suallarınızı cavablandırın
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-[700px] mx-auto mb-[60px]">
          <div
            className="relative bg-white rounded-[20px] p-2 transition-all duration-300 border-2"
            style={{
              borderColor: isFocused ? 'var(--araz-primary)' : 'var(--araz-border)',
              boxShadow: isFocused ? '0 8px 30px rgba(118, 188, 33, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3">
              <Search className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--araz-text-secondary)', strokeWidth: 2 }} />
              <input
                type="text"
                placeholder="Sualınızı yazın... məs: 'Məzuniyyət necə alınır?'"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 border-none outline-none bg-transparent text-base"
                style={{ color: 'var(--araz-text)' }}
              />
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--araz-primary-light), #d4edda)', color: 'var(--araz-primary)' }}
              >
                <Bot className="w-3.5 h-3.5" />
                AI ilə
              </div>
              <button
                className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ background: 'var(--araz-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#68a91d';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--araz-primary)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Send className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-[13px] border transition-all duration-200"
                style={{
                  background: 'var(--araz-bg-subtle)',
                  borderColor: 'var(--araz-border)',
                  color: 'var(--araz-text-secondary)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--araz-primary-light)';
                  e.currentTarget.style.borderColor = 'var(--araz-primary)';
                  e.currentTarget.style.color = 'var(--araz-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--araz-bg-subtle)';
                  e.currentTarget.style.borderColor = 'var(--araz-border)';
                  e.currentTarget.style.color = 'var(--araz-text-secondary)';
                }}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="pb-[60px]">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
              Son əlavə edilən qaydalar və sənədlər
            </h2>
            <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc, index) => (
              <DocCard key={index} {...doc} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}