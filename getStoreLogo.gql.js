import { gql } from '@apollo/client';

export const GET_STORE_LOGO = gql`
    query storeConfigData {
        # eslint-disable-next-line @graphql-eslint/require-id-when-available
        storeConfig {
            store_code
            copyright
            logo_height
            logo_width
            logo_alt
            header_logo_src
            secure_base_media_url
        }
    }
`;

export default {
    getSoreLogo: GET_STORE_LOGO
};
