export interface Entity041 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record041x0 extends Entity041 {
  kind: 'record-041-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x1 extends Entity041 {
  kind: 'record-041-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x2 extends Entity041 {
  kind: 'record-041-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x3 extends Entity041 {
  kind: 'record-041-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x4 extends Entity041 {
  kind: 'record-041-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x5 extends Entity041 {
  kind: 'record-041-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x6 extends Entity041 {
  kind: 'record-041-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x7 extends Entity041 {
  kind: 'record-041-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x8 extends Entity041 {
  kind: 'record-041-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record041x9 extends Entity041 {
  kind: 'record-041-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord041 =
  | Record041x0
  | Record041x1
  | Record041x2
  | Record041x3
  | Record041x4
  | Record041x5
  | Record041x6
  | Record041x7
  | Record041x8
  | Record041x9;

export type RecordKind041 = AnyRecord041['kind'];

export type PartialDeep041<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep041<T[K]> : T[K];
};

export type ByKind041 = {
  [R in AnyRecord041 as R['kind']]: R;
};
