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

const addReview = async (comment, rating, productId, id) => {
  if (!comment || !rating || !productId) throw new Error("Faltan Argumentos!");

  // Validates:
  // Comments
  if (comment.length <= 10)
    throw new Error("The comment must have at least 2 characters.");

  // Rating
  if (rating < 1 || rating > 5)
    throw new Error("The rating must be from 0 to 5");

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
