export interface Entity013 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record013x0 extends Entity013 {
  kind: 'record-013-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x1 extends Entity013 {
  kind: 'record-013-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x2 extends Entity013 {
  kind: 'record-013-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x3 extends Entity013 {
  kind: 'record-013-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x4 extends Entity013 {
  kind: 'record-013-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x5 extends Entity013 {
  kind: 'record-013-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x6 extends Entity013 {
  kind: 'record-013-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x7 extends Entity013 {
  kind: 'record-013-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x8 extends Entity013 {
  kind: 'record-013-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record013x9 extends Entity013 {
  kind: 'record-013-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord013 =
  | Record013x0
  | Record013x1
  | Record013x2
  | Record013x3
  | Record013x4
  | Record013x5
  | Record013x6
  | Record013x7
  | Record013x8
  | Record013x9;

export type RecordKind013 = AnyRecord013['kind'];

export type PartialDeep013<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep013<T[K]> : T[K];
};

export type ByKind013 = {
  [R in AnyRecord013 as R['kind']]: R;
};
