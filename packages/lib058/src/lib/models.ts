export interface Entity058 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record058x0 extends Entity058 {
  kind: 'record-058-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x1 extends Entity058 {
  kind: 'record-058-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x2 extends Entity058 {
  kind: 'record-058-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x3 extends Entity058 {
  kind: 'record-058-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x4 extends Entity058 {
  kind: 'record-058-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x5 extends Entity058 {
  kind: 'record-058-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x6 extends Entity058 {
  kind: 'record-058-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x7 extends Entity058 {
  kind: 'record-058-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x8 extends Entity058 {
  kind: 'record-058-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record058x9 extends Entity058 {
  kind: 'record-058-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord058 =
  | Record058x0
  | Record058x1
  | Record058x2
  | Record058x3
  | Record058x4
  | Record058x5
  | Record058x6
  | Record058x7
  | Record058x8
  | Record058x9;

export type RecordKind058 = AnyRecord058['kind'];

export type PartialDeep058<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep058<T[K]> : T[K];
};

export type ByKind058 = {
  [R in AnyRecord058 as R['kind']]: R;
};
