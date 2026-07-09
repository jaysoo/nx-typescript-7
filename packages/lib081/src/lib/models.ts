export interface Entity081 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record081x0 extends Entity081 {
  kind: 'record-081-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x1 extends Entity081 {
  kind: 'record-081-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x2 extends Entity081 {
  kind: 'record-081-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x3 extends Entity081 {
  kind: 'record-081-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x4 extends Entity081 {
  kind: 'record-081-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x5 extends Entity081 {
  kind: 'record-081-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x6 extends Entity081 {
  kind: 'record-081-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x7 extends Entity081 {
  kind: 'record-081-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x8 extends Entity081 {
  kind: 'record-081-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record081x9 extends Entity081 {
  kind: 'record-081-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord081 =
  | Record081x0
  | Record081x1
  | Record081x2
  | Record081x3
  | Record081x4
  | Record081x5
  | Record081x6
  | Record081x7
  | Record081x8
  | Record081x9;

export type RecordKind081 = AnyRecord081['kind'];

export type PartialDeep081<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep081<T[K]> : T[K];
};

export type ByKind081 = {
  [R in AnyRecord081 as R['kind']]: R;
};
