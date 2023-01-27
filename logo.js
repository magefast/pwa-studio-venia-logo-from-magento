import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useStyle } from '@magento/venia-ui/lib/classify';
import Image from '@magento/venia-ui/lib/components/Image';
import logo from './VeniaLogo.svg';
import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './getStoreLogo.gql';

/**
 * A component that renders a logo in the header.
 *
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a logo.
 */
const Logo = props => {
    const { height, width } = props;
    const classes = useStyle({}, props.classes);
    const { formatMessage } = useIntl();
    const title = formatMessage({ id: 'logo.title', defaultMessage: 'Venia' });

    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const { getSoreLogo } = operations;
    const { data } = useQuery(getSoreLogo);

    const logo_height = data && data.storeConfig && data.storeConfig.logo_height;
    const logo_width = data && data.storeConfig && data.storeConfig.logo_width;
    const logo_alt = data && data.storeConfig && data.storeConfig.logo_alt;

    let logo_src = data && data.storeConfig && data.storeConfig.header_logo_src;
    let secure_base_media_url = data && data.storeConfig && data.storeConfig.secure_base_media_url

    if (logo_src && secure_base_media_url) {
        logo_src = secure_base_media_url + 'logo' + '/' + logo_src;
    }

    return (
        <Image
            classes={{ image: classes.logo }}
            height={logo_height || height}
            src={logo_src || logo}
            alt={logo_alt || title}
            title={logo_alt || title}
            width={logo_width || width}
        />
    );
};

/**
 * Props for the Logo component.
 *
 * @kind props
 *
 * @property {Object} classes An object containing the class names for the Logo component.
 * @property {string} classes.logo Classes for logo
 * @property {number} [height=18] Height of the logo.
 * @property {number} [width=102] Width of the logo.
 */
Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string
    }),
    height: PropTypes.number,
    width: PropTypes.number
};

Logo.defaultProps = {
    height: 18,
    width: 102
};

export default Logo;
