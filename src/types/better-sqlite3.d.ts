declare module 'better-sqlite3' {
  export default class Database {
    constructor(filename: string, mode?: number);
    exec(sql: string): void;
    prepare<TResult = any, TArgs extends any[] = any[]>(sql: string): Statement<TResult, TArgs>;
    transaction<TResult>(cb?: (tx: Database) => TResult): TResult;
    close(): void;
  }

  interface Statement<TResult = any, TArgs extends any[] = any[]> {
    bind(...args: TArgs): Statement<TResult, TArgs>;
    get(...args: TArgs): TResult | undefined;
    all(...args: TArgs): TResult[];
    run(...args: TArgs): { changes: number; lastInsertRowid: number };
  }
}