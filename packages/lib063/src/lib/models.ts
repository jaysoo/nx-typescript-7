export interface Entity063 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record063x0 extends Entity063 {
  kind: 'record-063-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x1 extends Entity063 {
  kind: 'record-063-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x2 extends Entity063 {
  kind: 'record-063-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x3 extends Entity063 {
  kind: 'record-063-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x4 extends Entity063 {
  kind: 'record-063-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x5 extends Entity063 {
  kind: 'record-063-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x6 extends Entity063 {
  kind: 'record-063-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x7 extends Entity063 {
  kind: 'record-063-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x8 extends Entity063 {
  kind: 'record-063-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record063x9 extends Entity063 {
  kind: 'record-063-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord063 =
  | Record063x0
  | Record063x1
  | Record063x2
  | Record063x3
  | Record063x4
  | Record063x5
  | Record063x6
  | Record063x7
  | Record063x8
  | Record063x9;

export type RecordKind063 = AnyRecord063['kind'];

export type PartialDeep063<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep063<T[K]> : T[K];
};

export type ByKind063 = {
  [R in AnyRecord063 as R['kind']]: R;
};
