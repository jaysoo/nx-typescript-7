export interface Entity046 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record046x0 extends Entity046 {
  kind: 'record-046-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x1 extends Entity046 {
  kind: 'record-046-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x2 extends Entity046 {
  kind: 'record-046-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x3 extends Entity046 {
  kind: 'record-046-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x4 extends Entity046 {
  kind: 'record-046-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x5 extends Entity046 {
  kind: 'record-046-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x6 extends Entity046 {
  kind: 'record-046-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x7 extends Entity046 {
  kind: 'record-046-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x8 extends Entity046 {
  kind: 'record-046-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record046x9 extends Entity046 {
  kind: 'record-046-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord046 =
  | Record046x0
  | Record046x1
  | Record046x2
  | Record046x3
  | Record046x4
  | Record046x5
  | Record046x6
  | Record046x7
  | Record046x8
  | Record046x9;

export type RecordKind046 = AnyRecord046['kind'];

export type PartialDeep046<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep046<T[K]> : T[K];
};

export type ByKind046 = {
  [R in AnyRecord046 as R['kind']]: R;
};
