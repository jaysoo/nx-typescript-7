export interface Entity014 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record014x0 extends Entity014 {
  kind: 'record-014-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x1 extends Entity014 {
  kind: 'record-014-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x2 extends Entity014 {
  kind: 'record-014-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x3 extends Entity014 {
  kind: 'record-014-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x4 extends Entity014 {
  kind: 'record-014-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x5 extends Entity014 {
  kind: 'record-014-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x6 extends Entity014 {
  kind: 'record-014-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x7 extends Entity014 {
  kind: 'record-014-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x8 extends Entity014 {
  kind: 'record-014-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record014x9 extends Entity014 {
  kind: 'record-014-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord014 =
  | Record014x0
  | Record014x1
  | Record014x2
  | Record014x3
  | Record014x4
  | Record014x5
  | Record014x6
  | Record014x7
  | Record014x8
  | Record014x9;

export type RecordKind014 = AnyRecord014['kind'];

export type PartialDeep014<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep014<T[K]> : T[K];
};

export type ByKind014 = {
  [R in AnyRecord014 as R['kind']]: R;
};
