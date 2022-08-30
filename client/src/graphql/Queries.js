import { gql } from '@apollo/client';


export const LOAD_DATA = gql`
    query {
        getProvinces {
            province_id
            latitude
            longitude
            name
            date_created
            image
            description
            region_id
        }
    }
`

export const GET_FILTERED_CITY = gql`
query getProvinceByName($input: String!) {
     getProvinceByName(city: $input) {
        province_id
            latitude
            longitude
            name
            date_created
            image
            description
            region_id
    }
}
`

