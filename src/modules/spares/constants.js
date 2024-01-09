import _ from "lodash";
export const STATE_REDUCER_KEY = "spares";


export const VESSEL_RECOMMENDATION_TABLE_COLUMN = [
    {
        id: "item",
        header: "Item Name",
        accessorFn: (row) => _.keys(row)[0] || "",
        size: 150
    },
    {
        id: "quantity",
        header: "Quantity",
        accessorFn: (row) => Math.floor(_.values(row)[0]) || _.values(row)[0],
        size: 150
    }
];
export const vesselRecommendationColumnOrder = [
    "item",
    "quantity"
];

export const vesselDropDown = [
    {
        id: 629310,
        name: "Romeo"
    },
    {
        id: 683118,
        name: "BOURBON EXPLORER 500"
    },
    {
        id: 683546,
        name: "Green"
    },
    {
        id: 864997,
        name: "Mike"
    },
    {
        id: 865038,
        name: "Kilo"
    }
];

export const jobPlanDropDown = [
    {
        id: "2000 HOURS ROUTINE",
        name: "2000 HOURS ROUTINE"
    },
    {
        id: "8000 HOURS ROUTINE",
        name: "8000 HOURS ROUTINE"
    },
    {
        id: "16000 HOURS ROUTINE",
        name: "16000 HOURS ROUTINE"
    }
];

export const equipmentDropDownObj = {
    Romeo: [
        {
            id: "AE LUBE OIL PURIFIER NO.1",
            name: "AE LUBE OIL PURIFIER NO.1"
        },
        {
            id: "AE LUBE OIL PURIFIER NO.1",
            name: "AE LUBE OIL PURIFIER NO.1"
        }
    ],
    "BOURBON EXPLORER 500": [
        {
            id: "AE 1 CYLINDER HEAD UNIT 1",
            name: "AE 1 CYLINDER HEAD UNIT 1"
        }
    ],
    Green: [
        {
            id: "AE 1 CYLINDER HEAD UNIT 1",
            name: "AE 1 CYLINDER HEAD UNIT 1"
        },
        {
            id: "AE 2 FUEL VALVE NO.2",
            name: "AE 2 FUEL VALVE NO.2"
        },
        {
            id: "AE 2 FUEL VALVE NO.3",
            name: "AE 2 FUEL VALVE NO.3"
        },
        {
            id: "AE 2 FUEL VALVE NO.4",
            name: "AE 2 FUEL VALVE NO.4"
        },
        {
            id: "AE 2 FUEL VALVE NO.5",
            name: "AE 2 FUEL VALVE NO.5"
        },
        {
            id: "AE 2 FUEL VALVE NO.6",
            name: "AE 2 FUEL VALVE NO.6"
        },
        {
            id: "AE 2 FUEL VALVE NO.7",
            name: "AE 2 FUEL VALVE NO.7"
        }
    ],
    Mike: [
        {
            id: "AE LUBE OIL PURIFIER NO.3",
            name: "AE LUBE OIL PURIFIER NO.3"
        },
        {
            id: "ME LO PURIFIER NO.2",
            name: "ME LO PURIFIER NO.2"
        }
    ],
    Kilo: [
        {
            id: "AE LUBE OIL PURIFIER NO.1",
            name: "AE LUBE OIL PURIFIER NO.1"
        }
    ]
};
