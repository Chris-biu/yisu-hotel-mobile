import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, Input, Swiper, SwiperItem, Picker } from '@tarojs/components';
import './index.scss';

// 纯函数组件，严格遵守Hooks规则
export default function HotelIndex() {
  // ====================== 所有Hooks集中写在最顶层 ======================
  // 1. 定位相关状态
  const [currentCity, setCurrentCity] = useState('武汉市');
  // 2. 搜索关键词状态
  const [searchKeyword, setSearchKeyword] = useState('');
  // 3. 过滤后的酒店列表（用于搜索实时筛选）
  const [filteredHotels, setFilteredHotels] = useState([]);

  // 生成未来30天日期选项（适配 Picker）
  const generateDateOptions = () => {
    const options = [];
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0]; // 格式：2026-02-27
      options.push(dateStr);
    }
    return options;
  };
  const dateOptions = generateDateOptions();

  // 新增日期选择状态（替换原 Calendar 状态）
  const [checkInIdx, setCheckInIdx] = useState(0); // 入住日期索引
  const [checkOutIdx, setCheckOutIdx] = useState(1); // 离店日期索引
  const checkInDate = dateOptions[checkInIdx];
  const checkOutDate = dateOptions[checkOutIdx];
  const stayNights = checkOutIdx - checkInIdx; // 自动计算间夜数

  // ====================== 静态数据（不用useState，避免性能浪费） ======================
  // 轮播图数据（带hotelId，点击跳转详情页）
  const bannerList = [
    { id: 1, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/易宿精品酒店", hotelId: 1 },
    { id: 2, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/星辰酒店", hotelId: 2 },
    { id: 3, img: "https://placeholder.pics/svg/375x200/F5F5F5/999999/悦居酒店", hotelId: 3 },
  ];

  // 推荐酒店原始数据
  const hotelList = [
    {
      id: 1,
      name: "易宿精品酒店（市中心店）",
      address: "XX市XX区解放大道88号",
      price: 228,
      img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/易宿精品酒店"
    },
    {
      id: 2,
      name: "星辰酒店（高铁站店）",
      address: "XX市XX区高铁站东路12号",
      price: 188,
      img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/星辰酒店"
    },
    {
      id: 3,
      name: "悦居酒店（景区店）",
      address: "XX市XX区西湖路66号",
      price: 268,
      img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/悦居酒店"
    }
  ];

  // ====================== 副作用与逻辑 ======================
  // 页面加载时初始化筛选列表
  useEffect(() => {
    setFilteredHotels(hotelList);
    // 模拟获取定位（可选，不影响核心功能）
    Taro.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('定位成功', res);
        // 可对接地图API转城市名，这里暂用默认值
      },
      fail: () => {
        Taro.showToast({ title: '定位失败，使用默认城市', icon: 'none' });
      }
    });
  }, []);

  // 搜索关键词变化时，实时筛选酒店
  useEffect(() => {
    if (!searchKeyword) {
      setFilteredHotels(hotelList); // 无关键词显示全部
    } else {
      const keyword = searchKeyword.toLowerCase();
      const result = hotelList.filter(hotel => 
        hotel.name.toLowerCase().includes(keyword) || 
        hotel.address.toLowerCase().includes(keyword)
      );
      setFilteredHotels(result);
    }
  }, [searchKeyword]);

  // ====================== 页面渲染 ======================
  return (
    <View className="index-page">
      {/* 1. 核心查询区域：定位 + 搜索框 */}
      <View className="search-box">
        <View className="location-item">
          <Text className="location-icon">📍</Text>
          <Text className="location-text">{currentCity}</Text>
        </View>
        <Input
          className="search-input"
          placeholder="请输入酒店名/地址搜索"
          placeholderStyle={{ color: '#999' }}
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.detail.value)}
        />
      </View>

      {/* 日期选择区域（Picker版本） */}
      <View className="date-select-bar">
        <Picker
          range={dateOptions}
          value={checkInIdx}
          onChange={(e) => setCheckInIdx(e.detail.value)}
        >
          <View className="date-item">{checkInDate || '选择入住日期'}</View>
        </Picker>
        <Text className="divider">|</Text>
        <Picker
          range={dateOptions}
          value={checkOutIdx}
          onChange={(e) => setCheckOutIdx(e.detail.value)}
        >
          <View className="date-item">{checkOutDate || '选择离店日期'}</View>
        </Picker>
        {stayNights > 0 && (
          <Text className="night-count">共 {stayNights} 晚</Text>
        )}
      </View>

      {/* 新增：查询按钮（紧跟日期选择，符合用户操作逻辑） */}
      <View 
        className="search-btn"
        onClick={() => {
          // 跳转并携带查询参数到酒店列表页
          Taro.navigateTo({
            url: `/pages/hotelList/index?city=${currentCity}&keyword=${searchKeyword}&checkIn=${checkInDate}&checkOut=${checkOutDate}`
          });
        }}
      >
        <Text className="btn-text">查询酒店</Text>
      </View>

      {/* 2. 轮播图（可滑动 + 点击跳转详情页） */}
      <View className="banner">
        <Swiper
          className="banner-swiper"
          indicatorDots
          autoplay
          circular
          interval={3000}
          duration={500}
        >
          {bannerList.map(item => (
            <SwiperItem key={item.id}>
              <Image
                src={item.img}
                mode="widthFix"
                className="banner-img"
                onClick={() => {
                  Taro.navigateTo({
                    url: `/pages/detail/index?id=${item.hotelId}`
                  });
                }}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 3. 功能入口（热门城市/价格筛选/评分排序，增加点击交互） */}
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

      {/* 4. 推荐酒店列表（支持搜索筛选） */}
      <View className="hotel-list">
        <Text className="list-title">推荐酒店</Text>
        {filteredHotels.length > 0 ? (
          filteredHotels.map(hotel => (
            <View 
              key={hotel.id}
              className="hotel-card"
              onClick={() => {
                Taro.navigateTo({
                  url: `/pages/detail/index?id=${hotel.id}`
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
                <Text className="hotel-price">¥{hotel.price}/晚起</Text>
              </View>
            </View>
          ))
        ) : (
          <Text className="empty-text">暂无符合条件的酒店</Text>
        )}
      </View>
    </View> // 唯一的根容器闭合标签
  );
}