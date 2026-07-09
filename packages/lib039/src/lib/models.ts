export interface Entity039 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record039x0 extends Entity039 {
  kind: 'record-039-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x1 extends Entity039 {
  kind: 'record-039-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x2 extends Entity039 {
  kind: 'record-039-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x3 extends Entity039 {
  kind: 'record-039-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x4 extends Entity039 {
  kind: 'record-039-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x5 extends Entity039 {
  kind: 'record-039-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x6 extends Entity039 {
  kind: 'record-039-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x7 extends Entity039 {
  kind: 'record-039-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x8 extends Entity039 {
  kind: 'record-039-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record039x9 extends Entity039 {
  kind: 'record-039-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord039 =
  | Record039x0
  | Record039x1
  | Record039x2
  | Record039x3
  | Record039x4
  | Record039x5
  | Record039x6
  | Record039x7
  | Record039x8
  | Record039x9;

export type RecordKind039 = AnyRecord039['kind'];

export type PartialDeep039<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep039<T[K]> : T[K];
};

export type ByKind039 = {
  [R in AnyRecord039 as R['kind']]: R;
};
