
const calories = [
  {
    "sport": "Cycling, mountain bike, bmx",
    "type": "Cycling",
    "59": 502,
    "70": 598,
    "82": 695, 
    "93": 791
  },
  {
    "sport": "Cycling, very light, < 16 km/h",
    "type": "Cycling",  
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Cycling, light, 17-19 km/h",
    "type": "Cycling",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Cycling, moderate, 20-22 km/h",
    "type": "Cycling",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Cycling, fast, > 23 km/h",
    "type": "Cycling",
    "59": 590, 
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Stationary cycling, very light",
    "type": "Gym",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Stationary cycling, light",
    "type": "Gym",
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "sport": "Stationary cycling, moderate",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Stationary cycling, fast",
    "type": "Gym",
    "59": 620,
    "70": 739,
    "82": 858,
    "93": 977
  },
  {
    "sport": "Circuit training, minimal rest",
    "type": "Gym",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Weight lifting, body building, vigorous",
    "type": "Gym",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Weight lifting, light workout",
    "type": "Gym",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Stair machine"
    ,"type": "Gym",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Rowing machine, light",
    "type": "Gym",
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "sport": "Rowing machine, moderate",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Rowing machine, fast",
    "type": "Gym",
    "59": 502,
    "70": 598,
    "82": 695,
    "93": 791
  },
  {
    "sport": "Rowing machine, very fast",
    "type": "Gym",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Ski machine, very fast",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Aerobics, low impact",
    "type": "Exercise classes",
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Aerobics, medium impact",
    "type": "Exercise classes",
    "59": 384,
    "70": 457,
    "82": 531,
    "93": 605
  },
  {
    "sport": "Aerobics, high impact",
    "type": "Exercise classes",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Step aerobics",
    "type": "Exercise classes",
    "59": 502,
    "70": 598,
    "82": 695,
    "93": 791
  },
  {
    "sport": "Ballroom dancing, slow",
    "type": "Exercise classes",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Ballroom dancing, fast",
    "type": "Exercise classes",
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "sport": "Water aerobics",
    "type": "Water sports",
    "59": 236,
    "70": 281, 
    "82": 327,
    "93": 372
  },
  {
    "sport": "Ballet, twist, tap, jazz",
    "type": "Exercise classes",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Running, 8 km/h",
    "type": "Running",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Running, 9,5 km/h",
    "type": "Running",
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Running, 11 km/h",
    "type": "Running",
    "59": 679,
    "70": 809,
    "82": 940,
    "93": 1070
  },
  {
    "sport": "Running, 12 km/h",
    "type": "Running",
    "59": 738,
    "70": 880, 
    "82": 1022, 
    "93": 1163
  },
  {
    "sport": "Running, 14 km/h",
    "type": "Running",
    "59": 826,
    "70": 985,
    "82": 1144,
    "93": 1303
  },
  {
    "sport": "Running, 16 km/h",
    "type": "Running",
    "59": 944,
    "70": 1126,
    "82": 1308,
    "93": 1489
  },
  {
    "sport": "Running, cross country",
    "type": "Running",
    "59": 531,
    "70": 633, 
    "82": 735, 
    "93": 838
  },
  {
    "sport": "Running, general",
    "type": "Running",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Running, on track",
    "type": "Running",
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Running, stairs, up",
    "type": "Running",
    "59": 885,
    "70": 1056,
    "82": 1226,
    "93": 1396
  },
  {
    "sport": "Badminton",
    "type": "Ball games",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Basketball game, competitive",
    "type": "Ball games",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Basketball, non-competitive",
    "type": "Ball games",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Basketball, shooting baskets",
    "type": "Ball games",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Billiards",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Bowling",
    "type": "Ball games",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Boxing, in ring",
    "type": "Combat sports",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Boxing, punching bag",
    "type": "Combat sports",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Boxing, sparring",
    "type": "Combat sports",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Boxing, in ring",
    "type": "Combat sports",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Cricket",
    "type": "Ball games",
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Croquet",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Curling",
    "type": "Winter sports",
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Fencing",
    "type" : "Combat sports",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Football, competitive",
    "type": "Ball games",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Football, general",
    "type": "Ball games",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Football, playing catch",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Frisbee playing",
    "type": "Others",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Frisbee, ultimate frisbee",
    "type": "Ball games",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Golf, general",
    "type": "Ball games", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Golf, walking and carrying clubs",
    "type": "Ball games", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Golf, driving range",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Golf, miniature golf",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Gymnastics",
    "type": "Exercise class", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Handball",
    "type": "Ball games", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Handball, team",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Hockey, field hockey",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Icehockey",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Horseback riding, general",
    "type": "Training with animals", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372 
  },
  {
    "sport": "Horseback riding, trotting",
    "type": "Training with animals", 
    "59": 384,
    "70": 457,
    "82": 531,
    "93": 605 
  },
  {
    "sport": "Horseback riding, walking",
    "type": "Training with animals", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Horseracing",
    "type": "Training with animals", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Jai alai",
    "type": "Combat sports", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 117
  },
  {
    "sport": "Judo, karate, jujitsu",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Kick boxing",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Tae kwan do",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Krav maga training",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Juggling",
    "type": "Others", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Kickball",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Lacrosse",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Paddleball, general",
    "type": "Ball games", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Paddleball, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Polo",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Racquetball, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Racquetball, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Rock climbing, ascending rock",
    "type": "Others", 
    "59": 649,
    "70": 774,
    "82": 899,
    "93": 1024
  },
  {
    "sport": "Rock climbing, rappelling",
    "type": "Others", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Jumping rope, fast",
    "type": "Gym", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Jumping rope, moderate",
    "type": "Gym", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Jumping rope, slow",
    "type": "Gym", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Rugby",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Skateboarding",
    "type": "Others", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Roller skating",
    "type": "Others", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Soccer, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Soccer, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Softball",
    "type": "Ball games", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Baseball",
    "type": "Ball games", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Squash",
    "type": "Ball games", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "sport": "Table tennis",
    "type": "Ball games", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Tai chi",
    "type": "Others", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Tennis, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Tennis, doubles",
    "type": "Ball games", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Tennis, singles",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Trampoline",
    "type": "Others", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "sport": "Volleyball, competitive",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Volleyball, general",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Volleyball, beach",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Wrestling",
    "type": "Combat sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Backpacking, hiking with pack",
    "type": "Others", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Standing",
    "type": "Everyday activities", 
    "59": 165,
    "70": 197,
    "82": 229,
    "93": 261
  },
  {
    "sport": "Playing with children, light",
    "type": "Everyday activities", 
    "59": 165,
    "70": 197,
    "82": 229,
    "93": 261
  },
  {
    "sport": "Walking, moderate pace",
    "type": "Others", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Hiking, cross country",
    "type": "Others", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Climbing hills, carrying up to 5 kg",
    "type": "Outdoor activities", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Climbing hills, carrying 5-10 kg",
    "type": "Outdoor activities",
    "59": 443,
    "70": 528,
    "82": 613,
    "93": 698
  },
  {
    "sport": "Climbing hills, carrying 11-15 kg",
    "type": "Outdoor activities", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Climbing hills, carrying over 15 kg",
    "type": "Outdoor activities", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Pushing a stroller, walking with children",
    "type": "Everyday activities", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Mountain climbing",
    "type": "Others", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Walking the dog",
    "type": "Everyday activities", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Walking, very slow",
    "type": "Outdoor activities", 
    "59": 118,
    "70": 141,
    "82": 163,
    "93": 186
  },
  {
    "sport": "Walking, slow",
    "type": "Outdoor activities", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "sport": "Walking, moderate pace",
    "type": "Outdoor activities", 
    "59": 195,
    "70": 232,
    "82": 270,
    "93": 307
  },
  {
    "sport": "Walking, brisk pace",
    "type": "Outdoor activities", 
    "59": 224,
    "70": 267,
    "82": 311,
    "93": 354
  },
  {
    "sport": "Walking, very brisk pace",
    "type": "Outdoor activities", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Canoeing, light",
    "type": "Outdoor sports", 
    "59": 177, 
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Canoeing, moderate",
    "type": "Outdoor sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Canoeing, fast",
    "type": "Outdoor sports", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 111,
  },
  {
    "sport": "Kayaking",
    "type": "Outdoor sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Sailing, competitive",
    "type": "Outdoor sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Sailing, ocean sailing",
    "type": "Outdoor sports", 
    "59": 177, 
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Skiing",
    "type": "Winter sports", 
    "59": 354, 
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Water skiing",
    "type": "Outdoor sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Ski mobiling",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Snorkeling",
    "type": "Water sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Surfing",
    "type": "Water sports", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Swimming, backstroke",
    "type": "Water sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Swimming, breaststroke",
    "type": "Water sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Swimming, butterfly",
    "type": "Water sports", 
    "59": 649,
    "70": 774,
    "82": 899,
    "93": 1024
  },
  {
    "sport": "Swimming, leisurely",
    "type": "Water sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Swimming, sidestroke",
    "type": "Water sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Water polo",
    "type": "Water sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "sport": "Water volleyball",
    "type": "Water sports", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "sport": "Water jogging",
    "type": "Water sports", 
    "59": 472, 
    "70": 563,
    "82": 654,
    "93": 754
  },
  {
    "sport": "Ice skating, slow",
    "type": "Winter sports", 
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "sport": "Ice skating, moderate pace",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Ice skating, fast pace",
    "type": "Winter sports", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Speed skating, competitive",
    "type": "Winter sports", 
    "59": 885,
    "70": 1056,
    "82": 1226,
    "93": 1396
  },
  {
    "sport": "Skiing, slow",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Skiing, moderate",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Skiing, fast",
    "type": "Winter sports", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "sport": "Skiing, racing",
    "type": "Winter sports", 
    "59": 826,
    "70": 985,
    "82": 1144,
    "93": 1303
  },
  {
    "sport": "Downhill skiing, light",
    "type": "Winter sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "sport": "Downhill skiing, moderate",
    "type": "Winter sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "sport": "Downhill skiing, racing",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Sledding, tobagganing",
    "type": "Winter sports", 
    "59": 413, 
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "sport": "Snow shoeing",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "sport": "Snowmobiling",
    "type": "Winter sports", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "sport": "General housework",
    "type": "Everyday activities", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "sport": "Painting",
    "type": "Everyday activities", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "sport": "Walking/running, Playing with animals",
    "type": "Training with animals", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "sport": "Mowing lawn, pushing lawnmower",
    "type": "Everyday activities", 
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "sport": "Mowing lawn, riding lawnmower",
    "type": "Everyday activities", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 326
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },
  {
    "sport": "",
    "type": "", 
    "59": 
    "70": 
    "82": 
    "93": 
  },

]

