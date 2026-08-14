
export default function Pagination()
{
    return(

        <>
        <div className="empty-state">
        <div className="empty-state-content">
          <span className="empty-icon">📚</span>
          <h3 className="empty-title">No Courses Found</h3>
          <p className="empty-desc">Try adjusting your filters or search terms.</p>
          <button className="empty-clear-btn">Clear Filters</button>
        </div>
      </div>

      <div className="pagination">
        <button className="pagination-btn pagination-prev">Previous</button>
        <button className="pagination-btn pagination-num active">1</button>
        <button className="pagination-btn pagination-num">2</button>
        <button className="pagination-btn pagination-num">3</button>
        <button className="pagination-btn pagination-num">4</button>
        <button className="pagination-btn pagination-num">5</button>
        <button className="pagination-btn pagination-next">Next</button>
      </div>

        </>
    )
}