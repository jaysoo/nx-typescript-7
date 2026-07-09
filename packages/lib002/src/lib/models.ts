export interface Entity002 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record002x0 extends Entity002 {
  kind: 'record-002-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x1 extends Entity002 {
  kind: 'record-002-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x2 extends Entity002 {
  kind: 'record-002-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x3 extends Entity002 {
  kind: 'record-002-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x4 extends Entity002 {
  kind: 'record-002-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x5 extends Entity002 {
  kind: 'record-002-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x6 extends Entity002 {
  kind: 'record-002-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x7 extends Entity002 {
  kind: 'record-002-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x8 extends Entity002 {
  kind: 'record-002-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record002x9 extends Entity002 {
  kind: 'record-002-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord002 =
  | Record002x0
  | Record002x1
  | Record002x2
  | Record002x3
  | Record002x4
  | Record002x5
  | Record002x6
  | Record002x7
  | Record002x8
  | Record002x9;

export type RecordKind002 = AnyRecord002['kind'];

export type PartialDeep002<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep002<T[K]> : T[K];
};

export type ByKind002 = {
  [R in AnyRecord002 as R['kind']]: R;
};
