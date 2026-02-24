import Taro from '@tarojs/taro';
import React from 'react';
import { View, Text, Image, Input, Swiper, SwiperItem } from '@tarojs/components';
import './index.scss';

// 只保留一个函数定义
export default function HotelIndex() {
  // ===== 把酒店列表数据移到return之前（核心修复）=====
  const hotelList = [
    {
      id: 1,
      name: "易宿精品酒店（市中心店）",
      address: "XX市XX区解放大道88号",
      price: 228,
      img: "https://placeholder.pics/svg/180x120/F5F5F5/999999/酒店图片1"
    },
    {
      id: 2,
      name: "星辰酒店（高铁站店）",
      address: "XX市XX区高铁站东路12号",
      price: 188,
      img: "https://placeholder.pics/svg/180x120/F5F5F5/999999/酒店图片2"
    },
    {
      id: 3,
      name: "悦居酒店（景区店）",
      address: "XX市XX区西湖路66号",
      price: 268,
      img: "https://placeholder.pics/svg/180x120/F5F5F5/999999/酒店图片3"
    }
  ];

  // 只保留一个return语句，把所有页面内容整合进来
  return (
    <View className="index-page">
      {/* 1. 顶部搜索栏 */}
      <View className="search-bar">
        <Input 
          className="search-input"
          placeholder="请输入城市/酒店名称搜索"
          placeholderStyle={{ color: '#999' }}
        />
      </View>

      {/* 2. 轮播图（可滑动） */}
      <View className="banner">
        <Swiper 
          className="swiper"
          indicatorDots={true}
          autoplay={true}
          interval={3000}
          duration={500}
        >
          <SwiperItem>
            <Image 
              src={require('../../images/banner1.png')}
              mode="widthFix" 
              className="banner-img"
            />
          </SwiperItem>
          <SwiperItem>
            <Image 
              src={require('../../images/banner2.png')}
              mode="widthFix" 
              className="banner-img"
            />
          </SwiperItem>
          <SwiperItem>
            <Image 
              src={require('../../images/banner3.png')}
              mode="widthFix" 
              className="banner-img"
            />
          </SwiperItem>
        </Swiper>
      </View>

      {/* 3. 功能入口（热门城市/价格筛选/评分排序） */}
      <View className="func-grid">
        <View className="func-item">
          <Text className="func-text">热门城市</Text>
        </View>
        <View className="func-item">
          <Text className="func-text">价格筛选</Text>
        </View>
        <View className="func-item">
          <Text className="func-text">评分排序</Text>
        </View>
      </View>

      {/* 4. 推荐酒店列表（动态渲染） */}
      <View className="hotel-list">
        <Text className="list-title">推荐酒店</Text>
        {hotelList.map(hotel => (
          <View 
            key={hotel.id}
            className="hotel-card"
            onClick={() => {
  Taro.navigateTo({
    url: `/pages/detail/index?id=${hotel.id}`
  })
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
        ))}
      </View>
    </View>
  );
}