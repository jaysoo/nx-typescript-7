export interface Entity047 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record047x0 extends Entity047 {
  kind: 'record-047-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x1 extends Entity047 {
  kind: 'record-047-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x2 extends Entity047 {
  kind: 'record-047-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x3 extends Entity047 {
  kind: 'record-047-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x4 extends Entity047 {
  kind: 'record-047-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x5 extends Entity047 {
  kind: 'record-047-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x6 extends Entity047 {
  kind: 'record-047-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x7 extends Entity047 {
  kind: 'record-047-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x8 extends Entity047 {
  kind: 'record-047-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record047x9 extends Entity047 {
  kind: 'record-047-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord047 =
  | Record047x0
  | Record047x1
  | Record047x2
  | Record047x3
  | Record047x4
  | Record047x5
  | Record047x6
  | Record047x7
  | Record047x8
  | Record047x9;

export type RecordKind047 = AnyRecord047['kind'];

export type PartialDeep047<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep047<T[K]> : T[K];
};

export type ByKind047 = {
  [R in AnyRecord047 as R['kind']]: R;
};
