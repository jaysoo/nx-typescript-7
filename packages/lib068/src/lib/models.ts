export interface Entity068 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record068x0 extends Entity068 {
  kind: 'record-068-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x1 extends Entity068 {
  kind: 'record-068-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x2 extends Entity068 {
  kind: 'record-068-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x3 extends Entity068 {
  kind: 'record-068-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x4 extends Entity068 {
  kind: 'record-068-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x5 extends Entity068 {
  kind: 'record-068-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x6 extends Entity068 {
  kind: 'record-068-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x7 extends Entity068 {
  kind: 'record-068-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x8 extends Entity068 {
  kind: 'record-068-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record068x9 extends Entity068 {
  kind: 'record-068-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord068 =
  | Record068x0
  | Record068x1
  | Record068x2
  | Record068x3
  | Record068x4
  | Record068x5
  | Record068x6
  | Record068x7
  | Record068x8
  | Record068x9;

export type RecordKind068 = AnyRecord068['kind'];

export type PartialDeep068<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep068<T[K]> : T[K];
};

export type ByKind068 = {
  [R in AnyRecord068 as R['kind']]: R;
};
