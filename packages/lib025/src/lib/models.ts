export interface Entity025 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record025x0 extends Entity025 {
  kind: 'record-025-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x1 extends Entity025 {
  kind: 'record-025-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x2 extends Entity025 {
  kind: 'record-025-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x3 extends Entity025 {
  kind: 'record-025-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x4 extends Entity025 {
  kind: 'record-025-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x5 extends Entity025 {
  kind: 'record-025-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x6 extends Entity025 {
  kind: 'record-025-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x7 extends Entity025 {
  kind: 'record-025-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x8 extends Entity025 {
  kind: 'record-025-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record025x9 extends Entity025 {
  kind: 'record-025-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord025 =
  | Record025x0
  | Record025x1
  | Record025x2
  | Record025x3
  | Record025x4
  | Record025x5
  | Record025x6
  | Record025x7
  | Record025x8
  | Record025x9;

export type RecordKind025 = AnyRecord025['kind'];

export type PartialDeep025<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep025<T[K]> : T[K];
};

export type ByKind025 = {
  [R in AnyRecord025 as R['kind']]: R;
};
