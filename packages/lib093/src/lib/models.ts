export interface Entity093 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record093x0 extends Entity093 {
  kind: 'record-093-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x1 extends Entity093 {
  kind: 'record-093-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x2 extends Entity093 {
  kind: 'record-093-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x3 extends Entity093 {
  kind: 'record-093-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x4 extends Entity093 {
  kind: 'record-093-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x5 extends Entity093 {
  kind: 'record-093-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x6 extends Entity093 {
  kind: 'record-093-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x7 extends Entity093 {
  kind: 'record-093-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x8 extends Entity093 {
  kind: 'record-093-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record093x9 extends Entity093 {
  kind: 'record-093-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord093 =
  | Record093x0
  | Record093x1
  | Record093x2
  | Record093x3
  | Record093x4
  | Record093x5
  | Record093x6
  | Record093x7
  | Record093x8
  | Record093x9;

export type RecordKind093 = AnyRecord093['kind'];

export type PartialDeep093<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep093<T[K]> : T[K];
};

export type ByKind093 = {
  [R in AnyRecord093 as R['kind']]: R;
};
