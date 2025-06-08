import { useState } from "react";
import Navigation from "@/components/Navigation";
import LessonCard from "@/components/LessonCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("Все");

  const lessons = [
    {
      id: 1,
      title: "Основы флористики: первый букет",
      description:
        "Изучите базовые принципы составления букетов. Узнайте о сочетании цветов, пропорциях и основных техниках.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      duration: "45 мин",
      level: "Начальный" as const,
      instructor: "Анна Васильева",
      rating: 4.9,
      studentsCount: 234,
    },
    {
      id: 2,
      title: "Свадебная флористика",
      description:
        "Создание элегантных свадебных композиций. От букета невесты до оформления церемонии.",
      image:
        "https://images.unsplash.com/photo-1515792409019-d25c5bc2e8b2?w=400",
      duration: "1ч 20мин",
      level: "Продвинутый" as const,
      instructor: "Мария Иванова",
      rating: 4.8,
      studentsCount: 156,
    },
    {
      id: 3,
      title: "Композиции в европейском стиле",
      description:
        "Изучите европейские традиции флористики. Создавайте стильные композиции для дома и офиса.",
      image: "https://images.unsplash.com/photo-1563022515-1ad395c1e8e7?w=400",
      duration: "55 мин",
      level: "Средний" as const,
      instructor: "Елена Петрова",
      rating: 4.7,
      studentsCount: 189,
    },
    {
      id: 4,
      title: "Работа с сухоцветами",
      description:
        "Создание долговечных композиций из сухих цветов и растений. Техники сушки и оформления.",
      image:
        "https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=400",
      duration: "35 мин",
      level: "Начальный" as const,
      instructor: "Ольга Смирнова",
      rating: 4.6,
      studentsCount: 278,
    },
    {
      id: 5,
      title: "Японская флористика: Икебана",
      description:
        "Освойте древнее искусство икебаны. Философия и практика японского цветочного искусства.",
      image:
        "https://images.unsplash.com/photo-1565171646460-e3e12ac8f7cf?w=400",
      duration: "1ч 45мин",
      level: "Продвинутый" as const,
      instructor: "Юкико Танака",
      rating: 4.9,
      studentsCount: 98,
    },
    {
      id: 6,
      title: "Праздничные декорации",
      description:
        "Создание ярких композиций для праздников. Новый год, 8 марта, День рождения.",
      image:
        "https://images.unsplash.com/photo-1518394589311-921da9f72895?w=400",
      duration: "50 мин",
      level: "Средний" as const,
      instructor: "Дарья Козлова",
      rating: 4.8,
      studentsCount: 167,
    },
  ];

  const levels = ["Все", "Начальный", "Средний", "Продвинутый"];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel =
      selectedLevel === "Все" || lesson.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-green/30 via-white to-nature-peach/30">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Каталог уроков
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Изучите флористику от основ до профессионального уровня
          </p>
        </div>

        {/* Фильтры */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Поиск уроков..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Badge
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedLevel === level
                      ? "bg-primary text-white"
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => setSelectedLevel(level)}
                >
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Сетка уроков */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-16">
            <Icon
              name="Search"
              size={64}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-xl font-montserrat font-semibold mb-2">
              Уроки не найдены
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковые критерии
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
