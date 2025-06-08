import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LessonCard from "@/components/LessonCard";
import WorkCard from "@/components/WorkCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredLessons = [
    {
      id: 1,
      title: "Основы флористики: первый букет",
      description:
        "Изучите базовые принципы составления букетов. Узнайте о сочетании цветов и основных техниках.",
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
        "Изучите европейские традиции флористики. Создавайте стильные композиции для дома.",
      image: "https://images.unsplash.com/photo-1563022515-1ad395c1e8e7?w=400",
      duration: "55 мин",
      level: "Средний" as const,
      instructor: "Елена Петрова",
      rating: 4.7,
      studentsCount: 189,
    },
  ];

  const featuredWorks = [
    {
      id: 1,
      title: "Весенняя симфония",
      author: "Анна К.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      likes: 42,
      comments: 8,
      createdAt: "2 дня назад",
    },
    {
      id: 2,
      title: "Романтический букет",
      author: "Мария Л.",
      image:
        "https://images.unsplash.com/photo-1515792409019-d25c5bc2e8b2?w=400",
      likes: 38,
      comments: 12,
      createdAt: "1 неделю назад",
    },
    {
      id: 3,
      title: "Минимализм в цветах",
      author: "Дмитрий П.",
      image: "https://images.unsplash.com/photo-1563022515-1ad395c1e8e7?w=400",
      likes: 56,
      comments: 15,
      createdAt: "3 дня назад",
    },
    {
      id: 4,
      title: "Осенние краски",
      author: "Елена С.",
      image:
        "https://images.unsplash.com/photo-1465146633011-14f8e0781093?w=400",
      likes: 29,
      comments: 6,
      createdAt: "5 дней назад",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Популярные уроки */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Популярные уроки
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Начните свое путешествие в мир флористики с наших лучших курсов
            </p>
            <Link to="/lessons">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="ArrowRight" size={20} className="ml-2" />
                Смотреть все уроки
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLessons.map((lesson) => (
              <LessonCard key={lesson.id} {...lesson} />
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section className="py-20 bg-gradient-to-br from-nature-green/20 to-nature-peach/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Работы наших учеников
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Вдохновляйтесь творчеством нашего сообщества флористов
            </p>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="ArrowRight" size={20} className="ml-2" />
                Посмотреть всю галерею
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorks.map((work) => (
              <WorkCard key={work.id} {...work} />
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
            Готовы создать свой первый шедевр?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Присоединяйтесь к сообществу флористов и начните творить уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lessons">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
            </Link>
            <Link to="/create">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Поделиться работой
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
