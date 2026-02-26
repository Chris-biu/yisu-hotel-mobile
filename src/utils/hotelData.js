// src/utils/hotelData.js
// 每个酒店都有专属的房型列表，每个房型有独立ID、名称、价格、描述
export const HOTEL_DATA = [
  {
    id: 1,
    name: "易宿精品酒店（市中心店）",
    address: "武汉市XX区解放大道88号",
    img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/易宿精品酒店",
    // 该酒店的专属房型列表
    rooms: [
      { roomId: 101, type: "标准单人间", price: 228, desc: "1.5m床 | 无窗 | 含1份早餐", stock: 20 }, // 库存可选
      { roomId: 102, type: "豪华双人间", price: 288, desc: "1.8m床 | 落地窗 | 含2份早餐", stock: 15 },
      { roomId: 103, type: "商务套房", price: 388, desc: "2.0m床 + 客厅 | 江景 | 含2份早餐", stock: 5 }
    ]
  },
  {
    id: 2,
    name: "星辰酒店（高铁站店）",
    address: "武汉市XX区高铁站东路12号",
    img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/星辰酒店",
    // 该酒店的专属房型列表（和上一个酒店完全不同）
    rooms: [
      { roomId: 201, type: "经济单人间", price: 188, desc: "1.2m床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 202, type: "舒适双人间", price: 238, desc: "1.5m床 | 飘窗 | 含2份早餐", stock: 25 },
      { roomId: 203, type: "家庭房", price: 328, desc: "1.8m+1.2m床 | 落地窗 | 含3份早餐", stock: 8 }
    ]
  },
  {
    id: 3,
    name: "悦居酒店（景区店）",
    address: "武汉市XX区西湖路66号",
    img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/悦居酒店",
    // 该酒店的专属房型列表
    rooms: [
      { roomId: 301, type: "山景大床房", price: 268, desc: "1.8m床 | 山景 | 含2份早餐", stock: 18 },
      { roomId: 302, type: "湖景套房", price: 458, desc: "2.0m床 + 客厅 | 湖景 | 含2份早餐", stock: 6 }
    ]
  }
];

// 根据酒店ID获取单个酒店详情（含房型）
export const getHotelById = (hotelId) => {
  return HOTEL_DATA.find(hotel => hotel.id === Number(hotelId)) || null;
};

// 根据酒店ID+房型ID获取单个房型详情
export const getRoomById = (hotelId, roomId) => {
  const hotel = getHotelById(hotelId);
  if (!hotel) return null;
  return hotel.rooms.find(room => room.roomId === Number(roomId)) || null;
};