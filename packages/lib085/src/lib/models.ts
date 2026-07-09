export interface Entity085 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record085x0 extends Entity085 {
  kind: 'record-085-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x1 extends Entity085 {
  kind: 'record-085-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x2 extends Entity085 {
  kind: 'record-085-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x3 extends Entity085 {
  kind: 'record-085-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x4 extends Entity085 {
  kind: 'record-085-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x5 extends Entity085 {
  kind: 'record-085-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x6 extends Entity085 {
  kind: 'record-085-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x7 extends Entity085 {
  kind: 'record-085-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x8 extends Entity085 {
  kind: 'record-085-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record085x9 extends Entity085 {
  kind: 'record-085-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord085 =
  | Record085x0
  | Record085x1
  | Record085x2
  | Record085x3
  | Record085x4
  | Record085x5
  | Record085x6
  | Record085x7
  | Record085x8
  | Record085x9;

export type RecordKind085 = AnyRecord085['kind'];

export type PartialDeep085<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep085<T[K]> : T[K];
};

export type ByKind085 = {
  [R in AnyRecord085 as R['kind']]: R;
};
