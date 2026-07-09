export interface Entity051 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record051x0 extends Entity051 {
  kind: 'record-051-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x1 extends Entity051 {
  kind: 'record-051-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x2 extends Entity051 {
  kind: 'record-051-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x3 extends Entity051 {
  kind: 'record-051-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x4 extends Entity051 {
  kind: 'record-051-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x5 extends Entity051 {
  kind: 'record-051-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x6 extends Entity051 {
  kind: 'record-051-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x7 extends Entity051 {
  kind: 'record-051-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x8 extends Entity051 {
  kind: 'record-051-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record051x9 extends Entity051 {
  kind: 'record-051-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord051 =
  | Record051x0
  | Record051x1
  | Record051x2
  | Record051x3
  | Record051x4
  | Record051x5
  | Record051x6
  | Record051x7
  | Record051x8
  | Record051x9;

export type RecordKind051 = AnyRecord051['kind'];

export type PartialDeep051<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep051<T[K]> : T[K];
};

export type ByKind051 = {
  [R in AnyRecord051 as R['kind']]: R;
};
