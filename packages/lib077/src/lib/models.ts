export interface Entity077 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record077x0 extends Entity077 {
  kind: 'record-077-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x1 extends Entity077 {
  kind: 'record-077-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x2 extends Entity077 {
  kind: 'record-077-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x3 extends Entity077 {
  kind: 'record-077-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x4 extends Entity077 {
  kind: 'record-077-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x5 extends Entity077 {
  kind: 'record-077-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x6 extends Entity077 {
  kind: 'record-077-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x7 extends Entity077 {
  kind: 'record-077-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x8 extends Entity077 {
  kind: 'record-077-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record077x9 extends Entity077 {
  kind: 'record-077-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord077 =
  | Record077x0
  | Record077x1
  | Record077x2
  | Record077x3
  | Record077x4
  | Record077x5
  | Record077x6
  | Record077x7
  | Record077x8
  | Record077x9;

export type RecordKind077 = AnyRecord077['kind'];

export type PartialDeep077<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep077<T[K]> : T[K];
};

export type ByKind077 = {
  [R in AnyRecord077 as R['kind']]: R;
};
