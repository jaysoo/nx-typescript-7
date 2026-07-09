export interface Entity028 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record028x0 extends Entity028 {
  kind: 'record-028-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x1 extends Entity028 {
  kind: 'record-028-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x2 extends Entity028 {
  kind: 'record-028-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x3 extends Entity028 {
  kind: 'record-028-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x4 extends Entity028 {
  kind: 'record-028-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x5 extends Entity028 {
  kind: 'record-028-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x6 extends Entity028 {
  kind: 'record-028-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x7 extends Entity028 {
  kind: 'record-028-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x8 extends Entity028 {
  kind: 'record-028-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record028x9 extends Entity028 {
  kind: 'record-028-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord028 =
  | Record028x0
  | Record028x1
  | Record028x2
  | Record028x3
  | Record028x4
  | Record028x5
  | Record028x6
  | Record028x7
  | Record028x8
  | Record028x9;

export type RecordKind028 = AnyRecord028['kind'];

export type PartialDeep028<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep028<T[K]> : T[K];
};

export type ByKind028 = {
  [R in AnyRecord028 as R['kind']]: R;
};
