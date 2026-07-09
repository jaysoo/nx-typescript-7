export interface Entity067 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record067x0 extends Entity067 {
  kind: 'record-067-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x1 extends Entity067 {
  kind: 'record-067-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x2 extends Entity067 {
  kind: 'record-067-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x3 extends Entity067 {
  kind: 'record-067-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x4 extends Entity067 {
  kind: 'record-067-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x5 extends Entity067 {
  kind: 'record-067-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x6 extends Entity067 {
  kind: 'record-067-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x7 extends Entity067 {
  kind: 'record-067-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x8 extends Entity067 {
  kind: 'record-067-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record067x9 extends Entity067 {
  kind: 'record-067-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord067 =
  | Record067x0
  | Record067x1
  | Record067x2
  | Record067x3
  | Record067x4
  | Record067x5
  | Record067x6
  | Record067x7
  | Record067x8
  | Record067x9;

export type RecordKind067 = AnyRecord067['kind'];

export type PartialDeep067<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep067<T[K]> : T[K];
};

export type ByKind067 = {
  [R in AnyRecord067 as R['kind']]: R;
};
