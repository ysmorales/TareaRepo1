import {
  approved,
  pending,
} from "../../../../components/DesignSystem/utils/constants";

export const itemsTimeLineStories = [
  {
    id: 1,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    info: "Ha aprobado la solicitud",
    status: approved,
    extraInfo: [
      {
        label: "Motivo",
        value: "some motive",
      },
    ],
  },
  {
    id: 2,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
  {
    id: 3,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
  {
    id: 4,
    user: {
      image: "/images/avatar.jpg",
      name: "Armanda Paredes del Castillo",
      note: "Constructor",
    },
    date: "2024/3/9",
    info: "Ha ingresado una solicitud",
    status: pending,
  },
  {
    id: 5,
    user: {
      image: "/images/avatar.jpg",
      name: "Armando Paredes del Castillo",
      note: "Operador",
    },
    date: new Date(),
    status: approved,
  },
];
