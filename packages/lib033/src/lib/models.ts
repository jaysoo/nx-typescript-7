export interface Entity033 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record033x0 extends Entity033 {
  kind: 'record-033-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x1 extends Entity033 {
  kind: 'record-033-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x2 extends Entity033 {
  kind: 'record-033-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x3 extends Entity033 {
  kind: 'record-033-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x4 extends Entity033 {
  kind: 'record-033-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x5 extends Entity033 {
  kind: 'record-033-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x6 extends Entity033 {
  kind: 'record-033-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x7 extends Entity033 {
  kind: 'record-033-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x8 extends Entity033 {
  kind: 'record-033-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record033x9 extends Entity033 {
  kind: 'record-033-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord033 =
  | Record033x0
  | Record033x1
  | Record033x2
  | Record033x3
  | Record033x4
  | Record033x5
  | Record033x6
  | Record033x7
  | Record033x8
  | Record033x9;

export type RecordKind033 = AnyRecord033['kind'];

export type PartialDeep033<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep033<T[K]> : T[K];
};

export type ByKind033 = {
  [R in AnyRecord033 as R['kind']]: R;
};
