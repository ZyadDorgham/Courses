import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart, FaBook } from "react-icons/fa";
export default function GetData({  setdata,Filterd,ToggleWishlist,wishlist }) {

  const Nav = useNavigate("");

  
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
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1505238680356-667803448bb6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  ];

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://www.uofcourse.com/api/courses");
        
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setdata(json.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {Filterd.map((course) => (
        <div className="course-card" key={course.id}>
          <div className="course-card-image-wrapper">
            <img
              src={courseImages[course.id % courseImages.length]}
              alt={course.name}
              className="course-card-image"
            />


<button
  className="course-card-wishlist"
  aria-label="Add to wishlist"
  onClick={() => ToggleWishlist(course)}
>
  {wishlist.some((item) => item.id === course.id) ? (
    <FaHeart />
  ) : (
    <FaRegHeart />
  )}
</button>

            <span className="course-card-badge">Level {course.level}</span>
          </div>
          <div className="course-card-body">
            <span className="course-card-category">{course.code}</span>
            <h3 className="course-card-title">{course.name}</h3>
            <p className="course-card-description">{course.desc}</p>
            <div className="course-card-meta">
              <span className="meta-item">
                <FaBook /> {course.units} Units
              </span>
              <span className="meta-item">Level {course.level}</span>
              <span className="meta-item">{course.code}</span>
            </div>
            <div className="course-card-footer">
              <div className="course-card-pricing">
                <span className="current-price">Free</span>
              </div>
              <Link to={`/details/${course.id}`} className="course-card-btn">View Course</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}