import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Input, Swiper, SwiperItem, Picker } from '@tarojs/components';
import './index.scss';

export default function HotelIndex() {
  // 状态管理
  const [currentCity, setCurrentCity] = useState('武汉市');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);

  // 生成未来30天日期选项
  const generateDateOptions = () => {
    const options = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      options.push(dateStr);
    }
    return options;
  };
  const dateOptions = generateDateOptions();
  const [checkInIdx, setCheckInIdx] = useState(0);
  const [checkOutIdx, setCheckOutIdx] = useState(1);
  const checkInDate = dateOptions[checkInIdx];
  const checkOutDate = dateOptions[checkOutIdx];
  const stayNights = checkOutIdx - checkInIdx;

  // 静态数据
  const bannerList = [
    { id: 1, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/易宿精品酒店", hotelId: 1 },
    { id: 2, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/星辰酒店", hotelId: 2 },
    { id: 3, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/悦居酒店", hotelId: 3 },
  ];

  const hotelList = [
    { id: 1, name: "易宿精品酒店（市中心店）", address: "XX市XX区解放大道88号", price: 228, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/易宿精品酒店" },
    { id: 2, name: "星辰酒店（高铁站店）", address: "XX市XX区高铁站东路12号", price: 188, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/星辰酒店" },
    { id: 3, name: "悦居酒店（景区店）", address: "XX市XX区西湖路66号", price: 268, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/悦居酒店" },
  ];

  // 页面初始化
  useEffect(() => {
    setFilteredHotels(hotelList);
    // 模拟定位
    Taro.getLocation({
      type: 'gcj02',
      success: (res) => console.log('定位成功', res),
      fail: () => Taro.showToast({ title: '定位失败，使用默认城市', icon: 'none' })
    });
  }, []);

  // 搜索筛选逻辑
  useEffect(() => {
    if (!searchKeyword) {
      setFilteredHotels(hotelList);
    } else {
      const keyword = searchKeyword.toLowerCase();
      const result = hotelList.filter(hotel => 
        hotel.name.toLowerCase().includes(keyword) || hotel.address.toLowerCase().includes(keyword)
      );
      setFilteredHotels(result);
    }
  }, [searchKeyword]);

  // 页面渲染
  return (
    <View className="container">
      {/* 核心搜索区域：恢复定位显示 + 可输入 */}
      <View className="search-container">
        <View className="location-wrap">
          <Text className="location-icon">📍</Text>
          <Text className="location-text">{currentCity}</Text>
        </View>
        <View className="input-wrapper">
          <Input
            className="native-input"
            placeholder="请输入酒店名/地址搜索"
            placeholderStyle={{ color: '#999' }}
            value={searchKeyword}
            onInput={(e) => setSearchKeyword(e.detail.value)}
            type="text"
          />
        </View>
      </View>

      {/* 日期选择区域 */}
      <View className="date-select-bar">
        <Picker range={dateOptions} value={checkInIdx} onChange={(e) => setCheckInIdx(e.detail.value)}>
          <View className="date-item">{checkInDate || '选择入住日期'}</View>
        </Picker>
        <Text className="divider">|</Text>
        <Picker range={dateOptions} value={checkOutIdx} onChange={(e) => setCheckOutIdx(e.detail.value)}>
          <View className="date-item">{checkOutDate || '选择离店日期'}</View>
        </Picker>
        {stayNights > 0 && <Text className="night-count">共 {stayNights} 晚</Text>}
      </View>

      {/* 查询按钮 */}
      <View className="search-btn" onClick={() => {
        Taro.navigateTo({
          url: `/pages/hotelList/index?city=${currentCity}&keyword=${searchKeyword}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
        });
      }}>
        <Text className="btn-text">查询酒店</Text>
      </View>

      {/* 轮播图 */}
      <View className="banner">
        <Swiper indicatorDots autoplay circular interval={3000} duration={500}>
          {bannerList.map(item => (
            <SwiperItem key={item.id}>
              <Image src={item.img} mode="widthFix" className="banner-img" onClick={() => {
                Taro.navigateTo({ url: `/pages/detail/index?id=${item.hotelId}` });
              }} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 功能入口 */}
      <View className="func-grid">
        <View className="func-item" onClick={() => Taro.showToast({ title: '热门城市待开发', icon: 'none' })}>
          <Text className="func-text">热门城市</Text>
        </View>
        <View className="func-item" onClick={() => Taro.showToast({ title: '价格筛选待开发', icon: 'none' })}>
          <Text className="func-text">价格筛选</Text>
        </View>
        <View className="func-item" onClick={() => Taro.showToast({ title: '评分排序待开发', icon: 'none' })}>
          <Text className="func-text">评分排序</Text>
        </View>
      </View>

      {/* 酒店列表 */}
      <View className="hotel-list">
        <Text className="list-title">推荐酒店</Text>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <View key={hotel.id} className="hotel-card" onClick={() => {
              Taro.navigateTo({ url: `/pages/detail/index?id=${hotel.id}` });
            }}>
              <Image src={hotel.img} mode="widthFix" className="hotel-img" />
              <View className="hotel-info">
                <Text className="hotel-name">{hotel.name}</Text>
                <Text className="hotel-address">{hotel.address}</Text>
                <Text className="hotel-price">¥{hotel.price}/晚起</Text>
              </View>
            </View>
          ))
        ) : (
          <Text className="empty-text">暂无符合条件的酒店</Text>
        )}
      </View>
    </View>
  );
}