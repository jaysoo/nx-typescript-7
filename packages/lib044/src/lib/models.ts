export interface Entity044 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record044x0 extends Entity044 {
  kind: 'record-044-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x1 extends Entity044 {
  kind: 'record-044-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x2 extends Entity044 {
  kind: 'record-044-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x3 extends Entity044 {
  kind: 'record-044-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x4 extends Entity044 {
  kind: 'record-044-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x5 extends Entity044 {
  kind: 'record-044-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x6 extends Entity044 {
  kind: 'record-044-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x7 extends Entity044 {
  kind: 'record-044-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x8 extends Entity044 {
  kind: 'record-044-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record044x9 extends Entity044 {
  kind: 'record-044-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord044 =
  | Record044x0
  | Record044x1
  | Record044x2
  | Record044x3
  | Record044x4
  | Record044x5
  | Record044x6
  | Record044x7
  | Record044x8
  | Record044x9;

export type RecordKind044 = AnyRecord044['kind'];

export type PartialDeep044<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep044<T[K]> : T[K];
};

export type ByKind044 = {
  [R in AnyRecord044 as R['kind']]: R;
};
