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
    },
    "LadleWithHand" : {
        "id":"LadleWithHand",
        "url":"https://us.123rf.com/450wm/ssstocker/ssstocker2301/ssstocker230100290/197154315-hand-hold-ladle-cartoon-cooking-tool-icon.jpg?ver=6",
        "altText":"Ladle with Hand Image"
    },
    "BakingSheet" : {
        "id":"BakingSheet",
        "url":"https://static.vecteezy.com/system/resources/thumbnails/013/477/900/small/flat-styled-art-illustration-of-metal-pans-for-baking-in-oven-oven-tray-isolated-on-white-background-for-cafe-vector.jpg",
        "altText":"Baking Sheet Image"
    },
    "FryingPan" : {
        "id":"FryingPan",
        "url":"https://4vector.com/i/free-vector-frying-pan-clip-art_105619_Frying_Pan_clip_art_hight.png",
        "altText":"Frying Pan Image"
    },
    "Oven": {
        "id":"Oven",
        "url":"https://www.clker.com/cliparts/i/u/3/9/7/z/oven-hi.png",
        "altText":"Oven Image"
    },
    "CrispyRice": {
        "id":"CrispyRice",
        "url":"https://www.southernliving.com/thmb/yypNBJ3S3AnxwI7URPfWS-hAfRY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1165997242-2000-79aea764c0194bcea75ebfb48012fe57-84ad4e335b324e94b814a4e25c841aa5.jpg",
        "altText":"Crispy Rice Image"
    }
}

riceCookerSteps = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "You'll need your rice of choice, some water, and a rice cooker.",
        "instructions": "",
        "images": ["RiceCookerImage_closed", "WaterImage", "RawRice"],
        "clickable": [False, False, False],
        "draggable": [False, False, False],
        "droppable": [False, False, False]
    },
    "1": {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using the measuring cup provided with the rice cooker. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "Drag the water into the rice to wash it.",
        "images": ["RawRice", "WaterImage"],
        "clickable": [False, False],
        "draggable": [False, True],
        "droppable": [True, False]
    },
    "2": {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to the inner pot of the rice cooker. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked.",
        "instructions": "Drag and drop the rice and water into the pot.",
        "images": ["RawRice", "WaterImage", "RiceCookerImage_open"],
        "clickable": [False, False, False],
        "draggable": [True, True, False],
        "droppable": [False, False, True]
    },
    "3": {
        "id": "3",
        "step": "3",
        "subheader": "Place the inner pot into the rice cooker and close the lid securely. Select the appropriate cooking setting based on the type of rice being cooked.",
        "instructions": "Click on the rice cooker to close it fully (and set the timer).",
        "images": ["RiceCookerImage_open"],
        "clickable": [True],
        "draggable": [False],
        "droppable": [False]
    },
    "4": {
        "id": "4",
        "step": "4",
        "subheader": "Once the rice cooker indicates that the rice is ready, allow the rice to rest for a few minutes before fluffing it with a fork. Serve the cooked rice as desired.",
        "instructions": "Click on the rice cooker to open it!",
        "images": ["RiceCookerImage_closed"],
        "clickable": [True],
        "draggable": [False],
        "droppable": [False]
    }
}

noRiceCookerSteps = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "Make perfect rice with tools you already have. You’ll need your rice, some water, and a pot.",
        "instructions": "",
        "images": ["RawRice", "WaterImage", "ClosedPot"],
        "clickable": [False, False, False],
        "draggable": [False, False, False],
        "droppable": [False, False, False]
    },
    "1" : {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using a measuring cup. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "Drag the water into the rice to wash it.",
        "images": ["RawRice", "WaterImage"],
        "clickable": [False, False],
        "draggable": [False, True],
        "droppable": [True, False]
    },
    "2" : {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to a pot or saucepan. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked.",
        "instructions": "Drag and drop the rice and water into the pot.",
        "images": ["RawRice", "WaterImage", "OpenPot"],
        "clickable": [False, False, False],
        "draggable": [True, True, False],
        "droppable": [False, False, True]
    },
    "3" : {
        "id": "3",
        "step": "3",
        "subheader": "Place the pot or saucepan on the stovetop over medium heat. Bring the water to a boil, stir to ensure nothing sticks, then reduce the heat to low and cover the pot with a lid.",
        "instructions": "Drag the pot to the stove and turn on the heat.",
        "images": ["OpenPot", "Stove"],
        "clickable": [False, False],
        "draggable": [True, False],
        "droppable": [False, True]
    },
    "4" : {
        "id": "4",
        "step": "4",
        "subheader": "Allow the rice to simmer for the recommended cooking time, typically 15-20 minutes. Avoid lifting the lid while the rice is cooking to prevent steam from escaping.",
        "instructions": "Set the timer and wait for the rice to cook.",
        "images": ["ClosedPot", "Stove"],
        "clickable": [False, False],
        "draggable": [False, False],
        "droppable": [False, False]
    },
    "5" : {
        "id": "5",
        "step": "5",
        "subheader": "Once the rice is cooked, remove the pot from the heat and let it rest for a few minutes. Fluff the rice with a fork before serving.",
        "instructions": "Click on the pot to open it!",
        "images": ["ClosedPot"],
        "clickable": [True],
        "draggable": [False],
        "droppable": [False]
    }
}

