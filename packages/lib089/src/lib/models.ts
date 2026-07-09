export interface Entity089 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record089x0 extends Entity089 {
  kind: 'record-089-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x1 extends Entity089 {
  kind: 'record-089-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x2 extends Entity089 {
  kind: 'record-089-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x3 extends Entity089 {
  kind: 'record-089-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x4 extends Entity089 {
  kind: 'record-089-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x5 extends Entity089 {
  kind: 'record-089-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x6 extends Entity089 {
  kind: 'record-089-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x7 extends Entity089 {
  kind: 'record-089-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x8 extends Entity089 {
  kind: 'record-089-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record089x9 extends Entity089 {
  kind: 'record-089-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord089 =
  | Record089x0
  | Record089x1
  | Record089x2
  | Record089x3
  | Record089x4
  | Record089x5
  | Record089x6
  | Record089x7
  | Record089x8
  | Record089x9;

export type RecordKind089 = AnyRecord089['kind'];

export type PartialDeep089<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep089<T[K]> : T[K];
};

export type ByKind089 = {
  [R in AnyRecord089 as R['kind']]: R;
};
