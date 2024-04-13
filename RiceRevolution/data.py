varietiesData = {
    "1": {
        "id": "1",
        "name": "Jasmine Rice",
        "url": "https://www.recipetineats.com/wp-content/uploads/2020/06/Jasmine-Rice_8.jpg",
        "desc": "Jasmine rice, grown primarily in Thailand, is known for its fragrant aroma and soft, slightly sticky texture. Its versatility and subtle floral flavor make it a popular choice for a wide range of dishes, especially in Southeast Asian cuisine."
    },
    "2": {
        "id": "2",
        "name": "Brown Rice",
        "url": "https://www.recipetineats.com/wp-content/uploads/2020/09/Perfectly-Cooked-Brown-Rice_7-SQ.jpg",
        "desc": "Brown rice, a whole grain rice variety, retains its bran and germ layers, offering more nutrients and fiber compared to white rice. With its nutty flavor and chewy texture, brown rice is a wholesome choice for a variety of dishes, providing a hearty base for meals while promoting better overall health."
    },
    "3": {
        "id": "3",
        "name": "Basmati Rice",
        "url": "https://www.recipetineats.com/wp-content/uploads/2020/03/Basmati-rice.jpg",
        "desc": "Basmati rice, grown in the Indian subcontinent, has long, slender grains with a nutty aroma, while jasmine rice, from Thailand, features a softer texture and subtle floral fragrance. Despite these distinctions, both are cherished for their unique flavors and are popular staples in global cuisine."
    }
}

imageData = {
    "RiceCookerImage_closed": {
        "id":"RiceCookerImage_closed",
        "url":"https://thumb.ac-illust.com/55/553340fc11deead72c98afe881b756a3_t.jpeg",
        "altText":"Closed Rice Cooker Image"
    },
    "RiceCookerImage_open": {
        "id":"RiceCookerImage_open",
        "url":"https://thumb.ac-illust.com/a9/a9c394bfc05b9f226a7d8b7a5251880b_t.jpeg",
        "altText":"Open Rice Cooker Image"
    },
    "WaterImage": {
        "id":"WaterImage",
        "url":"https://cdn.vectorstock.com/i/500p/97/30/sticker-glass-of-water-on-white-background-vector-39679730.jpg",
        "altText":"Water Image"
    },
    "RawRice" : {
        "id":"RawRice",
        "url":"https://classroomclipart.com/image/static7/preview2/cooked-white-rice-in-a-bowl-59803.jpg",
        "altText":"Raw Rice Image"
    },
    "OpenPot" : {
        "id":"OpenPot",
        "url":"https://img.freepik.com/premium-vector/open-stainless-steel-pan-transparent-glass-lid-isolated-background-realistic-3d-vector-illustration-cookware-kitchen-utensils-mockup_545793-2024.jpg",
        "altText":"Open Pot Image"
    },
    "ClosedPot" : {
        "id":"ClosedPot",
        "url":"https://us.123rf.com/450wm/natsumi93/natsumi932109/natsumi93210900030/174126283-two-handled-pot-vector-illustration.jpg?ver=6",
        "altText":"Closed Pot Image"
    },
    "Stove" : {
        "id":"Stove",
        "url":"https://thumbs.dreamstime.com/b/portable-stove-flame-cooking-outdoors-isolated-fire-appliance-preparing-food-dishes-camping-comfortable-291720860.jpg",
        "altText":"Stove Image"
    }
}

riceCookerSteps = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "You'll need your rice of choice, some water, and a rice cooker.",
        "instructions": "",
        "images": ["RiceCookerImage_closed", "WaterImage", "RawRice"]
    },
    "1": {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using the measuring cup provided with the rice cooker. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "Drag the water into the rice to wash it.",
        "images": ["RawRice", "WaterImage"]
    },
    "2": {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to the inner pot of the rice cooker. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked.",
        "instructions": "Drag and drop the rice and water into the pot.",
        "images": ["RawRice", "WaterImage"]
    },
    "3": {
        "id": "3",
        "step": "3",
        "subheader": "Place the inner pot into the rice cooker and close the lid securely. Select the appropriate cooking setting based on the type of rice being cooked.",
        "instructions": "Click on the rice cooker to close it, and set the timer.",
        "images": ["RiceCookerImage_closed"]
    },
    "4": {
        "id": "4",
        "step": "4",
        "subheader": "Once the rice cooker indicates that the rice is ready, allow the rice to rest for a few minutes before fluffing it with a fork. Serve the cooked rice as desired.",
        "instructions": "Click on the rice cooker to open it!",
        "images": ["RiceCookerImage_closed", "RiceCookerImage_open"]
    }
}

noRiceCookerSteps = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "Make perfect, fluffy rice with tools you already have. You’ll need your rice, some water, and a pot.",
        "instructions": "",
        "images": ["RawRice", "WaterImage", "ClosedPot"]
    },
    "1" : {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using a measuring cup. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "",
        "images": ["RawRice"]
    },
    "2" : {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to a pot or saucepan. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked.",
        "instructions": "",
        "images": ["RawRice", "WaterImage", "OpenPot"]
    },
    "3" : {
        "id": "3",
        "step": "3",
        "subheader": "Place the pot or saucepan on the stovetop over medium heat. Bring the water to a boil, then reduce the heat to low and cover the pot with a lid.",
        "instructions": "",
        "images": ["OpenPot", "StoveTop", "ClosedPot"]
    },
    "4" : {
        "id": "4",
        "step": "4",
        "subheader": "Allow the rice to simmer for the recommended cooking time, typically 15-20 minutes. Avoid lifting the lid while the rice is cooking to prevent steam from escaping.",
        "instructions": "",
        "images": ["ClosedPot", "StoveTop"]
    },
    "5" : {
        "id": "5",
        "step": "5",
        "subheader": "Once the rice is cooked, remove the pot from the heat and let it rest for a few minutes. Fluff the rice with a fork before serving.",
        "instructions": "",
        "images": ["OpenPot", "ClosedPot"]
    }
}
