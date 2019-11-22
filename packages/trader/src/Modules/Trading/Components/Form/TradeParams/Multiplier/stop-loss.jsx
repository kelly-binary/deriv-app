import PropTypes       from 'prop-types';
import React           from 'react';
import { localize }    from 'App/i18n';
import { connect }     from 'Stores/connect';
import LimitOrderInput from './limit-order-input.jsx';

const StopLoss = ({
    currency,
    has_stop_loss,
    is_single_currency,
    onChange,
    stop_loss,
    validation_errors,
}) => {
    return (
        <LimitOrderInput
            currency={currency}
            defaultChecked={has_stop_loss}
            error_messages={has_stop_loss ? validation_errors.stop_loss : undefined}
            is_single_currency={is_single_currency}
            label={localize('Stop loss')}
            name='stop_loss'
            onChange={onChange}
            tooltip_label={localize('Close the deal when my loss reaches this amount.')}
            value={stop_loss}
        />
    );
};

StopLoss.propTypes = {
    currency          : PropTypes.string,
    has_stop_loss     : PropTypes.bool,
    is_single_currency: PropTypes.bool,
    onChange          : PropTypes.func,
    stop_loss         : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    validation_errors: PropTypes.object,
};

export default connect(({ modules, client }) => ({
    is_single_currency: client.is_single_currency,
    currency          : modules.trade.currency,
    has_stop_loss     : modules.trade.has_stop_loss,
    onChange          : modules.trade.onChange,
    stop_loss         : modules.trade.stop_loss,
    validation_errors : modules.trade.validation_errors,
}))(StopLoss);