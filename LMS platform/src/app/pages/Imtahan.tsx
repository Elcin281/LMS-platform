import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ExamCard } from '../components/ExamCard';
import { Search, Award, ShoppingCart, Briefcase, Code, Users, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Imtahan() {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('Hamısı');

  const categories = [
    { name: 'Hamısı', icon: Award },
    { name: 'Satış', icon: ShoppingCart },
    { name: 'İdarəetmə', icon: Briefcase },
    { name: 'Texnologiya', icon: Code },
    { name: 'Müştəri Xidməti', icon: Users },
    { name: 'Təhlükəsizlik', icon: Shield },
    { name: 'Karyera', icon: TrendingUp },
  ];

  const exams = [
    {
      id: 'satish-texnikalari',
      title: 'Satış Texnikaları və Strategiyaları',
      description: 'Müştəri ilə effektiv əlaqə, satış prosesi və razılaşdırma texnikaları',
      duration: 45,
      questionCount: 30,
      passingScore: 70,
      difficulty: 'Orta' as const,
      category: 'Satış',
      icon: ShoppingCart,
      completed: true,
      score: 85,
    },
    {
      id: 'liderlik',
      title: 'Liderlik və Komanda İdarəetməsi',
      description: 'Komanda qurma, motivasiya, konflikt həlli və liderlik bacarıqları',
      duration: 60,
      questionCount: 40,
      passingScore: 75,
      difficulty: 'Çətin' as const,
      category: 'İdarəetmə',
      icon: Briefcase,
    },
    {
      id: 'musteri-xidmeti',
      title: 'Müştəri Xidməti Əsasları',
      description: 'Müştəri məmnuniyyəti, şikayət həlli və effektiv kommunikasiya',
      duration: 30,
      questionCount: 25,
      passingScore: 70,
      difficulty: 'Asan' as const,
      category: 'Müştəri Xidməti',
      icon: Users,
      completed: true,
      score: 92,
    },
    {
      id: 'is-tehlukesizliyi',
      title: 'İş Təhlükəsizliyi və Gigiyena',
      description: 'Mağaza və anbar təhlükəsizlik qaydaları, fövqəladə hallar',
      duration: 35,
      questionCount: 30,
      passingScore: 80,
      difficulty: 'Orta' as const,
      category: 'Təhlükəsizlik',
      icon: Shield,
    },
    {
      id: 'excel-analiz',
      title: 'Excel və Data Analizi',
      description: 'Excel funksiyaları, pivot cədvəllər və data vizuallaşdırma',
      duration: 50,
      questionCount: 35,
      passingScore: 70,
      difficulty: 'Orta' as const,
      category: 'Texnologiya',
      icon: Code,
    },
    {
      id: 'magaza-idareetmesi',
      title: 'Mağaza İdarəetməsi Sertifikatı',
      description: 'Inventar idarəetməsi, planlaşdırma və operativ fəaliyyət',
      duration: 55,
      questionCount: 45,
      passingScore: 75,
      difficulty: 'Çətin' as const,
      category: 'İdarəetmə',
      icon: Briefcase,
    },
    {
      id: 'satish-meneceri',
      title: 'Satış Meneceri Sertifikatı',
      description: 'Komanda satış menecmenti, plan yerinə yetirilməsi və reporting',
      duration: 65,
      questionCount: 50,
      passingScore: 80,
      difficulty: 'Çətin' as const,
      category: 'Karyera',
      icon: TrendingUp,
      completed: true,
      score: 68,
    },
    {
      id: 'mehsul-biliyi',
      title: 'Məhsul Bilikləri və Yerləşdirmə',
      description: 'Məhsul kateqoriyaları, yerləşdirmə qaydaları və stock idarəetməsi',
      duration: 40,
      questionCount: 30,
      passingScore: 70,
      difficulty: 'Asan' as const,
      category: 'Satış',
      icon: ShoppingCart,
    },
    {
      id: 'crm-sistemi',
      title: 'CRM Sistemi və Müştəri İdarəetməsi',
      description: 'CRM platforması, müştəri bazası idarəetməsi və analitika',
      duration: 45,
      questionCount: 35,
      passingScore: 75,
      difficulty: 'Orta' as const,
      category: 'Texnologiya',
      icon: Code,
    },
  ];

  const filteredExams = activeCategory === 'Hamısı' 
    ? exams 
    : exams.filter(exam => exam.category === activeCategory);

  const completedCount = exams.filter(exam => exam.completed).length;
  const averageScore = exams.filter(exam => exam.completed && exam.score).reduce((acc, exam) => acc + (exam.score || 0), 0) / completedCount || 0;

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="pt-12 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--araz-text)' }}>
              İmtahan Mərkəzi
            </h1>
            <p className="text-base max-w-[600px] mx-auto" style={{ color: 'var(--araz-text-secondary)' }}>
              Biliklərini test et, vəzifə artımı qazanmaq üçün imtahanlar ver
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-[600px] mx-auto mb-8">
            <div
              className="relative bg-white rounded-[12px] p-1.5 border"
              style={{
                borderColor: 'var(--araz-border)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-center gap-3 px-4 py-2.5">
                <Search className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--araz-text-secondary)' }} />
                <input
                  type="text"
                  placeholder="İmtahan axtar..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 border-none outline-none bg-transparent text-[14px]"
                  style={{ color: 'var(--araz-text)' }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                {exams.length}
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                İmtahan
              </div>
            </div>
            <div className="text-center">
              <div className="text-[28px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                {completedCount}
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                Tamamlandı
              </div>
            </div>
            <div className="text-center">
              <div className="text-[28px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                {averageScore > 0 ? Math.round(averageScore) : 0}%
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                Orta Bal
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 border-b pb-4" style={{ borderColor: 'var(--araz-border)' }}>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] text-[13px] font-semibold transition-all duration-200"
                  style={{
                    background: isActive ? 'var(--araz-primary)' : 'var(--araz-bg-subtle)',
                    color: isActive ? '#ffffff' : 'var(--araz-text-secondary)',
                    borderColor: isActive ? 'var(--araz-primary)' : 'var(--araz-border)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--araz-primary-light)';
                      e.currentTarget.style.color = 'var(--araz-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--araz-bg-subtle)';
                      e.currentTarget.style.color = 'var(--araz-text-secondary)';
                    }
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exams Grid */}
        <div className="pb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
              {activeCategory === 'Hamısı' ? 'Bütün imtahanlar' : activeCategory}
              <span className="ml-2 text-[12px]" style={{ color: 'var(--araz-text-secondary)' }}>
                ({filteredExams.length})
              </span>
            </h2>
            <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredExams.map((exam, index) => (
              <ExamCard key={exam.id} {...exam} delay={index * 0.05} />
            ))}
          </div>

          {filteredExams.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--araz-text-secondary)' }}>
                Bu kateqoriyada imtahan tapılmadı
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}