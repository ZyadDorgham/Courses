import { FaSearch, FaStar, FaStarHalfAlt, FaRegStar, FaRegHeart, FaUser, FaClock, FaBook } from 'react-icons/fa';
import './Courses.css';
import Navbar from '../Componant/Navbar';
import { useEffect, useState, useMemo } from 'react';
import GetData from '../CebrateComponant/GetData';
import Pagination from '../CebrateComponant/Pagination';

const Courses = () => {

  const [wishlist, setWishlist] = useState(() => {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
});

function ToggleWishlist(course) {
  setWishlist((prev) => {
    const exists = prev.some((item) => item.id === course.id);

    if (exists) {
      return prev.filter((item) => item.id !== course.id);
    }

    return [...prev, course];
  });
}

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [select, setselect] = useState('all');

  console.log(data)
  const filteredData = useMemo(() => {
    let result = data.filter(course =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );
    if (select !== 'all') {
      const level = parseInt(select.replace('level', ''), 10);
      result = result.filter(course => course.level === level);
    }
    return result;
  }, [data, search, select]);


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

  return (
    <>
      <Navbar />
      <div className="courses-page">
        <header className="courses-header">
          <div className="courses-header-content">
            <h1 className="courses-title">Explore Our Courses</h1>
            <p className="courses-subtitle">
              Learn practical skills from expert instructors and take your career to the next level.
            </p>
          </div>
          <div className="courses-header-decoration">
            <div className="header-deco-circle"></div>
          </div>
        </header>

        <div className="courses-toolbar">
          <div className="search-section">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                type="text"
                className="search-input"
                placeholder="Search for courses..."
              />
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-group">
              <label className="filter-label">Level</label>
              <select
                className="filter-select"
                value={select}
                onChange={(e) => setselect(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="level2">Level 2</option>
                <option value="level4">Level 4</option>
                <option value="level5">Level 5</option>
                <option value="level6">Level 6</option>
              </select>
            </div>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setsearch('');
                setselect('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="courses-grid">
<GetData
  Filterd={filteredData}
  setdata={setdata}
  ToggleWishlist={ToggleWishlist}
  wishlist={wishlist}
/>
        </div>

        <Pagination />
      </div>
    </>
  );
};

export default Courses;