import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LessonDetail = () => {
  const { id } = useParams();

  // Заглушка данных урока
  const lesson = {
    id: Number(id),
    title: "Основы флористики: первый букет",
    description:
      "В этом уроке вы изучите базовые принципы составления букетов. Узнайте о сочетании цветов, пропорциях и основных техниках флористики.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    duration: "45 мин",
    level: "Начальный",
    instructor: "Анна Васильева",
    rating: 4.9,
    studentsCount: 234,
    videoUrl: "https://example.com/video", // заглушка
    materials: [
      "Свежие цветы (розы, хризантемы)",
      "Флористическая губка",
      "Секатор",
      "Лента для оформления",
      "Упаковочная бумага",
    ],
    steps: [
      "Подготовка материалов и рабочего места",
      "Обработка стеблей цветов",
      "Создание основы композиции",
      "Добавление акцентных элементов",
      "Финальное оформление букета",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-green/20 via-white to-nature-peach/20">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <Link
          to="/lessons"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к урокам
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-0 shadow-xl mb-8">
              <div className="relative">
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="w-full h-64 lg:h-80 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/30 rounded-t-lg flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-black hover:bg-white"
                  >
                    <Icon name="Play" size={24} className="mr-2" />
                    Смотреть урок
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-nature-green text-green-800">
                      {lesson.level}
                    </Badge>
                    <CardTitle className="text-2xl lg:text-3xl font-montserrat">
                      {lesson.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Star"
                      size={20}
                      className="text-yellow-500 fill-current"
                    />
                    <span className="font-semibold">{lesson.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg">
                  {lesson.description}
                </p>
              </CardHeader>
            </Card>

            {/* Материалы */}
            <Card className="bg-white border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Package"
                    size={24}
                    className="mr-2 text-primary"
                  />
                  Необходимые материалы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lesson.materials.map((material, index) => (
                    <li key={index} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-3 text-green-600"
                      />
                      {material}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Этапы урока */}
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="List" size={24} className="mr-2 text-primary" />
                  Этапы урока
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {lesson.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-0 shadow-xl sticky top-8">
              <CardHeader>
                <CardTitle>Информация об уроке</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Длительность:</span>
                  <span className="font-semibold">{lesson.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Уровень:</span>
                  <Badge className="bg-nature-green text-green-800">
                    {lesson.level}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Учеников:</span>
                  <span className="font-semibold">{lesson.studentsCount}</span>
                </div>

                <hr className="my-4" />

                <div>
                  <h4 className="font-semibold mb-2">Преподаватель</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-nature-purple rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{lesson.instructor}</p>
                      <p className="text-sm text-muted-foreground">
                        Мастер-флорист
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 mt-6">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Записаться на урок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
