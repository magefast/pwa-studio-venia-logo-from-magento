# pwa-studio-venia-logo-from-magento

Get Logo form Magento settings.

Replace default Venia logo.

### How to use

- git clone to `packages/{YOUR_PACKAGE_NAME}/src`

- add override for components - add to package plugin https://github.com/LucasCalazans/override-mapping-webpack-plugin

- create override file `packages/{YOUR_PACKAGE_NAME}/src/override/@magento/venia-ui/lib/components/Logo/logo.js`


- add to `packages/{YOUR_PACKAGE_NAME}/src/override/@magento/venia-ui/lib/components/Logo/logo.js` following code

<pre>
import Logo from 'src/pwa-studio-venia-logo-from-magento/logo';
export default Logo;
</pre>

