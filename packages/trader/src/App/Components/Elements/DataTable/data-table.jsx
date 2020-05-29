import classNames from 'classnames';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import { VariableSizeList as List } from 'react-window';
import { ThemedScrollbars } from '@deriv/components';
import PropTypes from 'prop-types';
import React from 'react';
import TableRow from './table-row.jsx';

/* TODO:
      1. implement sorting by column (ASC/DESC)
      2. implement filtering per column
*/

const ListScrollbar = React.forwardRef((props, ref) => <ExtendedScrollbars {...props} forwardedRef={ref} />);

// Display name is required by Developer Tools to give a name to the components we use.
// If a component doesn't have a displayName is will be shown as <Unknown />. Hence, name is set.
ListScrollbar.displayName = 'ListScrollbar';

const ExtendedScrollbars = ({ onScroll, forwardedRef, style, children }) => {
    const refSetter = React.useCallback(scrollbarsRef => {
        if (scrollbarsRef) {
            forwardedRef(scrollbarsRef.view);
        } else {
            forwardedRef(null);
        }
    }, []);

    return (
        <ThemedScrollbars ref={refSetter} style={{ ...style, overflow: 'hidden' }} onScroll={onScroll} autoHide>
            {children}
        </ThemedScrollbars>
    );
};

class DataTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            height: 200,
            width: 200,
            window_width: 1024,
        };
    }

    componentDidMount() {
        this.setState({
            height: this.props.custom_height || this.el_table_body.clientHeight,
            width: this.props.custom_width || this.el_table_body.clientWidth,
            window_width: window.innerWidth,
        });
    }

    rowRenderer = ({
        data,
        index, // Index of row
        style, // Style object to be applied to row (to position it);
    }) => {
        const { className, getRowAction, columns, preloaderCheck, id, getActionColumns } = this.props;
        const item = data[index];
        const action = getRowAction && getRowAction(item);
        const contract_id = data[index].contract_id || data[index].id;

        // If row content is complex, consider rendering a light-weight placeholder while scrolling.
        const content = (
            <TableRow
                className={className}
                row_obj={item}
                columns={columns}
                id={contract_id}
                key={id}
                to={typeof action === 'string' ? action : undefined}
                show_preloader={typeof preloaderCheck === 'function' ? preloaderCheck(item) : null}
                replace={typeof action === 'object' ? action : undefined}
                getActionColumns={getActionColumns}
            />
        );

        return <div style={style}>{content}</div>;
    };

    render() {
        const {
            children,
            className,
            columns,
            data_source,
            footer,
            getActionColumns,
            getRowSize,
            is_empty,
            onScroll,
        } = this.props;

        const TableData = (
            <React.Fragment>
                <List
                    className={className}
                    height={this.state.height}
                    itemCount={data_source.length}
                    itemData={data_source}
                    itemSize={getRowSize}
                    width={this.state.width}
                    outerElementType={is_empty ? null : ListScrollbar}
                >
                    {this.rowRenderer}
                </List>
                {children}
            </React.Fragment>
        );

        return (
            <div
                className={classNames('table', {
                    [`${className}`]: className,
                    [`${className}__table`]: className,
                    [`${className}__content`]: className,
                })}
            >
                <div
                    className='table__head'
                    ref={el => {
                        this.el_table_head = el;
                    }}
                >
                    <TableRow className={className} columns={columns} is_header getActionColumns={getActionColumns} />
                </div>
                <div
                    className='table__body'
                    ref={el => {
                        this.el_table_body = el;
                    }}
                    onScroll={onScroll}
                >
                    {TableData}
                </div>

                {footer && (
                    <div className='table__foot'>
                        <TableRow
                            className={className}
                            row_obj={footer}
                            columns={columns}
                            is_footer
                            getActionColumns={getActionColumns}
                        />
                    </div>
                )}
            </div>
        );
    }
}

DataTable.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    className: PropTypes.string,
    columns: PropTypes.array,
    data_source: MobxPropTypes.arrayOrObservableArray,
    footer: PropTypes.object,
    getRowAction: PropTypes.func,
    getRowSize: PropTypes.func,
    onScroll: PropTypes.func,
};

export default DataTable;
