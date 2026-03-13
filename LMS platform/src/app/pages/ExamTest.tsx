import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Clock, CheckCircle2, XCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function ExamTest() {
  const { examId } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock exam data - bu real layihədə backend-dən gələcək
  const examData = {
    title: 'Satış Texnikaları və Strategiyaları',
    duration: 45,
    questions: [
      {
        id: 1,
        question: 'Müştəri ilə ilk təmasda ən vacib nədir?',
        options: [
          'Dərhal məhsulu satmağa çalışmaq',
          'Etibar yaratmaq və ehtiyacları dinləmək',
          'Qiyməti təklif etmək',
          'Rəqibləri tənqid etmək'
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: 'AIDA modeli nəyi ifadə edir?',
        options: [
          'Attention, Interest, Desire, Action',
          'Analysis, Implementation, Development, Achievement',
          'Agreement, Investment, Distribution, Approval',
          'Assessment, Interaction, Design, Application'
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: 'Müştəri etirazı ilə necə davranmalısınız?',
        options: [
          'Etirazı görməməzliyə vurmaq',
          'Müştəriyə qarşı çıxmaq',
          'Etirazı başa düşmək və həll təklif etmək',
          'Dərhal endirim təklif etmək'
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'Cross-selling nədir?',
        options: [
          'Məhsulu başqa mağazada satmaq',
          'Əlavə və ya əlaqəli məhsul təklif etmək',
          'Köhnə məhsulu yenisi ilə dəyişmək',
          'Məhsulu baha qiymətə satmaq'
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'Aktiv dinləmə texnikasına aid deyil:',
        options: [
          'Göz təması saxlamaq',
          'Bədən dili ilə maraq göstərmək',
          'Müştərinin sözünü kəsmək',
          'Açıq suallar vermək'
        ],
        correctAnswer: 2,
      },
    ] as Question[],
  };

  const questions = examData.questions;
  const totalQuestions = questions.length;

  // Timer
  useEffect(() => {
    if (showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex,
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate processing
    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
    }, 500);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / totalQuestions) * 100);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 70;

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6 py-12">
          <div className="bg-white rounded-[20px] p-8 border text-center" style={{ borderColor: 'var(--araz-border)' }}>
            <div 
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: passed ? 'rgba(118, 188, 33, 0.1)' : 'rgba(255, 131, 0, 0.1)' }}
            >
              {passed ? (
                <CheckCircle2 className="w-10 h-10" style={{ color: 'var(--araz-primary)' }} />
              ) : (
                <AlertCircle className="w-10 h-10" style={{ color: 'var(--araz-secondary)' }} />
              )}
            </div>

            <h1 className="text-3xl font-bold mb-3" style={{ color: 'var(--araz-text)' }}>
              {passed ? 'Təbriklər!' : 'Təəssüf ki...'}
            </h1>
            
            <p className="text-lg mb-8" style={{ color: 'var(--araz-text-secondary)' }}>
              {passed 
                ? 'İmtahandan uğurla keçdiniz!' 
                : 'İmtahandan keçə bilmədiniz. Daha yaxşı nəticə üçün yenidən cəhd edin.'}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: passed ? 'var(--araz-primary)' : 'var(--araz-secondary)' }}>
                  {score}%
                </div>
                <div className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  Ümumi Bal
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--araz-text)' }}>
                  {Object.keys(selectedAnswers).filter(qId => selectedAnswers[parseInt(qId)] === questions.find(q => q.id === parseInt(qId))?.correctAnswer).length}/{totalQuestions}
                </div>
                <div className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  Düzgün Cavab
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--araz-text)' }}>
                  70%
                </div>
                <div className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  Keçid Balı
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={() => navigate('/imtahan')}
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border"
                style={{
                  borderColor: 'var(--araz-border)',
                  color: 'var(--araz-text)',
                  background: 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--araz-bg-subtle)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                }}
              >
                İmtahanlara Qayıt
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                style={{ background: 'var(--araz-primary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#68a91d';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--araz-primary)';
                }}
              >
                Yenidən Cəhd Et
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50" style={{ borderColor: 'var(--araz-border)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold" style={{ color: 'var(--araz-text)' }}>
                {examData.title}
              </h1>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  Sual {currentQuestion + 1} / {totalQuestions}
                </span>
                <span className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  •
                </span>
                <span className="text-sm" style={{ color: 'var(--araz-text-secondary)' }}>
                  Cavablanıb: {answeredCount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div 
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
                style={{ 
                  background: timeRemaining < 300 ? 'rgba(220, 38, 38, 0.1)' : 'rgba(118, 188, 33, 0.1)',
                  color: timeRemaining < 300 ? '#DC2626' : 'var(--araz-primary)'
                }}
              >
                <Clock className="w-5 h-5" />
                <span className="text-lg font-bold">{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-300"
                style={{ 
                  width: `${progress}%`,
                  background: 'var(--araz-primary)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-[800px] mx-auto px-6 py-8">
        <div className="bg-white rounded-[20px] p-8 border mb-6" style={{ borderColor: 'var(--araz-border)' }}>
          <div className="mb-6">
            <div 
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{ background: 'var(--araz-primary-light)', color: 'var(--araz-primary)' }}
            >
              Sual {currentQuestion + 1}
            </div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--araz-text)' }}>
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQ.id] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQ.id, index)}
                  className="w-full text-left p-4 rounded-xl border-2 transition-all duration-200"
                  style={{
                    borderColor: isSelected ? 'var(--araz-primary)' : 'var(--araz-border)',
                    background: isSelected ? 'var(--araz-primary-light)' : 'white',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--araz-primary)';
                      e.currentTarget.style.background = 'rgba(118, 188, 33, 0.03)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--araz-border)';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{
                        borderColor: isSelected ? 'var(--araz-primary)' : 'var(--araz-border)',
                        background: isSelected ? 'var(--araz-primary)' : 'white',
                      }}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span 
                      className="text-[15px] font-medium"
                      style={{ color: isSelected ? 'var(--araz-primary)' : 'var(--araz-text)' }}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border"
            style={{
              borderColor: 'var(--araz-border)',
              color: currentQuestion === 0 ? 'var(--araz-text-secondary)' : 'var(--araz-text)',
              opacity: currentQuestion === 0 ? 0.5 : 1,
              cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (currentQuestion !== 0) {
                e.currentTarget.style.background = 'var(--araz-bg-subtle)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
            }}
          >
            <ChevronLeft className="w-4 h-4" />
            Əvvəlki
          </button>

          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={answeredCount < totalQuestions || isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{
                background: answeredCount < totalQuestions ? 'var(--araz-text-secondary)' : 'var(--araz-primary)',
                opacity: answeredCount < totalQuestions ? 0.5 : 1,
                cursor: answeredCount < totalQuestions ? 'not-allowed' : 'pointer',
              }}
              onMouseEnter={(e) => {
                if (answeredCount === totalQuestions) {
                  e.currentTarget.style.background = '#68a91d';
                }
              }}
              onMouseLeave={(e) => {
                if (answeredCount === totalQuestions) {
                  e.currentTarget.style.background = 'var(--araz-primary)';
                }
              }}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isSubmitting ? 'Göndərilir...' : 'Təqdim Et'}
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(Math.min(totalQuestions - 1, currentQuestion + 1))}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'var(--araz-primary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#68a91d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--araz-primary)';
              }}
            >
              Növbəti
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Question Grid */}
        <div className="bg-white rounded-[16px] p-6 border mt-6" style={{ borderColor: 'var(--araz-border)' }}>
          <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--araz-text)' }}>
            Suallar
          </h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((q, index) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCurrent = index === currentQuestion;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(index)}
                  className="aspect-square rounded-lg text-sm font-semibold transition-all duration-200"
                  style={{
                    background: isCurrent 
                      ? 'var(--araz-primary)' 
                      : isAnswered 
                        ? 'var(--araz-primary-light)' 
                        : 'var(--araz-bg-subtle)',
                    color: isCurrent 
                      ? 'white' 
                      : isAnswered 
                        ? 'var(--araz-primary)' 
                        : 'var(--araz-text-secondary)',
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
