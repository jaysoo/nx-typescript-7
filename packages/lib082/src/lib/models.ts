export interface Entity082 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record082x0 extends Entity082 {
  kind: 'record-082-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x1 extends Entity082 {
  kind: 'record-082-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x2 extends Entity082 {
  kind: 'record-082-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x3 extends Entity082 {
  kind: 'record-082-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x4 extends Entity082 {
  kind: 'record-082-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x5 extends Entity082 {
  kind: 'record-082-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x6 extends Entity082 {
  kind: 'record-082-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x7 extends Entity082 {
  kind: 'record-082-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x8 extends Entity082 {
  kind: 'record-082-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record082x9 extends Entity082 {
  kind: 'record-082-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord082 =
  | Record082x0
  | Record082x1
  | Record082x2
  | Record082x3
  | Record082x4
  | Record082x5
  | Record082x6
  | Record082x7
  | Record082x8
  | Record082x9;

export type RecordKind082 = AnyRecord082['kind'];

export type PartialDeep082<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep082<T[K]> : T[K];
};

export type ByKind082 = {
  [R in AnyRecord082 as R['kind']]: R;
};
