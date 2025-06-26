
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, Award, Monitor } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Course {
  title: string;
  duration: string;
  mode: string;
  description: string;
  highlights: string[];
  price: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/courses');
  };

  return (
    <div 
      className="relative h-96 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleCardClick}
    >
      <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden bg-white border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-colors duration-300">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#0A2540]">{course.price}</span>
            </div>
            <h3 className="text-xl font-bold text-[#0A2540] mb-3 line-clamp-2">{course.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{course.description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Monitor className="w-4 h-4 mr-2" />
                {course.mode}
              </div>
            </div>
          </div>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0A2540] to-[#00A693] text-white">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-2 flex-grow">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-[#00C851] rounded-full mr-3"></div>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="space-y-3 mt-4">
              <Link to="/courses/detail" onClick={(e) => e.stopPropagation()}>
                <Button className="w-full bg-white text-[#0A2540] hover:bg-gray-100">
                  Learn More
                </Button>
              </Link>
              <div className="text-center">
                <span className="text-2xl font-bold text-white">
                  {course.price}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;
