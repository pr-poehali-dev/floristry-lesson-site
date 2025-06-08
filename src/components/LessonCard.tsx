import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Начальный" | "Средний" | "Продвинутый";
  instructor: string;
  rating: number;
  studentsCount: number;
}

const LessonCard = ({
  id,
  title,
  description,
  image,
  duration,
  level,
  instructor,
  rating,
  studentsCount,
}: LessonCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начальный":
        return "bg-nature-green text-green-800";
      case "Средний":
        return "bg-nature-peach text-orange-800";
      case "Продвинутый":
        return "bg-nature-pink text-pink-800";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getLevelColor(level)}>{level}</Badge>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Icon
            name="Star"
            size={14}
            className="text-yellow-500 fill-current"
          />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-montserrat group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{studentsCount} учеников</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-nature-purple rounded-full flex items-center justify-center">
            <Icon name="User" size={16} className="text-primary" />
          </div>
          <span className="text-sm font-medium">{instructor}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/lesson/${id}`} className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 group-hover:shadow-lg">
            <Icon name="Play" size={16} className="mr-2" />
            Начать урок
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
