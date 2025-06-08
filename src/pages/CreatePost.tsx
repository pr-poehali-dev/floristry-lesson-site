import Navigation from "@/components/Navigation";
import CreateWorkForm from "@/components/CreateWorkForm";

const CreatePost = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-green/20 via-white to-nature-peach/20">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Поделитесь своим творчеством
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Покажите свои флористические работы сообществу и получите отзывы от
            других мастеров
          </p>
        </div>

        <CreateWorkForm />

        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-montserrat font-semibold mb-3">
              Советы для лучших фотографий:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="text-left">
                • Используйте естественное освещение • Выберите нейтральный фон
                • Сделайте несколько ракурсов
              </div>
              <div className="text-left">
                • Покажите детали работы • Держите камеру на уровне композиции •
                Избегайте теней на цветах
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
