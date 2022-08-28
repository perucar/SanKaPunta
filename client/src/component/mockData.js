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
    ],
    province_info: [
        {
            province_info_id: 1,
            province_id: 3,
            title: "Makati City, a spectacle",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo id quam gravida euismod vitae nec risus. Cras venenatis tempus massa non lacinia. Cras malesuada convallis magna, vel tristique mi pellentesque ac. Cras et nibh quis felis fermentum faucibus tempus eu nisi. Donec purus est, bibendum a eros vitae, varius sagittis leo. Aenean ac felis laoreet, fermentum augue commodo, vulputate quam. Pellentesque dignissim arcu in ipsum molestie, ac ultricies dui semper. \nCras mattis scelerisque ex, at varius massa aliquam at. Morbi fermentum ultrices diam eu tempus. Morbi vel est arcu. Donec at purus vel orci accumsan mattis vitae a orci. Sed laoreet elit sed lacus auctor, a tincidunt orci bibendum. Vivamus elementum pharetra sapien, in ullamcorper massa tristique eget. In quis arcu turpis. Donec ultrices neque a massa euismod facilisis. Etiam ex felis, porttitor et enim eget, fermentum tincidunt tellus. Sed malesuada tempus pulvinar. Cras vitae tellus turpis. Cras ut semper turpis, eu dapibus eros. Praesent non neque accumsan, fringilla dui at, suscipit nisl. Aenean vestibulum magna imperdiet odio molestie laoreet a et nisi.',
            image: 'https://preview.redd.it/ftz2hxtytuj01.jpg?auto=webp&s=633c29a9f2b860ed0e52fd52085aafa79fa350dc',
            category_id: 1,
            created_by: 'kimjungwoo',
            date_created: '2022-08-28',
            updated_by: 'kimjungwoo',
            date_updated: '2022-08-28'
        },
        {
            province_info_id: 2,
            province_id: 3,
            title: "Alam niyo ba na ganito sa Makati?",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo id quam gravida euismod vitae nec risus. Cras venenatis tempus massa non lacinia. Cras malesuada convallis magna, vel tristique mi pellentesque ac. Cras et nibh quis felis fermentum faucibus tempus eu nisi. Donec purus est, bibendum a eros vitae, varius sagittis leo. Aenean ac felis laoreet, fermentum augue commodo, vulputate quam. Pellentesque dignissim arcu in ipsum molestie, ac ultricies dui semper. \nCras mattis scelerisque ex, at varius massa aliquam at. Morbi fermentum ultrices diam eu tempus. Morbi vel est arcu. Donec at purus vel orci accumsan mattis vitae a orci. Sed laoreet elit sed lacus auctor, a tincidunt orci bibendum. Vivamus elementum pharetra sapien, in ullamcorper massa tristique eget. In quis arcu turpis. Donec ultrices neque a massa euismod facilisis. Etiam ex felis, porttitor et enim eget, fermentum tincidunt tellus. Sed malesuada tempus pulvinar. Cras vitae tellus turpis. Cras ut semper turpis, eu dapibus eros. Praesent non neque accumsan, fringilla dui at, suscipit nisl. Aenean vestibulum magna imperdiet odio molestie laoreet a et nisi.',
            image: 'https://preview.redd.it/ftz2hxtytuj01.jpg?auto=webp&s=633c29a9f2b860ed0e52fd52085aafa79fa350dc',
            category_id: 2,
            created_by: 'kimjungwoo',
            date_created: '2022-08-28',
            updated_by: 'kimjungwoo',
            date_updated: '2022-08-28'
        }
    ]
}