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
