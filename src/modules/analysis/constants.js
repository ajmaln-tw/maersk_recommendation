export const STATE_REDUCER_KEY = "analysis";
export const TABLE_ID = {
    SUPPLIER: "SUPPLIER",
    SPEND: "SPEND",
    TREND: "TREND"
};

export const SPEND_ANALYSIS_COL = [
    {
        id: "vendor",
        header: "Vendor",
        accessorFn: (row) => row.vendor,
        size: 180
    },
    {
        id: "item section 1",
        header: "Item Section 1",
        accessorKey: "item section 1",
        size: 200
    },
    {
        id: "item section 2",
        header: "Item Section 2",
        accessorKey: "item section 2",
        size: 150
    },
    {
        id: "item",
        header: "Item Name",
        accessorKey: "item",
        size: 200
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
        size: 120
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
        size: 150
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
        size: 200
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
        header: "ITEM_SECTION 1",
        accessorKey: "ITEM_SECTION_1",
        size: 200
    },
    {
        id: "ITEM_SECTION_2",
        header: "ITEM SECTION 2",
        accessorKey: "ITEM_SECTION_2",
        size: 200
    },
    {
        id: "ITEM",
        header: "ITEM",
        accessorKey: "ITEM",
        size: 200
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
        size: 200
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

export const SUPPLIER_ANALYSIS_COL = [
    {
        id: "Vendor",
        header: "Vendor",
        accessorKey: "Vendor",
        size: 130
    },
    {
        id: "Port",
        header: "Port",
        accessorKey: "Port",
        size: 130
    },
    {
        id: "Mean_Lead_Time",
        header: "Mean Lead Time",
        accessorFn: (row) => row.Mean_Lead_Time.length ? row.Mean_Lead_Time.join(", ") : "",
        size: 130
    },
    {
        id: "Item",
        header: "Items",
        accessorFn: (row) => {
            const Item = row?.Item;
            return (Item && Item?.length) ? Item.join(", ") : "";
        },
        size: 200
    },
    {
        id: "Total_Price Per item",
        header: "Total Price per Item",
        accessorKey: "Total_Price per item",
        accessorFn: (row) => {
            const totalPricePerItem = row["Total_Price per item"];
            return (totalPricePerItem && totalPricePerItem?.length) ? totalPricePerItem.join(", ") : "";
        },
        size: 130
    },
    {
        id: "RATING",
        header: "Rating",
        accessorKey: "Rating",
        size: 130
    }

];

export const supplierAnalysisColumnOrder = [
    "Vendor",
    "Port",
    "VENDOR",
    "Mean_Lead_Time",
    "Item",
    "Total_Price per item",
    "ITEM_SECTION_2",
    "RATING"
];
