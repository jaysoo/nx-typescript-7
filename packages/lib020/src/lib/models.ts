export interface Entity020 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record020x0 extends Entity020 {
  kind: 'record-020-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x1 extends Entity020 {
  kind: 'record-020-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x2 extends Entity020 {
  kind: 'record-020-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x3 extends Entity020 {
  kind: 'record-020-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x4 extends Entity020 {
  kind: 'record-020-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x5 extends Entity020 {
  kind: 'record-020-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x6 extends Entity020 {
  kind: 'record-020-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x7 extends Entity020 {
  kind: 'record-020-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x8 extends Entity020 {
  kind: 'record-020-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record020x9 extends Entity020 {
  kind: 'record-020-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord020 =
  | Record020x0
  | Record020x1
  | Record020x2
  | Record020x3
  | Record020x4
  | Record020x5
  | Record020x6
  | Record020x7
  | Record020x8
  | Record020x9;

export type RecordKind020 = AnyRecord020['kind'];

export type PartialDeep020<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep020<T[K]> : T[K];
};

export type ByKind020 = {
  [R in AnyRecord020 as R['kind']]: R;
};
