export interface Entity024 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record024x0 extends Entity024 {
  kind: 'record-024-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x1 extends Entity024 {
  kind: 'record-024-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x2 extends Entity024 {
  kind: 'record-024-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x3 extends Entity024 {
  kind: 'record-024-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x4 extends Entity024 {
  kind: 'record-024-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x5 extends Entity024 {
  kind: 'record-024-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x6 extends Entity024 {
  kind: 'record-024-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x7 extends Entity024 {
  kind: 'record-024-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x8 extends Entity024 {
  kind: 'record-024-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record024x9 extends Entity024 {
  kind: 'record-024-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord024 =
  | Record024x0
  | Record024x1
  | Record024x2
  | Record024x3
  | Record024x4
  | Record024x5
  | Record024x6
  | Record024x7
  | Record024x8
  | Record024x9;

export type RecordKind024 = AnyRecord024['kind'];

export type PartialDeep024<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep024<T[K]> : T[K];
};

export type ByKind024 = {
  [R in AnyRecord024 as R['kind']]: R;
};
