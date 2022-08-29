import { gql } from '@apollo/client';


export const LOAD_DATA = gql`
    query {
        getProvinces {
            province_id
            latitude
            longitude
            name
            date_created
        }
    }
`

