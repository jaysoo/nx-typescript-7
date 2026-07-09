export interface Entity100 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record100x0 extends Entity100 {
  kind: 'record-100-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x1 extends Entity100 {
  kind: 'record-100-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x2 extends Entity100 {
  kind: 'record-100-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x3 extends Entity100 {
  kind: 'record-100-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x4 extends Entity100 {
  kind: 'record-100-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x5 extends Entity100 {
  kind: 'record-100-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x6 extends Entity100 {
  kind: 'record-100-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x7 extends Entity100 {
  kind: 'record-100-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x8 extends Entity100 {
  kind: 'record-100-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record100x9 extends Entity100 {
  kind: 'record-100-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord100 =
  | Record100x0
  | Record100x1
  | Record100x2
  | Record100x3
  | Record100x4
  | Record100x5
  | Record100x6
  | Record100x7
  | Record100x8
  | Record100x9;

export type RecordKind100 = AnyRecord100['kind'];

export type PartialDeep100<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep100<T[K]> : T[K];
};

export type ByKind100 = {
  [R in AnyRecord100 as R['kind']]: R;
};
