import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  labelClassName?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className,
  labelClassName,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("text-center max-w-3xl mx-auto mb-16", className)}
      data-aos="fade-up"
    >
      {label && (
        <p
          className={cn(
            "section-label mb-4",
            light && "section-label-light",
            labelClassName
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg",
            light ? "text-white/70" : "text-brand-text"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
