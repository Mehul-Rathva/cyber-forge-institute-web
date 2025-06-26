
import CourseCard from '@/components/CourseCard';

const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
      duration: "8 weeks",
      mode: "Online/Offline",
      description: "Our flagship 8-week professional program covering everything from forensic fundamentals to advanced evidence analysis",
      highlights: ["Hands-on Labs", "Industry Tools", "Real Case Studies", "Certification Included"],
      price: "₹24,999"
    },
    {
      title: "Digital Forensics Essentials - Mobile Forensics",
      duration: "2 weeks",
      mode: "Modular",
      description: "Specialized module focusing on mobile device forensics, data extraction, and analysis techniques",
      highlights: ["Mobile Tools", "Expert Instructors", "Practical Labs", "Certificate Included"],
      price: "₹14,999"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
