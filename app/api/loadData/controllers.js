import prisma from "../db/client";

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

const postAllUsers = async () => {
  const allUsers = await prisma.User.createMany({
    data: [
      {
        name: "Alice",
        lastName: "Smith",
        email: "alice@example.com",
        password: "alice123",
        aboutMe: "I love photography and traveling.",
      },
      {
        name: "Bob",
        lastName: "Johnson",
        email: "bob@example.com",
        password: "bob123",
        aboutMe: "I'm a software engineer and a coffee lover.",
      },
      {
        name: "Emily",
        lastName: "Wilson",
        email: "emily@example.com",
        password: "emily123",
        aboutMe: "I enjoy painting and playing musical instruments.",
      },

      {
        name: "John",
        lastName: "Smith",
        email: "john@example.com",
        password: "john123",
        aboutMe: "I'm a fitness enthusiast and a dog lover.",
      },
      {
        name: "Sarah",
        lastName: "Davis",
        email: "sarah@example.com",
        password: "sarah123",
        aboutMe: "I'm passionate about cooking and trying new recipes.",
      },
      {
        name: "Michael",
        lastName: "Brown",
        email: "michael@example.com",
        password: "michael123",
        aboutMe: "I enjoy playing basketball and watching movies.",
      },
      {
        name: "Emma",
        lastName: "Johnson",
        email: "emma@example.com",
        password: "emma123",
        aboutMe: "I love reading books and spending time in nature.",
      },
      {
        name: "Daniel",
        lastName: "Wilson",
        email: "daniel@example.com",
        password: "daniel123",
        aboutMe: "I'm a technology enthusiast and a gamer.",
      },
      {
        name: "Olivia",
        lastName: "Thomas",
        email: "olivia@example.com",
        password: "olivia123",
        aboutMe: "I enjoy hiking and exploring new places.",
      },
      {
        name: "James",
        lastName: "Anderson",
        email: "james@example.com",
        password: "james123",
        aboutMe: "I'm a music lover and play the guitar.",
      },
    ],
    skipDuplicates: true,
  });
  return { message: "All Users" };
};

const postAllProducts = async () => {
  const allProducts = await prisma.Product.createMany({
    data: [
      {
        name: "Cerámica de Talavera",
        description: "Pieza de cerámica artesanal de Talavera",
        price: 49.99,
        stock: 10,
        image: "https://example.com/ceramica_talavera.jpg",
        userId: "ce3cf01b-e1da-4760-84c4-89a52e228099",
        categoryId: 1,
      },
      {
        name: "Mandala tejido a mano",
        description: "Mandala de lana tejido a mano",
        price: 19.99,
        stock: 8,
        image: "https://example.com/mandala_tejido.jpg",
        userId: "2003b65c-1692-492a-bfa8-7eb213d9fc28",
        categoryId: 2,
      },
      {
        name: "Escultura de madera tallada",
        description: "Escultura de madera tallada a mano",
        price: 149.99,
        stock: 5,
        image: "https://example.com/escultura_madera.jpg",
        userId: "131e9055-dd1c-4eef-ad52-554393925e83",
        categoryId: 3,
      },
      {
        name: "Collar de cuentas de cristal",
        description: "Collar hecho a mano con cuentas de cristal",
        price: 29.99,
        stock: 15,
        image: "https://example.com/collar_cristal.jpg",
        userId: "131e9055-dd1c-4eef-ad52-554393925e83",
        categoryId: 1,
      },
    ],
    skipDuplicates: true,
  });
};

const postAllCategory = async () => {
  const allCategories = await prisma.Category.createMany({
    data: [
      {
        id: 1,
        name: "Hogar",
        description: "Artículos esenciales para tu hogar con un toque especial",
      },
      {
        id: 2,
        name: "Accesorios",
        description: "Diseños únicos y sutiles para complementar tu estilo",
      },
      {
        id: 3,
        name: "Madera",
        description: "Detalles únicos diseñados a base de madera, fusionando arte y funcionalidad",
      },
      {
        id: 4,
        name: "Reciclado",
        description: "Productos originales con materiales reciclados, una opción sostenible y con estilo",
      },
      {
        id: 5,
        name: "Natural",
        description: "Productos únicos y bellos inspirados en la maravilla de la naturaleza",
      },
    ],
  });
};

export { postAllProvinces, postAllUsers, postAllProducts, postAllCategory };
