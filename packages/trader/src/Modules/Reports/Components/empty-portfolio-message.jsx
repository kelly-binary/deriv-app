import React        from 'react';
import Icon         from 'deriv-components/lib/icon';
import { localize } from 'App/i18n';

const EmptyPortfolioMessage = ({ error }) => (
    <div className='portfolio-empty'>
        <div className='portfolio-empty__wrapper'>
            { error ?
                <span className='portfolio-empty__text'>{error}</span>
                :
                <React.Fragment>
                    <Icon icon='IconPositions' className='portfolio-empty__icon' />
                    <span className='portfolio-empty__text'>{localize('No open positions')}</span>
                </React.Fragment>
            }
        </div>
    </div>
);

export default EmptyPortfolioMessage;
