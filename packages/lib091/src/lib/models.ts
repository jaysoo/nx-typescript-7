export interface Entity091 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record091x0 extends Entity091 {
  kind: 'record-091-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x1 extends Entity091 {
  kind: 'record-091-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x2 extends Entity091 {
  kind: 'record-091-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x3 extends Entity091 {
  kind: 'record-091-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x4 extends Entity091 {
  kind: 'record-091-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x5 extends Entity091 {
  kind: 'record-091-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x6 extends Entity091 {
  kind: 'record-091-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x7 extends Entity091 {
  kind: 'record-091-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x8 extends Entity091 {
  kind: 'record-091-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record091x9 extends Entity091 {
  kind: 'record-091-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord091 =
  | Record091x0
  | Record091x1
  | Record091x2
  | Record091x3
  | Record091x4
  | Record091x5
  | Record091x6
  | Record091x7
  | Record091x8
  | Record091x9;

export type RecordKind091 = AnyRecord091['kind'];

export type PartialDeep091<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep091<T[K]> : T[K];
};

export type ByKind091 = {
  [R in AnyRecord091 as R['kind']]: R;
};
