import React, { useEffect, useMemo } from "react";
import CustomReactTable from "../../../common/components/custom/CustomReactTable";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY, VESSEL_RECOMMENDATION_TABLE_COLUMN, vesselRecommendationColumnOrder } from "../constants";
import { REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import { actions as sliceActions } from "../slice";

const RecommendationList = () => {
    const dispatch = useDispatch();
    const { table: { sparesRecommendation = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data: recommendationList = [], requestInProgress: loading = false } = sparesRecommendation;

    const columns = useMemo(
        () => VESSEL_RECOMMENDATION_TABLE_COLUMN,
        []
    );
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: loading,
        enableCustomPagination: false,
        initialState: {
            columnOrder: vesselRecommendationColumnOrder
        }
    };

    useEffect(() => {
        return (() => dispatch(sliceActions.clearAll()));
    }, []);
    return (
        <CustomReactTable
            data={recommendationList}
            columns={columns}
            options={options}
            enableRowVirtualization={false}
            enableCustomTableFilter={true}
        />
    );
};

export default RecommendationList;
