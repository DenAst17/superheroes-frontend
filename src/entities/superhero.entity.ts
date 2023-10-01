export default class Superhero {
  constructor(data: Record<string, unknown>) {
    Object.assign(this, data);
  }
  id: number | undefined;
  nickname: string | undefined;
  real_name: string | undefined;
  origin_description: string | undefined;
  superpowers: string | undefined;
  catch_phrase: string | undefined;
  images: string[] | undefined;
  new_images: File[] | undefined;
}
