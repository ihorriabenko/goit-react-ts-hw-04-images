export interface Hit {
  id: number;
  webformatURL: string;
  largeImageURL: string;
}

export interface Data {
  hits: Hit[];
  total: number;
  totalHits: number;
}
