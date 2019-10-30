import classNames       from 'classnames';
import PropTypes        from 'prop-types';
import React            from 'react';
import { withRouter }   from 'react-router';
import { Button, Icon } from 'deriv-components';
import CurrencyUtils    from 'deriv-shared/utils/currency';
import Localize         from 'App/Components/Elements/localize.jsx';
import { localize }     from 'App/i18n';
import routes           from 'Constants/routes';
import { connect }      from 'Stores/connect';

class PaymentAgentTransferReceipt extends React.Component {
    openStatement = () => {
        this.props.history.push(routes.statement);
        this.props.resetPaymentAgentTransfer();
        this.props.toggleCashierModal();
    };

    render() {
        return (
            <div className='cashier__wrapper account-transfer__receipt'>
                <div className='cashier__success'>
                    <h2 className='cashier__header'>
                        <Localize i18n_default_text='Your funds have been transferred to {{name}}.' values={{ name: this.props.receipt.client_name }} />
                    </h2>
                    <div className='cashier__transferred-amount cashier__text--bold'>
                        <span
                            className={classNames('symbols', `symbols--${this.props.currency.toLowerCase()}`)}
                        />
                        {CurrencyUtils.formatMoney(this.props.currency, this.props.receipt.amount_transferred, true)}
                    </div>
                    <div className='cashier__transferred-details-wrapper'>
                        <span className='account-transfer__transfer-details-from'>
                            <Icon icon={`IconCurrency-${this.props.currency.toLowerCase()}`} />
                            <span className='cashier__transferred-details'>
                                <span className='cashier__text--bold'>{this.props.currency.toUpperCase()}</span>&nbsp;({this.props.loginid})
                            </span>
                        </span>
                        <Icon className='cashier__transferred-icon' icon='IconArrowLeft' />
                        <span className='account-transfer__transfer-details-to'>
                            <Icon icon='IconUser' />
                            <span className='cashier__transferred-details'>
                                <span className='cashier__text--bold'>{this.props.receipt.client_name}</span>&nbsp;({this.props.receipt.client_id})
                            </span>
                        </span>
                    </div>
                    <div className='cashier__form-submit payment-agent-transfer__buttons'>
                        <Button
                            className='payment-agent__statement-button'
                            has_effect
                            text={localize('View in statement')}
                            onClick={this.openStatement}
                            tertiary
                        />
                        <Button
                            className='payment-agent__done-button payment-agent-transfer__done-button'
                            has_effect
                            text={localize('Done')}
                            onClick={this.props.resetPaymentAgentTransfer}
                            primary
                        />
                    </div>
                </div>
            </div>
        );
    }
}

PaymentAgentTransferReceipt.propTypes = {
    currency                 : PropTypes.string,
    loginid                  : PropTypes.string,
    receipt                  : PropTypes.object,
    resetPaymentAgentTransfer: PropTypes.func,
    toggleCashierModal       : PropTypes.func,
};

export default withRouter(connect(
    ({ client, modules, ui }) => ({
        currency                 : client.currency,
        loginid                  : client.loginid,
        receipt                  : modules.cashier.config.payment_agent_transfer.receipt,
        resetPaymentAgentTransfer: modules.cashier.resetPaymentAgentTransfer,
        toggleCashierModal       : ui.toggleCashierModal,
    })
)(PaymentAgentTransferReceipt));
