import {
  FaBook,
  FaList,
  FaLayerGroup,
  FaChartBar,
  FaBuilding,
  FaArrowRight,
  FaRocket,
  FaCompass,
  FaGraduationCap,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CompleteDashboard({levelData,categories,latestCourses})
{
    return(

        <>
                <div className="dashboard-grid">

                <section className="section levels-section">

                  <h2 className="section-title">
                    Courses by Level
                  </h2>

                  <div className="levels-container">

                    {levelData.map((item) => (
                      <div
                        className="level-item"
                        key={item.level}
                      >

                        <div className="level-header">

                          <span className="level-name">
                            Level {item.level}
                          </span>

                          <span className="level-percent">
                            {item.percentage}%
                          </span>

                        </div>

                        <div className="level-bar">

                          <div
                            className="level-progress"
                            style={{
                              width: `${item.percentage}%`,
                            }}
                          ></div>

                        </div>

                        <span className="level-count">
                          {item.coursesCount} Courses
                        </span>

                      </div>
                    ))}

                  </div>

                </section>


                <section className="section categories-section">

                  <h2 className="section-title">
                    Course Categories
                  </h2>

                  <div className="categories-grid">

                    {categories.map((cat) => (
                      <div
                        className="category-card"
                        key={cat.category}
                      >

                        <div className="category-icon">
                          <FaBuilding />
                        </div>

                        <div className="category-info">

                          <h3 className="category-name">
                            {cat.category}
                          </h3>

                          <span className="category-courses">
                            {cat.coursesCount} Courses
                          </span>

                        </div>

                        <Link
                          to="/courses"
                          className="category-btn"
                        >
                          <FaArrowRight />
                        </Link>

                      </div>
                    ))}

                  </div>

                </section>

              </div>

              <section className="section latest-section">

                <h2 className="section-title">
                  Latest Courses
                </h2>

                <div className="courses-grid">

                  {latestCourses.map((course) => (
                    <div
                      className="course-card"
                      key={course.id}
                    >

                      <div className="course-icon">
                        <FaBuilding />
                      </div>

                      <div className="course-details">

                        <h3 className="course-name">
                          {course.name}
                        </h3>

                        <span className="course-code">
                          {course.code}
                        </span>

                        <p className="course-desc">
                          {course.desc}
                        </p>

                        <div className="course-meta">

                          <span className="meta-item">
                            Level {course.level}
                          </span>

                          <span className="meta-item">
                            {course.units} Units
                          </span>

                        </div>

                      </div>

                      <Link
                        to={`/details/${course.id}`}
                        className="course-btn"
                      >
                        View Course
                      </Link>

                    </div>
                  ))}

                </div>

              </section>

              <section className="section quick-nav">

                <h2 className="section-title">
                  Quick Navigation
                </h2>

                <div className="nav-buttons">

                  <Link
                    to="/courses"
                    className="nav-btn primary"
                  >
                    <FaCompass />
                    Browse Courses
                  </Link>

                  <Link
                    to="/category"
                    className="nav-btn secondary"
                  >
                    <FaRocket />
                    Explore Categories
                  </Link>

                </div>

              </section>

        </>
    )
}