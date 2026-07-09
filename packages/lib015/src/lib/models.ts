export interface Entity015 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record015x0 extends Entity015 {
  kind: 'record-015-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x1 extends Entity015 {
  kind: 'record-015-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x2 extends Entity015 {
  kind: 'record-015-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x3 extends Entity015 {
  kind: 'record-015-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x4 extends Entity015 {
  kind: 'record-015-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x5 extends Entity015 {
  kind: 'record-015-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x6 extends Entity015 {
  kind: 'record-015-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x7 extends Entity015 {
  kind: 'record-015-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x8 extends Entity015 {
  kind: 'record-015-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record015x9 extends Entity015 {
  kind: 'record-015-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord015 =
  | Record015x0
  | Record015x1
  | Record015x2
  | Record015x3
  | Record015x4
  | Record015x5
  | Record015x6
  | Record015x7
  | Record015x8
  | Record015x9;

export type RecordKind015 = AnyRecord015['kind'];

export type PartialDeep015<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep015<T[K]> : T[K];
};

export type ByKind015 = {
  [R in AnyRecord015 as R['kind']]: R;
};
