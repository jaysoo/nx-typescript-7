export interface Entity001 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record001x0 extends Entity001 {
  kind: 'record-001-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x1 extends Entity001 {
  kind: 'record-001-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x2 extends Entity001 {
  kind: 'record-001-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x3 extends Entity001 {
  kind: 'record-001-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x4 extends Entity001 {
  kind: 'record-001-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x5 extends Entity001 {
  kind: 'record-001-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x6 extends Entity001 {
  kind: 'record-001-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x7 extends Entity001 {
  kind: 'record-001-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x8 extends Entity001 {
  kind: 'record-001-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record001x9 extends Entity001 {
  kind: 'record-001-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord001 =
  | Record001x0
  | Record001x1
  | Record001x2
  | Record001x3
  | Record001x4
  | Record001x5
  | Record001x6
  | Record001x7
  | Record001x8
  | Record001x9;

export type RecordKind001 = AnyRecord001['kind'];

export type PartialDeep001<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep001<T[K]> : T[K];
};

export type ByKind001 = {
  [R in AnyRecord001 as R['kind']]: R;
};
