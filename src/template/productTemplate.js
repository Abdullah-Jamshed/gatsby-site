import React from "react"
import { graphql } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ProductTemplate = ({ data: { contentfulProduct } }) => {
  console.log(contentfulProduct.headingsForPage.raw)

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, childern) => (
        <h1 style={{ textAlign: "center" }}>{childern}</h1>
      ),
    },
  }

  return (
    <div>
      template page
      <div>
        <p>{contentfulProduct.headingsForPage.raw}</p>

        <p>Render Rich Text with : gatsby-source-contentful/rich-text</p>

        {contentfulProduct &&
          renderRichText(contentfulProduct.headingsForPage, options)}

        <p>Render Rich Text with : @contentful/rich-text-react-renderer</p>

        {documentToReactComponents(
          JSON.parse(contentfulProduct.headingsForPage.raw),
          options
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query ProductDetail($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      title
      price
      id
      headingsForPage {
        raw
      }
    }
  }
`

export default ProductTemplate
