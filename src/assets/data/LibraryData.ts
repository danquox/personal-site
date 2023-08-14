export type TSeries = {
  name: string;
  translation?: string;
  imageURL: string;
}

export const SeriesData: TSeries[] = [
  {
    name: "Bleach",
    imageURL: "/library-images/series/a0db946e-ac98-4677-99dc-5d29852c348e.jpg"
  },
  {
    name: "Solo Leveling",
    imageURL: "/library-images/series/6392a4e2-118e-4b0d-87b3-64bd9202500e.jpg"
  },
  {
    name: "Black Clover",
    imageURL: "/library-images/series/f785b1ac-db89-40e6-b09c-98da2a9cfb6f.jpg"
  }
]

export type TFilm = {
  name: string;
  translation?: string;
  imageURL: string;
}

export const FilmData: TSeries[] = [
  {
    name: "Princess Mononoke",
    imageURL: "/library-images/films/0b7f6cb6-06c0-42b4-a18b-330c2ebceb19.jpg"
  },
  {
    name: "Wolf Children",
    imageURL: "/library-images/films/d567e414-a00b-4e5e-b8e4-251f5232e917.jpg"
  },
]