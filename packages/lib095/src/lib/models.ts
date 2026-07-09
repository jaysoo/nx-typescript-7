export interface Entity095 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record095x0 extends Entity095 {
  kind: 'record-095-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x1 extends Entity095 {
  kind: 'record-095-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x2 extends Entity095 {
  kind: 'record-095-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x3 extends Entity095 {
  kind: 'record-095-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x4 extends Entity095 {
  kind: 'record-095-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x5 extends Entity095 {
  kind: 'record-095-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x6 extends Entity095 {
  kind: 'record-095-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x7 extends Entity095 {
  kind: 'record-095-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x8 extends Entity095 {
  kind: 'record-095-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record095x9 extends Entity095 {
  kind: 'record-095-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord095 =
  | Record095x0
  | Record095x1
  | Record095x2
  | Record095x3
  | Record095x4
  | Record095x5
  | Record095x6
  | Record095x7
  | Record095x8
  | Record095x9;

export type RecordKind095 = AnyRecord095['kind'];

export type PartialDeep095<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep095<T[K]> : T[K];
};

export type ByKind095 = {
  [R in AnyRecord095 as R['kind']]: R;
};
