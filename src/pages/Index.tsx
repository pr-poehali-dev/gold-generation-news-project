import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newsItems = [
    {
      title: "Открытие новых спортивных секций",
      description: "В рамках программы 'Золотое поколение' открываются секции футбола, баскетбола и гимнастики для детей от 6 до 16 лет",
      date: "2 августа 2024",
      category: "Спорт",
      image: "/img/d9a45a22-8605-4946-9947-a7da2282fe11.jpg"
    },
    {
      title: "Региональные соревнования по легкой атлетике",
      description: "Команда молодых спортсменов готовится к участию в межрегиональном турнире",
      date: "30 июля 2024", 
      category: "Соревнования",
      image: "/img/d9a45a22-8605-4946-9947-a7da2282fe11.jpg"
    },
    {
      title: "Патриотическое воспитание через спорт",
      description: "Новая методика воспитания любви к Родине через командные виды спорта показывает отличные результаты",
      date: "28 июля 2024",
      category: "Патриотизм",
      image: "/img/f85e35a3-4cec-46bb-aaac-a8b4e340e880.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Medal" className="text-[#D52B1E]" size={32} />
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Золотое поколение
              </h1>
            </div>
            
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Icon name="Menu" size={20} />
                  <span>Меню</span>
                  <Icon name="ChevronDown" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="Newspaper" size={16} className="mr-2" />
                  Новости
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="FileText" size={16} className="mr-2" />
                  Документация
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="Phone" size={16} className="mr-2" />
                  Контакты
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Золотое поколение
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Патриотическое воспитание через спорт. Развиваем физически здоровое и духовно сильное поколение России.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-[#0039A6] hover:bg-[#0039A6]/90 text-white px-8 py-3">
                <Icon name="Users" size={20} className="mr-2" />
                Записаться в секцию
              </Button>
              <Button variant="outline" className="border-[#D52B1E] text-[#D52B1E] hover:bg-[#D52B1E] hover:text-white px-8 py-3">
                <Icon name="Trophy" size={20} className="mr-2" />
                Соревнования
              </Button>
            </div>
          </div>
        </div>
        
        {/* Российский триколор волнистый внизу */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="tricolor" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="33.33%" stopColor="#FFFFFF" />
                <stop offset="33.33%" stopColor="#0039A6" />
                <stop offset="66.66%" stopColor="#0039A6" />
                <stop offset="66.66%" stopColor="#D52B1E" />
                <stop offset="100%" stopColor="#D52B1E" />
              </linearGradient>
            </defs>
            <path 
              d="M0,20 C300,80 900,0 1200,40 L1200,120 L0,120 Z" 
              fill="url(#tricolor)"
              className="animate-pulse"
            />
          </svg>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0039A6] mb-2">500+</div>
              <div className="text-gray-600">Молодых спортсменов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D52B1E] mb-2">25</div>
              <div className="text-gray-600">Спортивных секций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0039A6] mb-2">12</div>
              <div className="text-gray-600">Региональных наград</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#D52B1E] mb-2">8</div>
              <div className="text-gray-600">Лет работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Новости */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Последние новости
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Следите за достижениями наших спортсменов и новостями программы патриотического воспитания
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`
                        ${item.category === 'Спорт' ? 'bg-[#0039A6]/10 text-[#0039A6]' : ''}
                        ${item.category === 'Соревнования' ? 'bg-[#D52B1E]/10 text-[#D52B1E]' : ''}
                        ${item.category === 'Патриотизм' ? 'bg-gray-100 text-gray-700' : ''}
                      `}
                    >
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{item.description}</CardDescription>
                  <Button variant="ghost" className="p-0 h-auto text-[#0039A6] hover:text-[#0039A6]/80">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О программе */}
      <section className="py-16 bg-gradient-to-r from-[#0039A6]/5 to-[#D52B1E]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                О программе "Золотое поколение"
              </h2>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Наша программа объединяет спортивное развитие с патриотическим воспитанием. 
                Мы верим, что через спорт можно воспитать сильное, здоровое и преданное Родине поколение.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Target" className="text-[#0039A6] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Физическое развитие</h3>
                    <p className="text-gray-600">Комплексные тренировки для всестороннего развития</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" className="text-[#D52B1E] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Патриотическое воспитание</h3>
                    <p className="text-gray-600">Формирование любви к Родине через командный дух</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Users" className="text-[#0039A6] mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Социализация</h3>
                    <p className="text-gray-600">Развитие лидерских качеств и командной работы</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="/img/f85e35a3-4cec-46bb-aaac-a8b4e340e880.jpg" 
                alt="Российский флаг"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Medal" className="text-[#D52B1E]" size={28} />
                <h3 className="text-lg font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Золотое поколение
                </h3>
              </div>
              <p className="text-gray-400" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Воспитываем патриотов России через спорт и здоровый образ жизни.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@zolotoe-pokolenie.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Спортивная, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Золотое поколение. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;