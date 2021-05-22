import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

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
        }}
      >
        {nodes.map(product => (
          <div
            key={product.id}
            style={{ width: 250, margin: 20, border: "1px solid lightgray" }}
          >
            <Link>
              <img src={product.image.fluid.src} alt={product.title} />
            </Link>
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