noRiceCookerSteps_Congee = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "Make perfect rice with tools you already have. You’ll need your rice, some water, and a pot.",
        "instructions": "",
        "images": ["RawRice", "WaterImage", "ClosedPot"],
        "clickable": [False, False, False],
        "draggable": [False, False, False],
        "droppable": [False, False, False]
    },
    "1" : {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using a measuring cup. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "Drag the water into the rice to wash it.",
        "images": ["RawRice", "WaterImage"],
        "clickable": [False, False],
        "draggable": [False, True],
        "droppable": [True, False]
    },
    "2" : {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to a pot or saucepan. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked. For congee, use more water than usual to achieve a porridge-like consistency.",
        "instructions": "Drag and drop the rice and water into the pot.",
        "images": ["RawRice", "WaterImage", "OpenPot"],
        "clickable": [False, False, False],
        "draggable": [True, True, False],
        "droppable": [False, False, True]
    },
    "3" : {
        "id": "3",
        "step": "3",
        "subheader": "Place the pot or saucepan on the stovetop over medium heat. Bring the water to a boil, stir to ensure nothing sticks, then reduce the heat to low and cover the pot with a lid.",
        "instructions": "Drag the pot to the stove and turn on the heat.",
        "images": ["OpenPot", "Stove"],
        "clickable": [False, False],
        "draggable": [True, False],
        "droppable": [False, True]

    },
    "4" : {
        "id": "4",
        "step": "4",
        "subheader": "Allow the rice to simmer for the recommended cooking time, typically 15-20 minutes. Avoid lifting the lid while the rice is cooking to prevent steam from escaping.",
        "instructions": "",
        "images": ["ClosedPot", "Stove"],
        "clickable": [False, False],
        "draggable": [False, False],
        "droppable": [False, False]
    },
    "5" : {
        "id": "5",
        "step": "5",
        "subheader": "Once the rice is cooked, remove the pot from the heat and let it rest for a few minutes.",
        "instructions": "Click on the pot to open it!",
        "images": ["ClosedPot"],
        "clickable": [True],
        "draggable": [False],
        "droppable": [False]
    }
}

noRiceCookerSteps_Crispy = {
    "0": {
        "id": "0",
        "step": "0",
        "subheader": "Make perfect rice with tools you already have. You’ll need your rice, some water, and a pot.",
        "instructions": "",
        "images": ["RawRice", "WaterImage", "ClosedPot"],
        "clickable": [False, False, False],
        "draggable": [False, False, False],
        "droppable": [False, False, False]
    },
    "1" : {
        "id": "1",
        "step": "1",
        "subheader": "Measure the desired amount of rice using a measuring cup. Rinse the rice in a separate bowl until the water runs clear, then drain the rice thoroughly.",
        "instructions": "Drag the water into the rice to wash it.",
        "images": ["RawRice", "WaterImage"],
        "clickable": [False, False],
        "draggable": [False, True],
        "droppable": [True, False]
    },
    "2" : {
        "id": "2",
        "step": "2",
        "subheader": "Add the rinsed rice to a pot or saucepan. Use the measuring cup to add the appropriate amount of water based on the type of rice being cooked.",
        "instructions": "Drag and drop the rice and water into the pot.",
        "images": ["RawRice", "WaterImage", "OpenPot"],
        "clickable": [False, False, False],
        "draggable": [True, True, False],
        "droppable": [False, False, True]
    },
    "3" : {
        "id": "3",
        "step": "3",
        "subheader": "Place the pot or saucepan on the stovetop over medium heat. Bring the water to a boil, stir to ensure nothing sticks, then reduce the heat to low and cover the pot with a lid.",
        "instructions": "Drag the pot to the stove and turn on the heat.",
        "images": ["OpenPot", "Stove"],
        "clickable": [False, False],
        "draggable": [True, False],
        "droppable": [False, True]
        
    },
    "4" : {
        "id": "4",
        "step": "4",
        "subheader": "Allow the rice to simmer for the recommended cooking time, typically 15-20 minutes. Avoid lifting the lid while the rice is cooking to prevent steam from escaping.",
        "instructions": "",
        "images": ["ClosedPot", "Stove"],
        "clickable": [False, False],
        "draggable": [False, False],
        "droppable": [False, False]
    },
    "5" : {
        "id": "5",
        "step": "5",
        "subheader": "Once the rice is cooked, remove the pot from the heat and let it rest for a few minutes.",
        "instructions": "Click on the pot to open it!",
        "images": ["ClosedPot"],
        "clickable": [True],
        "draggable": [False],
        "droppable": [False]
    },
    "6" : {
        "id": "6",
        "step": "6",
        "subheader": "Spread the cooked rice onto a baking sheet and allow it to cool and dry out for a few hours or overnight.",
        "instructions": "Dump the rice pot onto the baking sheet.",
        "images": ["OpenPot", "BakingSheet"],
        "clickable": [False, False],
        "draggable": [True, False],
        "droppable": [False, True]
    },
    "7" : {
        "id": "7",
        "step": "7",
        "subheader": "Preheat the oven to 350°F (180°C). Once the rice has dried out, bake it in the oven for 20-30 minutes, or until the rice is crispy and golden brown.",
        "instructions": "Drag the baking sheet into the oven.",
        "images": ["BakingSheet", "Oven"],
        "clickable": [False, False],
        "draggable": [True, False],
        "droppable": [False, True]
    },
    "8" : {
        "id": "8",
        "step": "8",
        "subheader": "Remove the crispy rice from the oven and allow it to cool slightly before serving. Enjoy the crispy rice as a snack or as a crunchy topping for salads and soups.",
        "instructions": "",
        "images": ["CrispyRice"],
        "clickable": [False],
        "draggable": [False],
        "droppable": [False]
    }
}

