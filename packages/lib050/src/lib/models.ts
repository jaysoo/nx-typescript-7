export interface Entity050 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record050x0 extends Entity050 {
  kind: 'record-050-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x1 extends Entity050 {
  kind: 'record-050-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x2 extends Entity050 {
  kind: 'record-050-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x3 extends Entity050 {
  kind: 'record-050-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x4 extends Entity050 {
  kind: 'record-050-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x5 extends Entity050 {
  kind: 'record-050-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x6 extends Entity050 {
  kind: 'record-050-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x7 extends Entity050 {
  kind: 'record-050-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x8 extends Entity050 {
  kind: 'record-050-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record050x9 extends Entity050 {
  kind: 'record-050-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord050 =
  | Record050x0
  | Record050x1
  | Record050x2
  | Record050x3
  | Record050x4
  | Record050x5
  | Record050x6
  | Record050x7
  | Record050x8
  | Record050x9;

export type RecordKind050 = AnyRecord050['kind'];

export type PartialDeep050<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep050<T[K]> : T[K];
};

export type ByKind050 = {
  [R in AnyRecord050 as R['kind']]: R;
};
