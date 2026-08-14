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
import { useNavigate } from "react-router-dom";
export default function CatDetails()
{
  const Nav = useNavigate("");
    return(

        <>
              <section className="featured-section">
                <div className="section-container">
                  <div className="section-header">
                    <h2 className="section-title">Popular <span className="highlight">Categories</span></h2>
                    <p className="section-subtitle">Most enrolled categories loved by our students</p>
                  </div>
                </div>
              </section>
        
              <section className="cta-section">
                <div className="cta-container">
                  <div className="cta-content">
                    <h2 className="cta-title">
                      Ready to <span className="cta-highlight">Start Learning</span>?
                    </h2>
                    <p className="cta-description">
                      Choose a category and start building the skills you need for your
                      future. Join thousands of students already advancing their careers.
                    </p>
                    <button className="cta-btn" onClick={()=>Nav('/courses')}>
                      Browse All Courses <FaArrowRight className="btn-icon" />
                    </button>
                  </div>
                  <div className="cta-decoration">
                    <div className="cta-icon-box"><FaGraduationCap /></div>
                    <div className="cta-icon-box"><FaUsers /></div>
                    <div className="cta-icon-box"><FaStar /></div>
                  </div>
                </div>
              </section>
        
        </>
    )
}