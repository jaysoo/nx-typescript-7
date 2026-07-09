export interface Entity096 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record096x0 extends Entity096 {
  kind: 'record-096-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x1 extends Entity096 {
  kind: 'record-096-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x2 extends Entity096 {
  kind: 'record-096-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x3 extends Entity096 {
  kind: 'record-096-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x4 extends Entity096 {
  kind: 'record-096-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x5 extends Entity096 {
  kind: 'record-096-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x6 extends Entity096 {
  kind: 'record-096-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x7 extends Entity096 {
  kind: 'record-096-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x8 extends Entity096 {
  kind: 'record-096-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record096x9 extends Entity096 {
  kind: 'record-096-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord096 =
  | Record096x0
  | Record096x1
  | Record096x2
  | Record096x3
  | Record096x4
  | Record096x5
  | Record096x6
  | Record096x7
  | Record096x8
  | Record096x9;

export type RecordKind096 = AnyRecord096['kind'];

export type PartialDeep096<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep096<T[K]> : T[K];
};

export type ByKind096 = {
  [R in AnyRecord096 as R['kind']]: R;
};
