export interface Entity098 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record098x0 extends Entity098 {
  kind: 'record-098-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x1 extends Entity098 {
  kind: 'record-098-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x2 extends Entity098 {
  kind: 'record-098-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x3 extends Entity098 {
  kind: 'record-098-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x4 extends Entity098 {
  kind: 'record-098-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x5 extends Entity098 {
  kind: 'record-098-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x6 extends Entity098 {
  kind: 'record-098-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x7 extends Entity098 {
  kind: 'record-098-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x8 extends Entity098 {
  kind: 'record-098-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record098x9 extends Entity098 {
  kind: 'record-098-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord098 =
  | Record098x0
  | Record098x1
  | Record098x2
  | Record098x3
  | Record098x4
  | Record098x5
  | Record098x6
  | Record098x7
  | Record098x8
  | Record098x9;

export type RecordKind098 = AnyRecord098['kind'];

export type PartialDeep098<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep098<T[K]> : T[K];
};

export type ByKind098 = {
  [R in AnyRecord098 as R['kind']]: R;
};
