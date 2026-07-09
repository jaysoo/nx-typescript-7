export interface Entity018 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record018x0 extends Entity018 {
  kind: 'record-018-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x1 extends Entity018 {
  kind: 'record-018-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x2 extends Entity018 {
  kind: 'record-018-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x3 extends Entity018 {
  kind: 'record-018-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x4 extends Entity018 {
  kind: 'record-018-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x5 extends Entity018 {
  kind: 'record-018-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x6 extends Entity018 {
  kind: 'record-018-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x7 extends Entity018 {
  kind: 'record-018-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x8 extends Entity018 {
  kind: 'record-018-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record018x9 extends Entity018 {
  kind: 'record-018-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord018 =
  | Record018x0
  | Record018x1
  | Record018x2
  | Record018x3
  | Record018x4
  | Record018x5
  | Record018x6
  | Record018x7
  | Record018x8
  | Record018x9;

export type RecordKind018 = AnyRecord018['kind'];

export type PartialDeep018<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep018<T[K]> : T[K];
};

export type ByKind018 = {
  [R in AnyRecord018 as R['kind']]: R;
};
