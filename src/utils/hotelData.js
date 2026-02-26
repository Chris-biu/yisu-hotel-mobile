// 5个城市各8个酒店，总计40个酒店，含中英文名称、不同房型价格
export const HOTEL_DATA = [
  // ========== 武汉（Wuhan）- 8个酒店 ==========
  {
    id: 1,
    name: "易宿精品酒店（武汉江汉路店）",
    enName: "Ease Stay Boutique Hotel (Wuhan Jianghan Road)",
    address: "武汉市江汉区江汉路128号",
    score: 4.8,
    phone: "027-88888888",
    intro: "位于武汉江汉路核心商圈，步行5分钟可达江汉路地铁站，酒店配备免费早餐、停车场、洗衣房，房间宽敞明亮，是商务出行和旅游住宿的首选。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/易宿精品酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 101, type: "标准单人间", price: 228, desc: "1.5m床 | 无窗 | 含1份早餐", stock: 20 },
      { roomId: 102, type: "豪华双人间", price: 288, desc: "1.8m床 | 落地窗 | 含2份早餐", stock: 15 },
      { roomId: 103, type: "商务套房", price: 388, desc: "2.0m床 + 客厅 | 江景 | 含2份早餐", stock: 5 }
    ]
  },
  {
    id: 2,
    name: "武汉星辰酒店（汉口火车站店）",
    enName: "Wuhan Star Hotel (Hankou Railway Station)",
    address: "武汉市江汉区汉口火车站东路12号",
    score: 4.5,
    phone: "027-66666666",
    intro: "紧邻汉口火车站，出站即达，酒店提供免费接送站服务，房间配备高速WiFi、独立卫浴，性价比超高。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/星辰酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 201, type: "经济单人间", price: 188, desc: "1.2m床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 202, type: "舒适双人间", price: 238, desc: "1.5m床 | 飘窗 | 含2份早餐", stock: 25 },
      { roomId: 203, type: "家庭房", price: 328, desc: "1.8m+1.2m床 | 落地窗 | 含3份早餐", stock: 8 }
    ]
  },
  {
    id: 3,
    name: "武汉悦居酒店（东湖景区店）",
    enName: "Wuhan Joy Stay Hotel (East Lake Scenic Area)",
    address: "武汉市武昌区东湖路66号",
    score: 4.9,
    phone: "027-99999999",
    intro: "直面东湖湖景，推窗见景，酒店配备观景露台、下午茶服务，房间均为实木家具，风格温馨，适合休闲度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/悦居酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 301, type: "山景大床房", price: 268, desc: "1.8m床 | 山景 | 含2份早餐", stock: 18 },
      { roomId: 302, type: "湖景套房", price: 458, desc: "2.0m床 + 客厅 | 湖景 | 含2份早餐", stock: 6 }
    ]
  },
  {
    id: 4,
    name: "武汉光谷智选假日酒店",
    enName: "Holiday Inn Express Wuhan Optics Valley",
    address: "武汉市洪山区光谷大道88号",
    score: 4.7,
    phone: "027-77777777",
    intro: "光谷商圈核心位置，毗邻光谷广场，酒店提供24小时前台、自助洗衣房、健身中心，适合商务人士入住。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/光谷智选假日酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 401, type: "智选大床房", price: 248, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 22 },
      { roomId: 402, type: "智选双床房", price: 278, desc: "1.2m*2床 | 落地窗 | 含2份早餐", stock: 19 }
    ]
  },
  {
    id: 5,
    name: "武汉黄鹤楼亚朵酒店",
    enName: "Atour Hotel Wuhan Yellow Crane Tower",
    address: "武汉市武昌区解放路45号",
    score: 4.8,
    phone: "027-55555555",
    intro: "步行10分钟可达黄鹤楼景区，酒店以阅读和摄影为主题，配备书吧、洗衣房，房间简约舒适。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/黄鹤楼亚朵酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 501, type: "雅致大床房", price: 298, desc: "1.8m床 | 飘窗 | 含1份早餐", stock: 16 },
      { roomId: 502, type: "行政大床房", price: 368, desc: "2.0m床 | 城景 | 含2份早餐", stock: 8 }
    ]
  },
  {
    id: 6,
    name: "武汉江滩威斯汀酒店",
    enName: "The Westin Wuhan Wuchang",
    address: "武汉市武昌区临江大道96号",
    score: 4.9,
    phone: "027-44444444",
    intro: "五星级豪华酒店，一线江景，配备无边泳池、高端餐厅、SPA中心，适合高端商务和度假需求。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/江滩威斯汀酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 601, type: "豪华江景房", price: 888, desc: "2.0m床 | 江景 | 含2份早餐", stock: 12 },
      { roomId: 602, type: "行政套房", price: 1288, desc: "2.2m床 + 客厅 | 全景江景 | 含2份早餐", stock: 4 }
    ]
  },
  {
    id: 7,
    name: "武汉理工大学学术交流中心",
    enName: "Wuhan University of Technology Academic Exchange Center",
    address: "武汉市洪山区珞狮路122号",
    score: 4.6,
    phone: "027-33333333",
    intro: "依托高校资源，环境安静，房间整洁，提供会议场地，适合学术交流、考研住宿的客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/理工大学学术交流中心",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 701, type: "标准间", price: 168, desc: "1.2m*2床 | 无窗 | 不含早餐", stock: 25 },
      { roomId: 702, type: "大床房", price: 198, desc: "1.8m床 | 飘窗 | 含2份早餐", stock: 20 }
    ]
  },
  {
    id: 8,
    name: "武汉楚河汉街万达嘉华酒店",
    enName: "Wanda Realm Wuhan Chuhe Hanjie",
    address: "武汉市武昌区水果湖街东湖路105号",
    score: 4.8,
    phone: "027-22222222",
    intro: "楚河汉街商圈内，毗邻万达广场，酒店配备高端餐饮、宴会厅，适合商务宴请和家庭出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/万达嘉华酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 801, type: "豪华大床房", price: 428, desc: "2.0m床 | 城景 | 含2份早餐", stock: 14 },
      { roomId: 802, type: "亲子房", price: 568, desc: "1.8m+1.2m床 | 主题布置 | 含3份早餐", stock: 7 }
    ]
  },

  // ========== 北京（Beijing）- 8个酒店 ==========
  {
    id: 9,
    name: "北京王府井希尔顿酒店",
    enName: "Hilton Beijing Wangfujing",
    address: "北京市东城区王府井东街8号",
    score: 4.9,
    phone: "010-88888888",
    intro: "位于王府井核心商圈，步行可达天安门、故宫，五星级酒店，配备高端客房、米其林餐厅，适合高端出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/王府井希尔顿酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 901, type: "豪华大床房", price: 988, desc: "2.0m床 | 城景 | 含2份早餐", stock: 15 },
      { roomId: 902, type: "行政套房", price: 1588, desc: "2.2m床 + 客厅 | 故宫景观 | 含2份早餐", stock: 6 }
    ]
  },
  {
    id: 10,
    name: "北京国贸中心洲际酒店",
    enName: "InterContinental Beijing Sanlitun",
    address: "北京市朝阳区建国门外大街1号",
    score: 4.8,
    phone: "010-77777777",
    intro: "国贸CBD核心位置，毗邻中央电视台，酒店设计现代时尚，配备无边泳池、高端SPA，适合商务精英。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/国贸洲际酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1001, type: "商务大床房", price: 868, desc: "2.0m床 | 城市景观 | 含2份早餐", stock: 12 },
      { roomId: 1002, type: "豪华套房", price: 1388, desc: "2.2m床 + 客厅 | CBD景观 | 含2份早餐", stock: 5 }
    ]
  },
  {
    id: 11,
    name: "北京三里屯太古里漫心酒店",
    enName: "Manxin Hotel Beijing Sanlitun Taikoo Li",
    address: "北京市朝阳区三里屯路19号",
    score: 4.7,
    phone: "010-66666666",
    intro: "三里屯潮流商圈内，毗邻太古里，酒店设计年轻化，配备网红打卡区、24小时便利店，适合年轻人出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/三里屯漫心酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1101, type: "潮玩大床房", price: 368, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 20 },
      { roomId: 1102, type: "影音双床房", price: 428, desc: "1.5m*2床 | 巨幕投影 | 含2份早餐", stock: 16 }
    ]
  },
  {
    id: 12,
    name: "北京颐和园安缦酒店",
    enName: "Aman Summer Palace Beijing",
    address: "北京市海淀区宫门前街1号",
    score: 4.9,
    phone: "010-55555555",
    intro: "毗邻颐和园，中式庭院风格，私密性强，配备专属管家、定制餐饮，适合高端度假、静心休养。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/颐和园安缦酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1201, type: "庭院大床房", price: 2888, desc: "2.0m床 | 庭院景观 | 含2份定制早餐", stock: 8 },
      { roomId: 1202, type: "湖景套房", price: 4588, desc: "2.2m床 + 客厅 | 昆明湖景观 | 含2份定制早餐", stock: 3 }
    ]
  },
  {
    id: 13,
    name: "北京首都机场铂尔曼酒店",
    enName: "Pullman Beijing Capital Airport",
    address: "北京市顺义区天竺地区府前二街1号",
    score: 4.6,
    phone: "010-44444444",
    intro: "紧邻首都机场，提供24小时免费接送机服务，房间配备隔音玻璃、睡眠床垫，适合转机、早班机客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/首都机场铂尔曼酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1301, type: "机场大床房", price: 328, desc: "1.8m床 | 隔音窗 | 含1份早餐", stock: 25 },
      { roomId: 1302, type: "家庭套房", price: 588, desc: "1.8m+1.2m床 | 隔音窗 | 含3份早餐", stock: 10 }
    ]
  },
  {
    id: 14,
    name: "北京后海四合院酒店",
    enName: "Beijing Houhai Courtyard Hotel",
    address: "北京市西城区后海北沿33号",
    score: 4.8,
    phone: "010-33333333",
    intro: "后海景区内，传统四合院改造，配备茶室、庭院景观，体验老北京风情，适合文化旅游客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/后海四合院酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1401, type: "四合院大床房", price: 488, desc: "1.8m床 | 庭院景观 | 含2份早餐", stock: 12 },
      { roomId: 1402, type: "复式套房", price: 688, desc: "2.0m床 + 阁楼 | 后海景观 | 含2份早餐", stock: 6 }
    ]
  },
  {
    id: 15,
    name: "北京清华大学紫光国际交流中心",
    enName: "Tsinghua University Ziguang International Exchange Center",
    address: "北京市海淀区清华大学南门",
    score: 4.7,
    phone: "010-22222222",
    intro: "依托清华大学，环境清幽，房间简约整洁，提供学术交流场地，适合访学、考研、培训客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/清华紫光交流中心",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1501, type: "标准间", price: 228, desc: "1.2m*2床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 1502, type: "大床房", price: 268, desc: "1.8m床 | 校园景观 | 含2份早餐", stock: 25 }
    ]
  },
  {
    id: 16,
    name: "北京大兴机场智选假日酒店",
    enName: "Holiday Inn Express Beijing Daxing Airport",
    address: "北京市大兴区大兴机场高速1号",
    score: 4.6,
    phone: "010-11111111",
    intro: "大兴机场配套酒店，免费接送机，房间配备智能设备、高速WiFi，性价比高，适合转机客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/大兴机场智选假日酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1601, type: "智选大床房", price: 288, desc: "1.8m床 | 隔音窗 | 含1份早餐", stock: 28 },
      { roomId: 1602, type: "双床房", price: 328, desc: "1.2m*2床 | 隔音窗 | 含2份早餐", stock: 22 }
    ]
  },

  // ========== 上海（Shanghai）- 8个酒店 ==========
  {
    id: 17,
    name: "上海外滩华尔道夫酒店",
    enName: "Waldorf Astoria Shanghai on the Bund",
    address: "上海市黄浦区中山东一路20号",
    score: 4.9,
    phone: "021-88888888",
    intro: "外滩核心位置，百年历史建筑，奢华装修，配备米其林餐厅、江景客房，适合高端商务和度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/外滩华尔道夫酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1701, type: "外滩江景房", price: 1288, desc: "2.0m床 | 黄浦江景 | 含2份早餐", stock: 10 },
      { roomId: 1702, type: "总统套房", price: 8888, desc: "2.2m床 + 客厅 | 全景江景 | 含4份早餐", stock: 2 }
    ]
  },
  {
    id: 18,
    name: "上海陆家嘴丽思卡尔顿酒店",
    enName: "The Ritz-Carlton Shanghai Lujiazui",
    address: "上海市浦东新区世纪大道8号",
    score: 4.9,
    phone: "021-77777777",
    intro: "陆家嘴金融中心，超高楼层，俯瞰黄浦江和外滩，配备高端SPA、无边泳池，适合商务精英。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/陆家嘴丽思卡尔顿酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1801, type: "豪华江景房", price: 1188, desc: "2.0m床 | 江景 | 含2份早餐", stock: 12 },
      { roomId: 1802, type: "行政套房", price: 1888, desc: "2.2m床 + 客厅 | 全景江景 | 含2份早餐", stock: 5 }
    ]
  },
  {
    id: 19,
    name: "上海迪士尼乐园酒店",
    enName: "Shanghai Disneyland Hotel",
    address: "上海市浦东新区川沙新镇黄赵路310号",
    score: 4.8,
    phone: "021-66666666",
    intro: "迪士尼乐园配套酒店，童话风格，提供免费班车、儿童乐园、主题早餐，适合亲子家庭出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/迪士尼乐园酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 1901, type: "花园景观房", price: 888, desc: "1.8m床 | 花园景观 | 含2份早餐", stock: 18 },
      { roomId: 1902, type: "亲子主题房", price: 1288, desc: "1.8m+1.2m床 | 迪士尼主题 | 含3份早餐", stock: 10 }
    ]
  },
  {
    id: 20,
    name: "上海新天地安达仕酒店",
    enName: "Andaz Shanghai Xintiandi",
    address: "上海市黄浦区嵩山路88号",
    score: 4.7,
    phone: "021-55555555",
    intro: "新天地商圈核心，石库门风格，设计时尚，配备网红酒吧、融合餐厅，适合年轻潮人、商务出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/新天地安达仕酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2001, type: "时尚大床房", price: 688, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 20 },
      { roomId: 2002, type: "石库门套房", price: 988, desc: "2.0m床 + 客厅 | 石库门景观 | 含2份早餐", stock: 8 }
    ]
  },
  {
    id: 21,
    name: "上海虹桥机场莫泰酒店",
    enName: "Motel 168 Shanghai Hongqiao Airport",
    address: "上海市长宁区虹桥路2550号",
    score: 4.5,
    phone: "021-44444444",
    intro: "虹桥机场/高铁站附近，提供免费接送服务，房间经济实惠，配备24小时热水、WiFi，适合转机、短途出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/虹桥机场莫泰酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2101, type: "经济单人间", price: 198, desc: "1.5m床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 2102, type: "标准双人间", price: 238, desc: "1.2m*2床 | 飘窗 | 含2份早餐", stock: 25 }
    ]
  },
  {
    id: 22,
    name: "上海豫园万丽酒店",
    enName: "Renaissance Shanghai Yu Garden Hotel",
    address: "上海市黄浦区河南南路159号",
    score: 4.7,
    phone: "021-33333333",
    intro: "毗邻豫园、城隍庙，步行可达外滩，酒店融合中式与现代风格，配备景观餐厅，适合文化旅游客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/豫园万丽酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2201, type: "城景大床房", price: 488, desc: "1.8m床 | 城景 | 含2份早餐", stock: 18 },
      { roomId: 2202, type: "豫园景观房", price: 628, desc: "2.0m床 | 豫园景观 | 含2份早餐", stock: 12 }
    ]
  },
  {
    id: 23,
    name: "上海复旦大学学术交流中心",
    enName: "Fudan University Academic Exchange Center",
    address: "上海市杨浦区邯郸路220号",
    score: 4.6,
    phone: "021-22222222",
    intro: "复旦大学内，环境安静，房间简约，提供学术会议场地，适合访学、考研、培训客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/复旦学术交流中心",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2301, type: "标准间", price: 208, desc: "1.2m*2床 | 无窗 | 不含早餐", stock: 28 },
      { roomId: 2302, type: "大床房", price: 248, desc: "1.8m床 | 校园景观 | 含2份早餐", stock: 22 }
    ]
  },
  {
    id: 24,
    name: "上海南京路步行街全季酒店",
    enName: "Ji Hotel Shanghai Nanjing Road Pedestrian Street",
    address: "上海市黄浦区南京东路389号",
    score: 4.7,
    phone: "021-11111111",
    intro: "南京路步行街核心，步行可达外滩、人民广场，酒店简约舒适，配备自助洗衣房、免费咖啡，性价比高。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/南京路全季酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2401, type: "大床房", price: 328, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 25 },
      { roomId: 2402, type: "双床房", price: 368, desc: "1.2m*2床 | 落地窗 | 含2份早餐", stock: 20 }
    ]
  },

  // ========== 广州（Guangzhou）- 8个酒店 ==========
  {
    id: 25,
    name: "广州四季酒店",
    enName: "Four Seasons Hotel Guangzhou",
    address: "广州市天河区珠江新城冼村路26号",
    score: 4.9,
    phone: "020-88888888",
    intro: "珠江新城CBD，超高楼层，俯瞰珠江，五星级豪华酒店，配备高端餐厅、无边泳池，适合商务精英。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/广州四季酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2501, type: "豪华城景房", price: 988, desc: "2.0m床 | 城景 | 含2份早餐", stock: 12 },
      { roomId: 2502, type: "珠江景观套房", price: 1688, desc: "2.2m床 + 客厅 | 江景 | 含2份早餐", stock: 6 }
    ]
  },
  {
    id: 26,
    name: "广州长隆熊猫酒店",
    enName: "Chimelong Panda Hotel Guangzhou",
    address: "广州市番禺区香江大道593号",
    score: 4.8,
    phone: "020-77777777",
    intro: "长隆旅游度假区配套酒店，熊猫主题，提供免费班车、儿童乐园、亲子活动，适合亲子家庭出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/长隆熊猫酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2601, type: "熊猫大床房", price: 688, desc: "1.8m床 | 主题布置 | 含2份早餐", stock: 20 },
      { roomId: 2602, type: "亲子双床房", price: 888, desc: "1.5m*2床 | 主题布置 | 含3份早餐", stock: 15 }
    ]
  },
  {
    id: 27,
    name: "广州白天鹅宾馆",
    enName: "White Swan Hotel Guangzhou",
    address: "广州市荔湾区沙面南街1号",
    score: 4.9,
    phone: "020-66666666",
    intro: "沙面岛核心位置，老牌五星级酒店，岭南风格，毗邻珠江，配备高端粤菜餐厅，适合商务、度假客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/白天鹅宾馆",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2701, type: "江景大床房", price: 888, desc: "2.0m床 | 珠江景 | 含2份早餐", stock: 14 },
      { roomId: 2702, type: "行政套房", price: 1388, desc: "2.2m床 + 客厅 | 江景 | 含2份早餐", stock: 7 }
    ]
  },
  {
    id: 28,
    name: "广州太古汇文华东方酒店",
    enName: "Mandarin Oriental Guangzhou",
    address: "广州市天河区天河路389号",
    score: 4.8,
    phone: "020-55555555",
    intro: "太古汇商圈核心，高端奢华，配备SPA、米其林餐厅，适合高端商务、购物出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/太古汇文华东方酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2801, type: "豪华大床房", price: 828, desc: "2.0m床 | 落地窗 | 含2份早餐", stock: 16 },
      { roomId: 2802, type: "尊贵套房", price: 1288, desc: "2.2m床 + 客厅 | 城景 | 含2份早餐", stock: 8 }
    ]
  },
  {
    id: 29,
    name: "广州白云机场铂尔曼酒店",
    enName: "Pullman Guangzhou Baiyun Airport",
    address: "广州市白云区白云机场大道东888号",
    score: 4.6,
    phone: "020-44444444",
    intro: "白云机场配套酒店，免费接送机，房间配备隔音玻璃、睡眠设施，适合转机、早班机客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/白云机场铂尔曼酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 2901, type: "机场大床房", price: 368, desc: "1.8m床 | 隔音窗 | 含1份早餐", stock: 25 },
      { roomId: 2902, type: "家庭房", price: 588, desc: "1.8m+1.2m床 | 隔音窗 | 含3份早餐", stock: 12 }
    ]
  },
  {
    id: 30,
    name: "广州北京路亚朵酒店",
    enName: "Atour Hotel Guangzhou Beijing Road",
    address: "广州市越秀区北京路182号",
    score: 4.7,
    phone: "020-33333333",
    intro: "北京路步行街核心，步行可达广州塔、珠江，酒店以阅读为主题，配备书吧、洗衣房，适合年轻客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/北京路亚朵酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3001, type: "雅致大床房", price: 388, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 22 },
      { roomId: 3002, type: "行政大床房", price: 488, desc: "2.0m床 | 城景 | 含2份早餐", stock: 18 }
    ]
  },
  {
    id: 31,
    name: "广州中山大学学人馆",
    enName: "Sun Yat-sen University Scholars Hall",
    address: "广州市海珠区新港西路135号",
    score: 4.6,
    phone: "020-22222222",
    intro: "中山大学校内，环境清幽，房间简约，提供学术交流场地，适合访学、考研、培训客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/中山大学学人馆",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3101, type: "标准间", price: 218, desc: "1.2m*2床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 3102, type: "大床房", price: 258, desc: "1.8m床 | 校园景观 | 含2份早餐", stock: 25 }
    ]
  },
  {
    id: 32,
    name: "广州珠江新城凯悦酒店",
    enName: "Hyatt Regency Guangzhou Zhujiang New Town",
    address: "广州市天河区冼村路20号",
    score: 4.8,
    phone: "020-11111111",
    intro: "珠江新城CBD，现代风格，配备健身中心、高端餐饮，适合商务出行、城市度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/珠江新城凯悦酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3201, type: "商务大床房", price: 688, desc: "2.0m床 | 城景 | 含2份早餐", stock: 18 },
      { roomId: 3202, type: "豪华套房", price: 988, desc: "2.2m床 + 客厅 | 江景 | 含2份早餐", stock: 10 }
    ]
  },

  // ========== 深圳（Shenzhen）- 8个酒店 ==========
  {
    id: 33,
    name: "深圳平安金融中心柏悦酒店",
    enName: "Park Hyatt Shenzhen",
    address: "深圳市福田区益田路5033号",
    score: 4.9,
    phone: "0755-88888888",
    intro: "平安金融中心顶层，云端酒店，俯瞰深圳全景，五星级奢华，配备高端SPA、米其林餐厅，适合高端商务。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/平安金融中心柏悦酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3301, type: "云端大床房", price: 1288, desc: "2.0m床 | 城市全景 | 含2份早餐", stock: 10 },
      { roomId: 3302, type: "总统套房", price: 8888, desc: "2.2m床 + 客厅 | 全景 | 含4份早餐", stock: 2 }
    ]
  },
  {
    id: 34,
    name: "深圳华侨城洲际大酒店",
    enName: "InterContinental Shenzhen OCT",
    address: "深圳市南山区华侨城深南大道9009号",
    score: 4.8,
    phone: "0755-77777777",
    intro: "华侨城景区内，西班牙风格，毗邻世界之窗、欢乐谷，配备泳池、亲子设施，适合家庭度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/华侨城洲际大酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3401, type: "豪华大床房", price: 788, desc: "2.0m床 | 花园景观 | 含2份早餐", stock: 16 },
      { roomId: 3402, type: "亲子套房", price: 1088, desc: "1.8m+1.2m床 | 主题布置 | 含3份早餐", stock: 10 }
    ]
  },
  {
    id: 35,
    name: "深圳蛇口希尔顿南海酒店",
    enName: "Hilton Shenzhen Shekou Nanhai",
    address: "深圳市南山区蛇口望海路1177号",
    score: 4.8,
    phone: "0755-66666666",
    intro: "蛇口滨海片区，海景酒店，毗邻海上世界，配备沙滩、海景餐厅，适合休闲度假、商务出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/蛇口希尔顿南海酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3501, type: "海景大床房", price: 828, desc: "2.0m床 | 海景 | 含2份早餐", stock: 14 },
      { roomId: 3502, type: "行政海景房", price: 1188, desc: "2.2m床 | 全景海景 | 含2份早餐", stock: 8 }
    ]
  },
  {
    id: 36,
    name: "深圳宝安国际机场凯悦酒店",
    enName: "Hyatt Place Shenzhen Bao'an International Airport",
    address: "深圳市宝安区机场五道1001号",
    score: 4.6,
    phone: "0755-55555555",
    intro: "宝安机场配套酒店，免费接送机，房间配备智能设备、隔音玻璃，适合转机、早班机客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/宝安机场凯悦酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3601, type: "机场大床房", price: 388, desc: "1.8m床 | 隔音窗 | 含1份早餐", stock: 28 },
      { roomId: 3602, type: "双床房", price: 428, desc: "1.2m*2床 | 隔音窗 | 含2份早餐", stock: 22 }
    ]
  },
  {
    id: 37,
    name: "深圳华强北茂业JW万豪酒店",
    enName: "JW Marriott Hotel Shenzhen Huaqiang North",
    address: "深圳市福田区华强北路4002号",
    score: 4.7,
    phone: "0755-44444444",
    intro: "华强北商圈核心，电子市场旁，现代风格，配备高端餐饮、健身中心，适合商务、购物出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/华强北JW万豪酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3701, type: "商务大床房", price: 688, desc: "2.0m床 | 城景 | 含2份早餐", stock: 20 },
      { roomId: 3702, type: "豪华套房", price: 988, desc: "2.2m床 + 客厅 | 城景 | 含2份早餐", stock: 10 }
    ]
  },
  {
    id: 38,
    name: "深圳大梅沙京基洲际度假酒店",
    enName: "InterContinental Shenzhen Dameisha Resort",
    address: "深圳市盐田区大梅沙盐葵路9号",
    score: 4.9,
    phone: "0755-33333333",
    intro: "大梅沙海滨，海景度假酒店，配备私人沙滩、无边泳池、水上活动，适合海滨度假、休闲放松。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/大梅沙京基洲际酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3801, type: "海景大床房", price: 988, desc: "2.0m床 | 海景 | 含2份早餐", stock: 12 },
      { roomId: 3802, type: "沙滩套房", price: 1688, desc: "2.2m床 + 客厅 | 沙滩景观 | 含2份早餐", stock: 6 }
    ]
  },
  {
    id: 39,
    name: "深圳腾讯大厦旁丽枫酒店",
    enName: "Lavande Hotel Shenzhen Tencent Building",
    address: "深圳市南山区科技园科技中一路10号",
    score: 4.6,
    phone: "0755-22222222",
    intro: "科技园核心，毗邻腾讯大厦，智能酒店，配备香薰系统、助眠灯光，适合互联网从业者、商务出行。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/腾讯大厦丽枫酒店",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 3901, type: "智能大床房", price: 368, desc: "1.8m床 | 落地窗 | 含1份早餐", stock: 25 },
      { roomId: 3902, type: "商务双床房", price: 408, desc: "1.2m*2床 | 落地窗 | 含2份早餐", stock: 20 }
    ]
  },
  {
    id: 40,
    name: "深圳大学国际交流中心",
    enName: "Shenzhen University International Exchange Center",
    address: "深圳市南山区南海大道3688号",
    score: 4.7,
    phone: "0755-11111111",
    intro: "深圳大学校内，环境安静，房间简约整洁，提供学术交流场地，适合访学、考研、培训客人。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/深圳大学交流中心",
    detailBanners: [
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准双人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/标准单人间",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/餐厅环境",
      "https://placeholder.pics/svg/750x400/F5F5F5/999999/周边商圈"
    ],
    rooms: [
      { roomId: 4001, type: "标准间", price: 228, desc: "1.2m*2床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 4002, type: "大床房", price: 268, desc: "1.8m床 | 校园景观 | 含2份早餐", stock: 25 }
    ]
  }
];