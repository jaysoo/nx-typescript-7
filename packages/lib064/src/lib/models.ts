export interface Entity064 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record064x0 extends Entity064 {
  kind: 'record-064-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x1 extends Entity064 {
  kind: 'record-064-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x2 extends Entity064 {
  kind: 'record-064-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x3 extends Entity064 {
  kind: 'record-064-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x4 extends Entity064 {
  kind: 'record-064-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x5 extends Entity064 {
  kind: 'record-064-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x6 extends Entity064 {
  kind: 'record-064-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x7 extends Entity064 {
  kind: 'record-064-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x8 extends Entity064 {
  kind: 'record-064-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record064x9 extends Entity064 {
  kind: 'record-064-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord064 =
  | Record064x0
  | Record064x1
  | Record064x2
  | Record064x3
  | Record064x4
  | Record064x5
  | Record064x6
  | Record064x7
  | Record064x8
  | Record064x9;

export type RecordKind064 = AnyRecord064['kind'];

export type PartialDeep064<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep064<T[K]> : T[K];
};

export type ByKind064 = {
  [R in AnyRecord064 as R['kind']]: R;
};
