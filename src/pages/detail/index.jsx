import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Input, Picker, ScrollView } from '@tarojs/components';
import './index.scss';

// 扩展酒店数据：新增房型列表，每个酒店对应不同房型+不同价格
const hotelDetailData = [
  {
    id: 1,
    name: "易宿精品酒店（市中心店）",
    address: "XX市XX区解放大道88号",
    score: 4.8,
    phone: "0XX-88888888",
    intro: "位于市中心核心商圈，步行5分钟可达地铁口，酒店配备免费早餐、停车场、洗衣房，房间宽敞明亮，是商务出行和旅游住宿的首选。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/易宿精品酒店",
    // 新增：该酒店的房型列表（不同房型不同价格）
    rooms: [
      { roomId: 101, type: "标准单人间", price: 228, desc: "1.5m床 | 无窗 | 含1份早餐", stock: 20 },
      { roomId: 102, type: "豪华双人间", price: 288, desc: "1.8m床 | 落地窗 | 含2份早餐", stock: 15 },
      { roomId: 103, type: "商务套房", price: 388, desc: "2.0m床 + 客厅 | 江景 | 含2份早餐", stock: 5 }
    ]
  },
  {
    id: 2,
    name: "星辰酒店（高铁站店）",
    address: "XX市XX区高铁站东路12号",
    score: 4.5,
    phone: "0XX-66666666",
    intro: "紧邻高铁站，出站即达，酒店提供免费接送站服务，房间配备高速WiFi、独立卫浴，性价比超高。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/星辰酒店",
    // 新增：该酒店的房型列表
    rooms: [
      { roomId: 201, type: "经济单人间", price: 188, desc: "1.2m床 | 无窗 | 不含早餐", stock: 30 },
      { roomId: 202, type: "舒适双人间", price: 238, desc: "1.5m床 | 飘窗 | 含2份早餐", stock: 25 },
      { roomId: 203, type: "家庭房", price: 328, desc: "1.8m+1.2m床 | 落地窗 | 含3份早餐", stock: 8 }
    ]
  },
  {
    id: 3,
    name: "悦居酒店（景区店）",
    address: "XX市XX区西湖路66号",
    score: 4.9,
    phone: "0XX-99999999",
    intro: "直面景区湖景，推窗见景，酒店配备观景露台、下午茶服务，房间均为实木家具，风格温馨，适合休闲度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/悦居酒店",
    // 新增：该酒店的房型列表
    rooms: [
      { roomId: 301, type: "山景大床房", price: 268, desc: "1.8m床 | 山景 | 含2份早餐", stock: 18 },
      { roomId: 302, type: "湖景套房", price: 458, desc: "2.0m床 + 客厅 | 湖景 | 含2份早餐", stock: 6 }
    ]
  }
];

const getDateOptions = () => {
  const options = [];
  const today = new Date();
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    options.push({
      label: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`,
      value: `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    });
  }
  return options;
};

const personOptions = [
  { label: '1人', value: '1' },
  { label: '2人', value: '2' },
  { label: '3人', value: '3' },
  { label: '4人', value: '4' }
];

