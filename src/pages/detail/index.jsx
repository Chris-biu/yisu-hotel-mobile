import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Button, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss';
import { HOTEL_DATA } from '../../utils/hotelData';

export default function Detail() {
  // 接收路由参数（酒店ID、入住/离店日期）
  const [hotelId, setHotelId] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  // 酒店详情数据
  const [hotelInfo, setHotelInfo] = useState(null);
  // 选中的房型
  const [selectedRoom, setSelectedRoom] = useState(null);
  // 计算入住天数
  const [days, setDays] = useState(1);

  // 页面加载时获取参数和酒店数据
  useEffect(() => {
    const params = Taro.getCurrentInstance().router.params;
    setHotelId(params.id);
    setCheckInDate(params.checkIn || '');
    setCheckOutDate(params.checkOut || '');

    // 计算入住天数
    if (params.checkIn && params.checkOut) {
      const start = new Date(params.checkIn);
      const end = new Date(params.checkOut);
      const dayDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setDays(dayDiff > 0 ? dayDiff : 1);
    }

    // 获取对应酒店的详情
    const hotel = HOTEL_DATA.find(item => item.id === Number(params.id));
    if (hotel) {
      setHotelInfo(hotel);
      // 默认选中第一个有库存的房型（修复：优先选有库存的）
      const availableRoom = hotel.rooms.find(room => room.stock > 0) || hotel.rooms[0];
      setSelectedRoom(availableRoom);
    }
  }, []);

  // 选择房型
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // 提交预订
  const handleBook = () => {
    if (!checkInDate || !checkOutDate) {
      Taro.showToast({ title: '请先选择入住/离店日期', icon: 'none' });
      return;
    }
    if (!selectedRoom) {
      Taro.showToast({ title: '请选择房型', icon: 'none' });
      return;
    }
    if (selectedRoom.stock <= 0) {
      Taro.showToast({ title: '该房型已无库存', icon: 'none' });
      return;
    }

    // 计算总价
    const totalPrice = selectedRoom.price * days;
    Taro.showModal({
      title: '预订确认',
      content: `
        酒店：${hotelInfo.name}
        房型：${selectedRoom.type}
        入住日期：${checkInDate}
        离店日期：${checkOutDate}
        入住天数：${days}天
        单价：¥${selectedRoom.price}/晚
        总价：¥${totalPrice}
      `,
      success: (res) => {
        if (res.confirm) {
          Taro.showToast({ title: '预订成功！', icon: 'success' });
          setTimeout(() => {
            Taro.navigateBack();
          }, 1500);
        }
      }
    });
  };

  if (!hotelInfo) {
    return <View className="loading">加载中...</View>;
  }

  return (
    <ScrollView className="detail-page" scrollY>
      {/* 酒店详情banner轮播图 */}
      <Swiper 
        className="detail-banner-swiper" 
        autoplay 
        circular 
        indicatorDots 
        indicatorColor="#fff"
        indicatorActiveColor="#ff5722"
      >
        {hotelInfo.detailBanners.map((img, index) => (
          <SwiperItem key={index}>
            <Image 
              src={img} 
              mode="widthFix" 
              className="detail-banner-img"
            />
          </SwiperItem>
        ))}
      </Swiper>

      {/* 酒店基础信息 */}
      <View className="hotel-base-info">
        <Text className="hotel-name">{hotelInfo.name} ({hotelInfo.enName})</Text>
        <View className="info-row">
          <Text className="score">评分：{hotelInfo.score}</Text>
          <Text className="address">{hotelInfo.address}</Text>
        </View>
        <Text className="phone">联系电话：{hotelInfo.phone}</Text>
        <Text className="intro">{hotelInfo.intro}</Text>
      </View>

      {/* 日期信息 */}
      <View className="date-info">
        <Text className="date-label">入住日期：{checkInDate || '未选择'}</Text>
        <Text className="date-label">离店日期：{checkOutDate || '未选择'}</Text>
        <Text className="date-label">入住天数：{days}天</Text>
      </View>

      {/* 房型选择 */}
      <View className="room-list">
        <Text className="list-title">房型选择</Text>
        {hotelInfo.rooms.map(room => (
          <View 
            key={room.roomId}
            className={`room-item ${selectedRoom?.roomId === room.roomId ? 'active' : ''}`}
            onClick={() => handleRoomSelect(room)}
          >
            <Text className="room-type">{room.type}</Text>
            <Text className="room-desc">{room.desc}</Text>
            <View className="room-price-stock">
              <Text className="price">¥{room.price}/晚</Text>
              <Text className={`stock ${room.stock <= 0 ? 'out' : ''}`}>
                {room.stock <= 0 ? '无库存' : `库存：${room.stock}间`}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* 价格计算 */}
      {selectedRoom && (
        <View className="price-calc">
          <Text className="calc-item">单价：¥{selectedRoom.price} × {days}天</Text>
          <Text className="total-price">总价：¥{selectedRoom.price * days}</Text>
        </View>
      )}

      {/* 预订按钮（修复：明确的禁用样式逻辑） */}
      <Button 
        className="book-btn"
        onClick={handleBook}
        disabled={!selectedRoom || selectedRoom.stock <= 0}
      >
        立即预订
      </Button>
    </ScrollView>
  );
}