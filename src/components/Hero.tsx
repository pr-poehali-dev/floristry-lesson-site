import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-nature-green via-nature-peach to-nature-pink min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-foreground mb-6 leading-tight">
            Создавайте <span className="text-primary">магию</span> цветов
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Изучите искусство флористики с профессиональными мастерами. От
            простых букетов до сложных композиций.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/lessons">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать обучение
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Image" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-scale-in">
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">
                500+ учеников
              </h3>
              <p className="text-muted-foreground">
                Присоединились к нашему сообществу
              </p>
            </div>

            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">
                50+ уроков
              </h3>
              <p className="text-muted-foreground">
                От начального до продвинутого уровня
              </p>
            </div>

            <div
              className="text-center animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-2">
                4.9 рейтинг
              </h3>
              <p className="text-muted-foreground">
                Средняя оценка наших курсов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
