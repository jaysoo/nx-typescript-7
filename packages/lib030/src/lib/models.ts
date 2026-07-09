export interface Entity030 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record030x0 extends Entity030 {
  kind: 'record-030-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x1 extends Entity030 {
  kind: 'record-030-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x2 extends Entity030 {
  kind: 'record-030-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x3 extends Entity030 {
  kind: 'record-030-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x4 extends Entity030 {
  kind: 'record-030-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x5 extends Entity030 {
  kind: 'record-030-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x6 extends Entity030 {
  kind: 'record-030-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x7 extends Entity030 {
  kind: 'record-030-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x8 extends Entity030 {
  kind: 'record-030-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record030x9 extends Entity030 {
  kind: 'record-030-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord030 =
  | Record030x0
  | Record030x1
  | Record030x2
  | Record030x3
  | Record030x4
  | Record030x5
  | Record030x6
  | Record030x7
  | Record030x8
  | Record030x9;

export type RecordKind030 = AnyRecord030['kind'];

export type PartialDeep030<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep030<T[K]> : T[K];
};

export type ByKind030 = {
  [R in AnyRecord030 as R['kind']]: R;
};
