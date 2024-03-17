import { montserrat } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title: React.FC<Props> = ({ title, subtitle, className }) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${montserrat.className} text-4xl font-semibold antialiased my-6`}>
        {title}
      </h1>

      {
        subtitle &&
        <h2 className="text-xl mb-5">
          {subtitle}
        </h2>
      }
    </div>
  );
}