export interface Entity087 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record087x0 extends Entity087 {
  kind: 'record-087-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x1 extends Entity087 {
  kind: 'record-087-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x2 extends Entity087 {
  kind: 'record-087-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x3 extends Entity087 {
  kind: 'record-087-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x4 extends Entity087 {
  kind: 'record-087-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x5 extends Entity087 {
  kind: 'record-087-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x6 extends Entity087 {
  kind: 'record-087-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x7 extends Entity087 {
  kind: 'record-087-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x8 extends Entity087 {
  kind: 'record-087-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record087x9 extends Entity087 {
  kind: 'record-087-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord087 =
  | Record087x0
  | Record087x1
  | Record087x2
  | Record087x3
  | Record087x4
  | Record087x5
  | Record087x6
  | Record087x7
  | Record087x8
  | Record087x9;

export type RecordKind087 = AnyRecord087['kind'];

export type PartialDeep087<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep087<T[K]> : T[K];
};

export type ByKind087 = {
  [R in AnyRecord087 as R['kind']]: R;
};
