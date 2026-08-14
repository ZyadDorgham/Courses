import {
  FaBuilding,
  FaCity,
  FaLandmark,
  FaTree,
  FaPalette,
  FaRulerCombined,
  FaDraftingCompass,
  FaLayerGroup,
  FaHome,
  FaUniversity,
  FaCubes,
  FaVectorSquare,
  FaBookOpen,
  FaArrowRight,
  FaGraduationCap,
  FaUsers,
  FaStar
} from "react-icons/fa";
export default function CatDetails2()
{
    return(

        <>
              <section className="categories-hero">
                <div className="hero-container">
                  <div className="hero-content">
                    <div className="hero-badge">Categories</div>
                    <h1 className="hero-title">Explore Course Categories</h1>
                    <p className="hero-subtitle">
                      Discover the perfect learning path for your career. Browse our
                      comprehensive categories and find courses that match your
                      interests and goals.
                    </p>
                    <div className="hero-stats">
                      <div className="hero-stat">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Courses</span>
                      </div>
                      <div className="hero-stat">
                        <span className="stat-number">12</span>
                        <span className="stat-label">Categories</span>
                      </div>
                      <div className="hero-stat">
                        <span className="stat-number">8K+</span>
                        <span className="stat-label">Students</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-visual">
                    <div className="hero-icon-grid">
                      <div className="hero-icon-box icon-1"><FaBuilding /></div>
                      <div className="hero-icon-box icon-2"><FaCity /></div>
                      <div className="hero-icon-box icon-3"><FaTree /></div>
                      <div className="hero-icon-box icon-4"><FaPalette /></div>
                      <div className="hero-icon-box icon-5"><FaLandmark /></div>
                      <div className="hero-icon-box icon-6"><FaCubes /></div>
                    </div>
                    <div className="hero-decoration-circle"></div>
                  </div>
                </div>
              </section>
        
        </>
    )
}