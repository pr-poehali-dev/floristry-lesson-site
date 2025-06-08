import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface WorkCardProps {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  comments: number;
  createdAt: string;
}

const WorkCard = ({
  title,
  author,
  image,
  likes,
  comments,
  createdAt,
}: WorkCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-montserrat font-semibold text-lg mb-1">
            {title}
          </h3>
          <p className="text-sm text-white/90">{author}</p>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-base font-montserrat">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">Автор: {author}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-red-500 transition-colors p-0"
            >
              <Icon name="Heart" size={16} className="mr-1" />
              <span className="text-sm">{likes}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary transition-colors p-0"
            >
              <Icon name="MessageCircle" size={16} className="mr-1" />
              <span className="text-sm">{comments}</span>
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">{createdAt}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
