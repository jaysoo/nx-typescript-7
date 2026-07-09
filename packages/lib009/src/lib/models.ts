export interface Entity009 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record009x0 extends Entity009 {
  kind: 'record-009-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x1 extends Entity009 {
  kind: 'record-009-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x2 extends Entity009 {
  kind: 'record-009-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x3 extends Entity009 {
  kind: 'record-009-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x4 extends Entity009 {
  kind: 'record-009-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x5 extends Entity009 {
  kind: 'record-009-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x6 extends Entity009 {
  kind: 'record-009-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x7 extends Entity009 {
  kind: 'record-009-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x8 extends Entity009 {
  kind: 'record-009-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record009x9 extends Entity009 {
  kind: 'record-009-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord009 =
  | Record009x0
  | Record009x1
  | Record009x2
  | Record009x3
  | Record009x4
  | Record009x5
  | Record009x6
  | Record009x7
  | Record009x8
  | Record009x9;

export type RecordKind009 = AnyRecord009['kind'];

export type PartialDeep009<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep009<T[K]> : T[K];
};

export type ByKind009 = {
  [R in AnyRecord009 as R['kind']]: R;
};
