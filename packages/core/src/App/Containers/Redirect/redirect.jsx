import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { routes } from '@deriv/shared';
import { connect } from 'Stores/connect';
import Login from '_common/base/login';

const Redirect = ({
    history,
    setVerificationCode,
    fetchResidenceList,
    openRealAccountSignup,
    toggleAccountSignupModal,
    toggleResetPasswordModal,
}) => {
    const url_query_string = window.location.search;
    const url_params = new URLSearchParams(url_query_string);
    let redirected_to_route = false;

    setVerificationCode(url_params.get('code'), url_params.get('action'));

    switch (url_params.get('action')) {
        case 'signup': {
            toggleAccountSignupModal(true);
            break;
        }
        case 'reset_password': {
            toggleResetPasswordModal(true);
            break;
        }
        case 'payment_withdraw': {
            history.push(routes.cashier_withdrawal);
            redirected_to_route = true;
            break;
        }
        case 'payment_agent_withdraw': {
            history.push(routes.cashier_pa);
            redirected_to_route = true;
            break;
        }
        case 'add_account': {
            fetchResidenceList().then(openRealAccountSignup);

            const ext_platform_url = url_params.get('ext_platform_url');
            if (ext_platform_url) {
                history.push(`${routes.root}?ext_platform_url=${ext_platform_url}`);
                redirected_to_route = true;
            }
            break;
        }
        case 'verification': {
            sessionStorage.setItem('redirect_url', `${routes.cashier_p2p}#verification`);
            window.location.href = Login.loginUrl();
            break;
        }
        case 'mt5_password_reset':
            history.push(`${routes.mt5}?code=${url_params.get('code')}#reset-password`);
            redirected_to_route = true;
            break;
        default:
            break;
    }

    if (!redirected_to_route) {
        history.push({
            pathname: routes.root,
            search: url_query_string,
        });
    }

    return null;
};

Redirect.propTypes = {
    getServerTime: PropTypes.object,
    history: PropTypes.object,
    setVerificationCode: PropTypes.func,
    toggleAccountSignupModal: PropTypes.func,
    toggleResetPasswordModal: PropTypes.func,
};

export default withRouter(
    connect(({ client, ui }) => ({
        setVerificationCode: client.setVerificationCode,
        fetchResidenceList: client.fetchResidenceList,
        openRealAccountSignup: ui.openRealAccountSignup,
        toggleAccountSignupModal: ui.toggleAccountSignupModal,
        toggleResetPasswordModal: ui.toggleResetPasswordModal,
    }))(Redirect)
);
