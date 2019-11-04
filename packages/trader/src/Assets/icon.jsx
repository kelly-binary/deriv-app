import React     from 'react';
import PropTypes from 'prop-types';

class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
        /* When adding a new icon, arrange it by following the ascending file system arrangement */
        this.icons = {
            // AccountManagement
            IconSecurity    : React.lazy(() => import('./AccountManagement/icon-security.jsx')),
            IconVerification: React.lazy(() => import('./AccountManagement/icon-verification.jsx')),
            IconAPIError    : React.lazy(() => import('./AccountManagement/icon-error.jsx')),

            // Common
            IconAccountTransfer   : React.lazy(() => import('./Common/icon-account-transfer.jsx')),
            IconArrowBold         : React.lazy(() => import('./Common/icon-arrow-bold.jsx')),
            IconArrow             : React.lazy(() => import('./Common/icon-arrow.jsx')),
            IconBack              : React.lazy(() => import('./Common/icon-back.jsx')),
            IconCalendarToday     : React.lazy(() => import('./Common/icon-calendar-today.jsx')),
            IconCalendar          : React.lazy(() => import('./Common/icon-calendar.jsx')),
            IconChevronDoubleLeft : React.lazy(() => import('./Common/icon-chevron-double-left.jsx')),
            IconChevronDoubleRight: React.lazy(() => import('./Common/icon-chevron-double-right.jsx')),
            IconChevronLeft       : React.lazy(() => import('./Common/icon-chevron-left.jsx')),
            IconChevronRight      : React.lazy(() => import('./Common/icon-chevron-right.jsx')),
            IconClear             : React.lazy(() => import('./Common/icon-clear.jsx')),
            IconClipboard         : React.lazy(() => import('./Common/icon-clipboard.jsx')),
            IconClock             : React.lazy(() => import('./Common/icon-clock.jsx')),
            IconClose             : React.lazy(() => import('./Common/icon-close.jsx')),
            IconCountryFlag       : React.lazy(() => import('./Common/icon-country-flag.jsx')),
            IconDanger            : React.lazy(() => import('./Common/icon-danger.jsx')),
            IconDeposit           : React.lazy(() => import('./Common/icon-deposit.jsx')), // TODO: update big when design is ready
            IconDepositSmall      : React.lazy(() => import('./Common/icon-deposit-small.jsx')),
            IconEmergency         : React.lazy(() => import('./Common/icon-emergency.jsx')),
            IconEmptyNotification : React.lazy(() => import('./Common/icon-empty-notification.jsx')),
            IconError             : React.lazy(() => import('./Common/icon-error.jsx')),
            IconExclamation       : React.lazy(() => import('./Common/icon-exclamation.jsx')),
            IconFlag              : React.lazy(() => import('./Common/icon-flag.jsx')),
            IconInfoBlue          : React.lazy(() => import('./Common/icon-info-blue.jsx')),
            IconInfoOutline       : React.lazy(() => import('./Common/icon-info-outline.jsx')),
            IconInformation       : React.lazy(() => import('./Common/icon-information.jsx')),
            IconMinimize          : React.lazy(() => import('./Common/icon-minimize.jsx')),
            IconMinus             : React.lazy(() => import('./Common/icon-minus.jsx')),
            IconPasswordHide      : React.lazy(() => import('./Common/icon-password-hide.jsx')),
            IconPasswordShow      : React.lazy(() => import('./Common/icon-password-show.jsx')),
            IconPaymentAgent      : React.lazy(() => import('./Common/icon-payment-agent.jsx')),
            IconPlus              : React.lazy(() => import('./Common/icon-plus.jsx')),
            IconQuestion          : React.lazy(() => import('./Common/icon-question.jsx')),
            IconRedDot            : React.lazy(() => import('./Common/icon-red-dot.jsx')),
            IconSuccess           : React.lazy(() => import('./Common/icon-success.jsx')),
            IconWarning           : React.lazy(() => import('./Common/icon-warning.jsx')),
            IconWip               : React.lazy(() => import('./Common/icon-wip.jsx')),
            IconWithdrawal        : React.lazy(() => import('./Common/icon-withdrawal.jsx')), // TODO: update big when design is ready
            IconWithdrawalSmall   : React.lazy(() => import('./Common/icon-withdrawal-small.jsx')),

            // Contract
            ContractIconClose: React.lazy(() => import('./Contract/icon-close.jsx')),
            IconEndTime      : React.lazy(() => import('./Contract/icon-end-time.jsx')),
            ContractIconFlag : React.lazy(() => import('./Contract/icon-flag.jsx')),
            IconStartTime    : React.lazy(() => import('./Contract/icon-start-time.jsx')),
            IconTick         : React.lazy(() => import('./Contract/icon-tick.jsx')),

            // Cashier
            IconAuthenticateWithdrawals: React.lazy(() => import('./Cashier/icon-authenticate-withdrawals.jsx')),
            IconCashierError           : React.lazy(() => import('./Cashier/icon-cashier-error.jsx')),
            IconEmailSent              : React.lazy(() => import('./Cashier/icon-email-sent.jsx')),
            IconNoBalance              : React.lazy(() => import('./Cashier/icon-no-balance.jsx')),
            IconPhone                  : React.lazy(() => import('./Cashier/icon-phone.jsx')),
            IconWebsite                : React.lazy(() => import('./Cashier/icon-website.jsx')),
            IconEmail                  : React.lazy(() => import('./Cashier/icon-email.jsx')),
            IconTransferDone           : React.lazy(() => import('./Cashier/icon-transfer-done.jsx')),

            // Modal
            ModalIconClose: React.lazy(() => import('./Modal/icon-close.jsx')),

            // Footer
            IconMaximize : React.lazy(() => import('./Footer/icon-maximize.jsx')),
            IconPositions: React.lazy(() => import('./Footer/icon-positions.jsx')),
            IconSettings : React.lazy(() => import('./Footer/icon-settings.jsx')),

            // Header
            IconAccountsCurrency: React.lazy(() => import('./Header/AccountsCurrency/icon_accounts_currency.jsx')),
            IconLogout          : React.lazy(() => import('./Header/Drawer/icon-logout.jsx')),
            IconBell            : React.lazy(() => import('./Header/NavBar/icon-bell.jsx')),
            IconCashier         : React.lazy(() => import('./Header/NavBar/icon-cashier.jsx')),
            IconDeriv           : React.lazy(() => import('./Header/NavBar/icon-deriv.jsx')),
            IconHamburger       : React.lazy(() => import('./Header/NavBar/icon-hamburger.jsx')),
            IconPortfolio       : React.lazy(() => import('./Header/NavBar/icon-portfolio.jsx')),
            IconReports         : React.lazy(() => import('./Header/NavBar/icon-reports.jsx')),
            IconTrade           : React.lazy(() => import('./Header/NavBar/icon-trade.jsx')),
            IconUser            : React.lazy(() => import('./Header/NavBar/icon-user.jsx')),

            // Platform Switcher
            IconDBot: React.lazy(() => import('./Header/PlatformSwitcher/icon-d-bot.jsx')),
            IconMT5 : React.lazy(() => import('./Header/PlatformSwitcher/icon-mt5.jsx')),

            // Reports
            IconDemo                : React.lazy(() => import('./Reports/icon-demo.jsx')),
            IconOpenPositions       : React.lazy(() => import('./Reports/icon-open-positions.jsx')),
            IconProfitTable         : React.lazy(() => import('./Reports/icon-profit-table.jsx')),
            IconStatement           : React.lazy(() => import('./Reports/icon-statement.jsx')),
            IconCalendarForwardToday: React.lazy(() => import('./Reports/ic-calendar-forwardtoday.jsx')),

            // Settings
            IconCharts  : React.lazy(() => import('./Settings/icon-charts.jsx')),
            IconLanguage: React.lazy(() => import('./Settings/icon-language.jsx')),
            IconPurchase: React.lazy(() => import('./Settings/icon-purchase.jsx')),
            IconTheme   : React.lazy(() => import('./Settings/icon-theme.jsx')),

            // Statement
            IconBuy   : React.lazy(() => import('./Statement/icon-buy.jsx')),
            IconPayout: React.lazy(() => import('./Statement/icon-payout.jsx')),
            IconSell  : React.lazy(() => import('./Statement/icon-sell.jsx')),
            IconWallet: React.lazy(() => import('./Statement/icon-wallet.jsx')),

            // Signup
            IconAdd     : React.lazy(() => import('./Signup/icon-add.jsx')),
            IconRedArrow: React.lazy(() => import('./Signup/icon-red-arrow.jsx')),
            IconWon     : React.lazy(() => import('./Signup/icon-won.jsx')),

            // Trading
            IconBarrierDown   : React.lazy(() => import('./Trading/Barriers/icon-barrier-down.jsx')),
            IconBarrierUp     : React.lazy(() => import('./Trading/Barriers/icon-barrier-up.jsx')),
            IconTradeCategory : React.lazy(() => import('./Trading/Categories/icon-trade-categories.jsx')),
            TradeCategoriesGIF: React.lazy(() => import('./Trading/Categories/trade-categories-gif.jsx')),
            TradeCategories   : React.lazy(() => import('./Trading/Categories/trade-categories.jsx')),
            IconTradeType     : React.lazy(() => import('./Trading/Types/icon-trade-types.jsx')),
            IconLock          : React.lazy(() => import('./Trading/icon-lock.jsx')),
            IconPriceMove     : React.lazy(() => import('./Trading/icon-price-move.jsx')),
        };
    }

    render() {
        const options = {
            category     : this.props.category,
            className    : this.props.className,
            classNamePath: this.props.classNamePath,
            classNameRect: this.props.classNameRect,
            height       : this.props.height,
            is_dark_theme: this.props.is_dark_theme,
            is_disabled  : this.props.is_disabled,
            onClick      : this.props.onClick,
            onMouseEnter : this.props.onMouseEnter,
            onMouseLeave : this.props.onMouseLeave,
            type         : this.props.type,
            width        : this.props.width,
        };

        const IconLazy = this.icons[this.props.icon];
        if (!IconLazy) return <div />;

        return (
            <React.Suspense fallback={<div />}>
                <IconLazy {...options} />
            </React.Suspense>
        );
    }
}

Icon.propTypes = {
    category     : PropTypes.string,
    className    : PropTypes.string,
    classNamePath: PropTypes.string,
    classNameRect: PropTypes.string,
    icon         : PropTypes.string,
    is_dark_theme: PropTypes.bool,
    is_disabled  : PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    onClick      : PropTypes.func,
    type         : PropTypes.string,
};

export default Icon;
