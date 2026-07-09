export interface Entity052 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record052x0 extends Entity052 {
  kind: 'record-052-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x1 extends Entity052 {
  kind: 'record-052-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x2 extends Entity052 {
  kind: 'record-052-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x3 extends Entity052 {
  kind: 'record-052-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x4 extends Entity052 {
  kind: 'record-052-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x5 extends Entity052 {
  kind: 'record-052-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x6 extends Entity052 {
  kind: 'record-052-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x7 extends Entity052 {
  kind: 'record-052-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x8 extends Entity052 {
  kind: 'record-052-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record052x9 extends Entity052 {
  kind: 'record-052-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord052 =
  | Record052x0
  | Record052x1
  | Record052x2
  | Record052x3
  | Record052x4
  | Record052x5
  | Record052x6
  | Record052x7
  | Record052x8
  | Record052x9;

export type RecordKind052 = AnyRecord052['kind'];

export type PartialDeep052<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep052<T[K]> : T[K];
};

export type ByKind052 = {
  [R in AnyRecord052 as R['kind']]: R;
};
