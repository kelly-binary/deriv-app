import PropTypes from 'prop-types';
import React from 'react';
import { toJS } from 'mobx';
import { Popover } from '@deriv/components';
import { isDesktop, isMobile } from '@deriv/shared/utils/screen';
import { localize } from '@deriv/translations';
import { isContractElapsed } from 'Stores/Modules/Contract/Helpers/logic';
import { Bounce, SlideIn } from 'App/Components/Animations';
import { getMarketNamesMap } from 'Constants';
import { DigitSpot, LastDigitPrediction } from '../LastDigitPrediction';
import 'Sass/app/modules/contract/digits.scss';

class Digits extends React.PureComponent {
    state = {
        mounted: false,
    };

    // TODO: make Digits into stateless component and fix issue with transition not working without mounted state
    componentDidMount() {
        this.setState({ mounted: true });
    }

    onLastDigitSpot = ({ spot, is_lost, is_selected_winning, is_latest, is_won }) => {
        this.setState({
            is_lost,
            is_won,
            is_latest,
            is_selected_winning,
            spot,
        });
    };

    get popover_message() {
        const { contract_info, is_trade_page, underlying } = this.props;
        const underlying_name = is_trade_page ? underlying : contract_info.underlying;

        return localize(
            `Last digit stats for latest 1000 ticks for ${getMarketNamesMap()[underlying_name.toUpperCase()]}`
        );
    }

    render() {
        const {
            contract_info,
            digits_array,
            digits_info,
            display_status,
            is_digit_contract,
            is_ended,
            is_trade_page,
        } = this.props;

        const has_contract = contract_info.date_start;
        let tick = this.props.tick;

        const is_tick_ready = is_trade_page ? !!tick : true;
        const is_contract_elapsed = is_trade_page ? isContractElapsed(contract_info, tick) : false;

        // tick from contract_info.tick_stream has totally different
        // format from the tick from tick_history api call.
        if (has_contract && !is_contract_elapsed) {
            tick = null;
            const tick_stream = contract_info.tick_stream;
            if (tick_stream && tick_stream.length) {
                const t = toJS(tick_stream.slice(-1)[0]);
                tick = {
                    ask: t.tick,
                    bid: t.tick,
                    epoch: t.epoch,
                    pip_size: t.tick_display_value.split('.')[1].length,
                };
            }
        }

        return (
            <SlideIn
                is_visible={(digits_array || is_digit_contract) && this.state.mounted}
                className='digits__container'
                keyname='digits'
                type='bottom'
            >
                {isMobile() && this.state.spot && (
                    <Bounce is_visible={!!this.state.spot} className='digits__digit-spot' keyname='digits__digit-spot'>
                        <DigitSpot
                            current_spot={this.state.spot}
                            is_lost={this.state.is_lost}
                            is_selected_winning={this.state.is_selected_winning}
                            is_visible={!!(this.state.is_latest && this.state.spot)}
                            is_won={this.state.is_won}
                        />
                    </Bounce>
                )}
                {isDesktop() && (
                    <div className='digits__tooltip-container'>
                        <Popover
                            alignment='top'
                            classNameBubble='digits__tooltip-bubble'
                            icon='info'
                            id='dt_last_digits_info_tooltip'
                            margin={4}
                            message={this.popover_message}
                        />
                    </div>
                )}
                <LastDigitPrediction
                    // dimension of a single digit widget including margin/padding (number)
                    // i.e - 40px + 6px left and 6px right padding/margin = 52
                    dimension={52}
                    has_entry_spot={!!contract_info.entry_tick}
                    barrier={!is_contract_elapsed && is_tick_ready ? +contract_info.barrier : null}
                    contract_type={!is_contract_elapsed && is_tick_ready ? contract_info.contract_type : null}
                    digits={digits_array}
                    digits_info={!is_contract_elapsed && is_tick_ready ? digits_info : {}}
                    is_digit_contract={is_digit_contract}
                    is_ended={is_ended}
                    is_trade_page={is_trade_page}
                    status={!is_contract_elapsed && is_tick_ready ? display_status : null}
                    tick={tick}
                    onLastDigitSpot={this.onLastDigitSpot}
                />
                {isMobile() && <span className='digits__tooltip-text'>{this.popover_message}</span>}
            </SlideIn>
        );
    }
}

Digits.propTypes = {
    contract_info: PropTypes.object,
    digits_info: PropTypes.object,
    display_status: PropTypes.string,
    is_digit_contract: PropTypes.bool,
    is_ended: PropTypes.bool,
    is_trade_page: PropTypes.bool,
};

export default Digits;
