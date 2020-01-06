import classNames          from 'classnames';
import PropTypes           from 'prop-types';
import React               from 'react';
import { Button }          from '@deriv/components';
import { localize }        from '@deriv/translations';
import RemainingTime       from 'App/Containers/remaining-time.jsx';
import { isValidToCancel } from 'Stores/Modules/Contract/Helpers/logic';

const MultiplierCloseActions  = ({
    className,
    onClickCancel,
    onClickSell,
    contract_info,
    is_sell_requested,
}) => {
    const is_valid_to_cancel = isValidToCancel(contract_info);
    
    return (
        <React.Fragment>
            <Button
                id={`dt_drawer_card_${contract_info.contract_id}_button`}
                className={classNames(
                    className, {
                        'btn--loading': is_sell_requested,
                    })}
                is_disabled={is_sell_requested || (+contract_info.profit < 0 && is_valid_to_cancel)}
                text={localize('Close')}
                onClick={() => onClickSell(contract_info.contract_id, true)}
                secondary
            />
            {is_valid_to_cancel &&
                <Button
                    id={`dt_drawer_card_${contract_info.contract_id}_cancel_button`}
                    className='btn--cancel'
                    is_disabled={+contract_info.profit >= 0}
                    onClick={() => onClickCancel(contract_info.contract_id, true)}
                    secondary
                >
                    {localize('Cancel')}
                    <RemainingTime
                        end_time={contract_info.deal_cancellation.date_expiry}
                        format='mm:ss'
                    />
                </Button>
            }
        </React.Fragment>
    );
    
};

MultiplierCloseActions.propTypes = {
    contract_info    : PropTypes.object,
    is_sell_requested: PropTypes.bool,
    onClickCancel    : PropTypes.func,
    onClickSell      : PropTypes.func,
};

export default MultiplierCloseActions;