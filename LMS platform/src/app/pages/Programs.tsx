import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProgramCard } from '../components/ProgramCard';
import { StatCard } from '../components/StatCard';
import { QuickLinkCard } from '../components/QuickLinkCard';
import { CourseCard } from '../components/CourseCard';
import { ExamCard } from '../components/ExamCard';
import {
  Smartphone,
  Sun,
  Home,
  Users,
  BarChart3,
  FileText,
  Star,
  Grid3x3,
  AlertTriangle,
  CheckCircle2,
  Download,
  Globe,
  BookOpen,
  Award,
  Layers,
  TrendingUp,
  Target,
  ShoppingCart,
  Briefcase,
  Code,
  ChevronRight,
} from 'lucide-react';

// Custom icons for App Store and Play Store
function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayStoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
    </svg>
  );
}

export default function Programs() {
  const stats = [
    { value: '10', label: 'Proqram' },
    { value: '4', label: 'Mobil' },
    { value: '2', label: 'Desktop' },
    { value: '4', label: 'Web' },
  ];

  const programs = [
    {
      icon: Smartphone,
      title: 'Araz Mobil Tətbiqi',
      description: 'Müştərilər üçün əsas tətbiq. Alış-veriş, bonus kartı, AI köməkçi.',
      buttons: [
        { text: 'App Store', icon: AppleIcon, variant: 'dark' as const, href: '#' },
        { text: 'Play Store', icon: PlayStoreIcon, variant: 'primary' as const, href: '#' },
      ],
      delay: 0.05,
    },
    {
      icon: Sun,
      title: 'AI Assistant Ofis',
      description: 'Ofis işçiləri üçün AI köməkçi. Sənəd analizi və sorğular.',
      buttons: [{ text: 'APK Yüklə', icon: Download, variant: 'primary' as const, href: '#' }],
      delay: 0.1,
    },
    {
      icon: Home,
      title: 'AI Assistant Mağaza',
      description: 'Mağaza işçiləri üçün AI köməkçi. Məhsul və müştəri xidməti.',
      buttons: [{ text: 'APK Yüklə', icon: Download, variant: 'primary' as const, href: '#' }],
      delay: 0.15,
    },
    {
      icon: Users,
      title: 'Daxili ATS Sistemi',
      description: 'İşə qəbul sistemi. CV analizi və namizəd idarəetməsi.',
      buttons: [{ text: 'EXE Yüklə', icon: Download, variant: 'secondary' as const, href: '#' }],
      delay: 0.2,
    },
    {
      icon: BarChart3,
      title: 'Rəqib Analizi',
      description: 'Rəqiblərin qiymət müqayisəsi və bazar analitikası.',
      buttons: [{ text: 'Sayta Keç', icon: Globe, variant: 'orange' as const, href: '#' }],
      delay: 0.25,
    },
    {
      icon: FileText,
      title: 'Rəqəmsal Hüquqşünas',
      description: 'Hüquqi sənəd analizi və müqavilə yoxlaması.',
      buttons: [{ text: 'EXE Yüklə', icon: Download, variant: 'secondary' as const, href: '#' }],
      delay: 0.3,
    },
    {
      icon: Star,
      title: 'Kampaniya AI',
      description: 'Kampaniya planlaşdırması və məhsul seçimi AI ilə.',
      buttons: [{ text: 'Sayta Keç', icon: Globe, variant: 'orange' as const, href: '#' }],
      delay: 0.35,
    },
    {
      icon: Grid3x3,
      title: 'Planoqram',
      description: 'Mağaza rəf düzümü və məhsul yerləşdirmə sistemi.',
      buttons: [{ text: 'APK Yüklə', icon: Download, variant: 'primary' as const, href: '#' }],
      delay: 0.4,
    },
    {
      icon: AlertTriangle,
      title: 'Anomaliya Aşkarlanması',
      description: 'Satış anomaliyalarının aşkarlanması və monitorinq.',
      buttons: [{ text: 'Sayta Keç', icon: Globe, variant: 'orange' as const, href: '#' }],
      delay: 0.45,
    },
    {
      icon: CheckCircle2,
      title: 'Churn Analizi',
      description: 'Müştəri itkisi proqnozu və retention strategiyaları.',
      buttons: [{ text: 'Sayta Keç', icon: Globe, variant: 'orange' as const, href: '#' }],
      delay: 0.5,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <Header />

      <div className="pt-8 pb-6 border-b" style={{ borderColor: 'var(--araz-border)' }}>
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight" style={{ color: 'var(--araz-text)', letterSpacing: '-0.5px' }}>
              Daxili Proqram Təminatları
            </h1>
            <p className="text-[15px] mt-1" style={{ color: 'var(--araz-text-secondary)' }}>
              Araz Supermarket — Rəqəmsal həllər
            </p>
          </div>
        </div>
        <div className="flex gap-8 pt-6 flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[32px] font-bold" style={{ color: 'var(--araz-primary)' }}>
                {stat.value}
              </div>
              <div className="text-[12px] uppercase tracking-wide mt-0.5" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-[13px] font-semibold uppercase tracking-wide" style={{ color: 'var(--araz-text-secondary)', letterSpacing: '0.5px' }}>
            Bütün proqramlar
          </h2>
          <div className="flex-1 h-px" style={{ background: 'var(--araz-border)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
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