export default function HotelDetail() {
  const [hotelInfo, setHotelInfo] = useState({});
  // 新增：选中的房型（默认选中第一个房型）
  const [selectedRoom, setSelectedRoom] = useState(null);
  // 新增：入住天数
  const [stayDays, setStayDays] = useState(1);

  // 表单状态
  const [checkInDateIndex, setCheckInDateIndex] = useState(0);
  const [checkOutDateIndex, setCheckOutDateIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState(getDateOptions()[0]?.value);
  const [checkOutDate, setCheckOutDate] = useState(getDateOptions()[1]?.value);
  const [personIndex, setPersonIndex] = useState(0);
  const [personNum, setPersonNum] = useState('1');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  useEffect(() => {
    const options = Taro.getCurrentInstance().router.params;
    const hotelId = Number(options.id);
    const currentHotel = hotelDetailData.find(item => item.id === hotelId);
    if (currentHotel) {
      setHotelInfo(currentHotel);
      // 新增：默认选中第一个房型
      setSelectedRoom(currentHotel.rooms[0]);
      Taro.setNavigationBarTitle({ title: currentHotel.name });
    }
  }, []);

  // 新增：监听日期变化，计算入住天数
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      if (end > start) {
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        setStayDays(days);
      } else {
        setStayDays(1);
      }
    }
  }, [checkInDate, checkOutDate]);

  // 新增：计算选中房型的总价
  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * stayDays;
  };

 const handleBook = () => {
  // 表单验证
  if (!checkInDate) {
    Taro.showToast({ title: '请选择入住日期', icon: 'none' });
    return;
  }
  if (!checkOutDate) {
    Taro.showToast({ title: '请选择离店日期', icon: 'none' });
    return;
  }
  if (new Date(checkInDate) >= new Date(checkOutDate)) {
    Taro.showToast({ title: '离店日期需晚于入住日期', icon: 'none' });
    return;
  }
  // 新增：验证是否选中房型
  if (!selectedRoom) {
    Taro.showToast({ title: '请选择预订房型', icon: 'none' });
    return;
  }
  // 新增：验证房型库存
  if (selectedRoom.stock <= 0) {
    Taro.showToast({ title: '该房型已售罄，请选择其他房型', icon: 'none' });
    return;
  }
  if (!contactName) {
    Taro.showToast({ title: '请填写联系人', icon: 'none' });
    return;
  }
  if (!/^1[3-9]\d{9}$/.test(contactPhone)) {
    Taro.showToast({ title: '请填写正确的手机号', icon: 'none' });
    return;
  }

  // 计算总价（改用选中房型的价格）
  const totalPrice = calculateTotalPrice();

  // 弹出确认弹窗
  Taro.showModal({
    title: '确认预订',
    content: `
      酒店：${hotelInfo.name}
      房型：${selectedRoom.type}（¥${selectedRoom.price}/晚）
      入住日期：${checkInDate}
      离店日期：${checkOutDate}（共${stayDays}晚）
      入住人数：${personNum}人
      联系人：${contactName}
      手机号：${contactPhone}
      总价：¥${totalPrice}
    `,
    success: (res) => {
      if (res.confirm) {
        Taro.showToast({ title: '预订成功！我们会尽快联系您', icon: 'success' });
        // 重置表单
        setCheckInDateIndex(0);
        setCheckOutDateIndex(1);
        setCheckInDate(getDateOptions()[0]?.value);
        setCheckOutDate(getDateOptions()[1]?.value);
        setPersonIndex(0);
        setPersonNum('1');
        setContactName('');
        setContactPhone('');
        // 重置选中房型
        setSelectedRoom(hotelInfo.rooms[0]);
      }
    }
  });
};

  if (!hotelInfo.id) return <View className="loading">加载中...</View>;

  return (
    <ScrollView className="detail-page" scrollY>
      <Image 
        src={hotelInfo.img} 
        mode="widthFix" 
        className="hotel-banner"
      />

      <View className="hotel-base-info">
        <Text className="hotel-name">{hotelInfo.name}</Text>
        <View className="hotel-score-address">
          <Text className="hotel-score">★ {hotelInfo.score}</Text>
          <Text className="hotel-address">{hotelInfo.address}</Text>
        </View>
        <Text className="hotel-phone">联系电话：{hotelInfo.phone}</Text>
      </View>

      {/* 新增：房型选择区域 */}
      <View className="room-select-section">
        <Text className="section-title">可选房型</Text>
        <View className="room-list">
          {hotelInfo.rooms?.map(room => (
            <View 
              key={room.roomId}
              className={`room-card ${selectedRoom?.roomId === room.roomId ? 'active' : ''}`}
              onClick={() => setSelectedRoom(room)}
              style={{ 
                opacity: room.stock <= 0 ? 0.6 : 1, 
                pointerEvents: room.stock <= 0 ? 'none' : 'auto' 
              }}
            >
              <View className="room-left">
                <Text className="room-type">{room.type}</Text>
                <Text className="room-desc">{room.desc}</Text>
                {room.stock <= 0 && <Text className="stock-out">已售罄</Text>}
              </View>
              <View className="room-right">
                <Text className="room-price">¥{room.price}/晚</Text>
                <Text className="room-total">
                  总价：¥{room.price * stayDays}（{stayDays}晚）
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View className="hotel-price">
        {/* 新增：显示选中房型的价格 */}
        <Text className="price-text">
          选中房型：¥{selectedRoom?.price || 0}/晚起
        </Text>
        {/* 新增：显示总价提示 */}
        <Text className="total-price-tip">
          总价：¥{calculateTotalPrice()}（{stayDays}晚）
        </Text>
      </View>

      <View className="book-form">
        <Text className="form-title">立即预订</Text>
        
        <View className="form-item">
          <Text className="form-label">入住日期：</Text>
          <Picker
            mode="selector"
            range={getDateOptions()}
            rangeKey="label"
            value={checkInDateIndex}
            onChange={(e) => {
              const index = e.detail.value;
              setCheckInDateIndex(index);
              setCheckInDate(getDateOptions()[index].value);
            }}
          >
            <View className="picker-input">
              {getDateOptions()[checkInDateIndex]?.label || '请选择入住日期'}
            </View>
          </Picker>
        </View>

        <View className="form-item">
          <Text className="form-label">离店日期：</Text>
          <Picker
            mode="selector"
            range={getDateOptions()}
            rangeKey="label"
            value={checkOutDateIndex}
            onChange={(e) => {
              const index = e.detail.value;
              setCheckOutDateIndex(index);
              setCheckOutDate(getDateOptions()[index].value);
            }}
          >
            <View className="picker-input">
              {getDateOptions()[checkOutDateIndex]?.label || '请选择离店日期'}
            </View>
          </Picker>
        </View>

        <View className="form-item">
          <Text className="form-label">入住人数：</Text>
          <Picker
            mode="selector"
            range={personOptions}
            rangeKey="label"
            value={personIndex}
            onChange={(e) => {
              const index = e.detail.value;
              setPersonIndex(index);
              setPersonNum(personOptions[index].value);
            }}
          >
            <View className="picker-input">
              {personOptions[personIndex]?.label || '请选择人数'}
            </View>
          </Picker>
        </View>

        {/* 联系人输入 */}
        <View className="form-item">
          <Text className="form-label">联系人：</Text>
          <Input
            className="input-box"
            placeholder="请输入联系人姓名"
            value={contactName}
            onInput={(e) => setContactName(e.detail.value)}
            onBlur={(e) => setContactName(e.detail.value)}
          />
        </View>

        {/* 手机号输入 */}
        <View className="form-item">
          <Text className="form-label">手机号：</Text>
          <Input
            className="input-box"
            placeholder="请输入11位手机号"
            type="text"
            value={contactPhone}
            onInput={(e) => setContactPhone(e.detail.value)}
            onBlur={(e) => setContactPhone(e.detail.value)}
          />
        </View>

        <View className="submit-btn" onClick={handleBook}>
          <Text className="btn-text">提交预订</Text>
        </View>
      </View>

      <View className="hotel-intro">
        <Text className="intro-title">酒店介绍</Text>
        <Text className="intro-content">{hotelInfo.intro}</Text>
      </View>
    </ScrollView>
  );
}