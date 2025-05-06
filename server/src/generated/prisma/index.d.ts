
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Url
 * 
 */
export type Url = $Result.DefaultSelection<Prisma.$UrlPayload>
/**
 * Model CheckTable
 * 
 */
export type CheckTable = $Result.DefaultSelection<Prisma.$CheckTablePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CheckStatus: {
  UP: 'UP',
  DOWN: 'DOWN'
};

export type CheckStatus = (typeof CheckStatus)[keyof typeof CheckStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CheckStatus = $Enums.CheckStatus

export const CheckStatus: typeof $Enums.CheckStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **Url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.UrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkTable`: Exposes CRUD operations for the **CheckTable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckTables
    * const checkTables = await prisma.checkTable.findMany()
    * ```
    */
  get checkTable(): Prisma.CheckTableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Url: 'Url',
    CheckTable: 'CheckTable'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "url" | "checkTable"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Url: {
        payload: Prisma.$UrlPayload<ExtArgs>
        fields: Prisma.UrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findFirst: {
            args: Prisma.UrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findMany: {
            args: Prisma.UrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          create: {
            args: Prisma.UrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          createMany: {
            args: Prisma.UrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          delete: {
            args: Prisma.UrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          update: {
            args: Prisma.UrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          deleteMany: {
            args: Prisma.UrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          upsert: {
            args: Prisma.UrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.UrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlCountArgs<ExtArgs>
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
      CheckTable: {
        payload: Prisma.$CheckTablePayload<ExtArgs>
        fields: Prisma.CheckTableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckTableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckTableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          findFirst: {
            args: Prisma.CheckTableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckTableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          findMany: {
            args: Prisma.CheckTableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>[]
          }
          create: {
            args: Prisma.CheckTableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          createMany: {
            args: Prisma.CheckTableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckTableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>[]
          }
          delete: {
            args: Prisma.CheckTableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          update: {
            args: Prisma.CheckTableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          deleteMany: {
            args: Prisma.CheckTableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckTableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckTableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>[]
          }
          upsert: {
            args: Prisma.CheckTableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckTablePayload>
          }
          aggregate: {
            args: Prisma.CheckTableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckTable>
          }
          groupBy: {
            args: Prisma.CheckTableGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckTableGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckTableCountArgs<ExtArgs>
            result: $Utils.Optional<CheckTableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    url?: UrlOmit
    checkTable?: CheckTableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Url: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Url?: boolean | UserCountOutputTypeCountUrlArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
  }


  /**
   * Count Type UrlCountOutputType
   */

  export type UrlCountOutputType = {
    CheckTable: number
  }

  export type UrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CheckTable?: boolean | UrlCountOutputTypeCountCheckTableArgs
  }

  // Custom InputTypes
  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlCountOutputType
     */
    select?: UrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeCountCheckTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckTableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    isVerified: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Url?: boolean | User$UrlArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Url?: boolean | User$UrlArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Url: Prisma.$UrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      isVerified: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Url<T extends User$UrlArgs<ExtArgs> = {}>(args?: Subset<T, User$UrlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Url
   */
  export type User$UrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    cursor?: UrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    url: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UrlMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    url: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UrlCountAggregateOutputType = {
    id: number
    user_id: number
    url: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UrlMinAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UrlMaxAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UrlCountAggregateInputType = {
    id?: true
    user_id?: true
    url?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Url to aggregate.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithAggregationInput | UrlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: UrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    id: string
    user_id: string
    url: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UrlCountAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type UrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    CheckTable?: boolean | Url$CheckTableArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectScalar = {
    id?: boolean
    user_id?: boolean
    url?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "url" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["url"]>
  export type UrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    CheckTable?: boolean | Url$CheckTableArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UrlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UrlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Url"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      CheckTable: Prisma.$CheckTablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      url: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["url"]>
    composites: {}
  }

  type UrlGetPayload<S extends boolean | null | undefined | UrlDefaultArgs> = $Result.GetResult<Prisma.$UrlPayload, S>

  type UrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface UrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Url'], meta: { name: 'Url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {UrlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlFindUniqueArgs>(args: SelectSubset<T, UrlFindUniqueArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlFindFirstArgs>(args?: SelectSubset<T, UrlFindFirstArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlWithIdOnly = await prisma.url.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlFindManyArgs>(args?: SelectSubset<T, UrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url.
     * @param {UrlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
     */
    create<T extends UrlCreateArgs>(args: SelectSubset<T, UrlCreateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {UrlCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlCreateManyArgs>(args?: SelectSubset<T, UrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {UrlCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url.
     * @param {UrlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
     */
    delete<T extends UrlDeleteArgs>(args: SelectSubset<T, UrlDeleteArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url.
     * @param {UrlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlUpdateArgs>(args: SelectSubset<T, UrlUpdateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {UrlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlDeleteManyArgs>(args?: SelectSubset<T, UrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlUpdateManyArgs>(args: SelectSubset<T, UrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {UrlUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrlUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url.
     * @param {UrlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
     */
    upsert<T extends UrlUpsertArgs>(args: SelectSubset<T, UrlUpsertArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlCountArgs>(
      args?: Subset<T, UrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Url model
   */
  readonly fields: UrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CheckTable<T extends Url$CheckTableArgs<ExtArgs> = {}>(args?: Subset<T, Url$CheckTableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Url model
   */
  interface UrlFieldRefs {
    readonly id: FieldRef<"Url", 'String'>
    readonly user_id: FieldRef<"Url", 'String'>
    readonly url: FieldRef<"Url", 'String'>
    readonly name: FieldRef<"Url", 'String'>
    readonly createdAt: FieldRef<"Url", 'DateTime'>
    readonly updatedAt: FieldRef<"Url", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Url findUnique
   */
  export type UrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findUniqueOrThrow
   */
  export type UrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findFirst
   */
  export type UrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findFirstOrThrow
   */
  export type UrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findMany
   */
  export type UrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url create
   */
  export type UrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to create a Url.
     */
    data: XOR<UrlCreateInput, UrlUncheckedCreateInput>
  }

  /**
   * Url createMany
   */
  export type UrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Url createManyAndReturn
   */
  export type UrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Url update
   */
  export type UrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to update a Url.
     */
    data: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
    /**
     * Choose, which Url to update.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url updateMany
   */
  export type UrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
  }

  /**
   * Url updateManyAndReturn
   */
  export type UrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Url upsert
   */
  export type UrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The filter to search for the Url to update in case it exists.
     */
    where: UrlWhereUniqueInput
    /**
     * In case the Url found by the `where` argument doesn't exist, create a new Url with this data.
     */
    create: XOR<UrlCreateInput, UrlUncheckedCreateInput>
    /**
     * In case the Url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
  }

  /**
   * Url delete
   */
  export type UrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter which Url to delete.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url deleteMany
   */
  export type UrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to delete.
     */
    limit?: number
  }

  /**
   * Url.CheckTable
   */
  export type Url$CheckTableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    where?: CheckTableWhereInput
    orderBy?: CheckTableOrderByWithRelationInput | CheckTableOrderByWithRelationInput[]
    cursor?: CheckTableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckTableScalarFieldEnum | CheckTableScalarFieldEnum[]
  }

  /**
   * Url without action
   */
  export type UrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
  }


  /**
   * Model CheckTable
   */

  export type AggregateCheckTable = {
    _count: CheckTableCountAggregateOutputType | null
    _min: CheckTableMinAggregateOutputType | null
    _max: CheckTableMaxAggregateOutputType | null
  }

  export type CheckTableMinAggregateOutputType = {
    id: string | null
    url_id: string | null
    status: $Enums.CheckStatus | null
    checkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckTableMaxAggregateOutputType = {
    id: string | null
    url_id: string | null
    status: $Enums.CheckStatus | null
    checkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CheckTableCountAggregateOutputType = {
    id: number
    url_id: number
    status: number
    checkedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CheckTableMinAggregateInputType = {
    id?: true
    url_id?: true
    status?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckTableMaxAggregateInputType = {
    id?: true
    url_id?: true
    status?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CheckTableCountAggregateInputType = {
    id?: true
    url_id?: true
    status?: true
    checkedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CheckTableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckTable to aggregate.
     */
    where?: CheckTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckTables to fetch.
     */
    orderBy?: CheckTableOrderByWithRelationInput | CheckTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckTables
    **/
    _count?: true | CheckTableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckTableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckTableMaxAggregateInputType
  }

  export type GetCheckTableAggregateType<T extends CheckTableAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckTable[P]>
      : GetScalarType<T[P], AggregateCheckTable[P]>
  }




  export type CheckTableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckTableWhereInput
    orderBy?: CheckTableOrderByWithAggregationInput | CheckTableOrderByWithAggregationInput[]
    by: CheckTableScalarFieldEnum[] | CheckTableScalarFieldEnum
    having?: CheckTableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckTableCountAggregateInputType | true
    _min?: CheckTableMinAggregateInputType
    _max?: CheckTableMaxAggregateInputType
  }

  export type CheckTableGroupByOutputType = {
    id: string
    url_id: string
    status: $Enums.CheckStatus
    checkedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CheckTableCountAggregateOutputType | null
    _min: CheckTableMinAggregateOutputType | null
    _max: CheckTableMaxAggregateOutputType | null
  }

  type GetCheckTableGroupByPayload<T extends CheckTableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckTableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckTableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckTableGroupByOutputType[P]>
            : GetScalarType<T[P], CheckTableGroupByOutputType[P]>
        }
      >
    >


  export type CheckTableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    status?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkTable"]>

  export type CheckTableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    status?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkTable"]>

  export type CheckTableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_id?: boolean
    status?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkTable"]>

  export type CheckTableSelectScalar = {
    id?: boolean
    url_id?: boolean
    status?: boolean
    checkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CheckTableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url_id" | "status" | "checkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["checkTable"]>
  export type CheckTableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }
  export type CheckTableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }
  export type CheckTableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrlDefaultArgs<ExtArgs>
  }

  export type $CheckTablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckTable"
    objects: {
      url: Prisma.$UrlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url_id: string
      status: $Enums.CheckStatus
      checkedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checkTable"]>
    composites: {}
  }

  type CheckTableGetPayload<S extends boolean | null | undefined | CheckTableDefaultArgs> = $Result.GetResult<Prisma.$CheckTablePayload, S>

  type CheckTableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckTableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckTableCountAggregateInputType | true
    }

  export interface CheckTableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckTable'], meta: { name: 'CheckTable' } }
    /**
     * Find zero or one CheckTable that matches the filter.
     * @param {CheckTableFindUniqueArgs} args - Arguments to find a CheckTable
     * @example
     * // Get one CheckTable
     * const checkTable = await prisma.checkTable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckTableFindUniqueArgs>(args: SelectSubset<T, CheckTableFindUniqueArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckTable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckTableFindUniqueOrThrowArgs} args - Arguments to find a CheckTable
     * @example
     * // Get one CheckTable
     * const checkTable = await prisma.checkTable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckTableFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckTableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckTable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableFindFirstArgs} args - Arguments to find a CheckTable
     * @example
     * // Get one CheckTable
     * const checkTable = await prisma.checkTable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckTableFindFirstArgs>(args?: SelectSubset<T, CheckTableFindFirstArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckTable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableFindFirstOrThrowArgs} args - Arguments to find a CheckTable
     * @example
     * // Get one CheckTable
     * const checkTable = await prisma.checkTable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckTableFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckTableFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckTables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckTables
     * const checkTables = await prisma.checkTable.findMany()
     * 
     * // Get first 10 CheckTables
     * const checkTables = await prisma.checkTable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkTableWithIdOnly = await prisma.checkTable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckTableFindManyArgs>(args?: SelectSubset<T, CheckTableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckTable.
     * @param {CheckTableCreateArgs} args - Arguments to create a CheckTable.
     * @example
     * // Create one CheckTable
     * const CheckTable = await prisma.checkTable.create({
     *   data: {
     *     // ... data to create a CheckTable
     *   }
     * })
     * 
     */
    create<T extends CheckTableCreateArgs>(args: SelectSubset<T, CheckTableCreateArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckTables.
     * @param {CheckTableCreateManyArgs} args - Arguments to create many CheckTables.
     * @example
     * // Create many CheckTables
     * const checkTable = await prisma.checkTable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckTableCreateManyArgs>(args?: SelectSubset<T, CheckTableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckTables and returns the data saved in the database.
     * @param {CheckTableCreateManyAndReturnArgs} args - Arguments to create many CheckTables.
     * @example
     * // Create many CheckTables
     * const checkTable = await prisma.checkTable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckTables and only return the `id`
     * const checkTableWithIdOnly = await prisma.checkTable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckTableCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckTableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckTable.
     * @param {CheckTableDeleteArgs} args - Arguments to delete one CheckTable.
     * @example
     * // Delete one CheckTable
     * const CheckTable = await prisma.checkTable.delete({
     *   where: {
     *     // ... filter to delete one CheckTable
     *   }
     * })
     * 
     */
    delete<T extends CheckTableDeleteArgs>(args: SelectSubset<T, CheckTableDeleteArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckTable.
     * @param {CheckTableUpdateArgs} args - Arguments to update one CheckTable.
     * @example
     * // Update one CheckTable
     * const checkTable = await prisma.checkTable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckTableUpdateArgs>(args: SelectSubset<T, CheckTableUpdateArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckTables.
     * @param {CheckTableDeleteManyArgs} args - Arguments to filter CheckTables to delete.
     * @example
     * // Delete a few CheckTables
     * const { count } = await prisma.checkTable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckTableDeleteManyArgs>(args?: SelectSubset<T, CheckTableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckTables
     * const checkTable = await prisma.checkTable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckTableUpdateManyArgs>(args: SelectSubset<T, CheckTableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckTables and returns the data updated in the database.
     * @param {CheckTableUpdateManyAndReturnArgs} args - Arguments to update many CheckTables.
     * @example
     * // Update many CheckTables
     * const checkTable = await prisma.checkTable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckTables and only return the `id`
     * const checkTableWithIdOnly = await prisma.checkTable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckTableUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckTableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckTable.
     * @param {CheckTableUpsertArgs} args - Arguments to update or create a CheckTable.
     * @example
     * // Update or create a CheckTable
     * const checkTable = await prisma.checkTable.upsert({
     *   create: {
     *     // ... data to create a CheckTable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckTable we want to update
     *   }
     * })
     */
    upsert<T extends CheckTableUpsertArgs>(args: SelectSubset<T, CheckTableUpsertArgs<ExtArgs>>): Prisma__CheckTableClient<$Result.GetResult<Prisma.$CheckTablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckTables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableCountArgs} args - Arguments to filter CheckTables to count.
     * @example
     * // Count the number of CheckTables
     * const count = await prisma.checkTable.count({
     *   where: {
     *     // ... the filter for the CheckTables we want to count
     *   }
     * })
    **/
    count<T extends CheckTableCountArgs>(
      args?: Subset<T, CheckTableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckTableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckTableAggregateArgs>(args: Subset<T, CheckTableAggregateArgs>): Prisma.PrismaPromise<GetCheckTableAggregateType<T>>

    /**
     * Group by CheckTable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckTableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckTableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckTableGroupByArgs['orderBy'] }
        : { orderBy?: CheckTableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckTableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckTable model
   */
  readonly fields: CheckTableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckTable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckTableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends UrlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UrlDefaultArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckTable model
   */
  interface CheckTableFieldRefs {
    readonly id: FieldRef<"CheckTable", 'String'>
    readonly url_id: FieldRef<"CheckTable", 'String'>
    readonly status: FieldRef<"CheckTable", 'CheckStatus'>
    readonly checkedAt: FieldRef<"CheckTable", 'DateTime'>
    readonly createdAt: FieldRef<"CheckTable", 'DateTime'>
    readonly updatedAt: FieldRef<"CheckTable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckTable findUnique
   */
  export type CheckTableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter, which CheckTable to fetch.
     */
    where: CheckTableWhereUniqueInput
  }

  /**
   * CheckTable findUniqueOrThrow
   */
  export type CheckTableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter, which CheckTable to fetch.
     */
    where: CheckTableWhereUniqueInput
  }

  /**
   * CheckTable findFirst
   */
  export type CheckTableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter, which CheckTable to fetch.
     */
    where?: CheckTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckTables to fetch.
     */
    orderBy?: CheckTableOrderByWithRelationInput | CheckTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckTables.
     */
    cursor?: CheckTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckTables.
     */
    distinct?: CheckTableScalarFieldEnum | CheckTableScalarFieldEnum[]
  }

  /**
   * CheckTable findFirstOrThrow
   */
  export type CheckTableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter, which CheckTable to fetch.
     */
    where?: CheckTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckTables to fetch.
     */
    orderBy?: CheckTableOrderByWithRelationInput | CheckTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckTables.
     */
    cursor?: CheckTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckTables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckTables.
     */
    distinct?: CheckTableScalarFieldEnum | CheckTableScalarFieldEnum[]
  }

  /**
   * CheckTable findMany
   */
  export type CheckTableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter, which CheckTables to fetch.
     */
    where?: CheckTableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckTables to fetch.
     */
    orderBy?: CheckTableOrderByWithRelationInput | CheckTableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckTables.
     */
    cursor?: CheckTableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckTables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckTables.
     */
    skip?: number
    distinct?: CheckTableScalarFieldEnum | CheckTableScalarFieldEnum[]
  }

  /**
   * CheckTable create
   */
  export type CheckTableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckTable.
     */
    data: XOR<CheckTableCreateInput, CheckTableUncheckedCreateInput>
  }

  /**
   * CheckTable createMany
   */
  export type CheckTableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckTables.
     */
    data: CheckTableCreateManyInput | CheckTableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckTable createManyAndReturn
   */
  export type CheckTableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * The data used to create many CheckTables.
     */
    data: CheckTableCreateManyInput | CheckTableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckTable update
   */
  export type CheckTableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckTable.
     */
    data: XOR<CheckTableUpdateInput, CheckTableUncheckedUpdateInput>
    /**
     * Choose, which CheckTable to update.
     */
    where: CheckTableWhereUniqueInput
  }

  /**
   * CheckTable updateMany
   */
  export type CheckTableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckTables.
     */
    data: XOR<CheckTableUpdateManyMutationInput, CheckTableUncheckedUpdateManyInput>
    /**
     * Filter which CheckTables to update
     */
    where?: CheckTableWhereInput
    /**
     * Limit how many CheckTables to update.
     */
    limit?: number
  }

  /**
   * CheckTable updateManyAndReturn
   */
  export type CheckTableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * The data used to update CheckTables.
     */
    data: XOR<CheckTableUpdateManyMutationInput, CheckTableUncheckedUpdateManyInput>
    /**
     * Filter which CheckTables to update
     */
    where?: CheckTableWhereInput
    /**
     * Limit how many CheckTables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckTable upsert
   */
  export type CheckTableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckTable to update in case it exists.
     */
    where: CheckTableWhereUniqueInput
    /**
     * In case the CheckTable found by the `where` argument doesn't exist, create a new CheckTable with this data.
     */
    create: XOR<CheckTableCreateInput, CheckTableUncheckedCreateInput>
    /**
     * In case the CheckTable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckTableUpdateInput, CheckTableUncheckedUpdateInput>
  }

  /**
   * CheckTable delete
   */
  export type CheckTableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
    /**
     * Filter which CheckTable to delete.
     */
    where: CheckTableWhereUniqueInput
  }

  /**
   * CheckTable deleteMany
   */
  export type CheckTableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckTables to delete
     */
    where?: CheckTableWhereInput
    /**
     * Limit how many CheckTables to delete.
     */
    limit?: number
  }

  /**
   * CheckTable without action
   */
  export type CheckTableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckTable
     */
    select?: CheckTableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckTable
     */
    omit?: CheckTableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckTableInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    url: 'url',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const CheckTableScalarFieldEnum: {
    id: 'id',
    url_id: 'url_id',
    status: 'status',
    checkedAt: 'checkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CheckTableScalarFieldEnum = (typeof CheckTableScalarFieldEnum)[keyof typeof CheckTableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CheckStatus'
   */
  export type EnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus'>
    


  /**
   * Reference to a field of type 'CheckStatus[]'
   */
  export type ListEnumCheckStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Url?: UrlListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Url?: UrlOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Url?: UrlListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UrlWhereInput = {
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    id?: StringFilter<"Url"> | string
    user_id?: StringFilter<"Url"> | string
    url?: StringFilter<"Url"> | string
    name?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CheckTable?: CheckTableListRelationFilter
  }

  export type UrlOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    CheckTable?: CheckTableOrderByRelationAggregateInput
  }

  export type UrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    user_id?: StringFilter<"Url"> | string
    url?: StringFilter<"Url"> | string
    name?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    CheckTable?: CheckTableListRelationFilter
  }, "id">

  export type UrlOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UrlCountOrderByAggregateInput
    _max?: UrlMaxOrderByAggregateInput
    _min?: UrlMinOrderByAggregateInput
  }

  export type UrlScalarWhereWithAggregatesInput = {
    AND?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    OR?: UrlScalarWhereWithAggregatesInput[]
    NOT?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Url"> | string
    user_id?: StringWithAggregatesFilter<"Url"> | string
    url?: StringWithAggregatesFilter<"Url"> | string
    name?: StringNullableWithAggregatesFilter<"Url"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
  }

  export type CheckTableWhereInput = {
    AND?: CheckTableWhereInput | CheckTableWhereInput[]
    OR?: CheckTableWhereInput[]
    NOT?: CheckTableWhereInput | CheckTableWhereInput[]
    id?: StringFilter<"CheckTable"> | string
    url_id?: StringFilter<"CheckTable"> | string
    status?: EnumCheckStatusFilter<"CheckTable"> | $Enums.CheckStatus
    checkedAt?: DateTimeFilter<"CheckTable"> | Date | string
    createdAt?: DateTimeFilter<"CheckTable"> | Date | string
    updatedAt?: DateTimeFilter<"CheckTable"> | Date | string
    url?: XOR<UrlScalarRelationFilter, UrlWhereInput>
  }

  export type CheckTableOrderByWithRelationInput = {
    id?: SortOrder
    url_id?: SortOrder
    status?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: UrlOrderByWithRelationInput
  }

  export type CheckTableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckTableWhereInput | CheckTableWhereInput[]
    OR?: CheckTableWhereInput[]
    NOT?: CheckTableWhereInput | CheckTableWhereInput[]
    url_id?: StringFilter<"CheckTable"> | string
    status?: EnumCheckStatusFilter<"CheckTable"> | $Enums.CheckStatus
    checkedAt?: DateTimeFilter<"CheckTable"> | Date | string
    createdAt?: DateTimeFilter<"CheckTable"> | Date | string
    updatedAt?: DateTimeFilter<"CheckTable"> | Date | string
    url?: XOR<UrlScalarRelationFilter, UrlWhereInput>
  }, "id">

  export type CheckTableOrderByWithAggregationInput = {
    id?: SortOrder
    url_id?: SortOrder
    status?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CheckTableCountOrderByAggregateInput
    _max?: CheckTableMaxOrderByAggregateInput
    _min?: CheckTableMinOrderByAggregateInput
  }

  export type CheckTableScalarWhereWithAggregatesInput = {
    AND?: CheckTableScalarWhereWithAggregatesInput | CheckTableScalarWhereWithAggregatesInput[]
    OR?: CheckTableScalarWhereWithAggregatesInput[]
    NOT?: CheckTableScalarWhereWithAggregatesInput | CheckTableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckTable"> | string
    url_id?: StringWithAggregatesFilter<"CheckTable"> | string
    status?: EnumCheckStatusWithAggregatesFilter<"CheckTable"> | $Enums.CheckStatus
    checkedAt?: DateTimeWithAggregatesFilter<"CheckTable"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CheckTable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CheckTable"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Url?: UrlCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Url?: UrlUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Url?: UrlUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Url?: UrlUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlCreateInput = {
    id?: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUrlInput
    CheckTable?: CheckTableCreateNestedManyWithoutUrlInput
  }

  export type UrlUncheckedCreateInput = {
    id?: string
    user_id: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CheckTable?: CheckTableUncheckedCreateNestedManyWithoutUrlInput
  }

  export type UrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUrlNestedInput
    CheckTable?: CheckTableUpdateManyWithoutUrlNestedInput
  }

  export type UrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckTable?: CheckTableUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type UrlCreateManyInput = {
    id?: string
    user_id: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableCreateInput = {
    id?: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    url: UrlCreateNestedOneWithoutCheckTableInput
  }

  export type CheckTableUncheckedCreateInput = {
    id?: string
    url_id: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckTableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: UrlUpdateOneRequiredWithoutCheckTableNestedInput
  }

  export type CheckTableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableCreateManyInput = {
    id?: string
    url_id: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckTableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UrlListRelationFilter = {
    every?: UrlWhereInput
    some?: UrlWhereInput
    none?: UrlWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CheckTableListRelationFilter = {
    every?: CheckTableWhereInput
    some?: CheckTableWhereInput
    none?: CheckTableWhereInput
  }

  export type CheckTableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrlCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UrlMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UrlMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type UrlScalarRelationFilter = {
    is?: UrlWhereInput
    isNot?: UrlWhereInput
  }

  export type CheckTableCountOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    status?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckTableMaxOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    status?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CheckTableMinOrderByAggregateInput = {
    id?: SortOrder
    url_id?: SortOrder
    status?: SortOrder
    checkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
  }

  export type UrlCreateNestedManyWithoutUserInput = {
    create?: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput> | UrlCreateWithoutUserInput[] | UrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutUserInput | UrlCreateOrConnectWithoutUserInput[]
    createMany?: UrlCreateManyUserInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type UrlUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput> | UrlCreateWithoutUserInput[] | UrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutUserInput | UrlCreateOrConnectWithoutUserInput[]
    createMany?: UrlCreateManyUserInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UrlUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput> | UrlCreateWithoutUserInput[] | UrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutUserInput | UrlCreateOrConnectWithoutUserInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutUserInput | UrlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrlCreateManyUserInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutUserInput | UrlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutUserInput | UrlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type UrlUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput> | UrlCreateWithoutUserInput[] | UrlUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutUserInput | UrlCreateOrConnectWithoutUserInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutUserInput | UrlUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UrlCreateManyUserInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutUserInput | UrlUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutUserInput | UrlUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUrlInput = {
    create?: XOR<UserCreateWithoutUrlInput, UserUncheckedCreateWithoutUrlInput>
    connectOrCreate?: UserCreateOrConnectWithoutUrlInput
    connect?: UserWhereUniqueInput
  }

  export type CheckTableCreateNestedManyWithoutUrlInput = {
    create?: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput> | CheckTableCreateWithoutUrlInput[] | CheckTableUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: CheckTableCreateOrConnectWithoutUrlInput | CheckTableCreateOrConnectWithoutUrlInput[]
    createMany?: CheckTableCreateManyUrlInputEnvelope
    connect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
  }

  export type CheckTableUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput> | CheckTableCreateWithoutUrlInput[] | CheckTableUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: CheckTableCreateOrConnectWithoutUrlInput | CheckTableCreateOrConnectWithoutUrlInput[]
    createMany?: CheckTableCreateManyUrlInputEnvelope
    connect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUrlNestedInput = {
    create?: XOR<UserCreateWithoutUrlInput, UserUncheckedCreateWithoutUrlInput>
    connectOrCreate?: UserCreateOrConnectWithoutUrlInput
    upsert?: UserUpsertWithoutUrlInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUrlInput, UserUpdateWithoutUrlInput>, UserUncheckedUpdateWithoutUrlInput>
  }

  export type CheckTableUpdateManyWithoutUrlNestedInput = {
    create?: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput> | CheckTableCreateWithoutUrlInput[] | CheckTableUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: CheckTableCreateOrConnectWithoutUrlInput | CheckTableCreateOrConnectWithoutUrlInput[]
    upsert?: CheckTableUpsertWithWhereUniqueWithoutUrlInput | CheckTableUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: CheckTableCreateManyUrlInputEnvelope
    set?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    disconnect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    delete?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    connect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    update?: CheckTableUpdateWithWhereUniqueWithoutUrlInput | CheckTableUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: CheckTableUpdateManyWithWhereWithoutUrlInput | CheckTableUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: CheckTableScalarWhereInput | CheckTableScalarWhereInput[]
  }

  export type CheckTableUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput> | CheckTableCreateWithoutUrlInput[] | CheckTableUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: CheckTableCreateOrConnectWithoutUrlInput | CheckTableCreateOrConnectWithoutUrlInput[]
    upsert?: CheckTableUpsertWithWhereUniqueWithoutUrlInput | CheckTableUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: CheckTableCreateManyUrlInputEnvelope
    set?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    disconnect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    delete?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    connect?: CheckTableWhereUniqueInput | CheckTableWhereUniqueInput[]
    update?: CheckTableUpdateWithWhereUniqueWithoutUrlInput | CheckTableUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: CheckTableUpdateManyWithWhereWithoutUrlInput | CheckTableUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: CheckTableScalarWhereInput | CheckTableScalarWhereInput[]
  }

  export type UrlCreateNestedOneWithoutCheckTableInput = {
    create?: XOR<UrlCreateWithoutCheckTableInput, UrlUncheckedCreateWithoutCheckTableInput>
    connectOrCreate?: UrlCreateOrConnectWithoutCheckTableInput
    connect?: UrlWhereUniqueInput
  }

  export type EnumCheckStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckStatus
  }

  export type UrlUpdateOneRequiredWithoutCheckTableNestedInput = {
    create?: XOR<UrlCreateWithoutCheckTableInput, UrlUncheckedCreateWithoutCheckTableInput>
    connectOrCreate?: UrlCreateOrConnectWithoutCheckTableInput
    upsert?: UrlUpsertWithoutCheckTableInput
    connect?: UrlWhereUniqueInput
    update?: XOR<XOR<UrlUpdateToOneWithWhereWithoutCheckTableInput, UrlUpdateWithoutCheckTableInput>, UrlUncheckedUpdateWithoutCheckTableInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCheckStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusFilter<$PrismaModel> | $Enums.CheckStatus
  }

  export type NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckStatus | EnumCheckStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckStatus[] | ListEnumCheckStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckStatusFilter<$PrismaModel>
  }

  export type UrlCreateWithoutUserInput = {
    id?: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CheckTable?: CheckTableCreateNestedManyWithoutUrlInput
  }

  export type UrlUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    CheckTable?: CheckTableUncheckedCreateNestedManyWithoutUrlInput
  }

  export type UrlCreateOrConnectWithoutUserInput = {
    where: UrlWhereUniqueInput
    create: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput>
  }

  export type UrlCreateManyUserInputEnvelope = {
    data: UrlCreateManyUserInput | UrlCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UrlUpsertWithWhereUniqueWithoutUserInput = {
    where: UrlWhereUniqueInput
    update: XOR<UrlUpdateWithoutUserInput, UrlUncheckedUpdateWithoutUserInput>
    create: XOR<UrlCreateWithoutUserInput, UrlUncheckedCreateWithoutUserInput>
  }

  export type UrlUpdateWithWhereUniqueWithoutUserInput = {
    where: UrlWhereUniqueInput
    data: XOR<UrlUpdateWithoutUserInput, UrlUncheckedUpdateWithoutUserInput>
  }

  export type UrlUpdateManyWithWhereWithoutUserInput = {
    where: UrlScalarWhereInput
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyWithoutUserInput>
  }

  export type UrlScalarWhereInput = {
    AND?: UrlScalarWhereInput | UrlScalarWhereInput[]
    OR?: UrlScalarWhereInput[]
    NOT?: UrlScalarWhereInput | UrlScalarWhereInput[]
    id?: StringFilter<"Url"> | string
    user_id?: StringFilter<"Url"> | string
    url?: StringFilter<"Url"> | string
    name?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
  }

  export type UserCreateWithoutUrlInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUrlInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    isVerified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUrlInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUrlInput, UserUncheckedCreateWithoutUrlInput>
  }

  export type CheckTableCreateWithoutUrlInput = {
    id?: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckTableUncheckedCreateWithoutUrlInput = {
    id?: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckTableCreateOrConnectWithoutUrlInput = {
    where: CheckTableWhereUniqueInput
    create: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput>
  }

  export type CheckTableCreateManyUrlInputEnvelope = {
    data: CheckTableCreateManyUrlInput | CheckTableCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUrlInput = {
    update: XOR<UserUpdateWithoutUrlInput, UserUncheckedUpdateWithoutUrlInput>
    create: XOR<UserCreateWithoutUrlInput, UserUncheckedCreateWithoutUrlInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUrlInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUrlInput, UserUncheckedUpdateWithoutUrlInput>
  }

  export type UserUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableUpsertWithWhereUniqueWithoutUrlInput = {
    where: CheckTableWhereUniqueInput
    update: XOR<CheckTableUpdateWithoutUrlInput, CheckTableUncheckedUpdateWithoutUrlInput>
    create: XOR<CheckTableCreateWithoutUrlInput, CheckTableUncheckedCreateWithoutUrlInput>
  }

  export type CheckTableUpdateWithWhereUniqueWithoutUrlInput = {
    where: CheckTableWhereUniqueInput
    data: XOR<CheckTableUpdateWithoutUrlInput, CheckTableUncheckedUpdateWithoutUrlInput>
  }

  export type CheckTableUpdateManyWithWhereWithoutUrlInput = {
    where: CheckTableScalarWhereInput
    data: XOR<CheckTableUpdateManyMutationInput, CheckTableUncheckedUpdateManyWithoutUrlInput>
  }

  export type CheckTableScalarWhereInput = {
    AND?: CheckTableScalarWhereInput | CheckTableScalarWhereInput[]
    OR?: CheckTableScalarWhereInput[]
    NOT?: CheckTableScalarWhereInput | CheckTableScalarWhereInput[]
    id?: StringFilter<"CheckTable"> | string
    url_id?: StringFilter<"CheckTable"> | string
    status?: EnumCheckStatusFilter<"CheckTable"> | $Enums.CheckStatus
    checkedAt?: DateTimeFilter<"CheckTable"> | Date | string
    createdAt?: DateTimeFilter<"CheckTable"> | Date | string
    updatedAt?: DateTimeFilter<"CheckTable"> | Date | string
  }

  export type UrlCreateWithoutCheckTableInput = {
    id?: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUrlInput
  }

  export type UrlUncheckedCreateWithoutCheckTableInput = {
    id?: string
    user_id: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlCreateOrConnectWithoutCheckTableInput = {
    where: UrlWhereUniqueInput
    create: XOR<UrlCreateWithoutCheckTableInput, UrlUncheckedCreateWithoutCheckTableInput>
  }

  export type UrlUpsertWithoutCheckTableInput = {
    update: XOR<UrlUpdateWithoutCheckTableInput, UrlUncheckedUpdateWithoutCheckTableInput>
    create: XOR<UrlCreateWithoutCheckTableInput, UrlUncheckedCreateWithoutCheckTableInput>
    where?: UrlWhereInput
  }

  export type UrlUpdateToOneWithWhereWithoutCheckTableInput = {
    where?: UrlWhereInput
    data: XOR<UrlUpdateWithoutCheckTableInput, UrlUncheckedUpdateWithoutCheckTableInput>
  }

  export type UrlUpdateWithoutCheckTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUrlNestedInput
  }

  export type UrlUncheckedUpdateWithoutCheckTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlCreateManyUserInput = {
    id?: string
    url: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckTable?: CheckTableUpdateManyWithoutUrlNestedInput
  }

  export type UrlUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CheckTable?: CheckTableUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type UrlUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableCreateManyUrlInput = {
    id?: string
    status?: $Enums.CheckStatus
    checkedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CheckTableUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableUncheckedUpdateWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckTableUncheckedUpdateManyWithoutUrlInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumCheckStatusFieldUpdateOperationsInput | $Enums.CheckStatus
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}