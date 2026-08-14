import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaYoutube, FaInfoCircle, FaBook, FaGraduationCap, FaClock, FaUserGraduate } from "react-icons/fa";
import "./CourseDetails.css";

export default function CourseDetails() {

  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.uofcourse.com/api/courses/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const json = await response.json();
        setdata(json);
      } catch (err) {
        seterror(err.message);
      } finally {
        setloading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="details-page">

        <div className="details-container">

          <div className="skeleton-back"></div>

          <div className="skeleton-hero">
            <div className="skeleton-content">
              <div className="skeleton-line w-40"></div>
              <div className="skeleton-line w-70"></div>
              <div className="skeleton-line w-50"></div>
              <div className="skeleton-line w-100"></div>
              <div className="skeleton-line w-80"></div>
              <div className="skeleton-line w-60"></div>
            </div>
            <div className="skeleton-image"></div>
          </div>

          <div className="skeleton-stats">
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
            <div className="skeleton-stat"></div>
          </div>

          <div className="skeleton-section">
            <div className="skeleton-line w-40"></div>
            <div className="skeleton-line w-100"></div>
            <div className="skeleton-line w-100"></div>
            <div className="skeleton-line w-80"></div>
          </div>

          <div className="skeleton-grid">
            {[...Array(6)].map((_, i) => (
              <div className="skeleton-card" key={i}>
                <div className="skeleton-line w-40"></div>
                <div className="skeleton-line w-60"></div>
              </div>
            ))}

          </div>

        </div>

      </div>
    );
  }

  if (error) return <div className="details-page error-state">{error}</div>;

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    data.name + " full course"
  )}`;

  return (
    <div className="details-page">
      <div className="details-container">
        <Link to="/courses" className="back-link">← Back to Courses</Link>

        <div className="hero-card">
          <div className="hero-content">
            <span className="course-code">{data.code}</span>
            <h1 className="course-title">{data.name}</h1>
            <p className="course-desc">{data.desc}</p>
            <div className="hero-meta">
              <span className="meta-item"><FaGraduationCap /> Level {data.level}</span>
              <span className="meta-item"><FaBook /> {data.units} Units</span>
              <span className="meta-item"><FaClock /> {data.number}</span>
            </div>
            <div className="hero-actions">
              <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer" className="btn-youtube">
                <FaYoutube /> Watch on YouTube
              </a>
              {data.url_uni && (
                <a href={data.url_uni} target="_blank" rel="noopener noreferrer" className="btn-uni">
                  <FaInfoCircle /> University Page
                </a>
              )}
            </div>
          </div>
          
          <div className="hero-image">
            <img
              src={`https://picsum.photos/seed/${data.id || data.code}/600/400`}
              alt={data.name}
            />
            <div className="hero-emoji">{data.emoji || "📚"}</div>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <span className="label">Code</span>
            <span className="value">{data.code}</span>
          </div>
          <div className="info-card">
            <span className="label">Number</span>
            <span className="value">{data.number}</span>
          </div>
          <div className="info-card">
            <span className="label">Subject ID</span>
            <span className="value">{data.subject_id}</span>
          </div>
          <div className="info-card">
            <span className="label">Units</span>
            <span className="value">{data.units}</span>
          </div>
          <div className="info-card">
            <span className="label">Level</span>
            <span className="value">{data.level}</span>
          </div>
          <div className="info-card">
            <span className="label">GPA</span>
            <span className="value">{data.countgpa ? "Yes" : "No"}</span>
          </div>
          <div className="info-card">
            <span className="label">Repeatable</span>
            <span className="value">{data.repeat ? "Yes" : "No"}</span>
          </div>
        </div>

        <div className="section-block">
          <h2>Description</h2>
          <p>{data.desc}</p>
        </div>

        <div className="section-block">
          <h2>Requirements</h2>
          <div className="req-grid">
            <div className="req-item">
              <span className="req-label">Prerequisites</span>
              <span className="req-value">{data.prereqs || "None"}</span>
            </div>
            <div className="req-item">
              <span className="req-label">Corequisites</span>
              <span className="req-value">{data.coreqs || "None"}</span>
            </div>
            <div className="req-item">
              <span className="req-label">Antirequisites</span>
              <span className="req-value">{data.antireqs || "None"}</span>
            </div>
          </div>
        </div>

        <div className="section-block">
          <h2>Additional Info</h2>
          <div className="extra-grid">
            <div className="extra-item">
              <span className="extra-label">Also known as</span>
              <span className="extra-value">{data.aka || "None"}</span>
            </div>
            <div className="extra-item">
              <span className="extra-label">Notes</span>
              <span className="extra-value">{data.notes || "None"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}