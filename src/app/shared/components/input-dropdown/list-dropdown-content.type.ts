export type InputContentItem = {
  id: number;
  name: string;
  imgSrc: string | null;
};
export type InputContent = Array<InputContentItem>;

export class ListItemInput {
  public id: string | number;
  public name: string;
  public imgSrc: string | null;

  constructor(source: any) {
    if (typeof source === 'object') {
      this.id = source.id;
      this.name = source.name;
      this.imgSrc = source.imgSrc;
    } else {
      this.id = this.name = source;
      this.imgSrc = null;
    }
  }
}
