import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from '@tarojs/components';
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

const HotelDetail = () => {
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    const options = Taro.getCurrentInstance().router.params;
    const hotelId = Number(options.id);
    const currentHotel = hotelDetailData.find(item => item.id === hotelId);
    if (currentHotel) {
      setHotelInfo(currentHotel);
      Taro.setNavigationBarTitle({ title: currentHotel.name });
    }
  }, []);

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
        <Text className="book-btn">立即预订</Text>
      </View>
      <View className="hotel-intro">
        <Text className="intro-title">酒店介绍</Text>
        <Text className="intro-content">{hotelInfo.intro}</Text>
      </View>
    </View>
  );
};

export default HotelDetail;