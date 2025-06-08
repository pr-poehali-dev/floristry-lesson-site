import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const CreateWorkForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    materials: "",
    image: null as File | null,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Отправка работы:", formData);
  };

  return (
    <Card className="max-w-2xl mx-auto bg-white border-0 shadow-xl">
      <CardHeader className="text-center bg-gradient-to-r from-nature-green to-nature-peach">
        <CardTitle className="text-2xl font-montserrat text-foreground">
          <Icon name="Plus" size={24} className="inline mr-2" />
          Поделиться своей работой
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Покажите свое флористическое творчество сообществу
        </p>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Название композиции
            </Label>
            <Input
              id="title"
              placeholder="Например: Весенний букет из тюльпанов"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Описание
            </Label>
            <Textarea
              id="description"
              placeholder="Расскажите о вашей композиции, технике создания, вдохновении..."
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="min-h-24"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="materials" className="text-sm font-medium">
              Используемые материалы
            </Label>
            <Input
              id="materials"
              placeholder="Тюльпаны, эвкалипт, лента, оазис..."
              value={formData.materials}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, materials: e.target.value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image" className="text-sm font-medium">
              Фотография работы
            </Label>
            <div className="border-2 border-dashed border-nature-green rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Label htmlFor="image" className="cursor-pointer">
                <Icon
                  name="ImagePlus"
                  size={48}
                  className="mx-auto text-muted-foreground mb-4"
                />
                <p className="text-muted-foreground mb-2">
                  Нажмите для загрузки фото или перетащите файл сюда
                </p>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG или WEBP до 10МБ
                </p>
              </Label>
            </div>
            {formData.image && (
              <p className="text-sm text-primary">
                Выбран файл: {formData.image.name}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
            size="lg"
          >
            <Icon name="Upload" size={20} className="mr-2" />
            Опубликовать работу
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateWorkForm;
