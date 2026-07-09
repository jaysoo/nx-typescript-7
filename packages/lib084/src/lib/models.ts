export interface Entity084 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record084x0 extends Entity084 {
  kind: 'record-084-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x1 extends Entity084 {
  kind: 'record-084-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x2 extends Entity084 {
  kind: 'record-084-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x3 extends Entity084 {
  kind: 'record-084-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x4 extends Entity084 {
  kind: 'record-084-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x5 extends Entity084 {
  kind: 'record-084-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x6 extends Entity084 {
  kind: 'record-084-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x7 extends Entity084 {
  kind: 'record-084-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x8 extends Entity084 {
  kind: 'record-084-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record084x9 extends Entity084 {
  kind: 'record-084-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord084 =
  | Record084x0
  | Record084x1
  | Record084x2
  | Record084x3
  | Record084x4
  | Record084x5
  | Record084x6
  | Record084x7
  | Record084x8
  | Record084x9;

export type RecordKind084 = AnyRecord084['kind'];

export type PartialDeep084<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep084<T[K]> : T[K];
};

export type ByKind084 = {
  [R in AnyRecord084 as R['kind']]: R;
};
