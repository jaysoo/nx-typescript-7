export interface Entity023 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record023x0 extends Entity023 {
  kind: 'record-023-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x1 extends Entity023 {
  kind: 'record-023-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x2 extends Entity023 {
  kind: 'record-023-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x3 extends Entity023 {
  kind: 'record-023-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x4 extends Entity023 {
  kind: 'record-023-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x5 extends Entity023 {
  kind: 'record-023-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x6 extends Entity023 {
  kind: 'record-023-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x7 extends Entity023 {
  kind: 'record-023-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x8 extends Entity023 {
  kind: 'record-023-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record023x9 extends Entity023 {
  kind: 'record-023-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord023 =
  | Record023x0
  | Record023x1
  | Record023x2
  | Record023x3
  | Record023x4
  | Record023x5
  | Record023x6
  | Record023x7
  | Record023x8
  | Record023x9;

export type RecordKind023 = AnyRecord023['kind'];

export type PartialDeep023<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep023<T[K]> : T[K];
};

export type ByKind023 = {
  [R in AnyRecord023 as R['kind']]: R;
};
