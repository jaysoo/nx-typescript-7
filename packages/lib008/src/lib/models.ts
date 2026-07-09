export interface Entity008 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record008x0 extends Entity008 {
  kind: 'record-008-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x1 extends Entity008 {
  kind: 'record-008-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x2 extends Entity008 {
  kind: 'record-008-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x3 extends Entity008 {
  kind: 'record-008-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x4 extends Entity008 {
  kind: 'record-008-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x5 extends Entity008 {
  kind: 'record-008-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x6 extends Entity008 {
  kind: 'record-008-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x7 extends Entity008 {
  kind: 'record-008-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x8 extends Entity008 {
  kind: 'record-008-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record008x9 extends Entity008 {
  kind: 'record-008-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord008 =
  | Record008x0
  | Record008x1
  | Record008x2
  | Record008x3
  | Record008x4
  | Record008x5
  | Record008x6
  | Record008x7
  | Record008x8
  | Record008x9;

export type RecordKind008 = AnyRecord008['kind'];

export type PartialDeep008<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep008<T[K]> : T[K];
};

export type ByKind008 = {
  [R in AnyRecord008 as R['kind']]: R;
};
