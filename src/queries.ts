export const ROUTES_QUERY = `query RouteQuery {
    allPages {
        url
        id
    }
}`;

export const PAGE_QUERY = `query Page($id: ItemId) {
    page(filter: {id: {eq: $id}}) {
      title
      content {
        ... on Title1Record {
          id
          __typename
          text
        }
        ... on Title2Record {
          id
          __typename
          text
        }
        ... on Message1Record {
          id
          __typename
          text(markdown: false)
        }
        ... on ProductSectionRecord {
          id
          __typename
          title
          products {
            price
            title
            image {
              url
            }
            categories {
              key
            }
          }
          categories {
            key
            title
          }
          cssClasses {
            name
          }
        }
      }
    }
  }
  `;
