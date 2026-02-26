import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { View, Text, Input, Picker, Image, ScrollView, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss';
// 引入公共酒店数据
import { HOTEL_DATA } from '../../utils/hotelData';

// 城市列表
const cityOptions = [
  { label: '武汉', value: '武汉' },
  { label: '北京', value: '北京' },
  { label: '上海', value: '上海' },
  { label: '广州', value: '广州' },
  { label: '深圳', value: '深圳' }
];

// 酒店专属轮播图数据（关联酒店ID，点击跳转对应详情页）
const bannerList = [
  { 
    id: 1, 
    hotelId: 1, // 关联易宿精品酒店
    img: 'https://placeholder.pics/svg/375x150/F5F5F5/999999/易宿精品酒店-市中心核心商圈' 
  },
  { 
    id: 2, 
    hotelId: 2, // 关联星辰酒店
    img: 'https://placeholder.pics/svg/375x150/F5F5F5/999999/星辰酒店-高铁站旁出站即达' 
  },
  { 
    id: 3, 
    hotelId: 3, // 关联悦居酒店
    img: 'https://placeholder.pics/svg/375x150/F5F5F5/999999/悦居酒店-景区湖景推窗见景' 
  }
];

// 日期选择器数据生成
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

export default function Index() {
  // 状态管理
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [currentCity, setCurrentCity] = useState('武汉');
  const [checkInDateIndex, setCheckInDateIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState(getDateOptions()[0]?.value);
  const [checkOutDateIndex, setCheckOutDateIndex] = useState(1);
  const [checkOutDate, setCheckOutDate] = useState(getDateOptions()[1]?.value);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(HOTEL_DATA);

  // 城市选择
  const handleCityChange = (e) => {
    const index = e.detail.value;
    setCurrentCityIndex(index);
    setCurrentCity(cityOptions[index].value);
  };

  // 入住日期选择
  const handleCheckInChange = (e) => {
    const index = e.detail.value;
    setCheckInDateIndex(index);
    setCheckInDate(getDateOptions()[index].value);
  };

  // 离店日期选择
  const handleCheckOutChange = (e) => {
    const index = e.detail.value;
    setCheckOutDateIndex(index);
    setCheckOutDate(getDateOptions()[index].value);
  };

  // 搜索酒店
  const handleSearch = () => {
    if (!currentCity) {
      Taro.showToast({ title: '请选择城市', icon: 'none' });
      return;
    }
    if (!checkInDate || !checkOutDate) {
      Taro.showToast({ title: '请选择入住/离店日期', icon: 'none' });
      return;
    }
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      Taro.showToast({ title: '离店日期需晚于入住日期', icon: 'none' });
      return;
    }

    // 筛选逻辑：关键词匹配（名称/地址）+ 城市匹配
    let result = HOTEL_DATA.filter(hotel => {
      const matchCity = hotel.address.includes(currentCity);
      const matchKeyword = searchKeyword 
        ? hotel.name.includes(searchKeyword) || hotel.address.includes(searchKeyword)
        : true;
      return matchCity && matchKeyword;
    });

    setFilteredHotels(result);

    // 跳转到酒店列表页，传递参数
    Taro.navigateTo({
      url: `/pages/hotelList/index?city=${currentCity}&keyword=${searchKeyword}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
    });
  };

  // 新增：轮播图点击跳转对应酒店详情页
  const handleBannerClick = (hotelId) => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${hotelId}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
    });
  };

  return (
    <ScrollView className="index-page" scrollY>
      {/* 酒店专属轮播图（带跳转功能） */}
      <Swiper className="banner-swiper" autoplay circular indicatorDots>
        {bannerList.map(item => (
          <SwiperItem key={item.id}>
            <View 
              className="banner-item"
              onClick={() => handleBannerClick(item.hotelId)} // 点击跳转对应酒店
            >
              <Image 
                src={item.img} 
                mode="widthFix" 
                className="banner-img"
              />
            </View>
          </SwiperItem>
        ))}
      </Swiper>

      {/* 顶部搜索栏 */}
      <View className="search-bar">
        <Picker
          mode="selector"
          range={cityOptions}
          rangeKey="label"
          value={currentCityIndex}
          onChange={handleCityChange}
        >
          <View className="city-picker">
            <Text className="city-text">{currentCity}</Text>
          </View>
        </Picker>
        
        <Input
          className="search-input"
          placeholder="请输入酒店名称/地址"
          value={searchKeyword}
          onInput={(e) => setSearchKeyword(e.detail.value)}
        />
        
        <View className="search-btn" onClick={handleSearch}>
          <Text className="btn-text">查询</Text>
        </View>
      </View>

      {/* 日期选择区 */}
      <View className="date-selector">
        <Picker
          mode="selector"
          range={getDateOptions()}
          rangeKey="label"
          value={checkInDateIndex}
          onChange={handleCheckInChange}
        >
          <View className="date-item">
            <Text className="date-label">入住</Text>
            <Text className="date-value">{checkInDate || '请选择'}</Text>
          </View>
        </Picker>
        
        <View className="date-split">至</View>
        
        <Picker
          mode="selector"
          range={getDateOptions()}
          rangeKey="label"
          value={checkOutDateIndex}
          onChange={handleCheckOutChange}
        >
          <View className="date-item">
            <Text className="date-label">离店</Text>
            <Text className="date-value">{checkOutDate || '请选择'}</Text>
          </View>
        </Picker>
      </View>

      {/* 酒店列表（首页预览） */}
      <View className="hotel-list">
        <Text className="list-title">推荐酒店</Text>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <View 
              key={hotel.id}
              className="hotel-card"
              onClick={() => {
                Taro.navigateTo({
                  url: `/pages/detail/index?id=${hotel.id}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
                });
              }}
            >
              <Image 
                src={hotel.img}
                mode="widthFix" 
                className="hotel-img"
              />
              <View className="hotel-info">
                <Text className="hotel-name">{hotel.name}</Text>
                <Text className="hotel-address">{hotel.address}</Text>
                <Text className="hotel-price">
                  ¥{Math.min(...hotel.rooms.map(r => r.price))}/晚起
                </Text>
              </View>
            </View>
          ))
        ) : (
          <Text className="empty-text">暂无推荐酒店</Text>
        )}
      </View>
    </ScrollView>
  );
}