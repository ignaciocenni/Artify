
function LatestReviews({ reviews }) {
  return (
    <div>
      <h1 className="font-semibold">Últimos realizados</h1>
      {reviews.map((rev) => (
        <div key={rev.id}>
          <p>{rev.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default LatestReviews;
