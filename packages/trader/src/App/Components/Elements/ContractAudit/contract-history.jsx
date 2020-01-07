import PropTypes         from 'prop-types';
import React             from 'react';
import {
    Icon,
    Money,
    ThemedScrollbars }   from '@deriv/components';

import { localize }      from '@deriv/translations';
import ContractAuditItem from './contract-audit-item.jsx';

const ContractHistory = ({
    currency,
    history = [],
}) => {
    if (!history.length) {
        return (
            <div className='contract-audit__empty'>
                <Icon icon='IcEdit' size={32} color='secondary' />
                <h4 className='contract-audit__empty__header'>{localize('No history')}</h4>
                <span className='contract-audit__empty__message'>{localize('You have yet to update either take profit or stop loss')}</span>
            </div>
        );
    }
    return (
        <ThemedScrollbars
            style={{ width: '100%', height: '100%' }}
            autoHide
        >
            <div style={{ padding: '0.8rem 1.6rem' }}>
                {
                    history.map((item, key) => (
                        <ContractAuditItem
                            key={key}
                            id={`dt_history_label_${key}`}
                            label={item.display_name}
                            timestamp={item.order_date}
                            value={Math.abs(+item.order_amount) !== 0 ?
                                <React.Fragment>
                                    {+item.order_amount < 0 && <strong>-</strong>}
                                    <Money
                                        amount={item.order_amount}
                                        currency={currency}
                                    />
                                </React.Fragment>
                                :
                                localize('Cancelled')
                            }
                        />)
                    )
                }
            </div>
        </ThemedScrollbars>
    );
};

ContractHistory.propTypes = {
    currency: PropTypes.string,
    history : PropTypes.array,
};

export default ContractHistory;