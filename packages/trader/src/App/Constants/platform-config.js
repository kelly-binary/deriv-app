import { localize } from 'App/i18n';
import { routes }   from 'Constants/index';
import { isBot }    from 'Utils/PlatformSwitcher';

const key = isBot() ? 'href' : 'link_to';

const platform_config = [
    {
        icon       : 'IconDtrader',
        title      : localize('DTrader'),
        description: localize('Start trading now with a powerful, yet easy-to-use platform.'),
        [key]      : routes.trade,
    },
    {
        icon       : 'IconDbot',
        title      : localize('DBot'),
        description: localize('Automate your trading ideas without coding.'),
        href       : '/bot',
    },
    {
        icon       : 'IconDmt5',
        title      : localize('DMT5'),
        description: localize('Trade with the platform of choice for professionals.'),
        [key]      : routes.mt5,
    },
];

export default platform_config;
