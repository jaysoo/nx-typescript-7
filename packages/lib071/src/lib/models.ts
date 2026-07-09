export interface Entity071 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record071x0 extends Entity071 {
  kind: 'record-071-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x1 extends Entity071 {
  kind: 'record-071-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x2 extends Entity071 {
  kind: 'record-071-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x3 extends Entity071 {
  kind: 'record-071-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x4 extends Entity071 {
  kind: 'record-071-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x5 extends Entity071 {
  kind: 'record-071-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x6 extends Entity071 {
  kind: 'record-071-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x7 extends Entity071 {
  kind: 'record-071-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x8 extends Entity071 {
  kind: 'record-071-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record071x9 extends Entity071 {
  kind: 'record-071-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord071 =
  | Record071x0
  | Record071x1
  | Record071x2
  | Record071x3
  | Record071x4
  | Record071x5
  | Record071x6
  | Record071x7
  | Record071x8
  | Record071x9;

export type RecordKind071 = AnyRecord071['kind'];

export type PartialDeep071<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep071<T[K]> : T[K];
};

export type ByKind071 = {
  [R in AnyRecord071 as R['kind']]: R;
};
