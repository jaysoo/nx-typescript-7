export interface Entity069 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record069x0 extends Entity069 {
  kind: 'record-069-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x1 extends Entity069 {
  kind: 'record-069-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x2 extends Entity069 {
  kind: 'record-069-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x3 extends Entity069 {
  kind: 'record-069-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x4 extends Entity069 {
  kind: 'record-069-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x5 extends Entity069 {
  kind: 'record-069-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x6 extends Entity069 {
  kind: 'record-069-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x7 extends Entity069 {
  kind: 'record-069-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x8 extends Entity069 {
  kind: 'record-069-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record069x9 extends Entity069 {
  kind: 'record-069-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord069 =
  | Record069x0
  | Record069x1
  | Record069x2
  | Record069x3
  | Record069x4
  | Record069x5
  | Record069x6
  | Record069x7
  | Record069x8
  | Record069x9;

export type RecordKind069 = AnyRecord069['kind'];

export type PartialDeep069<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep069<T[K]> : T[K];
};

export type ByKind069 = {
  [R in AnyRecord069 as R['kind']]: R;
};
