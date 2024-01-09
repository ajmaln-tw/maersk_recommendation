export const STATE_REDUCER_KEY = "analysis";


export const SPEND_ANALYSIS_COL = [
    {
        id: "vendor",
        header: "Vendor",
        accessorFn: (row) => row.vendor,
        size: 80
    },
    {
        id: "item section 1",
        header: "Item Section 1",
        accessorKey: "item section 1",
        size: 80
    },
    {
        id: "item section 2",
        header: "Item Section 2",
        accessorKey: "item section 2",
        size: 100
    },
    {
        id: "item",
        header: "Item Name",
        accessorKey: "item",
        size: 100
    },
    {
        id: "Transactional_volume",
        header: "Transactional Volume",
        accessorKey: "Transactional_volume",
        size: 180
    },
    {
        id: "max_unit_price",
        header: "Max. Unit Price",
        accessorKey: "max_unit_price",
        size: 180
    },
    {
        id: "port",
        header: "Port",
        accessorKey: "port",
        size: 100
    },
    {
        id: "avg lead time",
        header: "Avg. lead time",
        accessorKey: "avg lead time",
        size: 180
    },
    {
        id: "receipt date",
        header: "Receipt date",
        accessorKey: "receipt date",
        size: 100
    },
    {
        id: "vendor_total_price",
        header: "Vendor total price",
        accessorKey: "vendor_total_price",
        size: 180
    },
    {
        id: "vendor_po_qty_total",
        header: "Vendor PO Quantity Total",
        accessorKey: "vendor_po_qty_total",
        size: 200
    }
];
///vendor_po_qty_total
export const spendAnalysisColumnOrder = [
    "vendor",
    "item section 1",
    "item section 2",
    "item",
    "Transactional_volume",
    "max_unit_price",
    "port",
    "avg lead time",
    "receipt date",
    "vendor_total_price",
    "vendor_po_qty_total"
];


export const TREND_ANALYSIS_COL = [
    {
        id: "ITEM_CATEGORY",
        header: "ITEM CATEGORY",
        accessorKey: "ITEM_CATEGORY",
        size: 130
    },
    {
        id: "VENDOR_ID",
        header: "VENDOR ID",
        accessorKey: "VENDOR_ID",
        size: 100
    },
    {
        id: "VENDOR",
        header: "VENDOR",
        accessorKey: "VENDOR",
        size: 100
    },
    {
        id: "PORT_ID",
        header: "PORT ID",
        accessorKey: "PORT_ID",
        size: 80
    },
    {
        id: "PORT_NAME",
        header: "PORT NAME",
        accessorKey: "PORT_NAME",
        size: 130
    },
    {
        id: "ITEM_SECTION_1",
        header: "ITEM_SECTION_1",
        accessorKey: "ITEM_SECTION_1",
        size: 100
    },
    {
        id: "ITEM_SECTION_2",
        header: "ITEM SECTION 2",
        accessorKey: "ITEM_SECTION_2",
        size: 100
    },
    {
        id: "ITEM",
        header: "ITEM",
        accessorKey: "ITEM",
        size: 80
    },
    {
        id: "MIN_UNIT_PRICE",
        header: "MIN UNIT PRICE",
        accessorKey: "MIN_UNIT_PRICE",
        size: 130
    },
    {
        id: "RECEIPT_DATE",
        header: "RECEIPT DATE",
        accessorKey: "RECEIPT_DATE",
        size: 130
    }
];

export const trendAnalysisColumnOrder = [
    "ITEM_CATEGORY",
    "VENDOR_ID",
    "VENDOR",
    "PORT_ID",
    "PORT_NAME",
    "ITEM_SECTION_1",
    "ITEM_SECTION_2",
    "ITEM",
    "MIN_UNIT_PRICE",
    "RECEIPT_DATE"
];
