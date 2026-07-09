export interface Entity057 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record057x0 extends Entity057 {
  kind: 'record-057-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x1 extends Entity057 {
  kind: 'record-057-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x2 extends Entity057 {
  kind: 'record-057-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x3 extends Entity057 {
  kind: 'record-057-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x4 extends Entity057 {
  kind: 'record-057-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x5 extends Entity057 {
  kind: 'record-057-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x6 extends Entity057 {
  kind: 'record-057-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x7 extends Entity057 {
  kind: 'record-057-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x8 extends Entity057 {
  kind: 'record-057-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record057x9 extends Entity057 {
  kind: 'record-057-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord057 =
  | Record057x0
  | Record057x1
  | Record057x2
  | Record057x3
  | Record057x4
  | Record057x5
  | Record057x6
  | Record057x7
  | Record057x8
  | Record057x9;

export type RecordKind057 = AnyRecord057['kind'];

export type PartialDeep057<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep057<T[K]> : T[K];
};

export type ByKind057 = {
  [R in AnyRecord057 as R['kind']]: R;
};
