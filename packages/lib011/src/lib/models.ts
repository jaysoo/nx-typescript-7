export interface Entity011 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record011x0 extends Entity011 {
  kind: 'record-011-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x1 extends Entity011 {
  kind: 'record-011-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x2 extends Entity011 {
  kind: 'record-011-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x3 extends Entity011 {
  kind: 'record-011-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x4 extends Entity011 {
  kind: 'record-011-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x5 extends Entity011 {
  kind: 'record-011-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x6 extends Entity011 {
  kind: 'record-011-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x7 extends Entity011 {
  kind: 'record-011-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x8 extends Entity011 {
  kind: 'record-011-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record011x9 extends Entity011 {
  kind: 'record-011-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord011 =
  | Record011x0
  | Record011x1
  | Record011x2
  | Record011x3
  | Record011x4
  | Record011x5
  | Record011x6
  | Record011x7
  | Record011x8
  | Record011x9;

export type RecordKind011 = AnyRecord011['kind'];

export type PartialDeep011<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep011<T[K]> : T[K];
};

export type ByKind011 = {
  [R in AnyRecord011 as R['kind']]: R;
};
