import React from "react";
import SupplierResultTable from "./supplier/SupplierResultTable";
import { Box } from "@mui/material";
import SpendResultTable from "./spend/SpendResultTable";
import TrendResultTable from "./trend/TrendResultTable";
import { useSelector } from "react-redux";
import { STATE_REDUCER_KEY, TABLE_ID } from "../constants";

const TableWrapper = () => {
    const currentTable = useSelector(state => state[STATE_REDUCER_KEY].table.currentTable);
    if (currentTable === TABLE_ID.SUPPLIER) {
        return <SupplierResultTable />;
    } else if (currentTable === TABLE_ID.SPEND) {
        return <SpendResultTable />;
    } else if (currentTable === TABLE_ID.TREND) {
        return <TrendResultTable />;
    }
    return <Box>
    </Box>;
};

export default TableWrapper;
