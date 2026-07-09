export interface Entity094 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record094x0 extends Entity094 {
  kind: 'record-094-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x1 extends Entity094 {
  kind: 'record-094-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x2 extends Entity094 {
  kind: 'record-094-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x3 extends Entity094 {
  kind: 'record-094-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x4 extends Entity094 {
  kind: 'record-094-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x5 extends Entity094 {
  kind: 'record-094-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x6 extends Entity094 {
  kind: 'record-094-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x7 extends Entity094 {
  kind: 'record-094-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x8 extends Entity094 {
  kind: 'record-094-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record094x9 extends Entity094 {
  kind: 'record-094-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord094 =
  | Record094x0
  | Record094x1
  | Record094x2
  | Record094x3
  | Record094x4
  | Record094x5
  | Record094x6
  | Record094x7
  | Record094x8
  | Record094x9;

export type RecordKind094 = AnyRecord094['kind'];

export type PartialDeep094<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep094<T[K]> : T[K];
};

export type ByKind094 = {
  [R in AnyRecord094 as R['kind']]: R;
};
