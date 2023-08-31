export type InputContentItem = {
  id: number;
  name: string;
};
export type InputContent = Array<InputContentItem>;

export class ListItemInput {
  public id: string | number;
  public name: string;

  constructor(source: any) {
    if (typeof source === 'object') {
      this.id = source.id;
      this.name = source.name;
    } else {
      this.id = this.name = source;
    }
  }
}
