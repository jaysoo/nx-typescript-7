export interface Entity070 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record070x0 extends Entity070 {
  kind: 'record-070-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x1 extends Entity070 {
  kind: 'record-070-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x2 extends Entity070 {
  kind: 'record-070-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x3 extends Entity070 {
  kind: 'record-070-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x4 extends Entity070 {
  kind: 'record-070-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x5 extends Entity070 {
  kind: 'record-070-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x6 extends Entity070 {
  kind: 'record-070-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x7 extends Entity070 {
  kind: 'record-070-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x8 extends Entity070 {
  kind: 'record-070-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record070x9 extends Entity070 {
  kind: 'record-070-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord070 =
  | Record070x0
  | Record070x1
  | Record070x2
  | Record070x3
  | Record070x4
  | Record070x5
  | Record070x6
  | Record070x7
  | Record070x8
  | Record070x9;

export type RecordKind070 = AnyRecord070['kind'];

export type PartialDeep070<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep070<T[K]> : T[K];
};

export type ByKind070 = {
  [R in AnyRecord070 as R['kind']]: R;
};
