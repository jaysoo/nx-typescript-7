export interface Entity040 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record040x0 extends Entity040 {
  kind: 'record-040-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x1 extends Entity040 {
  kind: 'record-040-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x2 extends Entity040 {
  kind: 'record-040-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x3 extends Entity040 {
  kind: 'record-040-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x4 extends Entity040 {
  kind: 'record-040-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x5 extends Entity040 {
  kind: 'record-040-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x6 extends Entity040 {
  kind: 'record-040-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x7 extends Entity040 {
  kind: 'record-040-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x8 extends Entity040 {
  kind: 'record-040-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record040x9 extends Entity040 {
  kind: 'record-040-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord040 =
  | Record040x0
  | Record040x1
  | Record040x2
  | Record040x3
  | Record040x4
  | Record040x5
  | Record040x6
  | Record040x7
  | Record040x8
  | Record040x9;

export type RecordKind040 = AnyRecord040['kind'];

export type PartialDeep040<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep040<T[K]> : T[K];
};

export type ByKind040 = {
  [R in AnyRecord040 as R['kind']]: R;
};
