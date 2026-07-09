export interface Entity086 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record086x0 extends Entity086 {
  kind: 'record-086-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x1 extends Entity086 {
  kind: 'record-086-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x2 extends Entity086 {
  kind: 'record-086-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x3 extends Entity086 {
  kind: 'record-086-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x4 extends Entity086 {
  kind: 'record-086-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x5 extends Entity086 {
  kind: 'record-086-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x6 extends Entity086 {
  kind: 'record-086-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x7 extends Entity086 {
  kind: 'record-086-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x8 extends Entity086 {
  kind: 'record-086-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record086x9 extends Entity086 {
  kind: 'record-086-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord086 =
  | Record086x0
  | Record086x1
  | Record086x2
  | Record086x3
  | Record086x4
  | Record086x5
  | Record086x6
  | Record086x7
  | Record086x8
  | Record086x9;

export type RecordKind086 = AnyRecord086['kind'];

export type PartialDeep086<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep086<T[K]> : T[K];
};

export type ByKind086 = {
  [R in AnyRecord086 as R['kind']]: R;
};
