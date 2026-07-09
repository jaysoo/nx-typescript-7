export interface Entity006 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record006x0 extends Entity006 {
  kind: 'record-006-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x1 extends Entity006 {
  kind: 'record-006-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x2 extends Entity006 {
  kind: 'record-006-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x3 extends Entity006 {
  kind: 'record-006-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x4 extends Entity006 {
  kind: 'record-006-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x5 extends Entity006 {
  kind: 'record-006-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x6 extends Entity006 {
  kind: 'record-006-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x7 extends Entity006 {
  kind: 'record-006-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x8 extends Entity006 {
  kind: 'record-006-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record006x9 extends Entity006 {
  kind: 'record-006-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord006 =
  | Record006x0
  | Record006x1
  | Record006x2
  | Record006x3
  | Record006x4
  | Record006x5
  | Record006x6
  | Record006x7
  | Record006x8
  | Record006x9;

export type RecordKind006 = AnyRecord006['kind'];

export type PartialDeep006<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep006<T[K]> : T[K];
};

export type ByKind006 = {
  [R in AnyRecord006 as R['kind']]: R;
};
