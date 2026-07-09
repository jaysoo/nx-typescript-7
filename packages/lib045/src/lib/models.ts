export interface Entity045 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record045x0 extends Entity045 {
  kind: 'record-045-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x1 extends Entity045 {
  kind: 'record-045-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x2 extends Entity045 {
  kind: 'record-045-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x3 extends Entity045 {
  kind: 'record-045-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x4 extends Entity045 {
  kind: 'record-045-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x5 extends Entity045 {
  kind: 'record-045-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x6 extends Entity045 {
  kind: 'record-045-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x7 extends Entity045 {
  kind: 'record-045-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x8 extends Entity045 {
  kind: 'record-045-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record045x9 extends Entity045 {
  kind: 'record-045-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord045 =
  | Record045x0
  | Record045x1
  | Record045x2
  | Record045x3
  | Record045x4
  | Record045x5
  | Record045x6
  | Record045x7
  | Record045x8
  | Record045x9;

export type RecordKind045 = AnyRecord045['kind'];

export type PartialDeep045<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep045<T[K]> : T[K];
};

export type ByKind045 = {
  [R in AnyRecord045 as R['kind']]: R;
};
