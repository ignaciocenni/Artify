import prisma from "../db/client";

const allProvinces = async () => {
  const response = await prisma.Province.findMany();
  return response;
};

const postAllProvinces = async () => {
  const allProvinces = await prisma.Province.createMany({
    data: [
      { name: "Buenos Aires" },
      { name: "Catamarca" },
      { name: "Chaco" },
      { name: "Chubut" },
      { name: "Córdoba" },
      { name: "Corrientes" },
      { name: "Entre Ríos" },
      { name: "Formosa" },
      { name: "Jujuy" },
      { name: "La Pampa" },
      { name: "La Rioja" },
      { name: "Mendoza" },
      { name: "Misiones" },
      { name: "Neuquén" },
      { name: "Río Negro" },
      { name: "Salta" },
      { name: "San Juan" },
      { name: "San Luis" },
      { name: "Santa Cruz" },
      { name: "Santa Fe" },
      { name: "Santiago del Estero" },
      { name: "Tierra del Fuego" },
      { name: "Tucumán" },
    ],
    skipDuplicates: true,
  });
  return { message: "All provinces upload(?" };
};

export { allProvinces, postAllProvinces };
