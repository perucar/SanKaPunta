module.exports = {
    regions: [
        {region_id: 1,
        name: "Region 1",
        created_by: "marklee",
        date_created: '2022-10-10',
        updated_by: "haechan",
        date_updated: '2022-10-10'
        },
        {region_id: 2,
            name: "Region 2",
            created_by: "yuta",
            date_created: '2022-10-10',
            updated_by: "marklee",
            date_updated: '2022-10-10'
        },
        {
            region_id: 3,
            name: "National Capital Region",
            created_by: "leetyong",
            date_created: '2022-08-28',
            updated_by: "leetyong",
            updated_by: '2022-08-28'

        }
    ],
    provinces: [
        {
            province_id: 1,
            region_id: 3,
            name: 'City of Makati',
            latitude: '14.554084',
            longitude: '121.025077',
            created_by: 'kimjungwoo',
            date_created: '2022-08-28',
            updated_by: 'kimjungwoo',
            date_updated: '2022-08-28'
        }
    ]
}