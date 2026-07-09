export interface Entity079 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record079x0 extends Entity079 {
  kind: 'record-079-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x1 extends Entity079 {
  kind: 'record-079-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x2 extends Entity079 {
  kind: 'record-079-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x3 extends Entity079 {
  kind: 'record-079-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x4 extends Entity079 {
  kind: 'record-079-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x5 extends Entity079 {
  kind: 'record-079-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x6 extends Entity079 {
  kind: 'record-079-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x7 extends Entity079 {
  kind: 'record-079-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x8 extends Entity079 {
  kind: 'record-079-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record079x9 extends Entity079 {
  kind: 'record-079-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord079 =
  | Record079x0
  | Record079x1
  | Record079x2
  | Record079x3
  | Record079x4
  | Record079x5
  | Record079x6
  | Record079x7
  | Record079x8
  | Record079x9;

export type RecordKind079 = AnyRecord079['kind'];

export type PartialDeep079<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep079<T[K]> : T[K];
};

export type ByKind079 = {
  [R in AnyRecord079 as R['kind']]: R;
};
