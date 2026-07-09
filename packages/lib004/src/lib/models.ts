export interface Entity004 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record004x0 extends Entity004 {
  kind: 'record-004-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x1 extends Entity004 {
  kind: 'record-004-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x2 extends Entity004 {
  kind: 'record-004-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x3 extends Entity004 {
  kind: 'record-004-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x4 extends Entity004 {
  kind: 'record-004-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x5 extends Entity004 {
  kind: 'record-004-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x6 extends Entity004 {
  kind: 'record-004-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x7 extends Entity004 {
  kind: 'record-004-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x8 extends Entity004 {
  kind: 'record-004-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record004x9 extends Entity004 {
  kind: 'record-004-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord004 =
  | Record004x0
  | Record004x1
  | Record004x2
  | Record004x3
  | Record004x4
  | Record004x5
  | Record004x6
  | Record004x7
  | Record004x8
  | Record004x9;

export type RecordKind004 = AnyRecord004['kind'];

export type PartialDeep004<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep004<T[K]> : T[K];
};

export type ByKind004 = {
  [R in AnyRecord004 as R['kind']]: R;
};
