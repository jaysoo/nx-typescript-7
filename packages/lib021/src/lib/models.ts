export interface Entity021 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record021x0 extends Entity021 {
  kind: 'record-021-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x1 extends Entity021 {
  kind: 'record-021-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x2 extends Entity021 {
  kind: 'record-021-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x3 extends Entity021 {
  kind: 'record-021-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x4 extends Entity021 {
  kind: 'record-021-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x5 extends Entity021 {
  kind: 'record-021-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x6 extends Entity021 {
  kind: 'record-021-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x7 extends Entity021 {
  kind: 'record-021-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x8 extends Entity021 {
  kind: 'record-021-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record021x9 extends Entity021 {
  kind: 'record-021-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord021 =
  | Record021x0
  | Record021x1
  | Record021x2
  | Record021x3
  | Record021x4
  | Record021x5
  | Record021x6
  | Record021x7
  | Record021x8
  | Record021x9;

export type RecordKind021 = AnyRecord021['kind'];

export type PartialDeep021<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep021<T[K]> : T[K];
};

export type ByKind021 = {
  [R in AnyRecord021 as R['kind']]: R;
};
