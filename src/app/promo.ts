let nextId = 1;

export interface PromoOpts {
  title?: string,
  upcs?: string[],
  page?: number
}

export class Promo {
  id: number;
  title: string;
  upcs: string[];
  page: number;
  region: [number, number, number, number];

  public constructor(opts: PromoOpts) {
    this.id = nextId++;
    this.upcs = opts.upcs || [];
    this.title = opts.title;
  }

  public toString(): string {
    return this.title || this.upcs.join(',');
  }
}