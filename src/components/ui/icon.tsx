import * as React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  name: keyof typeof Icons;
  fallback?: keyof typeof Icons;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className,
}: IconProps) => {
  const IconComponent = Icons[name] || Icons[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
