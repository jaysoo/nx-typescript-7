export interface Entity073 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record073x0 extends Entity073 {
  kind: 'record-073-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x1 extends Entity073 {
  kind: 'record-073-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x2 extends Entity073 {
  kind: 'record-073-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x3 extends Entity073 {
  kind: 'record-073-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x4 extends Entity073 {
  kind: 'record-073-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x5 extends Entity073 {
  kind: 'record-073-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x6 extends Entity073 {
  kind: 'record-073-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x7 extends Entity073 {
  kind: 'record-073-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x8 extends Entity073 {
  kind: 'record-073-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record073x9 extends Entity073 {
  kind: 'record-073-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord073 =
  | Record073x0
  | Record073x1
  | Record073x2
  | Record073x3
  | Record073x4
  | Record073x5
  | Record073x6
  | Record073x7
  | Record073x8
  | Record073x9;

export type RecordKind073 = AnyRecord073['kind'];

export type PartialDeep073<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep073<T[K]> : T[K];
};

export type ByKind073 = {
  [R in AnyRecord073 as R['kind']]: R;
};
