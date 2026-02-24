import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Input, Picker } from '@tarojs/components';
import './index.scss';

const hotelDetailData = [
  {
    id: 1,
    name: "易宿精品酒店（市中心店）",
    address: "XX市XX区解放大道88号",
    price: 228,
    score: 4.8,
    phone: "0XX-88888888",
    intro: "位于市中心核心商圈，步行5分钟可达地铁口，酒店配备免费早餐、停车场、洗衣房，房间宽敞明亮，是商务出行和旅游住宿的首选。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/易宿精品酒店"
  },
  {
    id: 2,
    name: "星辰酒店（高铁站店）",
    address: "XX市XX区高铁站东路12号",
    price: 188,
    score: 4.5,
    phone: "0XX-66666666",
    intro: "紧邻高铁站，出站即达，酒店提供免费接送站服务，房间配备高速WiFi、独立卫浴，性价比超高。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/星辰酒店"
  },
  {
    id: 3,
    name: "悦居酒店（景区店）",
    address: "XX市XX区西湖路66号",
    price: 268,
    score: 4.9,
    phone: "0XX-99999999",
    intro: "直面景区湖景，推窗见景，酒店配备观景露台、下午茶服务，房间均为实木家具，风格温馨，适合休闲度假。",
    img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/悦居酒店"
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
      Taro.setNavigationBarTitle({ title: currentHotel.name });
    }
  }, []);

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
  if (!contactName) {
    Taro.showToast({ title: '请填写联系人', icon: 'none' });
    return;
  }
  if (!/^1[3-9]\d{9}$/.test(contactPhone)) {
    Taro.showToast({ title: '请填写正确的手机号', icon: 'none' });
    return;
  }

  // 计算总价
  const days = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));
  const totalPrice = hotelInfo.price * days;

  // 弹出确认弹窗（修复后的代码）
  Taro.showModal({
    title: '确认预订',
    content: `
      酒店：${hotelInfo.name}
      入住日期：${checkInDate}
      离店日期：${checkOutDate}
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
      }
    }
  });
};
  return (
    <View className="detail-page">
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

      <View className="hotel-price">
        <Text className="price-text">¥{hotelInfo.price}/晚起</Text>
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
    onInput={(e) => {
      console.log('联系人输入:', e.detail.value); // 调试日志
      setContactName(e.detail.value);
    }}
    onBlur={(e) => setContactName(e.detail.value)} // 兼容失焦更新
  />
</View>

{/* 手机号输入 */}
<View className="form-item">
  <Text className="form-label">手机号：</Text>
  <Input
    className="input-box"
    placeholder="请输入11位手机号"
    type="text" // 临时改为 text，避免 number 类型在 H5 端的兼容性问题
    value={contactPhone}
    onInput={(e) => {
      console.log('手机号输入:', e.detail.value); // 调试日志
      setContactPhone(e.detail.value);
    }}
    onBlur={(e) => setContactPhone(e.detail.value)} // 兼容失焦更新
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
    </View>
  );
}