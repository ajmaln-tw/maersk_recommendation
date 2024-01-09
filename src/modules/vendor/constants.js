export const STATE_REDUCER_KEY = "vendor";


export const VESSEL_RECOMMENDATION_TABLE_COLUMN = [
    {
        id: "Vendor_Id",
        header: "Vendor ID",
        accessorFn: (row) => row.Vendor_Id,
        size: 150
    },
    {
        id: "Vendor_Name",
        header: "Vendor Name",
        accessorKey: "Vendor_Name",
        size: 250
    },
    {
        id: "Score",
        header: "Score",
        accessorFn: (row) => row.Score,
        size: 250
    }
];
export const vesselRecommendationColumnOrder = [
    "Vendor_Id",
    "Vendor_Name",
    "Score"
];


export let vesselRecommendationTable = [
    { vendorID: 15284, venderDetails: "Resolve Marine Group Inc", score: 100 },
    { vendorID: 17013, venderDetails: "O'Brien's Response Management L.L.C", score: 98 },
    { vendorID: 2423, venderDetails: "Deckma Hamburg GmbH", score: 97 },
    { vendorID: 2375, venderDetails: "Epsco (Cyprus) Ltd", score: 96 },
    { vendorID: 361427, venderDetails: "Veritas Petroleum Services BV", score: 95 },
    { vendorID: 2550, venderDetails: "ISS Group Holdings Limited", score: 94 },
    { vendorID: 2724, venderDetails: "HMS FAR East Pte Ltd", score: 93 },
    { vendorID: 19231, venderDetails: "Mellina Agosta S.R.L", score: 92 }

];
