import {
  FaBuilding,
  FaBookOpen,
  FaArrowRight,
  FaSearch,
} from "react-icons/fa";
import "./Category.css";
import CatDetails from "../CebrateComponant/CatDetails";
import CatDetails2 from "../CebrateComponant/CatDetails2";
import { useState, useEffect } from "react";
import CatGetData from "../CebrateComponant/CatGetData";
import { Link } from "react-router-dom";
import Navbar from "../Componant/Navbar";

const Categories = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, seterr] = useState("");
  const [search, setsearch] = useState("");

  const Filterd = data.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Navbar />
      <div className="categories-page">
        <CatGetData
          setdata={setdata}
          setloading={setloading}
          seterr={seterr}
        />

        <CatDetails2 />

        <section className="all-categories">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                All <span className="highlight">Categories</span>
              </h2>
              <p className="section-subtitle">
                Browse our complete collection of learning paths
              </p>
            </div>

            <div className="categories-toolbar">
              <div className="categories-results-header">
                <span className="results-title">All Courses</span>
                <span className="results-count">
                  {Filterd.length} Courses Available
                </span>
              </div>

              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  type="text"
                  className="search-input"
                  placeholder="Search courses..."
                />
              </div>
            </div>

            <div className="categories-grid">
              {loading && (
                <div className="loading-spinner-container">
                  <div className="loading-spinner"></div>
                  <p className="loading-text">Loading courses...</p>
                </div>
              )}

              {err && <h3 className="error-message">{err}</h3>}

              {!loading && !err && Filterd.length === 0 && (
                <h3 className="no-results">No courses found</h3>
              )}

              {!loading &&
                !err &&
                Filterd.map((course) => (
                  <div className="category-card" key={course.id}>
                    <div className="category-icon-wrapper">
                      <div className="category-icon">
                        <FaBuilding />
                      </div>
                    </div>

                    <h3 className="category-name">{course.name}</h3>

                    <p className="category-description">{course.desc}</p>

                    <div className="category-footer">
                      <span className="course-count">
                        <FaBookOpen className="count-icon" />
                        {course.code}
                      </span>

                      <Link
                        to={`/details/${course.id}`}
                        className="explore-btn"
                      >
                        View Course
                        <FaArrowRight className="btn-icon" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <CatDetails />
      </div>
    </>
  );
};

export default Categories;