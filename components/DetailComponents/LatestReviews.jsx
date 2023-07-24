import Stars from "../Stars";
function LatestReviews({ reviews, latestReview }) {
  return (
    <div>
      <h1 className="font-semibold">Últimos realizados</h1>
      {reviews?.map((rev) => (
        <div key={rev.id} className='flex flex-col  pb-4 border-zinc-300 border-b-2'>
          <div className="flex justify-between items-center mb-3">
            <p ><Stars averange={rev.rating} size={20} /></p>
            <p >2024-12-12</p>
          </div>
          <p className="text-zinc-700">{rev.comment}</p>
        </div>
      ))}
      {latestReview && (
        <div key={latestReview.id} className='flex flex-col  pb-4 border-zinc-300 border-b-2'>
        <div className="flex justify-between items-center mb-3">
          <p ><Stars averange={latestReview.rating} size={20} /></p>
          <p >creado recientemente</p>
        </div>
        <p className="text-zinc-700">{latestReview.comment}</p>
      </div>
      )}
    </div>
  );
}
export default LatestReviews;
