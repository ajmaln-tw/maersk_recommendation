import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { STATE_REDUCER_KEY, SUPPLIER_ANALYSIS_COL, supplierAnalysisColumnOrder } from "../../constants";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../../common/constants";

import CustomReactTable from "../../../../common/components/custom/CustomReactTable";

const SupplierResultTable = () => {
    const { table: { supplierAnalysisResult = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data = [], requestInProgress: loading = false } = supplierAnalysisResult;

    const columns = useMemo(
        () => SUPPLIER_ANALYSIS_COL,
        []
    );
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: loading,
        enableCustomPagination: false,
        initialState: {
            columnOrder: supplierAnalysisColumnOrder
        }
    };
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

export default SupplierResultTable;
