import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CourseCard } from '../components/CourseCard';
import { Search, Briefcase, ShoppingCart, TrendingUp, Users, Code, BarChart3, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function Derslikler() {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('Hamısı');

  const categories = [
    { name: 'Hamısı', icon: BookOpen },
    { name: 'Satış', icon: ShoppingCart },
    { name: 'İdarəetmə', icon: Briefcase },
    { name: 'Texnologiya', icon: Code },
    { name: 'Analitika', icon: BarChart3 },
    { name: 'Müştəri Xidməti', icon: Users },
    { name: 'Marketinq', icon: TrendingUp },
  ];

  const courses = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
      title: 'Effektiv Satış Texnikaları və Müştəri Əlaqələri',
      instructor: 'Nigar Məmmədova',
      duration: '3s 45d',
      students: 1250,
      rating: 4.8,
      reviewCount: 342,
      category: 'Satış',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      title: 'Komanda İdarəetməsi və Liderlik Bacarıqları',
      instructor: 'Rəşad Əliyev',
      duration: '5s 20d',
      students: 980,
      rating: 4.9,
      reviewCount: 267,
      category: 'İdarəetmə',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      title: 'Excel və Power BI ilə Data Analitikası',
      instructor: 'Kamran Həsənov',
      duration: '4s 10d',
      students: 2100,
      rating: 4.7,
      reviewCount: 523,
      category: 'Analitika',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      title: 'Müştəri Xidməti və Şikayət İdarəetməsi',
      instructor: 'Aysel Quliyeva',
      duration: '2s 30d',
      students: 1560,
      rating: 4.6,
      reviewCount: 298,
      category: 'Müştəri Xidməti',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      title: 'Rəqəmsal Marketinq və Sosial Media Strategiyaları',
      instructor: 'Elçin Qurbanov',
      duration: '3s 15d',
      students: 890,
      rating: 4.8,
      reviewCount: 189,
      category: 'Marketinq',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      title: 'Daxili Sistemlər və Texnologiyalar',
      instructor: 'Fərid Məhərrəmov',
      duration: '6s 40d',
      students: 650,
      rating: 4.9,
      reviewCount: 156,
      category: 'Texnologiya',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
      title: 'Biznes Kommunikasiyası və Təqdimat Bacarıqları',
      instructor: 'Səbinə Nəsirova',
      duration: '2s 50d',
      students: 1340,
      rating: 4.7,
      reviewCount: 412,
      category: 'İdarəetmə',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      title: 'Satış Performansı və KPI İzləmə',
      instructor: 'Tural Əhmədov',
      duration: '3s 25d',
      students: 1120,
      rating: 4.8,
      reviewCount: 276,
      category: 'Satış',
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      title: 'Müasir Mağaza İdarəetməsi',
      instructor: 'Günel Hüseynova',
      duration: '4s 30d',
      students: 1680,
      rating: 4.9,
      reviewCount: 389,
      category: 'İdarəetmə',
    },
  ];

  const filteredCourses = activeCategory === 'Hamısı' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="pt-12 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--araz-text)' }}>
              Dərsliklər
            </h1>
            <p className="text-base max-w-[600px] mx-auto" style={{ color: 'var(--araz-text-secondary)' }}>
              Peşəkar inkişafınız üçün video dərsliklər və təlim materialları
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
                  placeholder="Dərslik axtar..."
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
                {courses.length}
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                Dərslik
              </div>
            </div>
            <div className="text-center">
              <div className="text-[28px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                {categories.length - 1}
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                Kateqoriya
              </div>
            </div>
            <div className="text-center">
              <div className="text-[28px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                12k+
              </div>
              <div className="text-[12px] uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)' }}>
                İştirakçı
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

        {/* Courses Grid */}
        <div className="pb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
              {activeCategory === 'Hamısı' ? 'Bütün dərsliklər' : activeCategory}
              <span className="ml-2 text-[12px]" style={{ color: 'var(--araz-text-secondary)' }}>
                ({filteredCourses.length})
              </span>
            </h2>
            <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} delay={index * 0.05} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: 'var(--araz-text-secondary)' }}>
                Bu kateqoriyada dərslik tapılmadı
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