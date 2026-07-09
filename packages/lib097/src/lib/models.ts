export interface Entity097 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record097x0 extends Entity097 {
  kind: 'record-097-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x1 extends Entity097 {
  kind: 'record-097-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x2 extends Entity097 {
  kind: 'record-097-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x3 extends Entity097 {
  kind: 'record-097-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x4 extends Entity097 {
  kind: 'record-097-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x5 extends Entity097 {
  kind: 'record-097-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x6 extends Entity097 {
  kind: 'record-097-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x7 extends Entity097 {
  kind: 'record-097-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x8 extends Entity097 {
  kind: 'record-097-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record097x9 extends Entity097 {
  kind: 'record-097-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord097 =
  | Record097x0
  | Record097x1
  | Record097x2
  | Record097x3
  | Record097x4
  | Record097x5
  | Record097x6
  | Record097x7
  | Record097x8
  | Record097x9;

export type RecordKind097 = AnyRecord097['kind'];

export type PartialDeep097<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep097<T[K]> : T[K];
};

export type ByKind097 = {
  [R in AnyRecord097 as R['kind']]: R;
};
