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
export default function DashboardHeader()
{
    return(

        <>
                  <header className="dashboard-header">
                    <div className="header-content">
                      <h1 className="header-title">
                        Dashboard
                      </h1>
        
                      <p className="header-subtitle">
                        Overview of your course platform
                      </p>
                    </div>
        
                    <div className="header-decoration">
                      <div className="header-icon-box">
                        <FaGraduationCap />
                      </div>
                    </div>
                  </header>
        
        
        </>
    )
}