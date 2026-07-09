export interface Entity037 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record037x0 extends Entity037 {
  kind: 'record-037-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x1 extends Entity037 {
  kind: 'record-037-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x2 extends Entity037 {
  kind: 'record-037-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x3 extends Entity037 {
  kind: 'record-037-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x4 extends Entity037 {
  kind: 'record-037-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x5 extends Entity037 {
  kind: 'record-037-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x6 extends Entity037 {
  kind: 'record-037-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x7 extends Entity037 {
  kind: 'record-037-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x8 extends Entity037 {
  kind: 'record-037-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record037x9 extends Entity037 {
  kind: 'record-037-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord037 =
  | Record037x0
  | Record037x1
  | Record037x2
  | Record037x3
  | Record037x4
  | Record037x5
  | Record037x6
  | Record037x7
  | Record037x8
  | Record037x9;

export type RecordKind037 = AnyRecord037['kind'];

export type PartialDeep037<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep037<T[K]> : T[K];
};

export type ByKind037 = {
  [R in AnyRecord037 as R['kind']]: R;
};
