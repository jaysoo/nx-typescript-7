export interface Entity054 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record054x0 extends Entity054 {
  kind: 'record-054-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x1 extends Entity054 {
  kind: 'record-054-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x2 extends Entity054 {
  kind: 'record-054-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x3 extends Entity054 {
  kind: 'record-054-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x4 extends Entity054 {
  kind: 'record-054-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x5 extends Entity054 {
  kind: 'record-054-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x6 extends Entity054 {
  kind: 'record-054-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x7 extends Entity054 {
  kind: 'record-054-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x8 extends Entity054 {
  kind: 'record-054-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record054x9 extends Entity054 {
  kind: 'record-054-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord054 =
  | Record054x0
  | Record054x1
  | Record054x2
  | Record054x3
  | Record054x4
  | Record054x5
  | Record054x6
  | Record054x7
  | Record054x8
  | Record054x9;

export type RecordKind054 = AnyRecord054['kind'];

export type PartialDeep054<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep054<T[K]> : T[K];
};

export type ByKind054 = {
  [R in AnyRecord054 as R['kind']]: R;
};
