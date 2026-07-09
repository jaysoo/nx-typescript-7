export interface Entity007 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record007x0 extends Entity007 {
  kind: 'record-007-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x1 extends Entity007 {
  kind: 'record-007-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x2 extends Entity007 {
  kind: 'record-007-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x3 extends Entity007 {
  kind: 'record-007-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x4 extends Entity007 {
  kind: 'record-007-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x5 extends Entity007 {
  kind: 'record-007-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x6 extends Entity007 {
  kind: 'record-007-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x7 extends Entity007 {
  kind: 'record-007-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x8 extends Entity007 {
  kind: 'record-007-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record007x9 extends Entity007 {
  kind: 'record-007-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord007 =
  | Record007x0
  | Record007x1
  | Record007x2
  | Record007x3
  | Record007x4
  | Record007x5
  | Record007x6
  | Record007x7
  | Record007x8
  | Record007x9;

export type RecordKind007 = AnyRecord007['kind'];

export type PartialDeep007<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep007<T[K]> : T[K];
};

export type ByKind007 = {
  [R in AnyRecord007 as R['kind']]: R;
};
