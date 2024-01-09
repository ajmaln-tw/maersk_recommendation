import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY, TREND_ANALYSIS_COL, trendAnalysisColumnOrder } from "../../constants";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../../common/constants";
import { actions as sliceActions } from "../../slice";
import CustomReactTable from "../../../../common/components/custom/CustomReactTable";

const TrendResultTable = () => {
    const dispatch = useDispatch();
    const { table: { trendAnalysisResult = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data = [], requestInProgress: loading = false } = trendAnalysisResult;

    const columns = useMemo(
        () => TREND_ANALYSIS_COL,
        []
    );
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: loading,
        enableCustomPagination: false,
        initialState: {
            columnOrder: trendAnalysisColumnOrder
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

export default TrendResultTable;
