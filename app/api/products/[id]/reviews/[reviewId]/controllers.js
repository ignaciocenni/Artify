import prisma from "../../../../db/client";

const deleteReview = async (reviewId) => {
  const searchedReview = await prisma.review.findFirst({
    where: {
      id: +reviewId,
    },
  });
  if (!searchedReview) throw new Error("The review does not exist");

  await prisma.review.delete({
    where: {
      id: +reviewId,
    },
  });
  return { message: "Eliminado con exito" };
};

const updateReview = async (reviewId, comment, rating) => {
  if (!comment && !rating) throw new Error("Missing arguments!");

  // Validates:
  // Comments
  if (comment.length <= 10)
    throw new Error("The comment must have at least 2 characters.");

  // Rating
  if (rating < 1 || rating > 5)
    throw new Error("The rating must be from 0 to 5");

  const searchedReview = await prisma.review.findFirst({
    where: {
      id: +reviewId,
    },
  });
  if (!searchedReview) throw new Error("The review does not exist");
  const updatedReview = await prisma.review.update({
    where: {
      id: +reviewId,
    },
    data: {
      comment: comment,
      rating: rating,
    },
  });
  return updatedReview;
};

export { deleteReview, updateReview };
