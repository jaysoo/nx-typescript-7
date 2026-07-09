export interface Entity053 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record053x0 extends Entity053 {
  kind: 'record-053-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x1 extends Entity053 {
  kind: 'record-053-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x2 extends Entity053 {
  kind: 'record-053-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x3 extends Entity053 {
  kind: 'record-053-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x4 extends Entity053 {
  kind: 'record-053-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x5 extends Entity053 {
  kind: 'record-053-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x6 extends Entity053 {
  kind: 'record-053-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x7 extends Entity053 {
  kind: 'record-053-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x8 extends Entity053 {
  kind: 'record-053-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record053x9 extends Entity053 {
  kind: 'record-053-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord053 =
  | Record053x0
  | Record053x1
  | Record053x2
  | Record053x3
  | Record053x4
  | Record053x5
  | Record053x6
  | Record053x7
  | Record053x8
  | Record053x9;

export type RecordKind053 = AnyRecord053['kind'];

export type PartialDeep053<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep053<T[K]> : T[K];
};

export type ByKind053 = {
  [R in AnyRecord053 as R['kind']]: R;
};
