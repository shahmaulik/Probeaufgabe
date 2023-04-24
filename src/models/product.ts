export interface product {
  filters: [],
  header: headerType,
  products: []
}

export interface productType {
    name: string,
    id: number,
    imageURL: string,
    available: boolean,
    releaseDate: number,
    description: string,
    longDescription: string,
    rating: number,
    price: object
}

export interface headerType {
  headerTitle: string,
  headerDescription: string
}