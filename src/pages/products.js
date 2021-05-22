import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { node } from "prop-types"

const Products = ({
  data: {
    allContentfulProduct: { nodes },
  },
}) => {
  console.log(nodes)
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "blue",
        }}
      >
        {nodes.map(product => (
          <div
            key={product.id}
            style={{ width: 250, margin: 20, backgroundColor: "red" }}
          >
            <img src={product.image.fluid.src} alt={product.title} />
            <div style={{ paddingLeft: 10 }}>
              <h2>{product.title}</h2>
              <h4>{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        slug
        title
        price
        image {
          fluid {
            src
          }
        }
        description {
          description
        }
      }
    }
  }
`

export default Products
