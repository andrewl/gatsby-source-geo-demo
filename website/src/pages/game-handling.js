import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const GameHandlingPage = ({data}) => {

  const allEstablishments = data.allGeoFeature.edges.map(
    edge => edge.node
  )

  const EstablishmentLink = ({establishment}) => {

    let path = "/establishment/" + establishment.featureFields.AppNo;
    let name = establishment.featureFields.TradingNam;

    return (
      <p>
        <Link to="{path}">
          {name}
        </Link>
        </p>
    )
  };

  return (
    <Layout>
      <div>
        {
          allEstablishments.map(establishment => (<EstablishmentLink establishment={establishment}/>))
        }
      </div>
    </Layout>
  );
}

export default GameHandlingPage

export const query = graphql`
query {
  allGeoFeature(filter: {featureFields: {GameHandli: {eq: "Yes"}}}) {
    edges {
      node {
        id
        geometry {
          type
          coordinates
        }
        featureFields {
          TradingNam
          AppNo
          GameHandli
        }
      }
    }
  }
}
`
