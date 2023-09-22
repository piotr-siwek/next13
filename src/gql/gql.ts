/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}": types.CategoriesGetListDocument,
    "query CategoriesGetProducts($slug: String, $skip: Int = 0, $take: Int = 1) {\n  categories(where: {slug: $slug}) {\n    id\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.CategoriesGetProductsDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetSingleOpne($slug: String) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    description\n    products {\n      id\n      name\n      description\n      price\n      images {\n        url\n      }\n    }\n  }\n}": types.CollectionsGetSingleOpneDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetListBySearch($searchTerm: String) {\n  products(where: {_search: $searchTerm}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListBySearchDocument,
    "query ProductGetSingleOne($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductGetSingleOneDocument,
    "query ProductsGetList($first: Int, $skip: Int = 0) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetProducts($slug: String, $skip: Int = 0, $take: Int = 1) {\n  categories(where: {slug: $slug}) {\n    id\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetSingleOpne($slug: String) {\n  collections(where: {slug: $slug}) {\n    id\n    name\n    slug\n    description\n    products {\n      id\n      name\n      description\n      price\n      images {\n        url\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetSingleOpneDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($searchTerm: String) {\n  products(where: {_search: $searchTerm}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSingleOne($id: ID) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetSingleOneDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $skip: Int = 0) {\n  products(first: $first, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
