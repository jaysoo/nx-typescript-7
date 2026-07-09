export interface Entity017 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record017x0 extends Entity017 {
  kind: 'record-017-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x1 extends Entity017 {
  kind: 'record-017-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x2 extends Entity017 {
  kind: 'record-017-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x3 extends Entity017 {
  kind: 'record-017-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x4 extends Entity017 {
  kind: 'record-017-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x5 extends Entity017 {
  kind: 'record-017-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x6 extends Entity017 {
  kind: 'record-017-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x7 extends Entity017 {
  kind: 'record-017-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x8 extends Entity017 {
  kind: 'record-017-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record017x9 extends Entity017 {
  kind: 'record-017-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord017 =
  | Record017x0
  | Record017x1
  | Record017x2
  | Record017x3
  | Record017x4
  | Record017x5
  | Record017x6
  | Record017x7
  | Record017x8
  | Record017x9;

export type RecordKind017 = AnyRecord017['kind'];

export type PartialDeep017<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep017<T[K]> : T[K];
};

export type ByKind017 = {
  [R in AnyRecord017 as R['kind']]: R;
};
