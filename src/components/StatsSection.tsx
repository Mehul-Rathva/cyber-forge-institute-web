
import { Users, BookOpen, Trophy, TrendingUp } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const StatsSection = () => {
  const stats = [
    { icon: Users, number: 5000, label: "Students Trained", suffix: "+" },
    { icon: BookOpen, number: 20, label: "Courses Offered", suffix: "+" },
    { icon: Trophy, number: 10, label: "Years of Excellence", suffix: "+" },
    { icon: TrendingUp, number: 95, label: "Placement Rate", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-[#F8FFFE] relative">
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-matrix-bg"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
