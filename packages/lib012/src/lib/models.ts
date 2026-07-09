export interface Entity012 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record012x0 extends Entity012 {
  kind: 'record-012-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x1 extends Entity012 {
  kind: 'record-012-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x2 extends Entity012 {
  kind: 'record-012-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x3 extends Entity012 {
  kind: 'record-012-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x4 extends Entity012 {
  kind: 'record-012-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x5 extends Entity012 {
  kind: 'record-012-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x6 extends Entity012 {
  kind: 'record-012-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x7 extends Entity012 {
  kind: 'record-012-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x8 extends Entity012 {
  kind: 'record-012-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record012x9 extends Entity012 {
  kind: 'record-012-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord012 =
  | Record012x0
  | Record012x1
  | Record012x2
  | Record012x3
  | Record012x4
  | Record012x5
  | Record012x6
  | Record012x7
  | Record012x8
  | Record012x9;

export type RecordKind012 = AnyRecord012['kind'];

export type PartialDeep012<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep012<T[K]> : T[K];
};

export type ByKind012 = {
  [R in AnyRecord012 as R['kind']]: R;
};
