export interface Entity059 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record059x0 extends Entity059 {
  kind: 'record-059-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x1 extends Entity059 {
  kind: 'record-059-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x2 extends Entity059 {
  kind: 'record-059-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x3 extends Entity059 {
  kind: 'record-059-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x4 extends Entity059 {
  kind: 'record-059-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x5 extends Entity059 {
  kind: 'record-059-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x6 extends Entity059 {
  kind: 'record-059-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x7 extends Entity059 {
  kind: 'record-059-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x8 extends Entity059 {
  kind: 'record-059-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record059x9 extends Entity059 {
  kind: 'record-059-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord059 =
  | Record059x0
  | Record059x1
  | Record059x2
  | Record059x3
  | Record059x4
  | Record059x5
  | Record059x6
  | Record059x7
  | Record059x8
  | Record059x9;

export type RecordKind059 = AnyRecord059['kind'];

export type PartialDeep059<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep059<T[K]> : T[K];
};

export type ByKind059 = {
  [R in AnyRecord059 as R['kind']]: R;
};
