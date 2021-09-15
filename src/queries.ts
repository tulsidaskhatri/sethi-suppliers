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
      showGlobalFooter
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
        ... on ContactSectionRecord {
          __typename
          id
          title
          htmlId
          cssClasses {
            name
          }
          cards {
            title
            icon {
              url
              alt
            }
            details
          }
        }
        ... on AboutSectionRecord {
          __typename
          id
          htmlId
          cssClasses {
            name
          }
          title
          shortInfoText
          listTitle
          list
          longInfoTitle
          longInfoText
        }
      }
    }
    company {
      logo {
        alt
        url
      },
      socialPlatforms {
        label,
        link
      }
      contacts {
        phone
      }
    }
    globalHeader {
      links {
        label
        link
      }
    }
    globalFooter {
      columns {
        title
        links {
          label
          link
        }
      }
    }
  }
  `;
