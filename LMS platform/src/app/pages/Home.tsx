import { Link } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StatCard } from '../components/StatCard';
import { QuickLinkCard } from '../components/QuickLinkCard';
import { CourseCard } from '../components/CourseCard';
import { ExamCard } from '../components/ExamCard';
import {
  BookOpen,
  Award,
  Layers,
  TrendingUp,
  Target,
  ShoppingCart,
  Briefcase,
  Code,
  ChevronRight,
  Sparkles,
  Users,
} from 'lucide-react';

export default function Home() {
  const featuredCourses = [
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
  ];

  const featuredExams = [
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
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Header />

      <main>
        {/* Hero Section */}
        <div 
          className="pt-12 pb-10 mb-10 border-b"
          style={{ borderColor: 'var(--araz-border)' }}
        >
          <div className="text-center mb-8">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ 
                background: 'linear-gradient(135deg, rgba(118, 188, 33, 0.1), rgba(255, 131, 0, 0.1))',
                animation: 'fadeInUp 0.5s ease-out both'
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: 'var(--araz-primary)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--araz-primary)' }}>
                Daxili Portal
              </span>
            </div>
            <h1 
              className="text-5xl font-bold mb-4"
              style={{ 
                color: 'var(--araz-text)',
                animation: 'fadeInUp 0.5s ease-out 0.1s both'
              }}
            >
              Xoş gəlmisiniz!
            </h1>
            <p 
              className="text-lg max-w-[650px] mx-auto"
              style={{ 
                color: 'var(--araz-text-secondary)',
                animation: 'fadeInUp 0.5s ease-out 0.2s both'
              }}
            >
              Araz Supermarket daxili portalı - dərsliklər, imtahanlar və proqram təminatları bir yerdə
            </p>
          </div>

          {/* Quick Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.3s both' }}
          >
            <StatCard
              title="Dərsliklər"
              value="9"
              description="Video dərslik mövcuddur"
              icon={BookOpen}
              color="primary"
              delay={0.35}
            />
            <StatCard
              title="İmtahanlar"
              value="9"
              description="İmtahan mövcuddur"
              icon={Award}
              color="secondary"
              delay={0.4}
            />
            <StatCard
              title="Proqramlar"
              value="10"
              description="Daxili proqram təminatı"
              icon={Layers}
              color="blue"
              delay={0.45}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
              Tez Keçidlər
            </h2>
            <div className="flex-1 h-px ml-3" style={{ background: 'var(--araz-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLinkCard
              title="Dərsliklər"
              description="Video təlimlər və kurslar"
              icon={BookOpen}
              href="/derslikler"
              color="primary"
              delay={0.5}
            />
            <QuickLinkCard
              title="İmtahan Mərkəzi"
              description="Biliklərini test et"
              icon={Award}
              href="/imtahan"
              color="secondary"
              delay={0.55}
            />
            <QuickLinkCard
              title="FAQ"
              description="Tez-tez verilən suallar"
              icon={Target}
              href="/faq"
              color="primary"
              delay={0.6}
            />
            <QuickLinkCard
              title="Proqramlar"
              description="Daxili proqram təminatları"
              icon={Layers}
              href="/"
              color="secondary"
              delay={0.65}
            />
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
                Son Dərsliklər
              </h2>
              <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
            </div>
            <Link
              to="/derslikler"
              className="inline-flex items-center gap-1 text-[13px] font-semibold transition-colors duration-200"
              style={{ color: 'var(--araz-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#68a91d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--araz-primary)';
              }}
            >
              Hamısını Gör
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} delay={0.7 + index * 0.05} />
            ))}
          </div>
        </div>

        {/* Featured Exams */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
                Populyar İmtahanlar
              </h2>
              <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
            </div>
            <Link
              to="/imtahan"
              className="inline-flex items-center gap-1 text-[13px] font-semibold transition-colors duration-200"
              style={{ color: 'var(--araz-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#68a91d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--araz-primary)';
              }}
            >
              Hamısını Gör
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredExams.map((exam, index) => (
              <ExamCard key={exam.id} {...exam} delay={0.85 + index * 0.05} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="rounded-[20px] p-8 text-center mb-12"
          style={{
            background: 'linear-gradient(135deg, var(--araz-primary), #68a91d)',
            animation: 'fadeInUp 0.5s ease-out 0.95s both'
          }}
        >
          <div className="max-w-[600px] mx-auto">
            <div 
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Karyeranızı inkişaf etdirin
            </h2>
            <p className="text-white opacity-90 mb-6">
              Yeni bacarıqlar öyrənin, imtahanlar verin və peşəkar səviyyənizi artırın
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/derslikler"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200"
                style={{ 
                  background: 'white',
                  color: 'var(--araz-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                }}
              >
                <BookOpen className="w-4 h-4" />
                Dərslikləri Kəşf Et
              </Link>
              <Link
                to="/imtahan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 border-2 border-white"
                style={{ background: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Award className="w-4 h-4" />
                İmtahanlara Başla
              </Link>
            </div>
          </div>
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