import classNames       from 'classnames';
import PropTypes        from 'prop-types';
import React            from 'react';
import { withRouter }   from 'react-router';
import { Button, Icon } from 'deriv-components';
import Localize         from 'App/Components/Elements/localize.jsx';
import { localize }     from 'App/i18n';
import { connect }      from 'Stores/connect';

class AccountTransferReceipt extends React.Component {
    componentWillUnmount() {
        this.props.resetAccountTransfer();
    }

    render() {
        const {
            receipt,
            selected_from,
            selected_to,
        } = this.props;

        return (
            <div className='cashier__wrapper account-transfer__receipt'>
                <Icon icon='IconTransferDone' className='account-transfer__receipt-icon' height={128} width={128} />
                <h2 className='cashier__header'>
                    <Localize i18n_default_text='Your funds have been transferred.' />
                </h2>
                <div className='cashier__transferred-amount cashier__text--bold'>
                    <span
                        className={classNames('symbols', `symbols--${selected_from.currency.toLowerCase()}`)}
                    />
                    {receipt.amount_transferred}
                </div>
                <div className='cashier__transferred-details-wrapper'>
                    <span className='account-transfer__transfer-details-from'>
                        <Icon icon={`IconCurrency-${selected_from.mt_icon || selected_from.currency.toLowerCase()}`} />
                        <span className='cashier__transferred-details'>
                            <span className='cashier__text--bold'>{selected_from.text}</span>
                        </span>
                    </span>
                    <Icon className='cashier__transferred-icon' icon='IconArrowLeft' />
                    <span className='account-transfer__transfer-details-to'>
                        <Icon icon={`IconCurrency-${selected_to.mt_icon || selected_to.currency.toLowerCase()}`} />
                        <span className='cashier__transferred-details'>
                            <span className='cashier__text--bold'>{selected_to.text}</span>
                        </span>
                    </span>
                </div>
                <Button
                    className='account-transfer__button-done'
                    has_effect
                    text={localize('Done')}
                    onClick={this.props.resetAccountTransfer}
                    primary
                />
            </div>
        );
    }
}

AccountTransferReceipt.propTypes = {
    receipt             : PropTypes.object,
    resetAccountTransfer: PropTypes.func,
    selected_from       : PropTypes.object,
    selected_to         : PropTypes.object,
};

export default withRouter(connect(
    ({ modules }) => ({
        receipt             : modules.cashier.config.account_transfer.receipt,
        resetAccountTransfer: modules.cashier.resetAccountTransfer,
        selected_from       : modules.cashier.config.account_transfer.selected_from,
        selected_to         : modules.cashier.config.account_transfer.selected_to,
    })
)(AccountTransferReceipt));
