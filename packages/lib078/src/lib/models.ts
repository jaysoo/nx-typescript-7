export interface Entity078 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record078x0 extends Entity078 {
  kind: 'record-078-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x1 extends Entity078 {
  kind: 'record-078-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x2 extends Entity078 {
  kind: 'record-078-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x3 extends Entity078 {
  kind: 'record-078-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x4 extends Entity078 {
  kind: 'record-078-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x5 extends Entity078 {
  kind: 'record-078-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x6 extends Entity078 {
  kind: 'record-078-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x7 extends Entity078 {
  kind: 'record-078-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x8 extends Entity078 {
  kind: 'record-078-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record078x9 extends Entity078 {
  kind: 'record-078-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord078 =
  | Record078x0
  | Record078x1
  | Record078x2
  | Record078x3
  | Record078x4
  | Record078x5
  | Record078x6
  | Record078x7
  | Record078x8
  | Record078x9;

export type RecordKind078 = AnyRecord078['kind'];

export type PartialDeep078<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep078<T[K]> : T[K];
};

export type ByKind078 = {
  [R in AnyRecord078 as R['kind']]: R;
};
