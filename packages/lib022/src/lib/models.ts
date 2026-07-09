export interface Entity022 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record022x0 extends Entity022 {
  kind: 'record-022-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x1 extends Entity022 {
  kind: 'record-022-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x2 extends Entity022 {
  kind: 'record-022-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x3 extends Entity022 {
  kind: 'record-022-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x4 extends Entity022 {
  kind: 'record-022-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x5 extends Entity022 {
  kind: 'record-022-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x6 extends Entity022 {
  kind: 'record-022-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x7 extends Entity022 {
  kind: 'record-022-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x8 extends Entity022 {
  kind: 'record-022-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record022x9 extends Entity022 {
  kind: 'record-022-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord022 =
  | Record022x0
  | Record022x1
  | Record022x2
  | Record022x3
  | Record022x4
  | Record022x5
  | Record022x6
  | Record022x7
  | Record022x8
  | Record022x9;

export type RecordKind022 = AnyRecord022['kind'];

export type PartialDeep022<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep022<T[K]> : T[K];
};

export type ByKind022 = {
  [R in AnyRecord022 as R['kind']]: R;
};
