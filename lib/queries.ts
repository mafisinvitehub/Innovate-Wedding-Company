export const contactQuery = `*[_type == "contact"][0]{
  title,
  email,
  phone,
  address
}`;

export const allWorksQuery = `*[_type == "work"]{
  title,
  "slug": slug.current,
  location,
  "coverImage": coverImage{
    asset->{
      _id,
      url
    }
  }
}`;

export const singleWorkQuery = `*[_type == "work" && slug.current == $slug][0]{
  title,
  location,
  service,
  description,
  "coverImage": coverImage{
    asset->{
      url
    }
  },
  "gallery": gallery[]{
    asset->{
      url
    }
  },
  videos
}`;

export const allCategoriesQuery = `
*[_type == "portfolioCategory"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage {
    asset->{
      url
    }
  },
  featured
}
`;

// export const singleCategoryQuery = `
// *[_type == "portfolioCategory" && slug.current == $slug][0]{
//   _id,
//   title,
//   description,
//   coverImage{
//     asset->{
//       url
//     }
//   },
//   media[]{
//     _type,

//     // Image
//     _type == "image" => {
//       asset->{
//         _id,
//         url
//       }
//     },

//     // Video object
//     _type == "video" => {
//       type,
//       url,
//       file{
//         asset->{
//           _id,
//           url
//         }
//       }
//     }
//   }
// }
// `;

export const singleCategoryQuery = `
*[_type == "portfolioCategory" && slug.current == $slug][0]{
  _id,
  title,
  description,
  coverImage{
    asset->{
      url
    }
  },
  media[]{
    _type,

    // image
    asset->{
      _id,
      url
    },

    // video fields
    type,
    url,
    file{
      asset->{
        _id,
        url
      }
    }
  }
}
`;

export const featuredCategoriesQuery = `
*[_type == "portfolioCategory" && featured == true] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage{
    asset->{
      url
    }
  }
}
`;

export const singleEmployeeQuery = `
*[_type == "employee" && slug.current == $slug][0]{
  name,
  role,
  bio,
  skills,
  phone,
  phoneVisibility,
  phoneAction,
  isActive,
  photo{
    asset->{url}
  },
  socialLinks,
  gallery[]{
    _type,
    asset->{url},
    url
  }
}
`;