quizData_Varieties = {
     "1": {
        "id": "1",
        "question": "Which type of rice is known for its fragrant aroma and nutty flavor?",
        "answers": ["Brown Rice", "Jasmine Rice", "Basmati Rice"],
        "correctAnswerIdx": "1",
        "isDragQ": False
    },
    "2": {
        "id": "2",
        "question": "Which type of rice is commonly used in Indian cuisine, particularly for dishes like biryani and pilaf?",
        "answers": ["Brown Rice", "Jasmine Rice", "Basmati Rice"],
        "correctAnswerIdx": "2",
        "isDragQ": False
    },
    "3": {
        "id": "3",
        "question": "Match the rice variety with its country of origin.",
        "slots": ["United States", "Thailand", "India"],
        "answers": ["Brown Rice", "Jasmine Rice", "Basmati Rice"],
        "correctAnswerIdx": ["0", "1", "2"],
        "isDragQ": True
    },
    "4": {
        "id": "4",
        "question": "Which type of rice has the highest fiber content and more vitamins and minerals?",
        "answers": ["Brown Rice", "Jasmine Rice", "Basmati Rice"],
        "correctAnswerIdx": "0",
        "isDragQ": False
    },
    "5": {
        "id": "5",
        "question": "What type of rice is commonly used in Asian cuisines such as Thai and Vietnamese?",
        "answers": ["Brown Rice", "Jasmine Rice", "Basmati Rice"],
        "correctAnswerIdx": "1",
        "isDragQ": False
    }
}

quizData_Cooking = {
    "1": {
        "id": "1",
        "question": "How can you adjust the cooking method when preparing congee without a rice cooker?",
        "answers": ["Increase the water-to-rice ratio and cook for a longer duration", "Decrease the water-to-rice ratio and cook for a shorter duration"],
        "correctAnswerIdx": "0",
        "isDragQ": False
    },
    "2": {
        "id": "2",
        "question": "How can you achieve crispy rice without using a rice cooker?",
        "answers": ["Cook rice as usual, then pan-fry or bake it until crispy", "Use a higher heat setting on the rice cooker and let the rice cook longer", "Add cornstarch to the rice before cooking to create a crispy texture"],
        "correctAnswerIdx": "0",
        "isDragQ": False
    },
    "3": {
        "id": "3",
        "question": "How does a rice cooker adjust its cooking process to ensure perfectly cooked rice?",
        "answers": ["By monitoring temperature fluctuations and adjusting heat levels accordingly", "By using a preset timer for each type of rice", "By adding additional water automatically if the rice is too dry"],
        "correctAnswerIdx": "0",
        "isDragQ": False
    },
    "4": {
        "id": "4",
        "question": "Match the rice cooking adjustment with its purpose.",
        "slots": ["Corrects undercooked rice by providing additional moisture for proper cooking.", "Helps to soften rice grains and reduce cooking time.", "Allows excess moisture to evaporate and rice grains to firm up."],
        "answers": ["Adding more water", "Soaking the rice", "Resting cooked rice"],
        "correctAnswerIdx": ["0", "1", "2"],
        "isDragQ": True
    },
    "5": {
        "id": "5",
        "question": "What type of rice is commonly used to make crispy rice dishes?",
        "answers": ["Brown", "Jasmine", "It doesn't matter, any rice will work"],
        "correctAnswerIdx": "2",
        "isDragQ": False
    }
}
