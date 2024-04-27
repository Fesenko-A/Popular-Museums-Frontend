import Museum from "./Museum";

export default interface Image {
  imageId: number;
  imageUrl: string;
  museumId: number;
  museum: Museum;
}
