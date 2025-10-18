
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
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductImage
 * 
 */
export type ProductImage = $Result.DefaultSelection<Prisma.$ProductImagePayload>
/**
 * Model ProductMetadata
 * 
 */
export type ProductMetadata = $Result.DefaultSelection<Prisma.$ProductMetadataPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CategoryMetadata
 * 
 */
export type CategoryMetadata = $Result.DefaultSelection<Prisma.$CategoryMetadataPayload>
/**
 * Model MetadataValue
 * 
 */
export type MetadataValue = $Result.DefaultSelection<Prisma.$MetadataValuePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderProduct
 * 
 */
export type OrderProduct = $Result.DefaultSelection<Prisma.$OrderProductPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productImage`: Exposes CRUD operations for the **ProductImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductImages
    * const productImages = await prisma.productImage.findMany()
    * ```
    */
  get productImage(): Prisma.ProductImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productMetadata`: Exposes CRUD operations for the **ProductMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductMetadata
    * const productMetadata = await prisma.productMetadata.findMany()
    * ```
    */
  get productMetadata(): Prisma.ProductMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryMetadata`: Exposes CRUD operations for the **CategoryMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryMetadata
    * const categoryMetadata = await prisma.categoryMetadata.findMany()
    * ```
    */
  get categoryMetadata(): Prisma.CategoryMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metadataValue`: Exposes CRUD operations for the **MetadataValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetadataValues
    * const metadataValues = await prisma.metadataValue.findMany()
    * ```
    */
  get metadataValue(): Prisma.MetadataValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProduct`: Exposes CRUD operations for the **OrderProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderProducts
    * const orderProducts = await prisma.orderProduct.findMany()
    * ```
    */
  get orderProduct(): Prisma.OrderProductDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    UserAddress: 'UserAddress',
    Banner: 'Banner',
    Product: 'Product',
    ProductImage: 'ProductImage',
    ProductMetadata: 'ProductMetadata',
    Category: 'Category',
    CategoryMetadata: 'CategoryMetadata',
    MetadataValue: 'MetadataValue',
    Order: 'Order',
    OrderProduct: 'OrderProduct'
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
      modelProps: "user" | "userAddress" | "banner" | "product" | "productImage" | "productMetadata" | "category" | "categoryMetadata" | "metadataValue" | "order" | "orderProduct"
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
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductImage: {
        payload: Prisma.$ProductImagePayload<ExtArgs>
        fields: Prisma.ProductImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findFirst: {
            args: Prisma.ProductImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          findMany: {
            args: Prisma.ProductImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          create: {
            args: Prisma.ProductImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          createMany: {
            args: Prisma.ProductImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          delete: {
            args: Prisma.ProductImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          update: {
            args: Prisma.ProductImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          deleteMany: {
            args: Prisma.ProductImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>[]
          }
          upsert: {
            args: Prisma.ProductImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductImagePayload>
          }
          aggregate: {
            args: Prisma.ProductImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductImage>
          }
          groupBy: {
            args: Prisma.ProductImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductImageCountArgs<ExtArgs>
            result: $Utils.Optional<ProductImageCountAggregateOutputType> | number
          }
        }
      }
      ProductMetadata: {
        payload: Prisma.$ProductMetadataPayload<ExtArgs>
        fields: Prisma.ProductMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          findFirst: {
            args: Prisma.ProductMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          findMany: {
            args: Prisma.ProductMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>[]
          }
          create: {
            args: Prisma.ProductMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          createMany: {
            args: Prisma.ProductMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>[]
          }
          delete: {
            args: Prisma.ProductMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          update: {
            args: Prisma.ProductMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ProductMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>[]
          }
          upsert: {
            args: Prisma.ProductMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductMetadataPayload>
          }
          aggregate: {
            args: Prisma.ProductMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductMetadata>
          }
          groupBy: {
            args: Prisma.ProductMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ProductMetadataCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CategoryMetadata: {
        payload: Prisma.$CategoryMetadataPayload<ExtArgs>
        fields: Prisma.CategoryMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          findFirst: {
            args: Prisma.CategoryMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          findMany: {
            args: Prisma.CategoryMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>[]
          }
          create: {
            args: Prisma.CategoryMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          createMany: {
            args: Prisma.CategoryMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>[]
          }
          delete: {
            args: Prisma.CategoryMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          update: {
            args: Prisma.CategoryMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          deleteMany: {
            args: Prisma.CategoryMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>[]
          }
          upsert: {
            args: Prisma.CategoryMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryMetadataPayload>
          }
          aggregate: {
            args: Prisma.CategoryMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryMetadata>
          }
          groupBy: {
            args: Prisma.CategoryMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryMetadataCountAggregateOutputType> | number
          }
        }
      }
      MetadataValue: {
        payload: Prisma.$MetadataValuePayload<ExtArgs>
        fields: Prisma.MetadataValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetadataValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetadataValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          findFirst: {
            args: Prisma.MetadataValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetadataValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          findMany: {
            args: Prisma.MetadataValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>[]
          }
          create: {
            args: Prisma.MetadataValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          createMany: {
            args: Prisma.MetadataValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetadataValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>[]
          }
          delete: {
            args: Prisma.MetadataValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          update: {
            args: Prisma.MetadataValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          deleteMany: {
            args: Prisma.MetadataValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetadataValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetadataValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>[]
          }
          upsert: {
            args: Prisma.MetadataValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetadataValuePayload>
          }
          aggregate: {
            args: Prisma.MetadataValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetadataValue>
          }
          groupBy: {
            args: Prisma.MetadataValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetadataValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetadataValueCountArgs<ExtArgs>
            result: $Utils.Optional<MetadataValueCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderProduct: {
        payload: Prisma.$OrderProductPayload<ExtArgs>
        fields: Prisma.OrderProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findFirst: {
            args: Prisma.OrderProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findMany: {
            args: Prisma.OrderProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          create: {
            args: Prisma.OrderProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          createMany: {
            args: Prisma.OrderProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          delete: {
            args: Prisma.OrderProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          update: {
            args: Prisma.OrderProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          upsert: {
            args: Prisma.OrderProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          aggregate: {
            args: Prisma.OrderProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderProduct>
          }
          groupBy: {
            args: Prisma.OrderProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderProductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderProductCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    userAddress?: UserAddressOmit
    banner?: BannerOmit
    product?: ProductOmit
    productImage?: ProductImageOmit
    productMetadata?: ProductMetadataOmit
    category?: CategoryOmit
    categoryMetadata?: CategoryMetadataOmit
    metadataValue?: MetadataValueOmit
    order?: OrderOmit
    orderProduct?: OrderProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    addresses: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    images: number
    metadata: number
    orders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProductCountOutputTypeCountImagesArgs
    metadata?: boolean | ProductCountOutputTypeCountMetadataArgs
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMetadataWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
    metadata: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
    metadata?: boolean | CategoryCountOutputTypeCountMetadataArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryMetadataWhereInput
  }


  /**
   * Count Type CategoryMetadataCountOutputType
   */

  export type CategoryMetadataCountOutputType = {
    values: number
  }

  export type CategoryMetadataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | CategoryMetadataCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * CategoryMetadataCountOutputType without action
   */
  export type CategoryMetadataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadataCountOutputType
     */
    select?: CategoryMetadataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryMetadataCountOutputType without action
   */
  export type CategoryMetadataCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetadataValueWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    token?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    token: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addresses?: boolean | User$addressesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "token" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | User$addressesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      addresses: Prisma.$UserAddressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      token: string | null
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
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
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
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    cursor?: UserAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAddressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    zipcode: string | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    country: string | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    zipcode: string | null
    street: string | null
    number: string | null
    city: string | null
    state: string | null
    country: string | null
    complement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAddressCountAggregateOutputType = {
    id: number
    userId: number
    zipcode: number
    street: number
    number: number
    city: number
    state: number
    country: number
    complement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAddressMinAggregateInputType = {
    id?: true
    userId?: true
    zipcode?: true
    street?: true
    number?: true
    city?: true
    state?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressMaxAggregateInputType = {
    id?: true
    userId?: true
    zipcode?: true
    street?: true
    number?: true
    city?: true
    state?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAddressCountAggregateInputType = {
    id?: true
    userId?: true
    zipcode?: true
    street?: true
    number?: true
    city?: true
    state?: true
    country?: true
    complement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _avg?: UserAddressAvgAggregateInputType
    _sum?: UserAddressSumAggregateInputType
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    id: number
    userId: number
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    zipcode?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    zipcode?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    zipcode?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectScalar = {
    id?: boolean
    userId?: boolean
    zipcode?: boolean
    street?: boolean
    number?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    complement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "zipcode" | "street" | "number" | "city" | "state" | "country" | "complement" | "createdAt" | "updatedAt", ExtArgs["result"]["userAddress"]>
  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      zipcode: string
      street: string
      number: string
      city: string
      state: string
      country: string
      complement: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }

  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressFindUniqueArgs>(args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressFindFirstArgs>(args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddressFindManyArgs>(args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
     */
    create<T extends UserAddressCreateArgs>(args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAddresses.
     * @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressCreateManyArgs>(args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAddresses and returns the data saved in the database.
     * @param {UserAddressCreateManyAndReturnArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
     */
    delete<T extends UserAddressDeleteArgs>(args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressUpdateArgs>(args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressDeleteManyArgs>(args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressUpdateManyArgs>(args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses and returns the data updated in the database.
     * @param {UserAddressUpdateManyAndReturnArgs} args - Arguments to update many UserAddresses.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressUpsertArgs>(args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
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
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserAddress model
   */
  interface UserAddressFieldRefs {
    readonly id: FieldRef<"UserAddress", 'Int'>
    readonly userId: FieldRef<"UserAddress", 'Int'>
    readonly zipcode: FieldRef<"UserAddress", 'String'>
    readonly street: FieldRef<"UserAddress", 'String'>
    readonly number: FieldRef<"UserAddress", 'String'>
    readonly city: FieldRef<"UserAddress", 'String'>
    readonly state: FieldRef<"UserAddress", 'String'>
    readonly country: FieldRef<"UserAddress", 'String'>
    readonly complement: FieldRef<"UserAddress", 'String'>
    readonly createdAt: FieldRef<"UserAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }

  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddress createManyAndReturn
   */
  export type UserAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
  }

  /**
   * UserAddress updateManyAndReturn
   */
  export type UserAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }

  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to delete.
     */
    limit?: number
  }

  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    img: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    img: string | null
    link: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    img: number
    link: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    img?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    img?: true
    link?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    img?: true
    link?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    img: string
    link: string
    createdAt: Date
    updatedAt: Date
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    img?: boolean
    link?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "img" | "link" | "createdAt" | "updatedAt", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      img: string
      link: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'Int'>
    readonly img: FieldRef<"Banner", 'String'>
    readonly link: FieldRef<"Banner", 'String'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    viewsCount: number | null
    salesCount: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    categoryId: number | null
    viewsCount: number | null
    salesCount: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    label: string | null
    price: number | null
    description: string | null
    categoryId: number | null
    viewsCount: number | null
    salesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    label: string | null
    price: number | null
    description: string | null
    categoryId: number | null
    viewsCount: number | null
    salesCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    label: number
    price: number
    description: number
    categoryId: number
    viewsCount: number
    salesCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    viewsCount?: true
    salesCount?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    viewsCount?: true
    salesCount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    label?: true
    price?: true
    description?: true
    categoryId?: true
    viewsCount?: true
    salesCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    label?: true
    price?: true
    description?: true
    categoryId?: true
    viewsCount?: true
    salesCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    label?: true
    price?: true
    description?: true
    categoryId?: true
    viewsCount?: true
    salesCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    label: string
    price: number
    description: string | null
    categoryId: number
    viewsCount: number
    salesCount: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    viewsCount?: boolean
    salesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Product$imagesArgs<ExtArgs>
    metadata?: boolean | Product$metadataArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    viewsCount?: boolean
    salesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    viewsCount?: boolean
    salesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    label?: boolean
    price?: boolean
    description?: boolean
    categoryId?: boolean
    viewsCount?: boolean
    salesCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "price" | "description" | "categoryId" | "viewsCount" | "salesCount" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Product$imagesArgs<ExtArgs>
    metadata?: boolean | Product$metadataArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    orders?: boolean | Product$ordersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      images: Prisma.$ProductImagePayload<ExtArgs>[]
      metadata: Prisma.$ProductMetadataPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
      orders: Prisma.$OrderProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      price: number
      description: string | null
      categoryId: number
      viewsCount: number
      salesCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metadata<T extends Product$metadataArgs<ExtArgs> = {}>(args?: Subset<T, Product$metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly label: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly description: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly viewsCount: FieldRef<"Product", 'Int'>
    readonly salesCount: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    cursor?: ProductImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * Product.metadata
   */
  export type Product$metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    where?: ProductMetadataWhereInput
    orderBy?: ProductMetadataOrderByWithRelationInput | ProductMetadataOrderByWithRelationInput[]
    cursor?: ProductMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductMetadataScalarFieldEnum | ProductMetadataScalarFieldEnum[]
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductImage
   */

  export type AggregateProductImage = {
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  export type ProductImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductImageMinAggregateOutputType = {
    id: number | null
    productId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductImageMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductImageCountAggregateOutputType = {
    id: number
    productId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductImageAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImageSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductImageMinAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductImageMaxAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductImageCountAggregateInputType = {
    id?: true
    productId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImage to aggregate.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductImages
    **/
    _count?: true | ProductImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductImageMaxAggregateInputType
  }

  export type GetProductImageAggregateType<T extends ProductImageAggregateArgs> = {
        [P in keyof T & keyof AggregateProductImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductImage[P]>
      : GetScalarType<T[P], AggregateProductImage[P]>
  }




  export type ProductImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductImageWhereInput
    orderBy?: ProductImageOrderByWithAggregationInput | ProductImageOrderByWithAggregationInput[]
    by: ProductImageScalarFieldEnum[] | ProductImageScalarFieldEnum
    having?: ProductImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductImageCountAggregateInputType | true
    _avg?: ProductImageAvgAggregateInputType
    _sum?: ProductImageSumAggregateInputType
    _min?: ProductImageMinAggregateInputType
    _max?: ProductImageMaxAggregateInputType
  }

  export type ProductImageGroupByOutputType = {
    id: number
    productId: number
    url: string
    createdAt: Date
    updatedAt: Date
    _count: ProductImageCountAggregateOutputType | null
    _avg: ProductImageAvgAggregateOutputType | null
    _sum: ProductImageSumAggregateOutputType | null
    _min: ProductImageMinAggregateOutputType | null
    _max: ProductImageMaxAggregateOutputType | null
  }

  type GetProductImageGroupByPayload<T extends ProductImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
            : GetScalarType<T[P], ProductImageGroupByOutputType[P]>
        }
      >
    >


  export type ProductImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productImage"]>

  export type ProductImageSelectScalar = {
    id?: boolean
    productId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "url" | "createdAt" | "updatedAt", ExtArgs["result"]["productImage"]>
  export type ProductImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductImage"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productImage"]>
    composites: {}
  }

  type ProductImageGetPayload<S extends boolean | null | undefined | ProductImageDefaultArgs> = $Result.GetResult<Prisma.$ProductImagePayload, S>

  type ProductImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductImageCountAggregateInputType | true
    }

  export interface ProductImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductImage'], meta: { name: 'ProductImage' } }
    /**
     * Find zero or one ProductImage that matches the filter.
     * @param {ProductImageFindUniqueArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductImageFindUniqueArgs>(args: SelectSubset<T, ProductImageFindUniqueArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductImageFindUniqueOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductImageFindFirstArgs>(args?: SelectSubset<T, ProductImageFindFirstArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindFirstOrThrowArgs} args - Arguments to find a ProductImage
     * @example
     * // Get one ProductImage
     * const productImage = await prisma.productImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductImages
     * const productImages = await prisma.productImage.findMany()
     * 
     * // Get first 10 ProductImages
     * const productImages = await prisma.productImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productImageWithIdOnly = await prisma.productImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductImageFindManyArgs>(args?: SelectSubset<T, ProductImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductImage.
     * @param {ProductImageCreateArgs} args - Arguments to create a ProductImage.
     * @example
     * // Create one ProductImage
     * const ProductImage = await prisma.productImage.create({
     *   data: {
     *     // ... data to create a ProductImage
     *   }
     * })
     * 
     */
    create<T extends ProductImageCreateArgs>(args: SelectSubset<T, ProductImageCreateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductImages.
     * @param {ProductImageCreateManyArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductImageCreateManyArgs>(args?: SelectSubset<T, ProductImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductImages and returns the data saved in the database.
     * @param {ProductImageCreateManyAndReturnArgs} args - Arguments to create many ProductImages.
     * @example
     * // Create many ProductImages
     * const productImage = await prisma.productImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductImage.
     * @param {ProductImageDeleteArgs} args - Arguments to delete one ProductImage.
     * @example
     * // Delete one ProductImage
     * const ProductImage = await prisma.productImage.delete({
     *   where: {
     *     // ... filter to delete one ProductImage
     *   }
     * })
     * 
     */
    delete<T extends ProductImageDeleteArgs>(args: SelectSubset<T, ProductImageDeleteArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductImage.
     * @param {ProductImageUpdateArgs} args - Arguments to update one ProductImage.
     * @example
     * // Update one ProductImage
     * const productImage = await prisma.productImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductImageUpdateArgs>(args: SelectSubset<T, ProductImageUpdateArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductImages.
     * @param {ProductImageDeleteManyArgs} args - Arguments to filter ProductImages to delete.
     * @example
     * // Delete a few ProductImages
     * const { count } = await prisma.productImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductImageDeleteManyArgs>(args?: SelectSubset<T, ProductImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductImageUpdateManyArgs>(args: SelectSubset<T, ProductImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductImages and returns the data updated in the database.
     * @param {ProductImageUpdateManyAndReturnArgs} args - Arguments to update many ProductImages.
     * @example
     * // Update many ProductImages
     * const productImage = await prisma.productImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductImages and only return the `id`
     * const productImageWithIdOnly = await prisma.productImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductImage.
     * @param {ProductImageUpsertArgs} args - Arguments to update or create a ProductImage.
     * @example
     * // Update or create a ProductImage
     * const productImage = await prisma.productImage.upsert({
     *   create: {
     *     // ... data to create a ProductImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductImage we want to update
     *   }
     * })
     */
    upsert<T extends ProductImageUpsertArgs>(args: SelectSubset<T, ProductImageUpsertArgs<ExtArgs>>): Prisma__ProductImageClient<$Result.GetResult<Prisma.$ProductImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageCountArgs} args - Arguments to filter ProductImages to count.
     * @example
     * // Count the number of ProductImages
     * const count = await prisma.productImage.count({
     *   where: {
     *     // ... the filter for the ProductImages we want to count
     *   }
     * })
    **/
    count<T extends ProductImageCountArgs>(
      args?: Subset<T, ProductImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductImageAggregateArgs>(args: Subset<T, ProductImageAggregateArgs>): Prisma.PrismaPromise<GetProductImageAggregateType<T>>

    /**
     * Group by ProductImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductImageGroupByArgs} args - Group by arguments.
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
      T extends ProductImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductImageGroupByArgs['orderBy'] }
        : { orderBy?: ProductImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductImage model
   */
  readonly fields: ProductImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductImage model
   */
  interface ProductImageFieldRefs {
    readonly id: FieldRef<"ProductImage", 'Int'>
    readonly productId: FieldRef<"ProductImage", 'Int'>
    readonly url: FieldRef<"ProductImage", 'String'>
    readonly createdAt: FieldRef<"ProductImage", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductImage findUnique
   */
  export type ProductImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findUniqueOrThrow
   */
  export type ProductImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage findFirst
   */
  export type ProductImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findFirstOrThrow
   */
  export type ProductImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImage to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductImages.
     */
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage findMany
   */
  export type ProductImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter, which ProductImages to fetch.
     */
    where?: ProductImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductImages to fetch.
     */
    orderBy?: ProductImageOrderByWithRelationInput | ProductImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductImages.
     */
    cursor?: ProductImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductImages.
     */
    skip?: number
    distinct?: ProductImageScalarFieldEnum | ProductImageScalarFieldEnum[]
  }

  /**
   * ProductImage create
   */
  export type ProductImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductImage.
     */
    data: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
  }

  /**
   * ProductImage createMany
   */
  export type ProductImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductImage createManyAndReturn
   */
  export type ProductImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to create many ProductImages.
     */
    data: ProductImageCreateManyInput | ProductImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage update
   */
  export type ProductImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductImage.
     */
    data: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
    /**
     * Choose, which ProductImage to update.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage updateMany
   */
  export type ProductImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
  }

  /**
   * ProductImage updateManyAndReturn
   */
  export type ProductImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * The data used to update ProductImages.
     */
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyInput>
    /**
     * Filter which ProductImages to update
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductImage upsert
   */
  export type ProductImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductImage to update in case it exists.
     */
    where: ProductImageWhereUniqueInput
    /**
     * In case the ProductImage found by the `where` argument doesn't exist, create a new ProductImage with this data.
     */
    create: XOR<ProductImageCreateInput, ProductImageUncheckedCreateInput>
    /**
     * In case the ProductImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductImageUpdateInput, ProductImageUncheckedUpdateInput>
  }

  /**
   * ProductImage delete
   */
  export type ProductImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
    /**
     * Filter which ProductImage to delete.
     */
    where: ProductImageWhereUniqueInput
  }

  /**
   * ProductImage deleteMany
   */
  export type ProductImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductImages to delete
     */
    where?: ProductImageWhereInput
    /**
     * Limit how many ProductImages to delete.
     */
    limit?: number
  }

  /**
   * ProductImage without action
   */
  export type ProductImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductImage
     */
    select?: ProductImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductImage
     */
    omit?: ProductImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductImageInclude<ExtArgs> | null
  }


  /**
   * Model ProductMetadata
   */

  export type AggregateProductMetadata = {
    _count: ProductMetadataCountAggregateOutputType | null
    _avg: ProductMetadataAvgAggregateOutputType | null
    _sum: ProductMetadataSumAggregateOutputType | null
    _min: ProductMetadataMinAggregateOutputType | null
    _max: ProductMetadataMaxAggregateOutputType | null
  }

  export type ProductMetadataAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductMetadataSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ProductMetadataMinAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryMetadataId: string | null
    metadataValueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMetadataMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    categoryMetadataId: string | null
    metadataValueId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMetadataCountAggregateOutputType = {
    id: number
    productId: number
    categoryMetadataId: number
    metadataValueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMetadataAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductMetadataSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ProductMetadataMinAggregateInputType = {
    id?: true
    productId?: true
    categoryMetadataId?: true
    metadataValueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMetadataMaxAggregateInputType = {
    id?: true
    productId?: true
    categoryMetadataId?: true
    metadataValueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMetadataCountAggregateInputType = {
    id?: true
    productId?: true
    categoryMetadataId?: true
    metadataValueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetadata to aggregate.
     */
    where?: ProductMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetadata to fetch.
     */
    orderBy?: ProductMetadataOrderByWithRelationInput | ProductMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductMetadata
    **/
    _count?: true | ProductMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMetadataMaxAggregateInputType
  }

  export type GetProductMetadataAggregateType<T extends ProductMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateProductMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductMetadata[P]>
      : GetScalarType<T[P], AggregateProductMetadata[P]>
  }




  export type ProductMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductMetadataWhereInput
    orderBy?: ProductMetadataOrderByWithAggregationInput | ProductMetadataOrderByWithAggregationInput[]
    by: ProductMetadataScalarFieldEnum[] | ProductMetadataScalarFieldEnum
    having?: ProductMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductMetadataCountAggregateInputType | true
    _avg?: ProductMetadataAvgAggregateInputType
    _sum?: ProductMetadataSumAggregateInputType
    _min?: ProductMetadataMinAggregateInputType
    _max?: ProductMetadataMaxAggregateInputType
  }

  export type ProductMetadataGroupByOutputType = {
    id: number
    productId: number
    categoryMetadataId: string
    metadataValueId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductMetadataCountAggregateOutputType | null
    _avg: ProductMetadataAvgAggregateOutputType | null
    _sum: ProductMetadataSumAggregateOutputType | null
    _min: ProductMetadataMinAggregateOutputType | null
    _max: ProductMetadataMaxAggregateOutputType | null
  }

  type GetProductMetadataGroupByPayload<T extends ProductMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ProductMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ProductMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryMetadataId?: boolean
    metadataValueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetadata"]>

  export type ProductMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryMetadataId?: boolean
    metadataValueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetadata"]>

  export type ProductMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    categoryMetadataId?: boolean
    metadataValueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productMetadata"]>

  export type ProductMetadataSelectScalar = {
    id?: boolean
    productId?: boolean
    categoryMetadataId?: boolean
    metadataValueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "categoryMetadataId" | "metadataValueId" | "createdAt" | "updatedAt", ExtArgs["result"]["productMetadata"]>
  export type ProductMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductMetadata"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      categoryMetadataId: string
      metadataValueId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productMetadata"]>
    composites: {}
  }

  type ProductMetadataGetPayload<S extends boolean | null | undefined | ProductMetadataDefaultArgs> = $Result.GetResult<Prisma.$ProductMetadataPayload, S>

  type ProductMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductMetadataCountAggregateInputType | true
    }

  export interface ProductMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductMetadata'], meta: { name: 'ProductMetadata' } }
    /**
     * Find zero or one ProductMetadata that matches the filter.
     * @param {ProductMetadataFindUniqueArgs} args - Arguments to find a ProductMetadata
     * @example
     * // Get one ProductMetadata
     * const productMetadata = await prisma.productMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMetadataFindUniqueArgs>(args: SelectSubset<T, ProductMetadataFindUniqueArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMetadataFindUniqueOrThrowArgs} args - Arguments to find a ProductMetadata
     * @example
     * // Get one ProductMetadata
     * const productMetadata = await prisma.productMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataFindFirstArgs} args - Arguments to find a ProductMetadata
     * @example
     * // Get one ProductMetadata
     * const productMetadata = await prisma.productMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMetadataFindFirstArgs>(args?: SelectSubset<T, ProductMetadataFindFirstArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataFindFirstOrThrowArgs} args - Arguments to find a ProductMetadata
     * @example
     * // Get one ProductMetadata
     * const productMetadata = await prisma.productMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMetadata
     * const productMetadata = await prisma.productMetadata.findMany()
     * 
     * // Get first 10 ProductMetadata
     * const productMetadata = await prisma.productMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productMetadataWithIdOnly = await prisma.productMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductMetadataFindManyArgs>(args?: SelectSubset<T, ProductMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductMetadata.
     * @param {ProductMetadataCreateArgs} args - Arguments to create a ProductMetadata.
     * @example
     * // Create one ProductMetadata
     * const ProductMetadata = await prisma.productMetadata.create({
     *   data: {
     *     // ... data to create a ProductMetadata
     *   }
     * })
     * 
     */
    create<T extends ProductMetadataCreateArgs>(args: SelectSubset<T, ProductMetadataCreateArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductMetadata.
     * @param {ProductMetadataCreateManyArgs} args - Arguments to create many ProductMetadata.
     * @example
     * // Create many ProductMetadata
     * const productMetadata = await prisma.productMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductMetadataCreateManyArgs>(args?: SelectSubset<T, ProductMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductMetadata and returns the data saved in the database.
     * @param {ProductMetadataCreateManyAndReturnArgs} args - Arguments to create many ProductMetadata.
     * @example
     * // Create many ProductMetadata
     * const productMetadata = await prisma.productMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductMetadata and only return the `id`
     * const productMetadataWithIdOnly = await prisma.productMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductMetadata.
     * @param {ProductMetadataDeleteArgs} args - Arguments to delete one ProductMetadata.
     * @example
     * // Delete one ProductMetadata
     * const ProductMetadata = await prisma.productMetadata.delete({
     *   where: {
     *     // ... filter to delete one ProductMetadata
     *   }
     * })
     * 
     */
    delete<T extends ProductMetadataDeleteArgs>(args: SelectSubset<T, ProductMetadataDeleteArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductMetadata.
     * @param {ProductMetadataUpdateArgs} args - Arguments to update one ProductMetadata.
     * @example
     * // Update one ProductMetadata
     * const productMetadata = await prisma.productMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductMetadataUpdateArgs>(args: SelectSubset<T, ProductMetadataUpdateArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductMetadata.
     * @param {ProductMetadataDeleteManyArgs} args - Arguments to filter ProductMetadata to delete.
     * @example
     * // Delete a few ProductMetadata
     * const { count } = await prisma.productMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductMetadataDeleteManyArgs>(args?: SelectSubset<T, ProductMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMetadata
     * const productMetadata = await prisma.productMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductMetadataUpdateManyArgs>(args: SelectSubset<T, ProductMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductMetadata and returns the data updated in the database.
     * @param {ProductMetadataUpdateManyAndReturnArgs} args - Arguments to update many ProductMetadata.
     * @example
     * // Update many ProductMetadata
     * const productMetadata = await prisma.productMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductMetadata and only return the `id`
     * const productMetadataWithIdOnly = await prisma.productMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductMetadata.
     * @param {ProductMetadataUpsertArgs} args - Arguments to update or create a ProductMetadata.
     * @example
     * // Update or create a ProductMetadata
     * const productMetadata = await prisma.productMetadata.upsert({
     *   create: {
     *     // ... data to create a ProductMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ProductMetadataUpsertArgs>(args: SelectSubset<T, ProductMetadataUpsertArgs<ExtArgs>>): Prisma__ProductMetadataClient<$Result.GetResult<Prisma.$ProductMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataCountArgs} args - Arguments to filter ProductMetadata to count.
     * @example
     * // Count the number of ProductMetadata
     * const count = await prisma.productMetadata.count({
     *   where: {
     *     // ... the filter for the ProductMetadata we want to count
     *   }
     * })
    **/
    count<T extends ProductMetadataCountArgs>(
      args?: Subset<T, ProductMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductMetadataAggregateArgs>(args: Subset<T, ProductMetadataAggregateArgs>): Prisma.PrismaPromise<GetProductMetadataAggregateType<T>>

    /**
     * Group by ProductMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMetadataGroupByArgs} args - Group by arguments.
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
      T extends ProductMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ProductMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductMetadata model
   */
  readonly fields: ProductMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductMetadata model
   */
  interface ProductMetadataFieldRefs {
    readonly id: FieldRef<"ProductMetadata", 'Int'>
    readonly productId: FieldRef<"ProductMetadata", 'Int'>
    readonly categoryMetadataId: FieldRef<"ProductMetadata", 'String'>
    readonly metadataValueId: FieldRef<"ProductMetadata", 'String'>
    readonly createdAt: FieldRef<"ProductMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductMetadata findUnique
   */
  export type ProductMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetadata to fetch.
     */
    where: ProductMetadataWhereUniqueInput
  }

  /**
   * ProductMetadata findUniqueOrThrow
   */
  export type ProductMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetadata to fetch.
     */
    where: ProductMetadataWhereUniqueInput
  }

  /**
   * ProductMetadata findFirst
   */
  export type ProductMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetadata to fetch.
     */
    where?: ProductMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetadata to fetch.
     */
    orderBy?: ProductMetadataOrderByWithRelationInput | ProductMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetadata.
     */
    cursor?: ProductMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetadata.
     */
    distinct?: ProductMetadataScalarFieldEnum | ProductMetadataScalarFieldEnum[]
  }

  /**
   * ProductMetadata findFirstOrThrow
   */
  export type ProductMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetadata to fetch.
     */
    where?: ProductMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetadata to fetch.
     */
    orderBy?: ProductMetadataOrderByWithRelationInput | ProductMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductMetadata.
     */
    cursor?: ProductMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductMetadata.
     */
    distinct?: ProductMetadataScalarFieldEnum | ProductMetadataScalarFieldEnum[]
  }

  /**
   * ProductMetadata findMany
   */
  export type ProductMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ProductMetadata to fetch.
     */
    where?: ProductMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductMetadata to fetch.
     */
    orderBy?: ProductMetadataOrderByWithRelationInput | ProductMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductMetadata.
     */
    cursor?: ProductMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductMetadata.
     */
    skip?: number
    distinct?: ProductMetadataScalarFieldEnum | ProductMetadataScalarFieldEnum[]
  }

  /**
   * ProductMetadata create
   */
  export type ProductMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductMetadata.
     */
    data: XOR<ProductMetadataCreateInput, ProductMetadataUncheckedCreateInput>
  }

  /**
   * ProductMetadata createMany
   */
  export type ProductMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMetadata.
     */
    data: ProductMetadataCreateManyInput | ProductMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductMetadata createManyAndReturn
   */
  export type ProductMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many ProductMetadata.
     */
    data: ProductMetadataCreateManyInput | ProductMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMetadata update
   */
  export type ProductMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductMetadata.
     */
    data: XOR<ProductMetadataUpdateInput, ProductMetadataUncheckedUpdateInput>
    /**
     * Choose, which ProductMetadata to update.
     */
    where: ProductMetadataWhereUniqueInput
  }

  /**
   * ProductMetadata updateMany
   */
  export type ProductMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMetadata.
     */
    data: XOR<ProductMetadataUpdateManyMutationInput, ProductMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetadata to update
     */
    where?: ProductMetadataWhereInput
    /**
     * Limit how many ProductMetadata to update.
     */
    limit?: number
  }

  /**
   * ProductMetadata updateManyAndReturn
   */
  export type ProductMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * The data used to update ProductMetadata.
     */
    data: XOR<ProductMetadataUpdateManyMutationInput, ProductMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ProductMetadata to update
     */
    where?: ProductMetadataWhereInput
    /**
     * Limit how many ProductMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductMetadata upsert
   */
  export type ProductMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductMetadata to update in case it exists.
     */
    where: ProductMetadataWhereUniqueInput
    /**
     * In case the ProductMetadata found by the `where` argument doesn't exist, create a new ProductMetadata with this data.
     */
    create: XOR<ProductMetadataCreateInput, ProductMetadataUncheckedCreateInput>
    /**
     * In case the ProductMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductMetadataUpdateInput, ProductMetadataUncheckedUpdateInput>
  }

  /**
   * ProductMetadata delete
   */
  export type ProductMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
    /**
     * Filter which ProductMetadata to delete.
     */
    where: ProductMetadataWhereUniqueInput
  }

  /**
   * ProductMetadata deleteMany
   */
  export type ProductMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMetadata to delete
     */
    where?: ProductMetadataWhereInput
    /**
     * Limit how many ProductMetadata to delete.
     */
    limit?: number
  }

  /**
   * ProductMetadata without action
   */
  export type ProductMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMetadata
     */
    select?: ProductMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductMetadata
     */
    omit?: ProductMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductMetadataInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    slug: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    metadata?: boolean | Category$metadataArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    metadata?: boolean | Category$metadataArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      metadata: Prisma.$CategoryMetadataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metadata<T extends Category$metadataArgs<ExtArgs> = {}>(args?: Subset<T, Category$metadataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category.metadata
   */
  export type Category$metadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    where?: CategoryMetadataWhereInput
    orderBy?: CategoryMetadataOrderByWithRelationInput | CategoryMetadataOrderByWithRelationInput[]
    cursor?: CategoryMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryMetadataScalarFieldEnum | CategoryMetadataScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CategoryMetadata
   */

  export type AggregateCategoryMetadata = {
    _count: CategoryMetadataCountAggregateOutputType | null
    _avg: CategoryMetadataAvgAggregateOutputType | null
    _sum: CategoryMetadataSumAggregateOutputType | null
    _min: CategoryMetadataMinAggregateOutputType | null
    _max: CategoryMetadataMaxAggregateOutputType | null
  }

  export type CategoryMetadataAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type CategoryMetadataSumAggregateOutputType = {
    categoryId: number | null
  }

  export type CategoryMetadataMinAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMetadataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMetadataCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMetadataAvgAggregateInputType = {
    categoryId?: true
  }

  export type CategoryMetadataSumAggregateInputType = {
    categoryId?: true
  }

  export type CategoryMetadataMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMetadataMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMetadataCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryMetadata to aggregate.
     */
    where?: CategoryMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMetadata to fetch.
     */
    orderBy?: CategoryMetadataOrderByWithRelationInput | CategoryMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryMetadata
    **/
    _count?: true | CategoryMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMetadataMaxAggregateInputType
  }

  export type GetCategoryMetadataAggregateType<T extends CategoryMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryMetadata[P]>
      : GetScalarType<T[P], AggregateCategoryMetadata[P]>
  }




  export type CategoryMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryMetadataWhereInput
    orderBy?: CategoryMetadataOrderByWithAggregationInput | CategoryMetadataOrderByWithAggregationInput[]
    by: CategoryMetadataScalarFieldEnum[] | CategoryMetadataScalarFieldEnum
    having?: CategoryMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryMetadataCountAggregateInputType | true
    _avg?: CategoryMetadataAvgAggregateInputType
    _sum?: CategoryMetadataSumAggregateInputType
    _min?: CategoryMetadataMinAggregateInputType
    _max?: CategoryMetadataMaxAggregateInputType
  }

  export type CategoryMetadataGroupByOutputType = {
    id: string
    name: string
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: CategoryMetadataCountAggregateOutputType | null
    _avg: CategoryMetadataAvgAggregateOutputType | null
    _sum: CategoryMetadataSumAggregateOutputType | null
    _min: CategoryMetadataMinAggregateOutputType | null
    _max: CategoryMetadataMaxAggregateOutputType | null
  }

  type GetCategoryMetadataGroupByPayload<T extends CategoryMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryMetadataGroupByOutputType[P]>
        }
      >
    >


  export type CategoryMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    values?: boolean | CategoryMetadata$valuesArgs<ExtArgs>
    _count?: boolean | CategoryMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryMetadata"]>

  export type CategoryMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryMetadata"]>

  export type CategoryMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryMetadata"]>

  export type CategoryMetadataSelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["categoryMetadata"]>
  export type CategoryMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    values?: boolean | CategoryMetadata$valuesArgs<ExtArgs>
    _count?: boolean | CategoryMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryMetadata"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      values: Prisma.$MetadataValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoryMetadata"]>
    composites: {}
  }

  type CategoryMetadataGetPayload<S extends boolean | null | undefined | CategoryMetadataDefaultArgs> = $Result.GetResult<Prisma.$CategoryMetadataPayload, S>

  type CategoryMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryMetadataCountAggregateInputType | true
    }

  export interface CategoryMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryMetadata'], meta: { name: 'CategoryMetadata' } }
    /**
     * Find zero or one CategoryMetadata that matches the filter.
     * @param {CategoryMetadataFindUniqueArgs} args - Arguments to find a CategoryMetadata
     * @example
     * // Get one CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryMetadataFindUniqueArgs>(args: SelectSubset<T, CategoryMetadataFindUniqueArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryMetadataFindUniqueOrThrowArgs} args - Arguments to find a CategoryMetadata
     * @example
     * // Get one CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataFindFirstArgs} args - Arguments to find a CategoryMetadata
     * @example
     * // Get one CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryMetadataFindFirstArgs>(args?: SelectSubset<T, CategoryMetadataFindFirstArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataFindFirstOrThrowArgs} args - Arguments to find a CategoryMetadata
     * @example
     * // Get one CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findMany()
     * 
     * // Get first 10 CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryMetadataWithIdOnly = await prisma.categoryMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryMetadataFindManyArgs>(args?: SelectSubset<T, CategoryMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryMetadata.
     * @param {CategoryMetadataCreateArgs} args - Arguments to create a CategoryMetadata.
     * @example
     * // Create one CategoryMetadata
     * const CategoryMetadata = await prisma.categoryMetadata.create({
     *   data: {
     *     // ... data to create a CategoryMetadata
     *   }
     * })
     * 
     */
    create<T extends CategoryMetadataCreateArgs>(args: SelectSubset<T, CategoryMetadataCreateArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryMetadata.
     * @param {CategoryMetadataCreateManyArgs} args - Arguments to create many CategoryMetadata.
     * @example
     * // Create many CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryMetadataCreateManyArgs>(args?: SelectSubset<T, CategoryMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryMetadata and returns the data saved in the database.
     * @param {CategoryMetadataCreateManyAndReturnArgs} args - Arguments to create many CategoryMetadata.
     * @example
     * // Create many CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryMetadata and only return the `id`
     * const categoryMetadataWithIdOnly = await prisma.categoryMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryMetadata.
     * @param {CategoryMetadataDeleteArgs} args - Arguments to delete one CategoryMetadata.
     * @example
     * // Delete one CategoryMetadata
     * const CategoryMetadata = await prisma.categoryMetadata.delete({
     *   where: {
     *     // ... filter to delete one CategoryMetadata
     *   }
     * })
     * 
     */
    delete<T extends CategoryMetadataDeleteArgs>(args: SelectSubset<T, CategoryMetadataDeleteArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryMetadata.
     * @param {CategoryMetadataUpdateArgs} args - Arguments to update one CategoryMetadata.
     * @example
     * // Update one CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryMetadataUpdateArgs>(args: SelectSubset<T, CategoryMetadataUpdateArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryMetadata.
     * @param {CategoryMetadataDeleteManyArgs} args - Arguments to filter CategoryMetadata to delete.
     * @example
     * // Delete a few CategoryMetadata
     * const { count } = await prisma.categoryMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryMetadataDeleteManyArgs>(args?: SelectSubset<T, CategoryMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryMetadataUpdateManyArgs>(args: SelectSubset<T, CategoryMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryMetadata and returns the data updated in the database.
     * @param {CategoryMetadataUpdateManyAndReturnArgs} args - Arguments to update many CategoryMetadata.
     * @example
     * // Update many CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryMetadata and only return the `id`
     * const categoryMetadataWithIdOnly = await prisma.categoryMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryMetadata.
     * @param {CategoryMetadataUpsertArgs} args - Arguments to update or create a CategoryMetadata.
     * @example
     * // Update or create a CategoryMetadata
     * const categoryMetadata = await prisma.categoryMetadata.upsert({
     *   create: {
     *     // ... data to create a CategoryMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryMetadata we want to update
     *   }
     * })
     */
    upsert<T extends CategoryMetadataUpsertArgs>(args: SelectSubset<T, CategoryMetadataUpsertArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataCountArgs} args - Arguments to filter CategoryMetadata to count.
     * @example
     * // Count the number of CategoryMetadata
     * const count = await prisma.categoryMetadata.count({
     *   where: {
     *     // ... the filter for the CategoryMetadata we want to count
     *   }
     * })
    **/
    count<T extends CategoryMetadataCountArgs>(
      args?: Subset<T, CategoryMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryMetadataAggregateArgs>(args: Subset<T, CategoryMetadataAggregateArgs>): Prisma.PrismaPromise<GetCategoryMetadataAggregateType<T>>

    /**
     * Group by CategoryMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryMetadataGroupByArgs} args - Group by arguments.
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
      T extends CategoryMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryMetadataGroupByArgs['orderBy'] }
        : { orderBy?: CategoryMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryMetadata model
   */
  readonly fields: CategoryMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends CategoryMetadata$valuesArgs<ExtArgs> = {}>(args?: Subset<T, CategoryMetadata$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoryMetadata model
   */
  interface CategoryMetadataFieldRefs {
    readonly id: FieldRef<"CategoryMetadata", 'String'>
    readonly name: FieldRef<"CategoryMetadata", 'String'>
    readonly categoryId: FieldRef<"CategoryMetadata", 'Int'>
    readonly createdAt: FieldRef<"CategoryMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryMetadata findUnique
   */
  export type CategoryMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryMetadata to fetch.
     */
    where: CategoryMetadataWhereUniqueInput
  }

  /**
   * CategoryMetadata findUniqueOrThrow
   */
  export type CategoryMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryMetadata to fetch.
     */
    where: CategoryMetadataWhereUniqueInput
  }

  /**
   * CategoryMetadata findFirst
   */
  export type CategoryMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryMetadata to fetch.
     */
    where?: CategoryMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMetadata to fetch.
     */
    orderBy?: CategoryMetadataOrderByWithRelationInput | CategoryMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryMetadata.
     */
    cursor?: CategoryMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryMetadata.
     */
    distinct?: CategoryMetadataScalarFieldEnum | CategoryMetadataScalarFieldEnum[]
  }

  /**
   * CategoryMetadata findFirstOrThrow
   */
  export type CategoryMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryMetadata to fetch.
     */
    where?: CategoryMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMetadata to fetch.
     */
    orderBy?: CategoryMetadataOrderByWithRelationInput | CategoryMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryMetadata.
     */
    cursor?: CategoryMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryMetadata.
     */
    distinct?: CategoryMetadataScalarFieldEnum | CategoryMetadataScalarFieldEnum[]
  }

  /**
   * CategoryMetadata findMany
   */
  export type CategoryMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter, which CategoryMetadata to fetch.
     */
    where?: CategoryMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryMetadata to fetch.
     */
    orderBy?: CategoryMetadataOrderByWithRelationInput | CategoryMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryMetadata.
     */
    cursor?: CategoryMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryMetadata.
     */
    skip?: number
    distinct?: CategoryMetadataScalarFieldEnum | CategoryMetadataScalarFieldEnum[]
  }

  /**
   * CategoryMetadata create
   */
  export type CategoryMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryMetadata.
     */
    data: XOR<CategoryMetadataCreateInput, CategoryMetadataUncheckedCreateInput>
  }

  /**
   * CategoryMetadata createMany
   */
  export type CategoryMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryMetadata.
     */
    data: CategoryMetadataCreateManyInput | CategoryMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryMetadata createManyAndReturn
   */
  export type CategoryMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryMetadata.
     */
    data: CategoryMetadataCreateManyInput | CategoryMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryMetadata update
   */
  export type CategoryMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryMetadata.
     */
    data: XOR<CategoryMetadataUpdateInput, CategoryMetadataUncheckedUpdateInput>
    /**
     * Choose, which CategoryMetadata to update.
     */
    where: CategoryMetadataWhereUniqueInput
  }

  /**
   * CategoryMetadata updateMany
   */
  export type CategoryMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryMetadata.
     */
    data: XOR<CategoryMetadataUpdateManyMutationInput, CategoryMetadataUncheckedUpdateManyInput>
    /**
     * Filter which CategoryMetadata to update
     */
    where?: CategoryMetadataWhereInput
    /**
     * Limit how many CategoryMetadata to update.
     */
    limit?: number
  }

  /**
   * CategoryMetadata updateManyAndReturn
   */
  export type CategoryMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * The data used to update CategoryMetadata.
     */
    data: XOR<CategoryMetadataUpdateManyMutationInput, CategoryMetadataUncheckedUpdateManyInput>
    /**
     * Filter which CategoryMetadata to update
     */
    where?: CategoryMetadataWhereInput
    /**
     * Limit how many CategoryMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryMetadata upsert
   */
  export type CategoryMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryMetadata to update in case it exists.
     */
    where: CategoryMetadataWhereUniqueInput
    /**
     * In case the CategoryMetadata found by the `where` argument doesn't exist, create a new CategoryMetadata with this data.
     */
    create: XOR<CategoryMetadataCreateInput, CategoryMetadataUncheckedCreateInput>
    /**
     * In case the CategoryMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryMetadataUpdateInput, CategoryMetadataUncheckedUpdateInput>
  }

  /**
   * CategoryMetadata delete
   */
  export type CategoryMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
    /**
     * Filter which CategoryMetadata to delete.
     */
    where: CategoryMetadataWhereUniqueInput
  }

  /**
   * CategoryMetadata deleteMany
   */
  export type CategoryMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryMetadata to delete
     */
    where?: CategoryMetadataWhereInput
    /**
     * Limit how many CategoryMetadata to delete.
     */
    limit?: number
  }

  /**
   * CategoryMetadata.values
   */
  export type CategoryMetadata$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    where?: MetadataValueWhereInput
    orderBy?: MetadataValueOrderByWithRelationInput | MetadataValueOrderByWithRelationInput[]
    cursor?: MetadataValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetadataValueScalarFieldEnum | MetadataValueScalarFieldEnum[]
  }

  /**
   * CategoryMetadata without action
   */
  export type CategoryMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryMetadata
     */
    select?: CategoryMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryMetadata
     */
    omit?: CategoryMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryMetadataInclude<ExtArgs> | null
  }


  /**
   * Model MetadataValue
   */

  export type AggregateMetadataValue = {
    _count: MetadataValueCountAggregateOutputType | null
    _min: MetadataValueMinAggregateOutputType | null
    _max: MetadataValueMaxAggregateOutputType | null
  }

  export type MetadataValueMinAggregateOutputType = {
    id: string | null
    label: string | null
    categoryMetadataId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetadataValueMaxAggregateOutputType = {
    id: string | null
    label: string | null
    categoryMetadataId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetadataValueCountAggregateOutputType = {
    id: number
    label: number
    categoryMetadataId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetadataValueMinAggregateInputType = {
    id?: true
    label?: true
    categoryMetadataId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetadataValueMaxAggregateInputType = {
    id?: true
    label?: true
    categoryMetadataId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetadataValueCountAggregateInputType = {
    id?: true
    label?: true
    categoryMetadataId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetadataValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetadataValue to aggregate.
     */
    where?: MetadataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadataValues to fetch.
     */
    orderBy?: MetadataValueOrderByWithRelationInput | MetadataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetadataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetadataValues
    **/
    _count?: true | MetadataValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetadataValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetadataValueMaxAggregateInputType
  }

  export type GetMetadataValueAggregateType<T extends MetadataValueAggregateArgs> = {
        [P in keyof T & keyof AggregateMetadataValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetadataValue[P]>
      : GetScalarType<T[P], AggregateMetadataValue[P]>
  }




  export type MetadataValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetadataValueWhereInput
    orderBy?: MetadataValueOrderByWithAggregationInput | MetadataValueOrderByWithAggregationInput[]
    by: MetadataValueScalarFieldEnum[] | MetadataValueScalarFieldEnum
    having?: MetadataValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetadataValueCountAggregateInputType | true
    _min?: MetadataValueMinAggregateInputType
    _max?: MetadataValueMaxAggregateInputType
  }

  export type MetadataValueGroupByOutputType = {
    id: string
    label: string
    categoryMetadataId: string
    createdAt: Date
    updatedAt: Date
    _count: MetadataValueCountAggregateOutputType | null
    _min: MetadataValueMinAggregateOutputType | null
    _max: MetadataValueMaxAggregateOutputType | null
  }

  type GetMetadataValueGroupByPayload<T extends MetadataValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetadataValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetadataValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetadataValueGroupByOutputType[P]>
            : GetScalarType<T[P], MetadataValueGroupByOutputType[P]>
        }
      >
    >


  export type MetadataValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    categoryMetadataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadataValue"]>

  export type MetadataValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    categoryMetadataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadataValue"]>

  export type MetadataValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    categoryMetadataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metadataValue"]>

  export type MetadataValueSelectScalar = {
    id?: boolean
    label?: boolean
    categoryMetadataId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetadataValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "categoryMetadataId" | "createdAt" | "updatedAt", ExtArgs["result"]["metadataValue"]>
  export type MetadataValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }
  export type MetadataValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }
  export type MetadataValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryMetadata?: boolean | CategoryMetadataDefaultArgs<ExtArgs>
  }

  export type $MetadataValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetadataValue"
    objects: {
      categoryMetadata: Prisma.$CategoryMetadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      categoryMetadataId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metadataValue"]>
    composites: {}
  }

  type MetadataValueGetPayload<S extends boolean | null | undefined | MetadataValueDefaultArgs> = $Result.GetResult<Prisma.$MetadataValuePayload, S>

  type MetadataValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetadataValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetadataValueCountAggregateInputType | true
    }

  export interface MetadataValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetadataValue'], meta: { name: 'MetadataValue' } }
    /**
     * Find zero or one MetadataValue that matches the filter.
     * @param {MetadataValueFindUniqueArgs} args - Arguments to find a MetadataValue
     * @example
     * // Get one MetadataValue
     * const metadataValue = await prisma.metadataValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetadataValueFindUniqueArgs>(args: SelectSubset<T, MetadataValueFindUniqueArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetadataValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetadataValueFindUniqueOrThrowArgs} args - Arguments to find a MetadataValue
     * @example
     * // Get one MetadataValue
     * const metadataValue = await prisma.metadataValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetadataValueFindUniqueOrThrowArgs>(args: SelectSubset<T, MetadataValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetadataValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueFindFirstArgs} args - Arguments to find a MetadataValue
     * @example
     * // Get one MetadataValue
     * const metadataValue = await prisma.metadataValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetadataValueFindFirstArgs>(args?: SelectSubset<T, MetadataValueFindFirstArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetadataValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueFindFirstOrThrowArgs} args - Arguments to find a MetadataValue
     * @example
     * // Get one MetadataValue
     * const metadataValue = await prisma.metadataValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetadataValueFindFirstOrThrowArgs>(args?: SelectSubset<T, MetadataValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetadataValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetadataValues
     * const metadataValues = await prisma.metadataValue.findMany()
     * 
     * // Get first 10 MetadataValues
     * const metadataValues = await prisma.metadataValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metadataValueWithIdOnly = await prisma.metadataValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetadataValueFindManyArgs>(args?: SelectSubset<T, MetadataValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetadataValue.
     * @param {MetadataValueCreateArgs} args - Arguments to create a MetadataValue.
     * @example
     * // Create one MetadataValue
     * const MetadataValue = await prisma.metadataValue.create({
     *   data: {
     *     // ... data to create a MetadataValue
     *   }
     * })
     * 
     */
    create<T extends MetadataValueCreateArgs>(args: SelectSubset<T, MetadataValueCreateArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetadataValues.
     * @param {MetadataValueCreateManyArgs} args - Arguments to create many MetadataValues.
     * @example
     * // Create many MetadataValues
     * const metadataValue = await prisma.metadataValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetadataValueCreateManyArgs>(args?: SelectSubset<T, MetadataValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetadataValues and returns the data saved in the database.
     * @param {MetadataValueCreateManyAndReturnArgs} args - Arguments to create many MetadataValues.
     * @example
     * // Create many MetadataValues
     * const metadataValue = await prisma.metadataValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetadataValues and only return the `id`
     * const metadataValueWithIdOnly = await prisma.metadataValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetadataValueCreateManyAndReturnArgs>(args?: SelectSubset<T, MetadataValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetadataValue.
     * @param {MetadataValueDeleteArgs} args - Arguments to delete one MetadataValue.
     * @example
     * // Delete one MetadataValue
     * const MetadataValue = await prisma.metadataValue.delete({
     *   where: {
     *     // ... filter to delete one MetadataValue
     *   }
     * })
     * 
     */
    delete<T extends MetadataValueDeleteArgs>(args: SelectSubset<T, MetadataValueDeleteArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetadataValue.
     * @param {MetadataValueUpdateArgs} args - Arguments to update one MetadataValue.
     * @example
     * // Update one MetadataValue
     * const metadataValue = await prisma.metadataValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetadataValueUpdateArgs>(args: SelectSubset<T, MetadataValueUpdateArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetadataValues.
     * @param {MetadataValueDeleteManyArgs} args - Arguments to filter MetadataValues to delete.
     * @example
     * // Delete a few MetadataValues
     * const { count } = await prisma.metadataValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetadataValueDeleteManyArgs>(args?: SelectSubset<T, MetadataValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetadataValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetadataValues
     * const metadataValue = await prisma.metadataValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetadataValueUpdateManyArgs>(args: SelectSubset<T, MetadataValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetadataValues and returns the data updated in the database.
     * @param {MetadataValueUpdateManyAndReturnArgs} args - Arguments to update many MetadataValues.
     * @example
     * // Update many MetadataValues
     * const metadataValue = await prisma.metadataValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetadataValues and only return the `id`
     * const metadataValueWithIdOnly = await prisma.metadataValue.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetadataValueUpdateManyAndReturnArgs>(args: SelectSubset<T, MetadataValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetadataValue.
     * @param {MetadataValueUpsertArgs} args - Arguments to update or create a MetadataValue.
     * @example
     * // Update or create a MetadataValue
     * const metadataValue = await prisma.metadataValue.upsert({
     *   create: {
     *     // ... data to create a MetadataValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetadataValue we want to update
     *   }
     * })
     */
    upsert<T extends MetadataValueUpsertArgs>(args: SelectSubset<T, MetadataValueUpsertArgs<ExtArgs>>): Prisma__MetadataValueClient<$Result.GetResult<Prisma.$MetadataValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetadataValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueCountArgs} args - Arguments to filter MetadataValues to count.
     * @example
     * // Count the number of MetadataValues
     * const count = await prisma.metadataValue.count({
     *   where: {
     *     // ... the filter for the MetadataValues we want to count
     *   }
     * })
    **/
    count<T extends MetadataValueCountArgs>(
      args?: Subset<T, MetadataValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetadataValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetadataValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetadataValueAggregateArgs>(args: Subset<T, MetadataValueAggregateArgs>): Prisma.PrismaPromise<GetMetadataValueAggregateType<T>>

    /**
     * Group by MetadataValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetadataValueGroupByArgs} args - Group by arguments.
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
      T extends MetadataValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetadataValueGroupByArgs['orderBy'] }
        : { orderBy?: MetadataValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetadataValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetadataValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetadataValue model
   */
  readonly fields: MetadataValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetadataValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetadataValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryMetadata<T extends CategoryMetadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryMetadataDefaultArgs<ExtArgs>>): Prisma__CategoryMetadataClient<$Result.GetResult<Prisma.$CategoryMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MetadataValue model
   */
  interface MetadataValueFieldRefs {
    readonly id: FieldRef<"MetadataValue", 'String'>
    readonly label: FieldRef<"MetadataValue", 'String'>
    readonly categoryMetadataId: FieldRef<"MetadataValue", 'String'>
    readonly createdAt: FieldRef<"MetadataValue", 'DateTime'>
    readonly updatedAt: FieldRef<"MetadataValue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetadataValue findUnique
   */
  export type MetadataValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter, which MetadataValue to fetch.
     */
    where: MetadataValueWhereUniqueInput
  }

  /**
   * MetadataValue findUniqueOrThrow
   */
  export type MetadataValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter, which MetadataValue to fetch.
     */
    where: MetadataValueWhereUniqueInput
  }

  /**
   * MetadataValue findFirst
   */
  export type MetadataValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter, which MetadataValue to fetch.
     */
    where?: MetadataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadataValues to fetch.
     */
    orderBy?: MetadataValueOrderByWithRelationInput | MetadataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetadataValues.
     */
    cursor?: MetadataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetadataValues.
     */
    distinct?: MetadataValueScalarFieldEnum | MetadataValueScalarFieldEnum[]
  }

  /**
   * MetadataValue findFirstOrThrow
   */
  export type MetadataValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter, which MetadataValue to fetch.
     */
    where?: MetadataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadataValues to fetch.
     */
    orderBy?: MetadataValueOrderByWithRelationInput | MetadataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetadataValues.
     */
    cursor?: MetadataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadataValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetadataValues.
     */
    distinct?: MetadataValueScalarFieldEnum | MetadataValueScalarFieldEnum[]
  }

  /**
   * MetadataValue findMany
   */
  export type MetadataValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter, which MetadataValues to fetch.
     */
    where?: MetadataValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetadataValues to fetch.
     */
    orderBy?: MetadataValueOrderByWithRelationInput | MetadataValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetadataValues.
     */
    cursor?: MetadataValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetadataValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetadataValues.
     */
    skip?: number
    distinct?: MetadataValueScalarFieldEnum | MetadataValueScalarFieldEnum[]
  }

  /**
   * MetadataValue create
   */
  export type MetadataValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * The data needed to create a MetadataValue.
     */
    data: XOR<MetadataValueCreateInput, MetadataValueUncheckedCreateInput>
  }

  /**
   * MetadataValue createMany
   */
  export type MetadataValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetadataValues.
     */
    data: MetadataValueCreateManyInput | MetadataValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetadataValue createManyAndReturn
   */
  export type MetadataValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * The data used to create many MetadataValues.
     */
    data: MetadataValueCreateManyInput | MetadataValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetadataValue update
   */
  export type MetadataValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * The data needed to update a MetadataValue.
     */
    data: XOR<MetadataValueUpdateInput, MetadataValueUncheckedUpdateInput>
    /**
     * Choose, which MetadataValue to update.
     */
    where: MetadataValueWhereUniqueInput
  }

  /**
   * MetadataValue updateMany
   */
  export type MetadataValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetadataValues.
     */
    data: XOR<MetadataValueUpdateManyMutationInput, MetadataValueUncheckedUpdateManyInput>
    /**
     * Filter which MetadataValues to update
     */
    where?: MetadataValueWhereInput
    /**
     * Limit how many MetadataValues to update.
     */
    limit?: number
  }

  /**
   * MetadataValue updateManyAndReturn
   */
  export type MetadataValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * The data used to update MetadataValues.
     */
    data: XOR<MetadataValueUpdateManyMutationInput, MetadataValueUncheckedUpdateManyInput>
    /**
     * Filter which MetadataValues to update
     */
    where?: MetadataValueWhereInput
    /**
     * Limit how many MetadataValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetadataValue upsert
   */
  export type MetadataValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * The filter to search for the MetadataValue to update in case it exists.
     */
    where: MetadataValueWhereUniqueInput
    /**
     * In case the MetadataValue found by the `where` argument doesn't exist, create a new MetadataValue with this data.
     */
    create: XOR<MetadataValueCreateInput, MetadataValueUncheckedCreateInput>
    /**
     * In case the MetadataValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetadataValueUpdateInput, MetadataValueUncheckedUpdateInput>
  }

  /**
   * MetadataValue delete
   */
  export type MetadataValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
    /**
     * Filter which MetadataValue to delete.
     */
    where: MetadataValueWhereUniqueInput
  }

  /**
   * MetadataValue deleteMany
   */
  export type MetadataValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetadataValues to delete
     */
    where?: MetadataValueWhereInput
    /**
     * Limit how many MetadataValues to delete.
     */
    limit?: number
  }

  /**
   * MetadataValue without action
   */
  export type MetadataValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetadataValue
     */
    select?: MetadataValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetadataValue
     */
    omit?: MetadataValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetadataValueInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    total: number | null
    shippingCost: number | null
    shippingDays: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    total: number | null
    shippingCost: number | null
    shippingDays: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    status: string | null
    total: number | null
    shippingCost: number | null
    shippingDays: number | null
    shippingZipcode: string | null
    shippingStreet: string | null
    shippingNumber: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingComplement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    status: string | null
    total: number | null
    shippingCost: number | null
    shippingDays: number | null
    shippingZipcode: string | null
    shippingStreet: string | null
    shippingNumber: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingComplement: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    total: number
    shippingCost: number
    shippingDays: number
    shippingZipcode: number
    shippingStreet: number
    shippingNumber: number
    shippingCity: number
    shippingState: number
    shippingCountry: number
    shippingComplement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    shippingCost?: true
    shippingDays?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    shippingCost?: true
    shippingDays?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    shippingCost?: true
    shippingDays?: true
    shippingZipcode?: true
    shippingStreet?: true
    shippingNumber?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingComplement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    shippingCost?: true
    shippingDays?: true
    shippingZipcode?: true
    shippingStreet?: true
    shippingNumber?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingComplement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    shippingCost?: true
    shippingDays?: true
    shippingZipcode?: true
    shippingStreet?: true
    shippingNumber?: true
    shippingCity?: true
    shippingState?: true
    shippingCountry?: true
    shippingComplement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    status: string
    total: number
    shippingCost: number
    shippingDays: number
    shippingZipcode: string | null
    shippingStreet: string | null
    shippingNumber: string | null
    shippingCity: string | null
    shippingState: string | null
    shippingCountry: string | null
    shippingComplement: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    shippingCost?: boolean
    shippingDays?: boolean
    shippingZipcode?: boolean
    shippingStreet?: boolean
    shippingNumber?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingComplement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    shippingCost?: boolean
    shippingDays?: boolean
    shippingZipcode?: boolean
    shippingStreet?: boolean
    shippingNumber?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingComplement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    shippingCost?: boolean
    shippingDays?: boolean
    shippingZipcode?: boolean
    shippingStreet?: boolean
    shippingNumber?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingComplement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    shippingCost?: boolean
    shippingDays?: boolean
    shippingZipcode?: boolean
    shippingStreet?: boolean
    shippingNumber?: boolean
    shippingCity?: boolean
    shippingState?: boolean
    shippingCountry?: boolean
    shippingComplement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "total" | "shippingCost" | "shippingDays" | "shippingZipcode" | "shippingStreet" | "shippingNumber" | "shippingCity" | "shippingState" | "shippingCountry" | "shippingComplement" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderItems: Prisma.$OrderProductPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      status: string
      total: number
      shippingCost: number
      shippingDays: number
      shippingZipcode: string | null
      shippingStreet: string | null
      shippingNumber: string | null
      shippingCity: string | null
      shippingState: string | null
      shippingCountry: string | null
      shippingComplement: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly shippingCost: FieldRef<"Order", 'Float'>
    readonly shippingDays: FieldRef<"Order", 'Int'>
    readonly shippingZipcode: FieldRef<"Order", 'String'>
    readonly shippingStreet: FieldRef<"Order", 'String'>
    readonly shippingNumber: FieldRef<"Order", 'String'>
    readonly shippingCity: FieldRef<"Order", 'String'>
    readonly shippingState: FieldRef<"Order", 'String'>
    readonly shippingCountry: FieldRef<"Order", 'String'>
    readonly shippingComplement: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderProduct
   */

  export type AggregateOrderProduct = {
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  export type OrderProductAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderProductSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type OrderProductMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderProductMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderProductCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderProductAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderProductSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
  }

  export type OrderProductMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderProductMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderProductCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProduct to aggregate.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderProducts
    **/
    _count?: true | OrderProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderProductMaxAggregateInputType
  }

  export type GetOrderProductAggregateType<T extends OrderProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProduct[P]>
      : GetScalarType<T[P], AggregateOrderProduct[P]>
  }




  export type OrderProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithAggregationInput | OrderProductOrderByWithAggregationInput[]
    by: OrderProductScalarFieldEnum[] | OrderProductScalarFieldEnum
    having?: OrderProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderProductCountAggregateInputType | true
    _avg?: OrderProductAvgAggregateInputType
    _sum?: OrderProductSumAggregateInputType
    _min?: OrderProductMinAggregateInputType
    _max?: OrderProductMaxAggregateInputType
  }

  export type OrderProductGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  type GetOrderProductGroupByPayload<T extends OrderProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["orderProduct"]>
  export type OrderProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderProduct"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderProduct"]>
    composites: {}
  }

  type OrderProductGetPayload<S extends boolean | null | undefined | OrderProductDefaultArgs> = $Result.GetResult<Prisma.$OrderProductPayload, S>

  type OrderProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderProductCountAggregateInputType | true
    }

  export interface OrderProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderProduct'], meta: { name: 'OrderProduct' } }
    /**
     * Find zero or one OrderProduct that matches the filter.
     * @param {OrderProductFindUniqueArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductFindUniqueArgs>(args: SelectSubset<T, OrderProductFindUniqueArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductFindUniqueOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductFindFirstArgs>(args?: SelectSubset<T, OrderProductFindFirstArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany()
     * 
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderProductFindManyArgs>(args?: SelectSubset<T, OrderProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderProduct.
     * @param {OrderProductCreateArgs} args - Arguments to create a OrderProduct.
     * @example
     * // Create one OrderProduct
     * const OrderProduct = await prisma.orderProduct.create({
     *   data: {
     *     // ... data to create a OrderProduct
     *   }
     * })
     * 
     */
    create<T extends OrderProductCreateArgs>(args: SelectSubset<T, OrderProductCreateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderProducts.
     * @param {OrderProductCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderProductCreateManyArgs>(args?: SelectSubset<T, OrderProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderProducts and returns the data saved in the database.
     * @param {OrderProductCreateManyAndReturnArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderProductCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderProduct.
     * @param {OrderProductDeleteArgs} args - Arguments to delete one OrderProduct.
     * @example
     * // Delete one OrderProduct
     * const OrderProduct = await prisma.orderProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderProduct
     *   }
     * })
     * 
     */
    delete<T extends OrderProductDeleteArgs>(args: SelectSubset<T, OrderProductDeleteArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderProduct.
     * @param {OrderProductUpdateArgs} args - Arguments to update one OrderProduct.
     * @example
     * // Update one OrderProduct
     * const orderProduct = await prisma.orderProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderProductUpdateArgs>(args: SelectSubset<T, OrderProductUpdateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderProductDeleteManyArgs>(args?: SelectSubset<T, OrderProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderProductUpdateManyArgs>(args: SelectSubset<T, OrderProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts and returns the data updated in the database.
     * @param {OrderProductUpdateManyAndReturnArgs} args - Arguments to update many OrderProducts.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderProductUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderProduct.
     * @param {OrderProductUpsertArgs} args - Arguments to update or create a OrderProduct.
     * @example
     * // Update or create a OrderProduct
     * const orderProduct = await prisma.orderProduct.upsert({
     *   create: {
     *     // ... data to create a OrderProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductUpsertArgs>(args: SelectSubset<T, OrderProductUpsertArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProduct.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderProductCountArgs>(
      args?: Subset<T, OrderProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderProductAggregateArgs>(args: Subset<T, OrderProductAggregateArgs>): Prisma.PrismaPromise<GetOrderProductAggregateType<T>>

    /**
     * Group by OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductGroupByArgs} args - Group by arguments.
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
      T extends OrderProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderProduct model
   */
  readonly fields: OrderProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderProduct model
   */
  interface OrderProductFieldRefs {
    readonly id: FieldRef<"OrderProduct", 'Int'>
    readonly orderId: FieldRef<"OrderProduct", 'Int'>
    readonly productId: FieldRef<"OrderProduct", 'Int'>
    readonly quantity: FieldRef<"OrderProduct", 'Int'>
    readonly price: FieldRef<"OrderProduct", 'Float'>
    readonly createdAt: FieldRef<"OrderProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderProduct findUnique
   */
  export type OrderProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findUniqueOrThrow
   */
  export type OrderProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findFirst
   */
  export type OrderProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findFirstOrThrow
   */
  export type OrderProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findMany
   */
  export type OrderProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct create
   */
  export type OrderProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderProduct.
     */
    data: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
  }

  /**
   * OrderProduct createMany
   */
  export type OrderProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderProduct createManyAndReturn
   */
  export type OrderProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct update
   */
  export type OrderProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderProduct.
     */
    data: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
    /**
     * Choose, which OrderProduct to update.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct updateMany
   */
  export type OrderProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
  }

  /**
   * OrderProduct updateManyAndReturn
   */
  export type OrderProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct upsert
   */
  export type OrderProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderProduct to update in case it exists.
     */
    where: OrderProductWhereUniqueInput
    /**
     * In case the OrderProduct found by the `where` argument doesn't exist, create a new OrderProduct with this data.
     */
    create: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
    /**
     * In case the OrderProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
  }

  /**
   * OrderProduct delete
   */
  export type OrderProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter which OrderProduct to delete.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct deleteMany
   */
  export type OrderProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to delete.
     */
    limit?: number
  }

  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
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
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    zipcode: 'zipcode',
    street: 'street',
    number: 'number',
    city: 'city',
    state: 'state',
    country: 'country',
    complement: 'complement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    img: 'img',
    link: 'link',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    label: 'label',
    price: 'price',
    description: 'description',
    categoryId: 'categoryId',
    viewsCount: 'viewsCount',
    salesCount: 'salesCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductImageScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductImageScalarFieldEnum = (typeof ProductImageScalarFieldEnum)[keyof typeof ProductImageScalarFieldEnum]


  export const ProductMetadataScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    categoryMetadataId: 'categoryMetadataId',
    metadataValueId: 'metadataValueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductMetadataScalarFieldEnum = (typeof ProductMetadataScalarFieldEnum)[keyof typeof ProductMetadataScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CategoryMetadataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryMetadataScalarFieldEnum = (typeof CategoryMetadataScalarFieldEnum)[keyof typeof CategoryMetadataScalarFieldEnum]


  export const MetadataValueScalarFieldEnum: {
    id: 'id',
    label: 'label',
    categoryMetadataId: 'categoryMetadataId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetadataValueScalarFieldEnum = (typeof MetadataValueScalarFieldEnum)[keyof typeof MetadataValueScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    total: 'total',
    shippingCost: 'shippingCost',
    shippingDays: 'shippingDays',
    shippingZipcode: 'shippingZipcode',
    shippingStreet: 'shippingStreet',
    shippingNumber: 'shippingNumber',
    shippingCity: 'shippingCity',
    shippingState: 'shippingState',
    shippingCountry: 'shippingCountry',
    shippingComplement: 'shippingComplement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderProductScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderProductScalarFieldEnum = (typeof OrderProductScalarFieldEnum)[keyof typeof OrderProductScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    addresses?: UserAddressListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addresses?: UserAddressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    token?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    addresses?: UserAddressListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    id?: IntFilter<"UserAddress"> | number
    userId?: IntFilter<"UserAddress"> | number
    zipcode?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    number?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    state?: StringFilter<"UserAddress"> | string
    country?: StringFilter<"UserAddress"> | string
    complement?: StringNullableFilter<"UserAddress"> | string | null
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    zipcode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    userId?: IntFilter<"UserAddress"> | number
    zipcode?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    number?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    state?: StringFilter<"UserAddress"> | string
    country?: StringFilter<"UserAddress"> | string
    complement?: StringNullableFilter<"UserAddress"> | string | null
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    zipcode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    complement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _avg?: UserAddressAvgOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
    _sum?: UserAddressSumOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAddress"> | number
    userId?: IntWithAggregatesFilter<"UserAddress"> | number
    zipcode?: StringWithAggregatesFilter<"UserAddress"> | string
    street?: StringWithAggregatesFilter<"UserAddress"> | string
    number?: StringWithAggregatesFilter<"UserAddress"> | string
    city?: StringWithAggregatesFilter<"UserAddress"> | string
    state?: StringWithAggregatesFilter<"UserAddress"> | string
    country?: StringWithAggregatesFilter<"UserAddress"> | string
    complement?: StringNullableWithAggregatesFilter<"UserAddress"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: IntFilter<"Banner"> | number
    img?: StringFilter<"Banner"> | string
    link?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    img?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    img?: StringFilter<"Banner"> | string
    link?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    img?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banner"> | number
    img?: StringWithAggregatesFilter<"Banner"> | string
    link?: StringWithAggregatesFilter<"Banner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    label?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    viewsCount?: IntFilter<"Product"> | number
    salesCount?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    images?: ProductImageListRelationFilter
    metadata?: ProductMetadataListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    orders?: OrderProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ProductImageOrderByRelationAggregateInput
    metadata?: ProductMetadataOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    orders?: OrderProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    label?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    viewsCount?: IntFilter<"Product"> | number
    salesCount?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    images?: ProductImageListRelationFilter
    metadata?: ProductMetadataListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    orders?: OrderProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    label?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    viewsCount?: IntWithAggregatesFilter<"Product"> | number
    salesCount?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductImageWhereInput = {
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductImageOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductImageWhereInput | ProductImageWhereInput[]
    OR?: ProductImageWhereInput[]
    NOT?: ProductImageWhereInput | ProductImageWhereInput[]
    productId?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductImageOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductImageCountOrderByAggregateInput
    _avg?: ProductImageAvgOrderByAggregateInput
    _max?: ProductImageMaxOrderByAggregateInput
    _min?: ProductImageMinOrderByAggregateInput
    _sum?: ProductImageSumOrderByAggregateInput
  }

  export type ProductImageScalarWhereWithAggregatesInput = {
    AND?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    OR?: ProductImageScalarWhereWithAggregatesInput[]
    NOT?: ProductImageScalarWhereWithAggregatesInput | ProductImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductImage"> | number
    productId?: IntWithAggregatesFilter<"ProductImage"> | number
    url?: StringWithAggregatesFilter<"ProductImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductImage"> | Date | string
  }

  export type ProductMetadataWhereInput = {
    AND?: ProductMetadataWhereInput | ProductMetadataWhereInput[]
    OR?: ProductMetadataWhereInput[]
    NOT?: ProductMetadataWhereInput | ProductMetadataWhereInput[]
    id?: IntFilter<"ProductMetadata"> | number
    productId?: IntFilter<"ProductMetadata"> | number
    categoryMetadataId?: StringFilter<"ProductMetadata"> | string
    metadataValueId?: StringFilter<"ProductMetadata"> | string
    createdAt?: DateTimeFilter<"ProductMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMetadata"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductMetadataOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryMetadataId?: SortOrder
    metadataValueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductMetadataWhereInput | ProductMetadataWhereInput[]
    OR?: ProductMetadataWhereInput[]
    NOT?: ProductMetadataWhereInput | ProductMetadataWhereInput[]
    productId?: IntFilter<"ProductMetadata"> | number
    categoryMetadataId?: StringFilter<"ProductMetadata"> | string
    metadataValueId?: StringFilter<"ProductMetadata"> | string
    createdAt?: DateTimeFilter<"ProductMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMetadata"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryMetadataId?: SortOrder
    metadataValueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductMetadataCountOrderByAggregateInput
    _avg?: ProductMetadataAvgOrderByAggregateInput
    _max?: ProductMetadataMaxOrderByAggregateInput
    _min?: ProductMetadataMinOrderByAggregateInput
    _sum?: ProductMetadataSumOrderByAggregateInput
  }

  export type ProductMetadataScalarWhereWithAggregatesInput = {
    AND?: ProductMetadataScalarWhereWithAggregatesInput | ProductMetadataScalarWhereWithAggregatesInput[]
    OR?: ProductMetadataScalarWhereWithAggregatesInput[]
    NOT?: ProductMetadataScalarWhereWithAggregatesInput | ProductMetadataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductMetadata"> | number
    productId?: IntWithAggregatesFilter<"ProductMetadata"> | number
    categoryMetadataId?: StringWithAggregatesFilter<"ProductMetadata"> | string
    metadataValueId?: StringWithAggregatesFilter<"ProductMetadata"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductMetadata"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    slug?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    metadata?: CategoryMetadataListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    metadata?: CategoryMetadataOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
    metadata?: CategoryMetadataListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    slug?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CategoryMetadataWhereInput = {
    AND?: CategoryMetadataWhereInput | CategoryMetadataWhereInput[]
    OR?: CategoryMetadataWhereInput[]
    NOT?: CategoryMetadataWhereInput | CategoryMetadataWhereInput[]
    id?: StringFilter<"CategoryMetadata"> | string
    name?: StringFilter<"CategoryMetadata"> | string
    categoryId?: IntFilter<"CategoryMetadata"> | number
    createdAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    values?: MetadataValueListRelationFilter
  }

  export type CategoryMetadataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    values?: MetadataValueOrderByRelationAggregateInput
  }

  export type CategoryMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryMetadataWhereInput | CategoryMetadataWhereInput[]
    OR?: CategoryMetadataWhereInput[]
    NOT?: CategoryMetadataWhereInput | CategoryMetadataWhereInput[]
    name?: StringFilter<"CategoryMetadata"> | string
    categoryId?: IntFilter<"CategoryMetadata"> | number
    createdAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    values?: MetadataValueListRelationFilter
  }, "id">

  export type CategoryMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryMetadataCountOrderByAggregateInput
    _avg?: CategoryMetadataAvgOrderByAggregateInput
    _max?: CategoryMetadataMaxOrderByAggregateInput
    _min?: CategoryMetadataMinOrderByAggregateInput
    _sum?: CategoryMetadataSumOrderByAggregateInput
  }

  export type CategoryMetadataScalarWhereWithAggregatesInput = {
    AND?: CategoryMetadataScalarWhereWithAggregatesInput | CategoryMetadataScalarWhereWithAggregatesInput[]
    OR?: CategoryMetadataScalarWhereWithAggregatesInput[]
    NOT?: CategoryMetadataScalarWhereWithAggregatesInput | CategoryMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CategoryMetadata"> | string
    name?: StringWithAggregatesFilter<"CategoryMetadata"> | string
    categoryId?: IntWithAggregatesFilter<"CategoryMetadata"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CategoryMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CategoryMetadata"> | Date | string
  }

  export type MetadataValueWhereInput = {
    AND?: MetadataValueWhereInput | MetadataValueWhereInput[]
    OR?: MetadataValueWhereInput[]
    NOT?: MetadataValueWhereInput | MetadataValueWhereInput[]
    id?: StringFilter<"MetadataValue"> | string
    label?: StringFilter<"MetadataValue"> | string
    categoryMetadataId?: StringFilter<"MetadataValue"> | string
    createdAt?: DateTimeFilter<"MetadataValue"> | Date | string
    updatedAt?: DateTimeFilter<"MetadataValue"> | Date | string
    categoryMetadata?: XOR<CategoryMetadataScalarRelationFilter, CategoryMetadataWhereInput>
  }

  export type MetadataValueOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    categoryMetadataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryMetadata?: CategoryMetadataOrderByWithRelationInput
  }

  export type MetadataValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetadataValueWhereInput | MetadataValueWhereInput[]
    OR?: MetadataValueWhereInput[]
    NOT?: MetadataValueWhereInput | MetadataValueWhereInput[]
    label?: StringFilter<"MetadataValue"> | string
    categoryMetadataId?: StringFilter<"MetadataValue"> | string
    createdAt?: DateTimeFilter<"MetadataValue"> | Date | string
    updatedAt?: DateTimeFilter<"MetadataValue"> | Date | string
    categoryMetadata?: XOR<CategoryMetadataScalarRelationFilter, CategoryMetadataWhereInput>
  }, "id">

  export type MetadataValueOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    categoryMetadataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetadataValueCountOrderByAggregateInput
    _max?: MetadataValueMaxOrderByAggregateInput
    _min?: MetadataValueMinOrderByAggregateInput
  }

  export type MetadataValueScalarWhereWithAggregatesInput = {
    AND?: MetadataValueScalarWhereWithAggregatesInput | MetadataValueScalarWhereWithAggregatesInput[]
    OR?: MetadataValueScalarWhereWithAggregatesInput[]
    NOT?: MetadataValueScalarWhereWithAggregatesInput | MetadataValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetadataValue"> | string
    label?: StringWithAggregatesFilter<"MetadataValue"> | string
    categoryMetadataId?: StringWithAggregatesFilter<"MetadataValue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MetadataValue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetadataValue"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingCost?: FloatFilter<"Order"> | number
    shippingDays?: IntFilter<"Order"> | number
    shippingZipcode?: StringNullableFilter<"Order"> | string | null
    shippingStreet?: StringNullableFilter<"Order"> | string | null
    shippingNumber?: StringNullableFilter<"Order"> | string | null
    shippingCity?: StringNullableFilter<"Order"> | string | null
    shippingState?: StringNullableFilter<"Order"> | string | null
    shippingCountry?: StringNullableFilter<"Order"> | string | null
    shippingComplement?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderProductListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
    shippingZipcode?: SortOrderInput | SortOrder
    shippingStreet?: SortOrderInput | SortOrder
    shippingNumber?: SortOrderInput | SortOrder
    shippingCity?: SortOrderInput | SortOrder
    shippingState?: SortOrderInput | SortOrder
    shippingCountry?: SortOrderInput | SortOrder
    shippingComplement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: OrderProductOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingCost?: FloatFilter<"Order"> | number
    shippingDays?: IntFilter<"Order"> | number
    shippingZipcode?: StringNullableFilter<"Order"> | string | null
    shippingStreet?: StringNullableFilter<"Order"> | string | null
    shippingNumber?: StringNullableFilter<"Order"> | string | null
    shippingCity?: StringNullableFilter<"Order"> | string | null
    shippingState?: StringNullableFilter<"Order"> | string | null
    shippingCountry?: StringNullableFilter<"Order"> | string | null
    shippingComplement?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderProductListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
    shippingZipcode?: SortOrderInput | SortOrder
    shippingStreet?: SortOrderInput | SortOrder
    shippingNumber?: SortOrderInput | SortOrder
    shippingCity?: SortOrderInput | SortOrder
    shippingState?: SortOrderInput | SortOrder
    shippingCountry?: SortOrderInput | SortOrder
    shippingComplement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    total?: FloatWithAggregatesFilter<"Order"> | number
    shippingCost?: FloatWithAggregatesFilter<"Order"> | number
    shippingDays?: IntWithAggregatesFilter<"Order"> | number
    shippingZipcode?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingStreet?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingCity?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingState?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingCountry?: StringNullableWithAggregatesFilter<"Order"> | string | null
    shippingComplement?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderProductOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderProductOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderProductCountOrderByAggregateInput
    _avg?: OrderProductAvgOrderByAggregateInput
    _max?: OrderProductMaxOrderByAggregateInput
    _min?: OrderProductMinOrderByAggregateInput
    _sum?: OrderProductSumOrderByAggregateInput
  }

  export type OrderProductScalarWhereWithAggregatesInput = {
    AND?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    OR?: OrderProductScalarWhereWithAggregatesInput[]
    NOT?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderProduct"> | number
    orderId?: IntWithAggregatesFilter<"OrderProduct"> | number
    productId?: IntWithAggregatesFilter<"OrderProduct"> | number
    quantity?: IntWithAggregatesFilter<"OrderProduct"> | number
    price?: FloatWithAggregatesFilter<"OrderProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: UserAddressCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: UserAddressUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateInput = {
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type UserAddressUncheckedCreateInput = {
    id?: number
    userId: number
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateInput = {
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressCreateManyInput = {
    id?: number
    userId: number
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateManyMutationInput = {
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateInput = {
    img: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateInput = {
    id?: number
    img: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateInput = {
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerCreateManyInput = {
    id?: number
    img: string
    link: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUpdateManyMutationInput = {
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    orders?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    categoryId: number
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    orders?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    categoryId: number
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateInput = {
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ProductImageUncheckedCreateInput = {
    id?: number
    productId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ProductImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyInput = {
    id?: number
    productId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataCreateInput = {
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutMetadataInput
  }

  export type ProductMetadataUncheckedCreateInput = {
    id?: number
    productId: number
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetadataUpdateInput = {
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMetadataNestedInput
  }

  export type ProductMetadataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataCreateManyInput = {
    id?: number
    productId: number
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetadataUpdateManyMutationInput = {
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
    metadata?: CategoryMetadataCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
    metadata?: CategoryMetadataUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
    metadata?: CategoryMetadataUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
    metadata?: CategoryMetadataUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryMetadataCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutMetadataInput
    values?: MetadataValueCreateNestedManyWithoutCategoryMetadataInput
  }

  export type CategoryMetadataUncheckedCreateInput = {
    id: string
    name: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: MetadataValueUncheckedCreateNestedManyWithoutCategoryMetadataInput
  }

  export type CategoryMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutMetadataNestedInput
    values?: MetadataValueUpdateManyWithoutCategoryMetadataNestedInput
  }

  export type CategoryMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: MetadataValueUncheckedUpdateManyWithoutCategoryMetadataNestedInput
  }

  export type CategoryMetadataCreateManyInput = {
    id: string
    name: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueCreateInput = {
    id: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryMetadata: CategoryMetadataCreateNestedOneWithoutValuesInput
  }

  export type MetadataValueUncheckedCreateInput = {
    id: string
    label: string
    categoryMetadataId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetadataValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryMetadata?: CategoryMetadataUpdateOneRequiredWithoutValuesNestedInput
  }

  export type MetadataValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueCreateManyInput = {
    id: string
    label: string
    categoryMetadataId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetadataValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderProductCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderProductUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateInput = {
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderProductUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserAddressListRelationFilter = {
    every?: UserAddressWhereInput
    some?: UserAddressWhereInput
    none?: UserAddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type UserAddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    zipcode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    zipcode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    zipcode?: SortOrder
    street?: SortOrder
    number?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    complement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    img?: SortOrder
    link?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProductImageListRelationFilter = {
    every?: ProductImageWhereInput
    some?: ProductImageWhereInput
    none?: ProductImageWhereInput
  }

  export type ProductMetadataListRelationFilter = {
    every?: ProductMetadataWhereInput
    some?: ProductMetadataWhereInput
    none?: ProductMetadataWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type OrderProductListRelationFilter = {
    every?: OrderProductWhereInput
    some?: OrderProductWhereInput
    none?: OrderProductWhereInput
  }

  export type ProductImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    price?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    viewsCount?: SortOrder
    salesCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductImageCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductImageMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryMetadataId?: SortOrder
    metadataValueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetadataAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryMetadataId?: SortOrder
    metadataValueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    categoryMetadataId?: SortOrder
    metadataValueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMetadataSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CategoryMetadataListRelationFilter = {
    every?: CategoryMetadataWhereInput
    some?: CategoryMetadataWhereInput
    none?: CategoryMetadataWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type MetadataValueListRelationFilter = {
    every?: MetadataValueWhereInput
    some?: MetadataValueWhereInput
    none?: MetadataValueWhereInput
  }

  export type MetadataValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMetadataAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type CategoryMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMetadataSumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type CategoryMetadataScalarRelationFilter = {
    is?: CategoryMetadataWhereInput
    isNot?: CategoryMetadataWhereInput
  }

  export type MetadataValueCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    categoryMetadataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetadataValueMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    categoryMetadataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetadataValueMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    categoryMetadataId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
    shippingZipcode?: SortOrder
    shippingStreet?: SortOrder
    shippingNumber?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingComplement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
    shippingZipcode?: SortOrder
    shippingStreet?: SortOrder
    shippingNumber?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingComplement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
    shippingZipcode?: SortOrder
    shippingStreet?: SortOrder
    shippingNumber?: SortOrder
    shippingCity?: SortOrder
    shippingState?: SortOrder
    shippingCountry?: SortOrder
    shippingComplement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    shippingCost?: SortOrder
    shippingDays?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderProductCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderProductMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderProductSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type UserAddressCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserAddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserAddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserAddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput> | UserAddressCreateWithoutUserInput[] | UserAddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput | UserAddressCreateOrConnectWithoutUserInput[]
    upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput | UserAddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAddressCreateManyUserInputEnvelope
    set?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    disconnect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    delete?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    connect?: UserAddressWhereUniqueInput | UserAddressWhereUniqueInput[]
    update?: UserAddressUpdateWithWhereUniqueWithoutUserInput | UserAddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput | UserAddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type ProductImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductMetadataCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput> | ProductMetadataCreateWithoutProductInput[] | ProductMetadataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetadataCreateOrConnectWithoutProductInput | ProductMetadataCreateOrConnectWithoutProductInput[]
    createMany?: ProductMetadataCreateManyProductInputEnvelope
    connect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderProductCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type ProductImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
  }

  export type ProductMetadataUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput> | ProductMetadataCreateWithoutProductInput[] | ProductMetadataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetadataCreateOrConnectWithoutProductInput | ProductMetadataCreateOrConnectWithoutProductInput[]
    createMany?: ProductMetadataCreateManyProductInputEnvelope
    connect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
  }

  export type OrderProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductMetadataUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput> | ProductMetadataCreateWithoutProductInput[] | ProductMetadataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetadataCreateOrConnectWithoutProductInput | ProductMetadataCreateOrConnectWithoutProductInput[]
    upsert?: ProductMetadataUpsertWithWhereUniqueWithoutProductInput | ProductMetadataUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMetadataCreateManyProductInputEnvelope
    set?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    disconnect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    delete?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    connect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    update?: ProductMetadataUpdateWithWhereUniqueWithoutProductInput | ProductMetadataUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMetadataUpdateManyWithWhereWithoutProductInput | ProductMetadataUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMetadataScalarWhereInput | ProductMetadataScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type OrderProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type ProductImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput> | ProductImageCreateWithoutProductInput[] | ProductImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductImageCreateOrConnectWithoutProductInput | ProductImageCreateOrConnectWithoutProductInput[]
    upsert?: ProductImageUpsertWithWhereUniqueWithoutProductInput | ProductImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductImageCreateManyProductInputEnvelope
    set?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    disconnect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    delete?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    connect?: ProductImageWhereUniqueInput | ProductImageWhereUniqueInput[]
    update?: ProductImageUpdateWithWhereUniqueWithoutProductInput | ProductImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductImageUpdateManyWithWhereWithoutProductInput | ProductImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
  }

  export type ProductMetadataUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput> | ProductMetadataCreateWithoutProductInput[] | ProductMetadataUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductMetadataCreateOrConnectWithoutProductInput | ProductMetadataCreateOrConnectWithoutProductInput[]
    upsert?: ProductMetadataUpsertWithWhereUniqueWithoutProductInput | ProductMetadataUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductMetadataCreateManyProductInputEnvelope
    set?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    disconnect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    delete?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    connect?: ProductMetadataWhereUniqueInput | ProductMetadataWhereUniqueInput[]
    update?: ProductMetadataUpdateWithWhereUniqueWithoutProductInput | ProductMetadataUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductMetadataUpdateManyWithWhereWithoutProductInput | ProductMetadataUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductMetadataScalarWhereInput | ProductMetadataScalarWhereInput[]
  }

  export type OrderProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductCreateNestedOneWithoutMetadataInput = {
    create?: XOR<ProductCreateWithoutMetadataInput, ProductUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetadataInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutMetadataNestedInput = {
    create?: XOR<ProductCreateWithoutMetadataInput, ProductUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMetadataInput
    upsert?: ProductUpsertWithoutMetadataInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMetadataInput, ProductUpdateWithoutMetadataInput>, ProductUncheckedUpdateWithoutMetadataInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryMetadataCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput> | CategoryMetadataCreateWithoutCategoryInput[] | CategoryMetadataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput | CategoryMetadataCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryMetadataCreateManyCategoryInputEnvelope
    connect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CategoryMetadataUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput> | CategoryMetadataCreateWithoutCategoryInput[] | CategoryMetadataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput | CategoryMetadataCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryMetadataCreateManyCategoryInputEnvelope
    connect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryMetadataUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput> | CategoryMetadataCreateWithoutCategoryInput[] | CategoryMetadataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput | CategoryMetadataCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryMetadataUpsertWithWhereUniqueWithoutCategoryInput | CategoryMetadataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryMetadataCreateManyCategoryInputEnvelope
    set?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    disconnect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    delete?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    connect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    update?: CategoryMetadataUpdateWithWhereUniqueWithoutCategoryInput | CategoryMetadataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryMetadataUpdateManyWithWhereWithoutCategoryInput | CategoryMetadataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryMetadataScalarWhereInput | CategoryMetadataScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryMetadataUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput> | CategoryMetadataCreateWithoutCategoryInput[] | CategoryMetadataUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutCategoryInput | CategoryMetadataCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryMetadataUpsertWithWhereUniqueWithoutCategoryInput | CategoryMetadataUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryMetadataCreateManyCategoryInputEnvelope
    set?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    disconnect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    delete?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    connect?: CategoryMetadataWhereUniqueInput | CategoryMetadataWhereUniqueInput[]
    update?: CategoryMetadataUpdateWithWhereUniqueWithoutCategoryInput | CategoryMetadataUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryMetadataUpdateManyWithWhereWithoutCategoryInput | CategoryMetadataUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryMetadataScalarWhereInput | CategoryMetadataScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutMetadataInput = {
    create?: XOR<CategoryCreateWithoutMetadataInput, CategoryUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMetadataInput
    connect?: CategoryWhereUniqueInput
  }

  export type MetadataValueCreateNestedManyWithoutCategoryMetadataInput = {
    create?: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput> | MetadataValueCreateWithoutCategoryMetadataInput[] | MetadataValueUncheckedCreateWithoutCategoryMetadataInput[]
    connectOrCreate?: MetadataValueCreateOrConnectWithoutCategoryMetadataInput | MetadataValueCreateOrConnectWithoutCategoryMetadataInput[]
    createMany?: MetadataValueCreateManyCategoryMetadataInputEnvelope
    connect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
  }

  export type MetadataValueUncheckedCreateNestedManyWithoutCategoryMetadataInput = {
    create?: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput> | MetadataValueCreateWithoutCategoryMetadataInput[] | MetadataValueUncheckedCreateWithoutCategoryMetadataInput[]
    connectOrCreate?: MetadataValueCreateOrConnectWithoutCategoryMetadataInput | MetadataValueCreateOrConnectWithoutCategoryMetadataInput[]
    createMany?: MetadataValueCreateManyCategoryMetadataInputEnvelope
    connect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutMetadataNestedInput = {
    create?: XOR<CategoryCreateWithoutMetadataInput, CategoryUncheckedCreateWithoutMetadataInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMetadataInput
    upsert?: CategoryUpsertWithoutMetadataInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMetadataInput, CategoryUpdateWithoutMetadataInput>, CategoryUncheckedUpdateWithoutMetadataInput>
  }

  export type MetadataValueUpdateManyWithoutCategoryMetadataNestedInput = {
    create?: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput> | MetadataValueCreateWithoutCategoryMetadataInput[] | MetadataValueUncheckedCreateWithoutCategoryMetadataInput[]
    connectOrCreate?: MetadataValueCreateOrConnectWithoutCategoryMetadataInput | MetadataValueCreateOrConnectWithoutCategoryMetadataInput[]
    upsert?: MetadataValueUpsertWithWhereUniqueWithoutCategoryMetadataInput | MetadataValueUpsertWithWhereUniqueWithoutCategoryMetadataInput[]
    createMany?: MetadataValueCreateManyCategoryMetadataInputEnvelope
    set?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    disconnect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    delete?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    connect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    update?: MetadataValueUpdateWithWhereUniqueWithoutCategoryMetadataInput | MetadataValueUpdateWithWhereUniqueWithoutCategoryMetadataInput[]
    updateMany?: MetadataValueUpdateManyWithWhereWithoutCategoryMetadataInput | MetadataValueUpdateManyWithWhereWithoutCategoryMetadataInput[]
    deleteMany?: MetadataValueScalarWhereInput | MetadataValueScalarWhereInput[]
  }

  export type MetadataValueUncheckedUpdateManyWithoutCategoryMetadataNestedInput = {
    create?: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput> | MetadataValueCreateWithoutCategoryMetadataInput[] | MetadataValueUncheckedCreateWithoutCategoryMetadataInput[]
    connectOrCreate?: MetadataValueCreateOrConnectWithoutCategoryMetadataInput | MetadataValueCreateOrConnectWithoutCategoryMetadataInput[]
    upsert?: MetadataValueUpsertWithWhereUniqueWithoutCategoryMetadataInput | MetadataValueUpsertWithWhereUniqueWithoutCategoryMetadataInput[]
    createMany?: MetadataValueCreateManyCategoryMetadataInputEnvelope
    set?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    disconnect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    delete?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    connect?: MetadataValueWhereUniqueInput | MetadataValueWhereUniqueInput[]
    update?: MetadataValueUpdateWithWhereUniqueWithoutCategoryMetadataInput | MetadataValueUpdateWithWhereUniqueWithoutCategoryMetadataInput[]
    updateMany?: MetadataValueUpdateManyWithWhereWithoutCategoryMetadataInput | MetadataValueUpdateManyWithWhereWithoutCategoryMetadataInput[]
    deleteMany?: MetadataValueScalarWhereInput | MetadataValueScalarWhereInput[]
  }

  export type CategoryMetadataCreateNestedOneWithoutValuesInput = {
    create?: XOR<CategoryMetadataCreateWithoutValuesInput, CategoryMetadataUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutValuesInput
    connect?: CategoryMetadataWhereUniqueInput
  }

  export type CategoryMetadataUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<CategoryMetadataCreateWithoutValuesInput, CategoryMetadataUncheckedCreateWithoutValuesInput>
    connectOrCreate?: CategoryMetadataCreateOrConnectWithoutValuesInput
    upsert?: CategoryMetadataUpsertWithoutValuesInput
    connect?: CategoryMetadataWhereUniqueInput
    update?: XOR<XOR<CategoryMetadataUpdateToOneWithWhereWithoutValuesInput, CategoryMetadataUpdateWithoutValuesInput>, CategoryMetadataUncheckedUpdateWithoutValuesInput>
  }

  export type OrderProductCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type OrderProductUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserAddressCreateWithoutUserInput = {
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUncheckedCreateWithoutUserInput = {
    id?: number
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressCreateOrConnectWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressCreateManyUserInputEnvelope = {
    data: UserAddressCreateManyUserInput | UserAddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAddressUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    update: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
    create: XOR<UserAddressCreateWithoutUserInput, UserAddressUncheckedCreateWithoutUserInput>
  }

  export type UserAddressUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAddressWhereUniqueInput
    data: XOR<UserAddressUpdateWithoutUserInput, UserAddressUncheckedUpdateWithoutUserInput>
  }

  export type UserAddressUpdateManyWithWhereWithoutUserInput = {
    where: UserAddressScalarWhereInput
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAddressScalarWhereInput = {
    AND?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    OR?: UserAddressScalarWhereInput[]
    NOT?: UserAddressScalarWhereInput | UserAddressScalarWhereInput[]
    id?: IntFilter<"UserAddress"> | number
    userId?: IntFilter<"UserAddress"> | number
    zipcode?: StringFilter<"UserAddress"> | string
    street?: StringFilter<"UserAddress"> | string
    number?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    state?: StringFilter<"UserAddress"> | string
    country?: StringFilter<"UserAddress"> | string
    complement?: StringNullableFilter<"UserAddress"> | string | null
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingCost?: FloatFilter<"Order"> | number
    shippingDays?: IntFilter<"Order"> | number
    shippingZipcode?: StringNullableFilter<"Order"> | string | null
    shippingStreet?: StringNullableFilter<"Order"> | string | null
    shippingNumber?: StringNullableFilter<"Order"> | string | null
    shippingCity?: StringNullableFilter<"Order"> | string | null
    shippingState?: StringNullableFilter<"Order"> | string | null
    shippingCountry?: StringNullableFilter<"Order"> | string | null
    shippingComplement?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductImageCreateWithoutProductInput = {
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUncheckedCreateWithoutProductInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageCreateOrConnectWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageCreateManyProductInputEnvelope = {
    data: ProductImageCreateManyProductInput | ProductImageCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductMetadataCreateWithoutProductInput = {
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetadataUncheckedCreateWithoutProductInput = {
    id?: number
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetadataCreateOrConnectWithoutProductInput = {
    where: ProductMetadataWhereUniqueInput
    create: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput>
  }

  export type ProductMetadataCreateManyProductInputEnvelope = {
    data: ProductMetadataCreateManyProductInput | ProductMetadataCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: CategoryMetadataCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: CategoryMetadataUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type OrderProductCreateWithoutProductInput = {
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderProductUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductCreateOrConnectWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductCreateManyProductInputEnvelope = {
    data: OrderProductCreateManyProductInput | OrderProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    update: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
    create: XOR<ProductImageCreateWithoutProductInput, ProductImageUncheckedCreateWithoutProductInput>
  }

  export type ProductImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductImageWhereUniqueInput
    data: XOR<ProductImageUpdateWithoutProductInput, ProductImageUncheckedUpdateWithoutProductInput>
  }

  export type ProductImageUpdateManyWithWhereWithoutProductInput = {
    where: ProductImageScalarWhereInput
    data: XOR<ProductImageUpdateManyMutationInput, ProductImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductImageScalarWhereInput = {
    AND?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    OR?: ProductImageScalarWhereInput[]
    NOT?: ProductImageScalarWhereInput | ProductImageScalarWhereInput[]
    id?: IntFilter<"ProductImage"> | number
    productId?: IntFilter<"ProductImage"> | number
    url?: StringFilter<"ProductImage"> | string
    createdAt?: DateTimeFilter<"ProductImage"> | Date | string
    updatedAt?: DateTimeFilter<"ProductImage"> | Date | string
  }

  export type ProductMetadataUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductMetadataWhereUniqueInput
    update: XOR<ProductMetadataUpdateWithoutProductInput, ProductMetadataUncheckedUpdateWithoutProductInput>
    create: XOR<ProductMetadataCreateWithoutProductInput, ProductMetadataUncheckedCreateWithoutProductInput>
  }

  export type ProductMetadataUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductMetadataWhereUniqueInput
    data: XOR<ProductMetadataUpdateWithoutProductInput, ProductMetadataUncheckedUpdateWithoutProductInput>
  }

  export type ProductMetadataUpdateManyWithWhereWithoutProductInput = {
    where: ProductMetadataScalarWhereInput
    data: XOR<ProductMetadataUpdateManyMutationInput, ProductMetadataUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductMetadataScalarWhereInput = {
    AND?: ProductMetadataScalarWhereInput | ProductMetadataScalarWhereInput[]
    OR?: ProductMetadataScalarWhereInput[]
    NOT?: ProductMetadataScalarWhereInput | ProductMetadataScalarWhereInput[]
    id?: IntFilter<"ProductMetadata"> | number
    productId?: IntFilter<"ProductMetadata"> | number
    categoryMetadataId?: StringFilter<"ProductMetadata"> | string
    metadataValueId?: StringFilter<"ProductMetadata"> | string
    createdAt?: DateTimeFilter<"ProductMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"ProductMetadata"> | Date | string
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: CategoryMetadataUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: CategoryMetadataUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type OrderProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductScalarWhereInput = {
    AND?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    OR?: OrderProductScalarWhereInput[]
    NOT?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    price?: FloatFilter<"OrderProduct"> | number
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string
  }

  export type ProductCreateWithoutImagesInput = {
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: ProductMetadataCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    orders?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    categoryId: number
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metadata?: ProductMetadataUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: ProductMetadataUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    orders?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: ProductMetadataUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutMetadataInput = {
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    orders?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMetadataInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    categoryId: number
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMetadataInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMetadataInput, ProductUncheckedCreateWithoutMetadataInput>
  }

  export type ProductUpsertWithoutMetadataInput = {
    update: XOR<ProductUpdateWithoutMetadataInput, ProductUncheckedUpdateWithoutMetadataInput>
    create: XOR<ProductCreateWithoutMetadataInput, ProductUncheckedCreateWithoutMetadataInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMetadataInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMetadataInput, ProductUncheckedUpdateWithoutMetadataInput>
  }

  export type ProductUpdateWithoutMetadataInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    orders?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMetadataInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataCreateNestedManyWithoutProductInput
    orders?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataUncheckedCreateNestedManyWithoutProductInput
    orders?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryMetadataCreateWithoutCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: MetadataValueCreateNestedManyWithoutCategoryMetadataInput
  }

  export type CategoryMetadataUncheckedCreateWithoutCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values?: MetadataValueUncheckedCreateNestedManyWithoutCategoryMetadataInput
  }

  export type CategoryMetadataCreateOrConnectWithoutCategoryInput = {
    where: CategoryMetadataWhereUniqueInput
    create: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryMetadataCreateManyCategoryInputEnvelope = {
    data: CategoryMetadataCreateManyCategoryInput | CategoryMetadataCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    label?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    description?: StringNullableFilter<"Product"> | string | null
    categoryId?: IntFilter<"Product"> | number
    viewsCount?: IntFilter<"Product"> | number
    salesCount?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type CategoryMetadataUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryMetadataWhereUniqueInput
    update: XOR<CategoryMetadataUpdateWithoutCategoryInput, CategoryMetadataUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryMetadataCreateWithoutCategoryInput, CategoryMetadataUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryMetadataUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryMetadataWhereUniqueInput
    data: XOR<CategoryMetadataUpdateWithoutCategoryInput, CategoryMetadataUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryMetadataUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryMetadataScalarWhereInput
    data: XOR<CategoryMetadataUpdateManyMutationInput, CategoryMetadataUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryMetadataScalarWhereInput = {
    AND?: CategoryMetadataScalarWhereInput | CategoryMetadataScalarWhereInput[]
    OR?: CategoryMetadataScalarWhereInput[]
    NOT?: CategoryMetadataScalarWhereInput | CategoryMetadataScalarWhereInput[]
    id?: StringFilter<"CategoryMetadata"> | string
    name?: StringFilter<"CategoryMetadata"> | string
    categoryId?: IntFilter<"CategoryMetadata"> | number
    createdAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryMetadata"> | Date | string
  }

  export type CategoryCreateWithoutMetadataInput = {
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMetadataInput = {
    id?: number
    slug: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMetadataInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMetadataInput, CategoryUncheckedCreateWithoutMetadataInput>
  }

  export type MetadataValueCreateWithoutCategoryMetadataInput = {
    id: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetadataValueUncheckedCreateWithoutCategoryMetadataInput = {
    id: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetadataValueCreateOrConnectWithoutCategoryMetadataInput = {
    where: MetadataValueWhereUniqueInput
    create: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput>
  }

  export type MetadataValueCreateManyCategoryMetadataInputEnvelope = {
    data: MetadataValueCreateManyCategoryMetadataInput | MetadataValueCreateManyCategoryMetadataInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutMetadataInput = {
    update: XOR<CategoryUpdateWithoutMetadataInput, CategoryUncheckedUpdateWithoutMetadataInput>
    create: XOR<CategoryCreateWithoutMetadataInput, CategoryUncheckedCreateWithoutMetadataInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMetadataInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMetadataInput, CategoryUncheckedUpdateWithoutMetadataInput>
  }

  export type CategoryUpdateWithoutMetadataInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMetadataInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MetadataValueUpsertWithWhereUniqueWithoutCategoryMetadataInput = {
    where: MetadataValueWhereUniqueInput
    update: XOR<MetadataValueUpdateWithoutCategoryMetadataInput, MetadataValueUncheckedUpdateWithoutCategoryMetadataInput>
    create: XOR<MetadataValueCreateWithoutCategoryMetadataInput, MetadataValueUncheckedCreateWithoutCategoryMetadataInput>
  }

  export type MetadataValueUpdateWithWhereUniqueWithoutCategoryMetadataInput = {
    where: MetadataValueWhereUniqueInput
    data: XOR<MetadataValueUpdateWithoutCategoryMetadataInput, MetadataValueUncheckedUpdateWithoutCategoryMetadataInput>
  }

  export type MetadataValueUpdateManyWithWhereWithoutCategoryMetadataInput = {
    where: MetadataValueScalarWhereInput
    data: XOR<MetadataValueUpdateManyMutationInput, MetadataValueUncheckedUpdateManyWithoutCategoryMetadataInput>
  }

  export type MetadataValueScalarWhereInput = {
    AND?: MetadataValueScalarWhereInput | MetadataValueScalarWhereInput[]
    OR?: MetadataValueScalarWhereInput[]
    NOT?: MetadataValueScalarWhereInput | MetadataValueScalarWhereInput[]
    id?: StringFilter<"MetadataValue"> | string
    label?: StringFilter<"MetadataValue"> | string
    categoryMetadataId?: StringFilter<"MetadataValue"> | string
    createdAt?: DateTimeFilter<"MetadataValue"> | Date | string
    updatedAt?: DateTimeFilter<"MetadataValue"> | Date | string
  }

  export type CategoryMetadataCreateWithoutValuesInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutMetadataInput
  }

  export type CategoryMetadataUncheckedCreateWithoutValuesInput = {
    id: string
    name: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryMetadataCreateOrConnectWithoutValuesInput = {
    where: CategoryMetadataWhereUniqueInput
    create: XOR<CategoryMetadataCreateWithoutValuesInput, CategoryMetadataUncheckedCreateWithoutValuesInput>
  }

  export type CategoryMetadataUpsertWithoutValuesInput = {
    update: XOR<CategoryMetadataUpdateWithoutValuesInput, CategoryMetadataUncheckedUpdateWithoutValuesInput>
    create: XOR<CategoryMetadataCreateWithoutValuesInput, CategoryMetadataUncheckedCreateWithoutValuesInput>
    where?: CategoryMetadataWhereInput
  }

  export type CategoryMetadataUpdateToOneWithWhereWithoutValuesInput = {
    where?: CategoryMetadataWhereInput
    data: XOR<CategoryMetadataUpdateWithoutValuesInput, CategoryMetadataUncheckedUpdateWithoutValuesInput>
  }

  export type CategoryMetadataUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutMetadataNestedInput
  }

  export type CategoryMetadataUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateWithoutOrderInput = {
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutOrdersInput
  }

  export type OrderProductUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductCreateOrConnectWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductCreateManyOrderInputEnvelope = {
    data: OrderProductCreateManyOrderInput | OrderProductCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrdersInput = {
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: UserAddressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    password: string
    token?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: UserAddressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: UserAddressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: UserAddressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    userId: number
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    categoryId: number
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ProductImageUncheckedCreateNestedManyWithoutProductInput
    metadata?: ProductMetadataUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: IntFieldUpdateOperationsInput | number
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserAddressCreateManyUserInput = {
    id?: number
    zipcode: string
    street: string
    number: string
    city: string
    state: string
    country: string
    complement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    status?: string
    total: number
    shippingCost?: number
    shippingDays?: number
    shippingZipcode?: string | null
    shippingStreet?: string | null
    shippingNumber?: string | null
    shippingCity?: string | null
    shippingState?: string | null
    shippingCountry?: string | null
    shippingComplement?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAddressUpdateWithoutUserInput = {
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    zipcode?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingCost?: FloatFieldUpdateOperationsInput | number
    shippingDays?: IntFieldUpdateOperationsInput | number
    shippingZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    shippingStreet?: NullableStringFieldUpdateOperationsInput | string | null
    shippingNumber?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCity?: NullableStringFieldUpdateOperationsInput | string | null
    shippingState?: NullableStringFieldUpdateOperationsInput | string | null
    shippingCountry?: NullableStringFieldUpdateOperationsInput | string | null
    shippingComplement?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageCreateManyProductInput = {
    id?: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductMetadataCreateManyProductInput = {
    id?: number
    categoryMetadataId: string
    metadataValueId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductCreateManyProductInput = {
    id?: number
    orderId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductImageUpdateWithoutProductInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataUpdateWithoutProductInput = {
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductMetadataUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryMetadataId?: StringFieldUpdateOperationsInput | string
    metadataValueId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    label: string
    price: number
    description?: string | null
    viewsCount?: number
    salesCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryMetadataCreateManyCategoryInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUpdateManyWithoutProductNestedInput
    orders?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ProductImageUncheckedUpdateManyWithoutProductNestedInput
    metadata?: ProductMetadataUncheckedUpdateManyWithoutProductNestedInput
    orders?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    viewsCount?: IntFieldUpdateOperationsInput | number
    salesCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryMetadataUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: MetadataValueUpdateManyWithoutCategoryMetadataNestedInput
  }

  export type CategoryMetadataUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: MetadataValueUncheckedUpdateManyWithoutCategoryMetadataNestedInput
  }

  export type CategoryMetadataUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueCreateManyCategoryMetadataInput = {
    id: string
    label: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetadataValueUpdateWithoutCategoryMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueUncheckedUpdateWithoutCategoryMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetadataValueUncheckedUpdateManyWithoutCategoryMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductCreateManyOrderInput = {
    id?: number
    productId: number
    quantity?: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderProductUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
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