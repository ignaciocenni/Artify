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
        name: "Pulsera de cuero",
        price: 100,
        image: [
          "https://uploadthing.com/f/20ded396-c17d-4f8c-a515-39b06ea12cb3_Pulsera-de-cuero-de-alta-calidad-para-hombre-brazalete-de-cuero-multicapa-con-cuentas-de-ojo_jpg_Q90_jpg.webp",
        ],
        userId: "23f7a5fb-a2e8-4543-b38c-5928f126e1fc",
        categoryId: 2,
        provinceId: 1,
        stock: 15,
        status: "ACTIVE",
        description: "Elegante pulsera de cuero de alta calidad. Su diseño de varias capas ofrece un aspecto robusto y masculino.",
      },
      {
        name: "Cuadro artesanal haz de picas",
        price: 150,
        image: ["https://uploadthing.com/f/899dc549-d945-42a6-9e44-edcc51bb67c0_artesania2jpg.jpg"],
        userId: "2549a517-bbb5-48f3-8e4d-2d3e53224c53",
        categoryId: 1,
        provinceId: 1,
        stock: 5,
        status: "ACTIVE",
        description:
          "Un cuadro artesanal inspirado en el haz de picas, hecho a mano con atención al detalle. Perfecto para añadir un toque de creatividad a cualquier espacio.",
      },
      {
        name: "Cartel de chapa fileteado",
        price: 370,
        image: ["https://uploadthing.com/f/68b314be-bc26-4225-9eb0-3d07970ccb13_Cartel%20Chapa%20Fileteado.jpg"],
        userId: "4abcac7f-1834-4fb9-a522-17d56d862c4e",
        categoryId: 1,
        provinceId: 1,
        stock: 5,
        status: "ACTIVE",
        description:
          "Cartel de chapa fileteado, excelente para añadir un toque de estilo a cualquier decoración. Hecho con materiales de alta calidad.",
      },
      {
        name: "Estantería reciclada con herraduras",
        price: 500,
        image: ["https://utfs.io/f/d08e4f56-91b8-4007-abdc-9c76f40a69c2_93eae7e8eb067d9f25d23df7e8dbeb68.jpg"],
        userId: "ab563d22-7c5f-4a6c-8cc1-aa35d1356c04",
        categoryId: 4,
        provinceId: 1,
        stock: 5,
        status: "ACTIVE",
        description:
          "Estantería única y sostenible, hecha a partir de herraduras recicladas. Un complemento perfecto para cualquier decoración de inspiración rústica.",
      },
      {
        name: "Indio picaro artesanal",
        price: 250,
        image: ["https://uploadthing.com/f/ea284388-3ad1-4cac-9f07-3b6aacfa25d2_IndioPicaro.jpg"],
        userId: "aedbf0b4-124b-4624-81e2-53b1dce1f485",
        categoryId: 3,
        provinceId: 1,
        stock: 8,
        status: "ACTIVE",
        description:
          "Figura artesanal del icónico indio picaro. Hecho con detalle, este producto trae un toque de humor y cultura a cualquier espacio.",
      },
      {
        name: "Cuadro de madera calada",
        price: 450,
        image: ["https://uploadthing.com/f/3e39ea41-ed97-404f-88d8-bb2fd300bccd_mapamunid.jpg"],
        userId: "d1f0681e-47b4-4393-b548-e998c9eba14b",
        categoryId: 3,
        provinceId: 1,
        stock: 6,
        status: "ACTIVE",
        description:
          "Cuadro de madera calada con un diseño detallado. Un gran complemento para cualquier hogar que valora la artesanía y la calidad.",
      },
      {
        name: "Sandalias de mimbre",
        price: 250,
        image: ["https://uploadthing.com/f/fa0bbcd3-daa2-4f26-b52b-7c70fff21b0d_artesania.jpg"],
        userId: "d96ddd7f-f797-40cd-872a-b13e7bc9ab0f",
        categoryId: 2,
        provinceId: 1,
        stock: 5,
        status: "ACTIVE",
        description: "Sandalias de mimbre ligeras y cómodas. Hechas a mano para una calidad inigualable y un estilo único.",
      },
      {
        name: "Manualidad con tapas de botellas",
        price: 430,
        image: ["https://uploadthing.com/f/83344bd1-9c46-4276-9d19-4fc41fc15d6f_514525f2c024e27d55ddd3b7a5d09351.jpg"],
        userId: "ebaec055-b9cb-402f-af04-8848d161729b",
        categoryId: 4,
        provinceId: 1,
        stock: 3,
        status: "ACTIVE",
        description:
          "Arte creativo y ecológico hecho con tapas de botellas. Ideal para los amantes de la artesanía sostenible y la decoración única.",
      },
      {
        name: "Gorra NY",
        price: 500,
        image: ["https://uploadthing.com/f/0ad15849-e627-4c86-a428-8d9ac3a05dcc_Gorra.jpg"],
        userId: "ee071602-8262-4fa0-b3ed-20437cffd58d",
        categoryId: 2,
        provinceId: 1,
        stock: 2,
        status: "ACTIVE",
        description:
          "Una gorra elegante y deportiva con el logotipo de NY. Perfecta para añadir un toque de estilo a cualquier atuendo casual.",
      },
      {
        name: "Colgante de mano",
        price: 350,
        image: [
          "https://uploadthing.com/f/c6edcb62-4a38-43bb-83cc-98ea5b588851_colgante-de-mano.jpg",
          "https://uploadthing.com/f/0622762c-8dcf-449f-a102-c1ce86131428_colgante-de-mano-2.jpg",
        ],
        userId: "f0c8ad1c-d380-4cfc-9dc8-d8282198545b",
        categoryId: 2,
        provinceId: 1,
        stock: 10,
        status: "ACTIVE",
        description: "Hermoso colgante de mano hecho a mano, un accesorio sofisticado y versátil para cualquier ocasión.",
      },
      {
        name: "Porta Velas de barro",
        price: 500,
        image: [
          "https://uploadthing.com/f/03b08f4d-f215-4f5e-9c39-ecd9a5e59662_porta-vela-barro.jpg",
          "https://uploadthing.com/f/536cc060-e6d2-4ece-b053-2b8ad536b681_porta-vela-barro-2.jpg",
        ],
        userId: "f0c8ad1c-d380-4cfc-9dc8-d8282198545b",
        categoryId: 1,
        provinceId: 1,
        stock: 10,
        status: "ACTIVE",
        description: "Porta velas de barro artesanal, añade un toque de calidez y encanto rústico a cualquier ambiente de tu hogar.",
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
