import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" as const },
    { path: "/lessons", label: "Уроки", icon: "BookOpen" as const },
    { path: "/gallery", label: "Галерея", icon: "Image" as const },
    { path: "/create", label: "Создать", icon: "Plus" as const },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-nature-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-montserrat font-bold text-primary"
          >
            🌸 FloraArt
          </Link>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-nature-green/50 ${
                  location.pathname === item.path
                    ? "bg-nature-pink text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
