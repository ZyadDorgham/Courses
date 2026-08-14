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
import "./Dashboard.css";
import Navbar from "../Componant/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../CebrateComponant/DashboardHeader";
import CompleteDashboard from "../CebrateComponant/CompleteDashboard";

const Dashboard = () => {

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, seterr] = useState("");

  useEffect(() => {
    async function Get() {
      try {
        const request = await fetch(
          "https://www.uofcourse.com/api/courses"
        );

        if (!request.ok) {
          throw new Error("Failed request");
        }

        const response = await request.json();

        setdata(response.results);
      } catch (err) {
        seterr(err.message);
      } finally {
        setloading(false);
      }
    }

    Get();
  }, []);

  // =========================
  // Dashboard Calculations
  // =========================

  // Total Courses
  const totalCourses = data.length;

  // Total Categories
  // ARCH, ENGG, etc...
  const totalCategories = new Set(
    data.map((course) => course.code?.split("-")[0])
  ).size;

  // Total Units
  const totalUnits = data.reduce(
    (total, course) => total + (course.units || 0),
    0
  );

  const courseLevels = new Set(
    data.map((course) => course.level)
  ).size;

  const stats = [
    {
      id: 1,
      icon: <FaBook />,
      value: totalCourses,
      label: "Total Courses",
    },
    {
      id: 2,
      icon: <FaList />,
      value: totalCategories,
      label: "Total Categories",
    },
    {
      id: 3,
      icon: <FaLayerGroup />,
      value: totalUnits,
      label: "Total Units",
    },
    {
      id: 4,
      icon: <FaChartBar />,
      value: courseLevels,
      label: "Course Levels",
    },
  ];

  const levels = [...new Set(data.map((course) => course.level))];

  const levelData = levels.map((level) => {
    const coursesCount = data.filter(
      (course) => course.level === level
    ).length;

    const percentage =
      totalCourses > 0
        ? Math.round((coursesCount / totalCourses) * 100)
        : 0;

    return {
      level,
      coursesCount,
      percentage,
    };
  });

  const categoryData = [
    ...new Set(
      data.map((course) => course.code?.split("-")[0])
    ),
  ];

  const categories = categoryData.map((category) => {
    const coursesCount = data.filter(
      (course) => course.code?.split("-")[0] === category
    ).length;

    return {
      category,
      coursesCount,
    };
  });

  const latestCourses = data.slice(0, 5);

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-container">

            <DashboardHeader/>

          {loading && (
            <div className="dashboard-status loading">
              Loading dashboard data...
            </div>
          )}

          {err && (
            <div className="dashboard-status error">
              {err}
            </div>
          )}

          {!loading && !err && (
            <>
              <div className="stats-grid">

                {stats.map((stat) => (
                  <div
                    className="stat-card"
                    key={stat.id}
                  >
                    <div className="stat-icon">
                      {stat.icon}
                    </div>

                    <div className="stat-content">
                      <span className="stat-value">
                        {stat.value}
                      </span>

                      <span className="stat-label">
                        {stat.label}
                      </span>
                    </div>

                    <div className="stat-decoration"></div>
                  </div>
                ))}

              </div>
<CompleteDashboard levelData={levelData} categories={categories} latestCourses={latestCourses}/>

            </>
          )}

        </div>
      </div>
    </>
  );
};

export default Dashboard;