import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SPEND_ANALYSIS_COL, STATE_REDUCER_KEY, spendAnalysisColumnOrder } from "../../constants";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../../common/constants";
import { actions as sliceActions } from "../../slice";
import CustomReactTable from "../../../../common/components/custom/CustomReactTable";

const SpendResultTable = () => {
    const dispatch = useDispatch();
    const { table: { spendAnalysisResult = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data = [], requestInProgress: loading = false } = spendAnalysisResult;

    const columns = useMemo(
        () => SPEND_ANALYSIS_COL,
        []
    );
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: loading,
        enableCustomPagination: false,
        initialState: {
            columnOrder: spendAnalysisColumnOrder
        }
    };

    useEffect(() => {
        return (() => dispatch(sliceActions.clearAll()));
    }, []);
    return (
        <CustomReactTable
            data={data}
            columns={columns}
            options={options}
            enableRowVirtualization={false}
            enableCustomTableFilter={true}
        />
    );
};

export default SpendResultTable;