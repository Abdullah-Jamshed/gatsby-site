import React from "react"
import { graphql } from "gatsby"

const ProductTemplate = ({data:{contentfulProduct}}) => {
  console.log(contentfulProduct)
  return <div>template page</div>
}

export const query = graphql`
  query ProductDetail($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      price
      id
    }
  }
`

export default ProductTemplate
