import prisma from "../../../db/client";

const getAllReviews = async (id) => {
  const allReviews = await prisma.review.findMany({
    where: {
      productId: +id,
    },
  });
  if (!allReviews.length) throw new Error("No reviews found");
  return allReviews;
};

const addReview = async (comment, rating, id) => {
  if (comment || rating) throw new Error("Missing arguments");

  const newReview = await prisma.Review.create({
    data: {
      comment: comment,
      rating: rating,
      productId: +id,
    },
  });
  return newReview;
};

export { getAllReviews, addReview };
