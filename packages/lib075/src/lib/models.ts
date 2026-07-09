export interface Entity075 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record075x0 extends Entity075 {
  kind: 'record-075-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x1 extends Entity075 {
  kind: 'record-075-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x2 extends Entity075 {
  kind: 'record-075-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x3 extends Entity075 {
  kind: 'record-075-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x4 extends Entity075 {
  kind: 'record-075-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x5 extends Entity075 {
  kind: 'record-075-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x6 extends Entity075 {
  kind: 'record-075-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x7 extends Entity075 {
  kind: 'record-075-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x8 extends Entity075 {
  kind: 'record-075-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record075x9 extends Entity075 {
  kind: 'record-075-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord075 =
  | Record075x0
  | Record075x1
  | Record075x2
  | Record075x3
  | Record075x4
  | Record075x5
  | Record075x6
  | Record075x7
  | Record075x8
  | Record075x9;

export type RecordKind075 = AnyRecord075['kind'];

export type PartialDeep075<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep075<T[K]> : T[K];
};

export type ByKind075 = {
  [R in AnyRecord075 as R['kind']]: R;
};
