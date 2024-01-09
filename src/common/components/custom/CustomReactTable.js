import MaterialReactTable from "material-react-table";
import { useEffect, useRef, useState } from "react";
import { Components } from "../../components";
import TableFilterContainer from "./TableFilterContainer";
import LoadingCustomOverlay from "../../../modules/common/components/LoadingOverlay";
import { TablePagination } from "@mui/material";

const { Grid, Paper } = Components;

const CustomReactTable = ({ data, columns, options, enableRowVirtualization = false, enableCustomTableFilter = false, filterComponent }) => {
    const virtualizerInstanceRef = useRef(null);
    const [sorting, setSorting] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const { pageSize, count = 500, page = 0, state, enableCustomPagination = true,
        customPagination: {
            handleChangePage,
            handleChangeRowsPerPage,
            rowsPerPageOptions = []
        } = {},
        enableFilters = false, displayColumnDefOptions, getCanMultiSelect, handleRowSelection, requestInProgress = false, ...rest } = options;

    useEffect(() => {
        if (virtualizerInstanceRef.current) {
            virtualizerInstanceRef.current.scrollToIndex(0);
        }
    }, [sorting]);
    return (
        <LoadingCustomOverlay active={requestInProgress} >
            <Paper sx={{ my: 2, pb: 5 }}>
                <MaterialReactTable
                    initialState={{ density: "compact", showHideColumnFilters: "false" }}
                    columns={columns}
                    data={data}
                    state={state}
                    enableFilters={enableFilters}
                    enableRowVirtualization={enableRowVirtualization}
                    virtualizerInstanceRef={enableRowVirtualization && virtualizerInstanceRef}
                    virtualizerProps={{ overscan: 25 }}
                    muiTableContainerProps={{ sx: { maxHeight: "600px" } }}
                    onSortingChange={setSorting}
                    displayColumnDefOptions={displayColumnDefOptions}
                    getCanMultiSelect={getCanMultiSelect}
                    enableColumnFilter={enableFilters ? true : false}
                    onRowSelectionChange={handleRowSelection}
                    enableBottomToolbar={false}
                    enableStickyFooter={false}
                    muiTablePaperProps={{
                        elevation: 0,
                        sx: {
                            borderRadius: "0",
                            border: "none"
                        }
                    }
                    }
                    muiTableBodyCellProps={{
                        sx: {
                            fontSize: "11px",
                            fontFamily: "Franklin Gothic Book"

                        }
                    }}
                    muiTopToolbarProps={{
                        sx: {
                            display: "block",
                            flexDirection: "column",
                            backgroundColor: "white"
                        }
                    }}
                    muiTableHeadCellProps={{
                        sx: {
                            color: "#FFFFFF",
                            fontSize: "14px",
                            fontWeight: 500,
                            mt: 3,
                            borderRadius: "0"
                        }
                    }}
                    muiTableHeadRowProps={{
                        sx: {
                            borderRadius: 3,
                            backgroundColor: "#0275D8"
                        }
                    }}

                    {...rest}
                />
                {enableCustomPagination && <Grid sx={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TablePagination
                        component="div"
                        count={count}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={pageSize}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    {/* <Pagination
                        color="primary"
                        shape="rounded"
                        count={totalPages}
                        page={newPage}
                        onChange={handleChangePage}
                    /> */}
                </Grid>}
                {(enableCustomTableFilter && open) && <TableFilterContainer open={open} setOpen={setOpen} handleOpen={handleOpen} >
                    {filterComponent({ setOpen })}
                </TableFilterContainer>}
            </Paper>
        </LoadingCustomOverlay >
    );
};

export default CustomReactTable;
