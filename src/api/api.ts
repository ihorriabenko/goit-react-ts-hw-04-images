import { Data } from '../types/types';

export async function getImages(query: string, page: number): Promise<Data> {
  const response = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=27832642-aa50f7f08c8a181668a8915c7&image_type=photo&orientation=horizontal&per_page=12`
  );

  const data = await response.json();

  return data;
}
