import { graphql } from "gatsby"
import React from "react"
import Layout from '../components/layout'
import styles from './establishment.module.css'
import { GoogleMap, Marker } from "react-google-maps"

const EstablishmentTemplate = ({ data }) => {

  const establishment = data.allGeoFeature.edges[0].node;

  var address = [
              establishment.featureFields.Address1,
              establishment.featureFields.Address2,
              establishment.featureFields.Address3,
              establishment.featureFields.Town,
              establishment.featureFields.Country,
              establishment.featureFields.Postcode,
  ].filter(function(item) {
    return item != null;
  }).join(", ");

  let establishment_component = (
    <Layout>
      <div>
        <h1>{establishment.featureFields.TradingNam}</h1>
      </div>
      <div>
        <p><strong>Address: </strong>{address}</p>
      </div>
      <div>
        <p><strong>Competent Authority: </strong>{establishment.featureFields.CompetentA}</p>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        </GoogleMap>
      </div>

    </Layout>
  );

  return establishment_component;

}

export default EstablishmentTemplate

export const query = graphql`
query($AppNo: String!) {
  allGeoFeature(filter: {featureFields: {AppNo: {eq: $AppNo}}}) {
    edges {
      node {
        id
        geometry {
          type
          coordinates
        }
        featureFields {
          TradingNam
          Address1
          Address2
          Address3
          Postcode
          Town
          Country
          CompetentA
          AppNo
        }
      }
    }
  }
}
`
