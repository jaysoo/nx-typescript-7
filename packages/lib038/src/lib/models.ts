export interface Entity038 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record038x0 extends Entity038 {
  kind: 'record-038-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x1 extends Entity038 {
  kind: 'record-038-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x2 extends Entity038 {
  kind: 'record-038-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x3 extends Entity038 {
  kind: 'record-038-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x4 extends Entity038 {
  kind: 'record-038-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x5 extends Entity038 {
  kind: 'record-038-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x6 extends Entity038 {
  kind: 'record-038-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x7 extends Entity038 {
  kind: 'record-038-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x8 extends Entity038 {
  kind: 'record-038-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record038x9 extends Entity038 {
  kind: 'record-038-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord038 =
  | Record038x0
  | Record038x1
  | Record038x2
  | Record038x3
  | Record038x4
  | Record038x5
  | Record038x6
  | Record038x7
  | Record038x8
  | Record038x9;

export type RecordKind038 = AnyRecord038['kind'];

export type PartialDeep038<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep038<T[K]> : T[K];
};

export type ByKind038 = {
  [R in AnyRecord038 as R['kind']]: R;
};
