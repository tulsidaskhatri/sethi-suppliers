export const ROUTES_QUERY = `query RouteQuery {
    allPages {
        url
        id
    }
}`;

export const PAGE_QUERY = `query Page($id: ItemId) {
    page(filter: {id: {eq: $id}}) {
      title
      showGlobalHeader
      content {
        ... on TypographyRecord {
          id
          __typename
          text
          variant
          weight
        }
        ... on ProductSectionRecord {
          id
          __typename
          htmlId
          title
          contactButtonText
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
    globalHeader {
      logo {
        alt
        url
      }
      links {
        label
        link
      }
    }
  }
  `;
