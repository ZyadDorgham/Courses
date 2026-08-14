import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCode, FaLaptopCode, FaServer, FaBrain, 
  FaChartLine, FaPaintBrush, FaShieldAlt, FaMobileAlt,
  FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart, FaHeart,
  FaGraduationCap, FaUsers, FaBookOpen, FaVideo,
  FaRocket, FaClock, FaAward, FaGlobe,
  FaArrowRight
} from 'react-icons/fa';
import './Home.css';

const courseImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
];

const Home = () => {
  const Nav = useNavigate('');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://www.uofcourse.com/api/courses');
        if (!response.ok) throw new Error('Failed to fetch');
        const json = await response.json();
        setCourses(json.results || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const categories = [
    { id: 1, icon: <FaCode />, title: 'Programming', description: 'Learn coding from scratch to advanced', courses: 85 },
    { id: 2, icon: <FaLaptopCode />, title: 'Frontend Dev', description: 'Build stunning user interfaces', courses: 62 },
    { id: 3, icon: <FaServer />, title: 'Backend Dev', description: 'Powerful server-side development', courses: 48 },
    { id: 4, icon: <FaBrain />, title: 'AI & ML', description: 'Artificial Intelligence & Machine Learning', courses: 37 },
    { id: 5, icon: <FaChartLine />, title: 'Data Science', description: 'Analyze and visualize data', courses: 41 },
    { id: 6, icon: <FaPaintBrush />, title: 'UI/UX Design', description: 'Design beautiful user experiences', courses: 53 },
    { id: 7, icon: <FaShieldAlt />, title: 'Cyber Security', description: 'Protect systems and networks', courses: 29 },
    { id: 8, icon: <FaMobileAlt />, title: 'Mobile Dev', description: 'Build iOS and Android apps', courses: 34 },
  ];

  const whyChooseUs = [
    { id: 1, icon: <FaRocket />, title: 'Practical Learning', desc: 'Real-world projects and hands-on exercises to build your skills.' },
    { id: 2, icon: <FaGraduationCap />, title: 'Expert Instructors', desc: 'Learn from industry professionals with years of experience.' },
    { id: 3, icon: <FaChartLine />, title: 'Track Your Progress', desc: 'Monitor your learning journey with detailed analytics.' },
    { id: 4, icon: <FaGlobe />, title: 'Learn Anywhere', desc: 'Access your courses on any device, anytime, anywhere.' },
    { id: 5, icon: <FaAward />, title: 'Quality Content', desc: 'Curated materials designed for maximum learning impact.' },
    { id: 6, icon: <FaUsers />, title: 'Career Focused', desc: 'Skills that directly translate to career advancement.' },
  ];

  const stats = [
    { id: 1, value: '10K+', label: 'Students' },
    { id: 2, value: '500+', label: 'Courses' },
    { id: 3, value: '100+', label: 'Instructors' },
    { id: 4, value: '50K+', label: 'Lessons' },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    for (let i = 0; i < full; i++) stars.push(<FaStar key={`full-${i}`} />);
    if (half) stars.push(<FaStarHalfAlt key="half" />);
    for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`empty-${i}`} />);
    return stars;
  };

  const getRandomRating = () => (4 + Math.random() * 1).toFixed(1);
  const getRandomStudents = () => Math.floor(Math.random() * 5000) + 500;

  return (
    
    <main className="home-page">

      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Empowering learners worldwide
            </div>
            <h1 className="hero-title">
              Learn New Skills.<br />
              <span className="hero-highlight">Build Your Future.</span>
            </h1>
            <p className="hero-description">
              Unlock your potential with expert-led courses in technology, design, business, and more.
              Join thousands of students already advancing their careers.
            </p>
            <div className="hero-buttons">
              
              <button className="btn-primary" onClick={()=>Nav('/courses')}>
                Explore Courses <FaArrowRight className="btn-icon" />
              </button>

              <button className="btn-secondary">Start Learning</button>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-number">10K+</span>
                <span className="trust-label">Active Students</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">500+</span>
                <span className="trust-label">Courses</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-number">4.8★</span>
                <span className="trust-label">Average Rating</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Students learning together" 
                className="hero-image"
              />
              <div className="hero-floating-card card-1">
                <FaGraduationCap className="float-icon" />
                <div>
                  <span className="float-title">New Course</span>
                  <span className="float-desc">AI Fundamentals</span>
                </div>
              </div>
              <div className="hero-floating-card card-2">
                <FaUsers className="float-icon" />
                <div>
                  <span className="float-title">Live Now</span>
                  <span className="float-desc">124 watching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="deco-circle deco-1"></div>
          <div className="deco-circle deco-2"></div>
          <div className="deco-circle deco-3"></div>
        </div>
      </section>


      <section className="categories-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Categories</span>
            <h2 className="section-title">Popular <span className="title-highlight">Categories</span></h2>
            <p className="section-subtitle">Explore our wide range of courses across various domains</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div className="category-card" key={cat.id}>
                <div className="category-icon">{cat.icon}</div>
                <h3 className="category-title">{cat.title}</h3>
                <p className="category-desc">{cat.description}</p>
                <span className="category-count">{cat.courses} Courses</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Courses</span>
            <h2 className="section-title">Featured <span className="title-highlight">Courses</span></h2>
            <p className="section-subtitle">Handpicked courses to accelerate your learning journey</p>
          </div>
          <div className="courses-grid">
            {courses.slice(0, 8).map((course, index) => {
              const rating = getRandomRating();
              const students = getRandomStudents();
              return (
                <div className="course-card" key={course.id}>
                  <div className="course-image-wrapper">
                    <img 
                      src={courseImages[index % courseImages.length]} 
                      alt={course.name} 
                      className="course-image" 
                    />
                    <button className="wishlist-btn" aria-label="Add to wishlist">
                      <FaRegHeart />
                    </button>
                    <span className="course-badge">Level {course.level}</span>
                  </div>
                  <div className="course-body">
                    <span className="course-category">{course.code}</span>
                    <h3 className="course-title">{course.name}</h3>
                    <p className="course-instructor">{course.desc?.substring(0, 60)}...</p>
                    <div className="course-rating">
                      <span className="stars">{renderStars(parseFloat(rating))}</span>
                      <span className="rating-value">{rating}</span>
                      <span className="students-count">({students.toLocaleString()} students)</span>
                    </div>
                    <div className="course-meta">
                      <span className="meta-item">{course.units} Units</span>
                      <span className="meta-divider">•</span>
                      <span className="meta-item">{course.code}</span>
                    </div>
                    <div className="course-footer">
                      <span className="course-price">Free</span>
                      <button className="btn-view-course">View Course</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="section-cta">
            <button onClick={() => Nav('/courses')} className="btn-outline">
              View All Courses <FaArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why <span className="title-highlight">EduCourses</span></h2>
            <p className="section-subtitle">We're committed to providing the best learning experience</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div className="why-card" key={item.id}>
                <div className="why-icon">{item.icon}</div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.id}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to <span className="cta-highlight">Start Learning</span>?</h2>
            <p className="cta-description">
              Join thousands of students and start your journey toward mastering new skills today.
              Your future self will thank you.
            </p>
            <div className="cta-buttons">
              <button className="btn-cta-primary" onClick={()=>Nav('/courses')}>
                Explore Courses <FaArrowRight className="btn-icon" />
              </button>
              <button className="btn-cta-secondary">Browse Categories</button>
            </div>
          </div>
          <div className="cta-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" 
              alt="Learning together" 
              className="cta-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;