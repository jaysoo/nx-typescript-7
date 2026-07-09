export interface Entity088 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record088x0 extends Entity088 {
  kind: 'record-088-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x1 extends Entity088 {
  kind: 'record-088-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x2 extends Entity088 {
  kind: 'record-088-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x3 extends Entity088 {
  kind: 'record-088-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x4 extends Entity088 {
  kind: 'record-088-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x5 extends Entity088 {
  kind: 'record-088-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x6 extends Entity088 {
  kind: 'record-088-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x7 extends Entity088 {
  kind: 'record-088-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x8 extends Entity088 {
  kind: 'record-088-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record088x9 extends Entity088 {
  kind: 'record-088-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord088 =
  | Record088x0
  | Record088x1
  | Record088x2
  | Record088x3
  | Record088x4
  | Record088x5
  | Record088x6
  | Record088x7
  | Record088x8
  | Record088x9;

export type RecordKind088 = AnyRecord088['kind'];

export type PartialDeep088<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep088<T[K]> : T[K];
};

export type ByKind088 = {
  [R in AnyRecord088 as R['kind']]: R;
};
