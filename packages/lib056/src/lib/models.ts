export interface Entity056 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record056x0 extends Entity056 {
  kind: 'record-056-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x1 extends Entity056 {
  kind: 'record-056-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x2 extends Entity056 {
  kind: 'record-056-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x3 extends Entity056 {
  kind: 'record-056-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x4 extends Entity056 {
  kind: 'record-056-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x5 extends Entity056 {
  kind: 'record-056-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x6 extends Entity056 {
  kind: 'record-056-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x7 extends Entity056 {
  kind: 'record-056-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x8 extends Entity056 {
  kind: 'record-056-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record056x9 extends Entity056 {
  kind: 'record-056-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord056 =
  | Record056x0
  | Record056x1
  | Record056x2
  | Record056x3
  | Record056x4
  | Record056x5
  | Record056x6
  | Record056x7
  | Record056x8
  | Record056x9;

export type RecordKind056 = AnyRecord056['kind'];

export type PartialDeep056<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep056<T[K]> : T[K];
};

export type ByKind056 = {
  [R in AnyRecord056 as R['kind']]: R;
};
