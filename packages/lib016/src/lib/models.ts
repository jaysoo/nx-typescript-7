export interface Entity016 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record016x0 extends Entity016 {
  kind: 'record-016-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x1 extends Entity016 {
  kind: 'record-016-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x2 extends Entity016 {
  kind: 'record-016-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x3 extends Entity016 {
  kind: 'record-016-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x4 extends Entity016 {
  kind: 'record-016-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x5 extends Entity016 {
  kind: 'record-016-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x6 extends Entity016 {
  kind: 'record-016-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x7 extends Entity016 {
  kind: 'record-016-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x8 extends Entity016 {
  kind: 'record-016-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record016x9 extends Entity016 {
  kind: 'record-016-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord016 =
  | Record016x0
  | Record016x1
  | Record016x2
  | Record016x3
  | Record016x4
  | Record016x5
  | Record016x6
  | Record016x7
  | Record016x8
  | Record016x9;

export type RecordKind016 = AnyRecord016['kind'];

export type PartialDeep016<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep016<T[K]> : T[K];
};

export type ByKind016 = {
  [R in AnyRecord016 as R['kind']]: R;
};
