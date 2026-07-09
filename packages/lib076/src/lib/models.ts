export interface Entity076 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record076x0 extends Entity076 {
  kind: 'record-076-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x1 extends Entity076 {
  kind: 'record-076-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x2 extends Entity076 {
  kind: 'record-076-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x3 extends Entity076 {
  kind: 'record-076-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x4 extends Entity076 {
  kind: 'record-076-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x5 extends Entity076 {
  kind: 'record-076-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x6 extends Entity076 {
  kind: 'record-076-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x7 extends Entity076 {
  kind: 'record-076-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x8 extends Entity076 {
  kind: 'record-076-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record076x9 extends Entity076 {
  kind: 'record-076-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord076 =
  | Record076x0
  | Record076x1
  | Record076x2
  | Record076x3
  | Record076x4
  | Record076x5
  | Record076x6
  | Record076x7
  | Record076x8
  | Record076x9;

export type RecordKind076 = AnyRecord076['kind'];

export type PartialDeep076<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep076<T[K]> : T[K];
};

export type ByKind076 = {
  [R in AnyRecord076 as R['kind']]: R;
};
