export interface Entity048 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record048x0 extends Entity048 {
  kind: 'record-048-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x1 extends Entity048 {
  kind: 'record-048-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x2 extends Entity048 {
  kind: 'record-048-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x3 extends Entity048 {
  kind: 'record-048-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x4 extends Entity048 {
  kind: 'record-048-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x5 extends Entity048 {
  kind: 'record-048-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x6 extends Entity048 {
  kind: 'record-048-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x7 extends Entity048 {
  kind: 'record-048-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x8 extends Entity048 {
  kind: 'record-048-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record048x9 extends Entity048 {
  kind: 'record-048-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord048 =
  | Record048x0
  | Record048x1
  | Record048x2
  | Record048x3
  | Record048x4
  | Record048x5
  | Record048x6
  | Record048x7
  | Record048x8
  | Record048x9;

export type RecordKind048 = AnyRecord048['kind'];

export type PartialDeep048<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep048<T[K]> : T[K];
};

export type ByKind048 = {
  [R in AnyRecord048 as R['kind']]: R;
};
