export interface Entity060 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record060x0 extends Entity060 {
  kind: 'record-060-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x1 extends Entity060 {
  kind: 'record-060-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x2 extends Entity060 {
  kind: 'record-060-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x3 extends Entity060 {
  kind: 'record-060-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x4 extends Entity060 {
  kind: 'record-060-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x5 extends Entity060 {
  kind: 'record-060-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x6 extends Entity060 {
  kind: 'record-060-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x7 extends Entity060 {
  kind: 'record-060-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x8 extends Entity060 {
  kind: 'record-060-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record060x9 extends Entity060 {
  kind: 'record-060-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord060 =
  | Record060x0
  | Record060x1
  | Record060x2
  | Record060x3
  | Record060x4
  | Record060x5
  | Record060x6
  | Record060x7
  | Record060x8
  | Record060x9;

export type RecordKind060 = AnyRecord060['kind'];

export type PartialDeep060<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep060<T[K]> : T[K];
};

export type ByKind060 = {
  [R in AnyRecord060 as R['kind']]: R;
};
