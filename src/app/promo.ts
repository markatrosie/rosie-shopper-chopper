let nextId = 1;

export type Region = [number, number, number, number];

export interface PromoOpts {
  title?: string,
  upcs?: string[],
  page?: number,
  region?: Region
}

export class Promo {
  id: number;
  title: string;
  upcs: string[];
  page: number;
  region: Region

  public constructor(opts: PromoOpts) {
    this.id = nextId++;
    this.upcs = opts.upcs || [];
    this.title = opts.title;
    this.region = opts.region;
  }

  public toString(): string {
    return this.title || this.upcs.join(',');
  }
}