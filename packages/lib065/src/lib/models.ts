export interface Entity065 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record065x0 extends Entity065 {
  kind: 'record-065-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x1 extends Entity065 {
  kind: 'record-065-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x2 extends Entity065 {
  kind: 'record-065-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x3 extends Entity065 {
  kind: 'record-065-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x4 extends Entity065 {
  kind: 'record-065-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x5 extends Entity065 {
  kind: 'record-065-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x6 extends Entity065 {
  kind: 'record-065-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x7 extends Entity065 {
  kind: 'record-065-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x8 extends Entity065 {
  kind: 'record-065-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record065x9 extends Entity065 {
  kind: 'record-065-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord065 =
  | Record065x0
  | Record065x1
  | Record065x2
  | Record065x3
  | Record065x4
  | Record065x5
  | Record065x6
  | Record065x7
  | Record065x8
  | Record065x9;

export type RecordKind065 = AnyRecord065['kind'];

export type PartialDeep065<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep065<T[K]> : T[K];
};

export type ByKind065 = {
  [R in AnyRecord065 as R['kind']]: R;
};
