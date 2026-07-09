export interface Entity031 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record031x0 extends Entity031 {
  kind: 'record-031-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x1 extends Entity031 {
  kind: 'record-031-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x2 extends Entity031 {
  kind: 'record-031-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x3 extends Entity031 {
  kind: 'record-031-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x4 extends Entity031 {
  kind: 'record-031-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x5 extends Entity031 {
  kind: 'record-031-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x6 extends Entity031 {
  kind: 'record-031-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x7 extends Entity031 {
  kind: 'record-031-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x8 extends Entity031 {
  kind: 'record-031-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record031x9 extends Entity031 {
  kind: 'record-031-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord031 =
  | Record031x0
  | Record031x1
  | Record031x2
  | Record031x3
  | Record031x4
  | Record031x5
  | Record031x6
  | Record031x7
  | Record031x8
  | Record031x9;

export type RecordKind031 = AnyRecord031['kind'];

export type PartialDeep031<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep031<T[K]> : T[K];
};

export type ByKind031 = {
  [R in AnyRecord031 as R['kind']]: R;
};
