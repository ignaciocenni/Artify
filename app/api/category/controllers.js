import prisma from "../db/client";

// POST Controller.
const addCategory = async (name, description) => {
  if (!name || !description) throw new Error("Missing arguments.");

  // Validates.
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name))
    throw new Error(
      "Invalid name format. Only letters and spaces are allowed."
    );
  if (description.length <= 12)
    throw new Error("The description must be more of 12 letters.");
  // ...

  const newCategory = await prisma.Category.create({
    data: {
      name,
      description,
    },
  });

  return newCategory;
};

// GET Controller.
const getAllCategories = async () => {
  const response = await prisma.Category.findMany();
  if (response.length === 0) throw new Error("There are not categories.");
  return response;
};

export { addCategory, getAllCategories };
