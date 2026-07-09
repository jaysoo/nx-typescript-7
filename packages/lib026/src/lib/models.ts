export interface Entity026 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record026x0 extends Entity026 {
  kind: 'record-026-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x1 extends Entity026 {
  kind: 'record-026-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x2 extends Entity026 {
  kind: 'record-026-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x3 extends Entity026 {
  kind: 'record-026-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x4 extends Entity026 {
  kind: 'record-026-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x5 extends Entity026 {
  kind: 'record-026-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x6 extends Entity026 {
  kind: 'record-026-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x7 extends Entity026 {
  kind: 'record-026-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x8 extends Entity026 {
  kind: 'record-026-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record026x9 extends Entity026 {
  kind: 'record-026-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord026 =
  | Record026x0
  | Record026x1
  | Record026x2
  | Record026x3
  | Record026x4
  | Record026x5
  | Record026x6
  | Record026x7
  | Record026x8
  | Record026x9;

export type RecordKind026 = AnyRecord026['kind'];

export type PartialDeep026<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep026<T[K]> : T[K];
};

export type ByKind026 = {
  [R in AnyRecord026 as R['kind']]: R;
};
