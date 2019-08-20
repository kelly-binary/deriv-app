import React                      from 'react';
import PropTypes                  from 'prop-types';
import { getContractTypeDisplay } from 'Constants/contract';
import Icon                       from 'deriv-components/lib/icon';
import { IconTradeTypesMap }      from 'Modules/Trading/Helpers/trade-types';

const ContractTypeCell = ({ type, is_high_low }) => (
    <div className='contract-type'>
        <div className='contract-type__type-wrapper'>
            <Icon
                icon={IconTradeTypesMap[type.toLowerCase()]}
                className='category-type'
            />
        </div>
        <span className='contract-type__type-label'>
            {getContractTypeDisplay(type, is_high_low) || ''}
        </span>
    </div>
);

ContractTypeCell.propTypes = {
    type: PropTypes.string,
};

export default ContractTypeCell;
