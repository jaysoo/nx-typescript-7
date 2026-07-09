export interface Entity074 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record074x0 extends Entity074 {
  kind: 'record-074-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x1 extends Entity074 {
  kind: 'record-074-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x2 extends Entity074 {
  kind: 'record-074-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x3 extends Entity074 {
  kind: 'record-074-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x4 extends Entity074 {
  kind: 'record-074-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x5 extends Entity074 {
  kind: 'record-074-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x6 extends Entity074 {
  kind: 'record-074-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x7 extends Entity074 {
  kind: 'record-074-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x8 extends Entity074 {
  kind: 'record-074-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record074x9 extends Entity074 {
  kind: 'record-074-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord074 =
  | Record074x0
  | Record074x1
  | Record074x2
  | Record074x3
  | Record074x4
  | Record074x5
  | Record074x6
  | Record074x7
  | Record074x8
  | Record074x9;

export type RecordKind074 = AnyRecord074['kind'];

export type PartialDeep074<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep074<T[K]> : T[K];
};

export type ByKind074 = {
  [R in AnyRecord074 as R['kind']]: R;
};
