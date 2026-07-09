export interface Entity055 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record055x0 extends Entity055 {
  kind: 'record-055-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x1 extends Entity055 {
  kind: 'record-055-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x2 extends Entity055 {
  kind: 'record-055-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x3 extends Entity055 {
  kind: 'record-055-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x4 extends Entity055 {
  kind: 'record-055-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x5 extends Entity055 {
  kind: 'record-055-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x6 extends Entity055 {
  kind: 'record-055-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x7 extends Entity055 {
  kind: 'record-055-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x8 extends Entity055 {
  kind: 'record-055-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record055x9 extends Entity055 {
  kind: 'record-055-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord055 =
  | Record055x0
  | Record055x1
  | Record055x2
  | Record055x3
  | Record055x4
  | Record055x5
  | Record055x6
  | Record055x7
  | Record055x8
  | Record055x9;

export type RecordKind055 = AnyRecord055['kind'];

export type PartialDeep055<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep055<T[K]> : T[K];
};

export type ByKind055 = {
  [R in AnyRecord055 as R['kind']]: R;
};
