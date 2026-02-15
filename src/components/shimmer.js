const Shimmer = (props) => {
  const { listCount } = props;
  const shimmerCards = [];
  for (let i = 0; i < listCount; i++) {
    shimmerCards.push(
      <div key={i} className="card res-card-shimmer" style={{ width: '18rem', margin: '4px' }}>
        <div className="card-img-top shimmer-img" style={{ height: '150px', background: '#e0e7ef', borderRadius: '8px 8px 0 0' }}></div>
        <div className="card-body">
          <div className="shimmer-line" style={{ height: '18px', width: '60%', background: '#e0e7ef', marginBottom: '10px', borderRadius: '4px' }}></div>
          <div className="shimmer-line" style={{ height: '14px', width: '80%', background: '#e0e7ef', marginBottom: '8px', borderRadius: '4px' }}></div>
          <div className="shimmer-line" style={{ height: '14px', width: '40%', background: '#e0e7ef', borderRadius: '4px' }}></div>
        </div>
      </div>
    );
  }
  return (
    <div className="res-container">
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
