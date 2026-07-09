export interface Entity019 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record019x0 extends Entity019 {
  kind: 'record-019-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x1 extends Entity019 {
  kind: 'record-019-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x2 extends Entity019 {
  kind: 'record-019-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x3 extends Entity019 {
  kind: 'record-019-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x4 extends Entity019 {
  kind: 'record-019-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x5 extends Entity019 {
  kind: 'record-019-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x6 extends Entity019 {
  kind: 'record-019-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x7 extends Entity019 {
  kind: 'record-019-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x8 extends Entity019 {
  kind: 'record-019-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record019x9 extends Entity019 {
  kind: 'record-019-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord019 =
  | Record019x0
  | Record019x1
  | Record019x2
  | Record019x3
  | Record019x4
  | Record019x5
  | Record019x6
  | Record019x7
  | Record019x8
  | Record019x9;

export type RecordKind019 = AnyRecord019['kind'];

export type PartialDeep019<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep019<T[K]> : T[K];
};

export type ByKind019 = {
  [R in AnyRecord019 as R['kind']]: R;
};
