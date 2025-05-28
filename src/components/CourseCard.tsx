
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, Award, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <div 
      className="relative h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}>
        {/* Front */}
        <Card className="absolute inset-0 backface-hidden bg-white border-2 border-[#1F4E79]/20 hover:border-[#00C2A8] transition-colors duration-300">
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#1F4E79]">{course.price}</span>
            </div>
            <h3 className="text-xl font-bold text-[#1F4E79] mb-3 line-clamp-2">{course.title}</h3>
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
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#1F4E79] to-[#00C2A8] text-white">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-lg font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-2 flex-grow">
              {course.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="space-y-3 mt-4">
              <Link to="/courses/detail">
                <Button className="w-full bg-white text-[#1F4E79] hover:bg-gray-100">
                  Learn More
                </Button>
              </Link>
              <Link to="/enrollment">
                <Button className="w-full bg-[#00C2A8] hover:bg-[#00C2A8]/90 text-white">
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CourseCard;
