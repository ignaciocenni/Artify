import Stars from "../Stars";
import formatDate from "./formatDate"

function LatestReviews({ reviews, latestReview }) {
  return (
    <div>
      <h1 className="font-semibold">Experiencias de los clientes con el producto</h1>
      {!reviews.length && !latestReview &&
       <div  className='flex flex-col  pb-4 border-zinc-300 border-b-2'>
       <div className="flex justify-between items-center mb-3">
       </div>
       <p className="text-zinc-700">Por el momento, no hay opiniones sobre este producto</p>
     </div>
      }
      {reviews?.map((rev) => (
        <div key={rev.id} className='flex flex-col  pb-4 border-zinc-300 border-b-2'>
          <div className="flex justify-between items-center mb-3">
            <p ><Stars averange={rev.rating} size={20} /></p>
            <p >{formatDate(rev.createdAt)}</p>
          </div>
          <p className="text-zinc-700">{rev.comment}</p>
        </div>
      ))}
      {latestReview && reviews[-1]?.comment != latestReview.comment &&(
        <div key={latestReview.id} className='flex flex-col  pb-4 border-zinc-300 border-b-2'>
        <div className="flex justify-between items-center mb-3">
          <p ><Stars averange={latestReview.rating} size={20} /></p>
          <p >Creado recientemente</p>
        </div>
        <p className="text-zinc-700">{latestReview.comment}</p>
      </div>
      )}
    </div>
  );
}
export default LatestReviews;
