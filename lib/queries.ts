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