export interface Entity010 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record010x0 extends Entity010 {
  kind: 'record-010-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x1 extends Entity010 {
  kind: 'record-010-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x2 extends Entity010 {
  kind: 'record-010-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x3 extends Entity010 {
  kind: 'record-010-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x4 extends Entity010 {
  kind: 'record-010-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x5 extends Entity010 {
  kind: 'record-010-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x6 extends Entity010 {
  kind: 'record-010-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x7 extends Entity010 {
  kind: 'record-010-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x8 extends Entity010 {
  kind: 'record-010-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record010x9 extends Entity010 {
  kind: 'record-010-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord010 =
  | Record010x0
  | Record010x1
  | Record010x2
  | Record010x3
  | Record010x4
  | Record010x5
  | Record010x6
  | Record010x7
  | Record010x8
  | Record010x9;

export type RecordKind010 = AnyRecord010['kind'];

export type PartialDeep010<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep010<T[K]> : T[K];
};

export type ByKind010 = {
  [R in AnyRecord010 as R['kind']]: R;
};
