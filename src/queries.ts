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
        ... on H1Record {
          id
          __typename
          text
        }
        ... on H2Record {
          id
          __typename
          text
        }
        ... on P1Record {
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
