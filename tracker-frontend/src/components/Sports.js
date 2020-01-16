import React from 'react'

export const getIcon = (workout) => types.filter(type => type.type === workout.type).map(item => <i key={item.icon} className={item.icon}></i>)

export const types = [
  {
    "type":"Gym",
    "icon":"fas fa-dumbbell"
  },
  {
    "type":"Walking & running",
    "icon":"fas fa-running"
  },
  {
    "type":"Cycling",
    "icon":"fas fa-biking"
  },
  {
    "type":"Exercise classes",
    "icon":"fas fa-music"
  },
  {
    "type":"Everyday activities",
    "icon":"fas fa-home"
  },
  {
    "type":"Ball games",
    "icon":"fas fa-volleyball-ball"
  },
  {
    "type":"Water sports",
    "icon":"fas fa-swimmer"
  },
  {
    "type":"Winter sports",
    "icon":"fas fa-skiing"
  },
  {
    "type":"Combat sports",
    "icon":"fas fa-fist-raised"
  },
  {
    "type":"Hiking & climbing",
    "icon":"fas fa-hiking"
  },
  {
    "type":"Training with animals",
    "icon":"fas fa-dog"
  },
  {
    "type":"Others",
    "icon":"fas fa-ellipsis-h"
  }
]

export const sports = [
  {
    "id":1,
    "sport": "Cycling, mountain bike, bmx",
    "type": "Cycling",
    "59": 502,
    "70": 598,
    "82": 695, 
    "93": 791
  },
  {
    "id":2,
    "sport": "Cycling, very light, < 16 km/h",
    "type": "Cycling",  
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":3,
    "sport": "Cycling, light, 17-19 km/h",
    "type": "Cycling",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":4,
    "sport": "Cycling, moderate, 20-22 km/h",
    "type": "Cycling",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":5,
    "sport": "Cycling, fast, > 23 km/h",
    "type": "Cycling",
    "59": 590, 
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":6,
    "sport": "General workout",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":7,
    "sport": "Circuit training, minimal rest",
    "type": "Gym",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":8,
    "sport": "Weight lifting, light workout",
    "type": "Gym",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":9,
    "sport": "Weight lifting, body building, vigorous",
    "type": "Gym",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":10,
    "sport": "Stationary cycling, light",
    "type": "Gym",
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "id":11,
    "sport": "Stationary cycling, moderate",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":12,
    "sport": "Stationary cycling, fast",
    "type": "Gym",
    "59": 620,
    "70": 739,
    "82": 858,
    "93": 977
  },
  {
    "id":13,
    "sport": "Stair machine",
    "type": "Gym",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":14,
    "sport": "Rowing machine, light",
    "type": "Gym",
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "id":15,
    "sport": "Rowing machine, moderate",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":16,
    "sport": "Rowing machine, fast",
    "type": "Gym",
    "59": 502,
    "70": 598,
    "82": 695,
    "93": 791
  },
  {
    "id":17,
    "sport": "Rowing machine, very fast",
    "type": "Gym",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":18,
    "sport": "Ski machine, very fast",
    "type": "Gym",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":19,
    "sport": "Aerobics, low impact",
    "type": "Exercise classes",
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":20,
    "sport": "Aerobics, medium impact",
    "type": "Exercise classes",
    "59": 384,
    "70": 457,
    "82": 531,
    "93": 605
  },
  {
    "id":21,
    "sport": "Aerobics, high impact",
    "type": "Exercise classes",
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":22,
    "sport": "Step aerobics",
    "type": "Exercise classes",
    "59": 502,
    "70": 598,
    "82": 695,
    "93": 791
  },
  {
    "id":23,
    "sport": "Ballroom dancing, slow",
    "type": "Exercise classes",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":24,
    "sport": "Ballroom dancing, fast",
    "type": "Exercise classes",
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "id":25,
    "sport": "Water aerobics",
    "type": "Water sports",
    "59": 236,
    "70": 281, 
    "82": 327,
    "93": 372
  },
  {
    "id":26,
    "sport": "Ballet, twist, tap, jazz",
    "type": "Exercise classes",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":27,
    "sport": "Running, 8 km/h",
    "type": "Walking & running",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":28,
    "sport": "Running, 9,5 km/h",
    "type": "Walking & running",
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":29,
    "sport": "Running, 11 km/h",
    "type": "Walking & running",
    "59": 679,
    "70": 809,
    "82": 940,
    "93": 1070
  },
  {
    "id":30,
    "sport": "Running, 12 km/h",
    "type": "Walking & running",
    "59": 738,
    "70": 880, 
    "82": 1022, 
    "93": 1163
  },
  {
    "id":31,
    "sport": "Running, 14 km/h",
    "type": "Walking & running",
    "59": 826,
    "70": 985,
    "82": 1144,
    "93": 1303
  },
  {
    "id":32,
    "sport": "Running, 16 km/h",
    "type": "Walking & running",
    "59": 944,
    "70": 1126,
    "82": 1308,
    "93": 1489
  },
  {
    "id":33,
    "sport": "Running, cross country",
    "type": "Walking & running",
    "59": 531,
    "70": 633, 
    "82": 735, 
    "93": 838
  },
  {
    "id":34,
    "sport": "Running, general",
    "type": "Walking & running",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":35,
    "sport": "Running, on track",
    "type": "Walking & running",
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":36,
    "sport": "Running, stairs, up",
    "type": "Walking & running",
    "59": 885,
    "70": 1056,
    "82": 1226,
    "93": 1396
  },
  {
    "id":37,
    "sport": "Badminton",
    "type": "Ball games",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":38,
    "sport": "Basketball game, competitive",
    "type": "Ball games",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":39,
    "sport": "Basketball, non-competitive",
    "type": "Ball games",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":40,
    "sport": "Basketball, shooting baskets",
    "type": "Ball games",
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":41,
    "sport": "Billiards",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":42,
    "sport": "Bowling",
    "type": "Ball games",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":43,
    "sport": "Boxing, in ring",
    "type": "Combat sports",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":44,
    "sport": "Boxing, punching bag",
    "type": "Combat sports",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":45,
    "sport": "Boxing, sparring",
    "type": "Combat sports",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":46,
    "sport": "Boxing, in ring",
    "type": "Combat sports",
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":47,
    "sport": "Cricket",
    "type": "Ball games",
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":48,
    "sport": "Croquet",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":49,
    "sport": "Curling",
    "type": "Winter sports",
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":50,
    "sport": "Fencing",
    "type" : "Combat sports",
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":51,
    "sport": "Football, competitive",
    "type": "Ball games",
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":52,
    "sport": "Football, general",
    "type": "Ball games",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":53,
    "sport": "Football, playing catch",
    "type": "Ball games",
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":54,
    "sport": "Frisbee playing",
    "type": "Others",
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":55,
    "sport": "Frisbee, ultimate frisbee",
    "type": "Others",
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":56,
    "sport": "Golf, general",
    "type": "Ball games", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":57,
    "sport": "Golf, walking and carrying clubs",
    "type": "Ball games", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":58,
    "sport": "Golf, driving range",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":59,
    "sport": "Golf, miniature golf",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":60,
    "sport": "Gymnastics",
    "type": "Exercise class", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":61,
    "sport": "Handball",
    "type": "Ball games", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":62,
    "sport": "Handball, team",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":63,
    "sport": "Hockey, field hockey",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":64,
    "sport": "Icehockey",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":65,
    "sport": "Horseback riding, general",
    "type": "Training with animals", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372 
  },
  {
    "id":66,
    "sport": "Horseback riding, trotting",
    "type": "Training with animals", 
    "59": 384,
    "70": 457,
    "82": 531,
    "93": 605 
  },
  {
    "id":67,
    "sport": "Horseback riding, walking",
    "type": "Training with animals", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":68,
    "sport": "Horseracing",
    "type": "Training with animals", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":69,
    "sport": "Jai alai",
    "type": "Combat sports", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 117
  },
  {
    "id":70,
    "sport": "Judo, karate, jujitsu",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":71,
    "sport": "Kick boxing",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":72,
    "sport": "Tae kwan do",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":73,
    "sport": "Krav maga training",
    "type": "Combat sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":74,
    "sport": "Juggling",
    "type": "Others", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":75,
    "sport": "Kickball",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":76,
    "sport": "Lacrosse",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":77,
    "sport": "Paddleball, general",
    "type": "Ball games", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":78,
    "sport": "Paddleball, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":79,
    "sport": "Polo",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":80,
    "sport": "Racquetball, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":81,
    "sport": "Racquetball, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":82,
    "sport": "Rock climbing, ascending rock",
    "type": "Hiking & climbing", 
    "59": 649,
    "70": 774,
    "82": 899,
    "93": 1024
  },
  {
    "id":83,
    "sport": "Rock climbing, rappelling",
    "type": "Hiking & climbing", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":84,
    "sport": "Jumping rope, fast",
    "type": "Gym", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":85,
    "sport": "Jumping rope, moderate",
    "type": "Gym", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":86,
    "sport": "Jumping rope, slow",
    "type": "Gym", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":87,
    "sport": "Rugby",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":88,
    "sport": "Skateboarding",
    "type": "Others", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":89,
    "sport": "Roller skating",
    "type": "Others", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":90,
    "sport": "Soccer, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":91,
    "sport": "Soccer, competitive",
    "type": "Ball games", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":92,
    "sport": "Softball",
    "type": "Ball games", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":93,
    "sport": "Baseball",
    "type": "Ball games", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":94,
    "sport": "Squash",
    "type": "Ball games", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 1117
  },
  {
    "id":95,
    "sport": "Table tennis",
    "type": "Ball games", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":96,
    "sport": "Tai chi",
    "type": "Others", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":97,
    "sport": "Tennis, general",
    "type": "Ball games", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":98,
    "sport": "Tennis, doubles",
    "type": "Ball games", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":99,
    "sport": "Tennis, singles",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":100,
    "sport": "Trampoline",
    "type": "Others", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "id":101,
    "sport": "Volleyball, competitive",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":102,
    "sport": "Volleyball, general",
    "type": "Ball games", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":103,
    "sport": "Volleyball, beach",
    "type": "Ball games", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":104,
    "sport": "Wrestling",
    "type": "Combat sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":105,
    "sport": "Backpacking, hiking with pack",
    "type": "Hiking & climbing", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":106,
    "sport": "Standing",
    "type": "Everyday activities", 
    "59": 165,
    "70": 197,
    "82": 229,
    "93": 261
  },
  {
    "id":107,
    "sport": "Playing with children, light",
    "type": "Everyday activities", 
    "59": 165,
    "70": 197,
    "82": 229,
    "93": 261
  },
  {
    "id":109,
    "sport": "Hiking, cross country",
    "type": "Hiking & climbing", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":110,
    "sport": "Hiking hills, carrying up to 5 kg",
    "type": "Hiking & climbing", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":111,
    "sport": "Hiking hills, carrying 5-10 kg",
    "type": "Hiking & climbing",
    "59": 443,
    "70": 528,
    "82": 613,
    "93": 698
  },
  {
    "id":112,
    "sport": "Hiking hills, carrying 11-15 kg",
    "type": "Hiking & climbing", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":113,
    "sport": "Hiking hills, carrying over 15 kg",
    "type": "Hiking & climbing", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":114,
    "sport": "Pushing a stroller, walking with children",
    "type": "Everyday activities", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":115,
    "sport": "Mountain climbing",
    "type": "Hiking & climbing", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":116,
    "sport": "Walking the dog",
    "type": "Everyday activities", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":117,
    "sport": "Walking, very slow",
    "type": "Walking & running", 
    "59": 118,
    "70": 141,
    "82": 163,
    "93": 186
  },
  {
    "id":118,
    "sport": "Walking, slow",
    "type": "Walking & running", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 233
  },
  {
    "id":119,
    "sport": "Walking, moderate pace",
    "type": "Walking & running", 
    "59": 195,
    "70": 232,
    "82": 270,
    "93": 307
  },
  {
    "id":120,
    "sport": "Walking, brisk pace",
    "type": "Walking & running", 
    "59": 224,
    "70": 267,
    "82": 311,
    "93": 354
  },
  {
    "id":121,
    "sport": "Walking, very brisk pace",
    "type": "Walking & running", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":122,
    "sport": "Canoeing, light",
    "type": "Water sports", 
    "59": 177, 
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":123,
    "sport": "Canoeing, moderate",
    "type": "Water sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":124,
    "sport": "Canoeing, fast",
    "type": "Water sports", 
    "59": 708,
    "70": 844,
    "82": 981,
    "93": 111,
  },
  {
    "id":125,
    "sport": "Kayaking",
    "type": "Water sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":126,
    "sport": "Sailing, competitive",
    "type": "Water sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":127,
    "sport": "Sailing, ocean sailing",
    "type": "Water sports", 
    "59": 177, 
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":128,
    "sport": "Skiing",
    "type": "Winter sports", 
    "59": 354, 
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":129,
    "sport": "Water skiing",
    "type": "Outdoor sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":130,
    "sport": "Ski mobiling",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":131,
    "sport": "Snorkeling",
    "type": "Water sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":132,
    "sport": "Swimming, backstroke",
    "type": "Water sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":133,
    "sport": "Swimming, breaststroke",
    "type": "Water sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":134,
    "sport": "Swimming, butterfly",
    "type": "Water sports", 
    "59": 649,
    "70": 774,
    "82": 899,
    "93": 1024
  },
  {
    "id":135,
    "sport": "Swimming, leisurely",
    "type": "Water sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":136,
    "sport": "Swimming, sidestroke",
    "type": "Water sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":137,
    "sport": "Water polo",
    "type": "Water sports", 
    "59": 590,
    "70": 704,
    "82": 817,
    "93": 931
  },
  {
    "id":138,
    "sport": "Water volleyball",
    "type": "Water sports", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
  {
    "id":139,
    "sport": "Water jogging",
    "type": "Water sports", 
    "59": 472, 
    "70": 563,
    "82": 654,
    "93": 754
  },
  {
    "id":140,
    "sport": "Ice skating, slow",
    "type": "Winter sports", 
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "id":141,
    "sport": "Ice skating, moderate pace",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":142,
    "sport": "Ice skating, fast pace",
    "type": "Winter sports", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":143,
    "sport": "Speed skating, competitive",
    "type": "Winter sports", 
    "59": 885,
    "70": 1056,
    "82": 1226,
    "93": 1396
  },
  {
    "id":144,
    "sport": "Skiing, slow",
    "type": "Winter sports", 
    "59": 413,
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":145,
    "sport": "Skiing, moderate",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":146,
    "sport": "Skiing, fast",
    "type": "Winter sports", 
    "59": 531,
    "70": 633,
    "82": 735,
    "93": 838
  },
  {
    "id":147,
    "sport": "Skiing, racing",
    "type": "Winter sports", 
    "59": 826,
    "70": 985,
    "82": 1144,
    "93": 1303
  },
  {
    "id":148,
    "sport": "Downhill skiing, light",
    "type": "Winter sports", 
    "59": 295,
    "70": 352,
    "82": 409,
    "93": 465
  },
  {
    "id":150,
    "sport": "Downhill skiing, moderate",
    "type": "Winter sports", 
    "59": 354,
    "70": 422,
    "82": 490,
    "93": 558
  },
  {
    "id":151,
    "sport": "Downhill skiing, racing",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":152,
    "sport": "Sledding, tobagganing",
    "type": "Winter sports", 
    "59": 413, 
    "70": 493,
    "82": 572,
    "93": 651
  },
  {
    "id":153,
    "sport": "Snow shoeing",
    "type": "Winter sports", 
    "59": 472,
    "70": 563,
    "82": 654,
    "93": 745
  },
  {
    "id":154,
    "sport": "Snowmobiling",
    "type": "Winter sports", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "id":155,
    "sport": "General housework",
    "type": "Everyday activities", 
    "59": 207,
    "70": 246,
    "82": 286,
    "93": 326
  },
  {
    "id":156,
    "sport": "Painting",
    "type": "Everyday activities", 
    "59": 266,
    "70": 317,
    "82": 368,
    "93": 419
  },
  {
    "id":157,
    "sport": "Walking/running, Playing with animals",
    "type": "Training with animals", 
    "59": 236,
    "70": 281,
    "82": 327,
    "93": 372
  },
  {
    "id":158,
    "sport": "Mowing lawn, pushing lawnmower",
    "type": "Everyday activities", 
    "59": 325,
    "70": 387,
    "82": 449,
    "93": 512
  },
  {
    "id":159,
    "sport": "Mowing lawn, riding lawnmower",
    "type": "Everyday activities", 
    "59": 148,
    "70": 176,
    "82": 204,
    "93": 326
  },
  {
    "id":160,
    "sport": "Surfing",
    "type": "Water sports", 
    "59": 177,
    "70": 211,
    "82": 245,
    "93": 279
  },
]

