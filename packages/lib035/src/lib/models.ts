export interface Entity035 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record035x0 extends Entity035 {
  kind: 'record-035-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x1 extends Entity035 {
  kind: 'record-035-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x2 extends Entity035 {
  kind: 'record-035-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x3 extends Entity035 {
  kind: 'record-035-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x4 extends Entity035 {
  kind: 'record-035-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x5 extends Entity035 {
  kind: 'record-035-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x6 extends Entity035 {
  kind: 'record-035-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x7 extends Entity035 {
  kind: 'record-035-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x8 extends Entity035 {
  kind: 'record-035-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record035x9 extends Entity035 {
  kind: 'record-035-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord035 =
  | Record035x0
  | Record035x1
  | Record035x2
  | Record035x3
  | Record035x4
  | Record035x5
  | Record035x6
  | Record035x7
  | Record035x8
  | Record035x9;

export type RecordKind035 = AnyRecord035['kind'];

export type PartialDeep035<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep035<T[K]> : T[K];
};

export type ByKind035 = {
  [R in AnyRecord035 as R['kind']]: R;
};
