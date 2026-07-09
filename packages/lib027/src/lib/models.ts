export interface Entity027 {
  id: string;
  createdAt: number;
  updatedAt: number;
  revision: number;
}

export interface Record027x0 extends Entity027 {
  kind: 'record-027-0';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x1 extends Entity027 {
  kind: 'record-027-1';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x2 extends Entity027 {
  kind: 'record-027-2';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x3 extends Entity027 {
  kind: 'record-027-3';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x4 extends Entity027 {
  kind: 'record-027-4';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x5 extends Entity027 {
  kind: 'record-027-5';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x6 extends Entity027 {
  kind: 'record-027-6';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x7 extends Entity027 {
  kind: 'record-027-7';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x8 extends Entity027 {
  kind: 'record-027-8';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export interface Record027x9 extends Entity027 {
  kind: 'record-027-9';
  label: string;
  weight: number;
  tags: readonly string[];
  attrs: Readonly<Record<string, string | number | boolean>>;
}

export type AnyRecord027 =
  | Record027x0
  | Record027x1
  | Record027x2
  | Record027x3
  | Record027x4
  | Record027x5
  | Record027x6
  | Record027x7
  | Record027x8
  | Record027x9;

export type RecordKind027 = AnyRecord027['kind'];

export type PartialDeep027<T> = {
  [K in keyof T]?: T[K] extends object ? PartialDeep027<T[K]> : T[K];
};

export type ByKind027 = {
  [R in AnyRecord027 as R['kind']]: R;
};
