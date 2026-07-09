export interface Entity043 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record043x0 extends Entity043 {
  kind: 'record-043-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x1 extends Entity043 {
  kind: 'record-043-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x2 extends Entity043 {
  kind: 'record-043-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x3 extends Entity043 {
  kind: 'record-043-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x4 extends Entity043 {
  kind: 'record-043-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x5 extends Entity043 {
  kind: 'record-043-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x6 extends Entity043 {
  kind: 'record-043-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x7 extends Entity043 {
  kind: 'record-043-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x8 extends Entity043 {
  kind: 'record-043-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record043x9 extends Entity043 {
  kind: 'record-043-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord043 =
  | Record043x0
  | Record043x1
  | Record043x2
  | Record043x3
  | Record043x4
  | Record043x5
  | Record043x6
  | Record043x7
  | Record043x8
  | Record043x9;

export type RecordKind043 = AnyRecord043['kind'];

export type PartialDeep043<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep043<T[K]> : T[K];
};

export type ByKind043 = {
  [R in AnyRecord043 as R['kind']]: R;
};
