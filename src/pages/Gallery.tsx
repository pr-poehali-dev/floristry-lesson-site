import { useState } from "react";
import Navigation from "@/components/Navigation";
import WorkCard from "@/components/WorkCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const works = [
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
    {
      id: 5,
      title: "Икебана в стиле современности",
      author: "Юки Т.",
      image:
        "https://images.unsplash.com/photo-1565171646460-e3e12ac8f7cf?w=400",
      likes: 73,
      comments: 21,
      createdAt: "1 день назад",
    },
    {
      id: 6,
      title: "Праздничная композиция",
      author: "Ольга В.",
      image:
        "https://images.unsplash.com/photo-1518394589311-921da9f72895?w=400",
      likes: 45,
      comments: 9,
      createdAt: "4 дня назад",
    },
    {
      id: 7,
      title: "Летний сад",
      author: "Игорь М.",
      image:
        "https://images.unsplash.com/photo-1516035645781-14fdc68c5b86?w=400",
      likes: 67,
      comments: 18,
      createdAt: "2 дня назад",
    },
    {
      id: 8,
      title: "Дикие цветы",
      author: "Лина К.",
      image:
        "https://images.unsplash.com/photo-1574936013797-32ea8c78eaa9?w=400",
      likes: 34,
      comments: 7,
      createdAt: "6 дней назад",
    },
  ];

  const filteredWorks = works.filter(
    (work) =>
      work.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      work.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-purple/20 via-white to-nature-pink/30">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Галерея работ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Вдохновляйтесь творчеством нашего сообщества флористов
          </p>

          <Link to="/create">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-200"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Поделиться своей работой
            </Button>
          </Link>
        </div>

        {/* Поиск */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
          <div className="relative max-w-md mx-auto">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Поиск работ или авторов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Сетка работ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-16">
            <Icon
              name="Search"
              size={64}
              className="mx-auto text-muted-foreground mb-4"
            />
            <h3 className="text-xl font-montserrat font-semibold mb-2">
              Работы не найдены
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
