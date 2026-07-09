export interface Entity036 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record036x0 extends Entity036 {
  kind: 'record-036-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x1 extends Entity036 {
  kind: 'record-036-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x2 extends Entity036 {
  kind: 'record-036-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x3 extends Entity036 {
  kind: 'record-036-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x4 extends Entity036 {
  kind: 'record-036-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x5 extends Entity036 {
  kind: 'record-036-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x6 extends Entity036 {
  kind: 'record-036-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x7 extends Entity036 {
  kind: 'record-036-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x8 extends Entity036 {
  kind: 'record-036-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record036x9 extends Entity036 {
  kind: 'record-036-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord036 =
  | Record036x0
  | Record036x1
  | Record036x2
  | Record036x3
  | Record036x4
  | Record036x5
  | Record036x6
  | Record036x7
  | Record036x8
  | Record036x9;

export type RecordKind036 = AnyRecord036['kind'];

export type PartialDeep036<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep036<T[K]> : T[K];
};

export type ByKind036 = {
  [R in AnyRecord036 as R['kind']]: R;
};
