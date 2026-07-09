export interface Entity080 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record080x0 extends Entity080 {
  kind: 'record-080-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x1 extends Entity080 {
  kind: 'record-080-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x2 extends Entity080 {
  kind: 'record-080-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x3 extends Entity080 {
  kind: 'record-080-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x4 extends Entity080 {
  kind: 'record-080-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x5 extends Entity080 {
  kind: 'record-080-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x6 extends Entity080 {
  kind: 'record-080-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x7 extends Entity080 {
  kind: 'record-080-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x8 extends Entity080 {
  kind: 'record-080-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record080x9 extends Entity080 {
  kind: 'record-080-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord080 =
  | Record080x0
  | Record080x1
  | Record080x2
  | Record080x3
  | Record080x4
  | Record080x5
  | Record080x6
  | Record080x7
  | Record080x8
  | Record080x9;

export type RecordKind080 = AnyRecord080['kind'];

export type PartialDeep080<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep080<T[K]> : T[K];
};

export type ByKind080 = {
  [R in AnyRecord080 as R['kind']]: R;
};
