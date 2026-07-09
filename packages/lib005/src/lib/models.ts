export interface Entity005 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record005x0 extends Entity005 {
  kind: 'record-005-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x1 extends Entity005 {
  kind: 'record-005-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x2 extends Entity005 {
  kind: 'record-005-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x3 extends Entity005 {
  kind: 'record-005-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x4 extends Entity005 {
  kind: 'record-005-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x5 extends Entity005 {
  kind: 'record-005-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x6 extends Entity005 {
  kind: 'record-005-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x7 extends Entity005 {
  kind: 'record-005-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x8 extends Entity005 {
  kind: 'record-005-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record005x9 extends Entity005 {
  kind: 'record-005-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord005 =
  | Record005x0
  | Record005x1
  | Record005x2
  | Record005x3
  | Record005x4
  | Record005x5
  | Record005x6
  | Record005x7
  | Record005x8
  | Record005x9;

export type RecordKind005 = AnyRecord005['kind'];

export type PartialDeep005<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep005<T[K]> : T[K];
};

export type ByKind005 = {
  [R in AnyRecord005 as R['kind']]: R;
};
