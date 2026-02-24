import Taro from '@tarojs/taro';
import React from 'react';
import { View, Text, Image, Input } from '@tarojs/components';
import './index.scss';

export default function HotelIndex() {
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

      {/* 2. 轮播图占位（先用静态图） */}
      <View className="banner">
        <Image 
          src="https://placeholder.pics/svg/750x300/F5F5F5/999999/酒店预订轮播图" 
          mode="widthFix" 
          className="banner-img"
        />
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

      {/* 4. 推荐酒店列表（先放1个示例） */}
      <View className="hotel-list">
        <Text className="list-title">推荐酒店</Text>
        {/* 酒店卡片 */}
        <View className="hotel-card">
          <Image 
            src="https://placeholder.pics/svg/180x120/F5F5F5/999999/酒店图片" 
            mode="widthFix" 
            className="hotel-img"
          />
          <View className="hotel-info">
            <Text className="hotel-name">易宿精品酒店（市中心店）</Text>
            <Text className="hotel-address">XX市XX区解放大道88号</Text>
            <Text className="hotel-price">¥228/晚起</Text>
          </View>
        </View>
      </View>
    </View>
  );
}