import classNames   from 'classnames';
import React        from 'react';
import PropTypes    from 'prop-types';
import Input        from '../input';
import DropdownList from '../dropdown-list';

// TODO: use-from-shared - Use this icon from icons' shared package
const IconArrow = ({ className, classNamePath }) => (
    <svg className={ classNames('inline-icon', className) } width='16' height='16'>
        <path
            className={ classNames(classNamePath, 'color1-fill') }
            fill='rgba(0, 0, 0, 0.8)'
            fillRule='nonzero'
            d='M13.164 5.13a.5.5 0 1 1 .672.74l-5.5 5a.5.5 0 0 1-.672 0l-5.5-5a.5.5 0 0 1 .672-.74L8 9.824l5.164-4.694z'
        />
    </svg>
);

class Autocomplete extends React.PureComponent {
    state = {
        should_show_list: false,
        filtered_items  : null,
        input_value     : '',
    };

    setInputWrapperRef = (node) => this.input_wrapper_ref = node;

    // TODO: Prevent form submission when user is finished typing and keys in Enter
    onKeyPressed = (event) => {
        if (this.state.should_show_list) {
            // keycode == 13 is Enter key
            if (event.keyCode === 13) event.preventDefault();
        }
    };

    onBlur = (e) => {
        event.preventDefault();
        this.hideDropdownList();

        this.setState({
            filtered_items: this.props.list_items,
        });
        if (this.state.input_value === 'NaN' && typeof this.props.onItemSelection === 'function') {
            this.props.onItemSelection({
                text : 'No results found', // TODO: add localize
                value: '',
            });
        }
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(e);
        }
    };

    onItemSelection = (item) => {
        this.setState({
            input_value: item.text ? item.text : item,
        }, () => {
            this.setState({
                filtered_items: this.props.list_items.filter(i => i.text === this.state.input_value),
            });
        });

        if (typeof this.props.onItemSelection === 'function') {
            this.props.onItemSelection(item);
        }
    };

    showDropdownList = () => {
        this.setState({ should_show_list: true });
    };

    hideDropdownList = () => {
        this.setState({ should_show_list: false });
    };

    filterList = (e) => {
        const val = e.target.value.toLowerCase();

        const is_string_array = this.props.list_items.length && typeof this.props.list_items[0] === 'string';

        const get_filtered_items = () => {
            const list = this.props.list_items.filter(item => (
                is_string_array ?
                    item.toLowerCase().startsWith(val)
                    : item.text.toLowerCase().startsWith(val)
            ));
            if (!list.length) {
                list.push({
                    text : 'No results found', // TODO: add localize
                    value: '',
                });
                this.setState({ input_value: 'NaN' });
            }
            return list;
        };

        this.setState(
            {
                filtered_items: val ?
                    get_filtered_items()
                    : null,
            }
        );
    };

    render() {
        const {
            className,
            dropdown_offset,
            onItemSelection,
            value,
            list_items,
            autoComplete,
            ...otherProps
        } = this.props;

        return (
            <div className={ classNames('dc-autocomplete', className) }>
                <div ref={ this.setInputWrapperRef } className='dc-autocomplete__input-field'>
                    <Input
                        { ...otherProps }
                        className='dc-autocomplete__field'
                        autoComplete={autoComplete}
                        onKeyDown={this.onKeyPressed}
                        onFocus={(e) => this.showDropdownList(e) }
                        onInput={ this.filterList }
                        // Field's onBlur still needs to run to perform form functions such as validation
                        onBlur={ this.onBlur }
                        value={
                            // This allows us to let control of value externally (from <Form/>) or internally if used without form
                            typeof onItemSelection === 'function' ?
                                value
                                :
                                this.state.input_value
                        }
                        trailing_icon={
                            <IconArrow
                                className={ {
                                    'dc-autocomplete__trailing-icon'        : true,
                                    'dc-autocomplete__trailing-icon--opened': this.state.should_show_list,
                                } }
                            />
                        }
                    />
                </div>
                <DropdownList
                    style={ {
                        width    : this.input_wrapper_ref ? `${ this.input_wrapper_ref.offsetWidth }px` : '100%',
                        marginTop: dropdown_offset ? `calc(-${dropdown_offset} + 8px)` : '8px', // 4px is the standard margin. In case of error, the list should overlap the error
                        // TODO confirm placement of dropdown list and positioning of error
                        // marginTop: form.errors[field.name] ? 'calc(4px - 18px)' : '4px', // 4px is the standard margin. In case of error, the list should overlap the error
                    } }
                    is_visible={ this.state.should_show_list }
                    list_items={ this.state.filtered_items || list_items }
                    // Autocomplete must use the `text` property and not the `value`, however DropdownList provides access to both
                    onItemSelection={ this.onItemSelection }
                />
            </div>
        );
    }
}

export default Autocomplete;

Autocomplete.propTypes = {
    list_items: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(
            PropTypes.shape({
                text : PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ),
    ]),
    onItemSelection: PropTypes.func,
};
