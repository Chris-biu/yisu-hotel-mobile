import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, View as ScrollView } from '@tarojs/components';
import './index.scss';
// 引入公共酒店数据（包含房型）
import { HOTEL_DATA } from '../../utils/hotelData';

export default function HotelList() {
  // 接收首页传递的参数
  const [queryParams, setQueryParams] = useState({
    city: '',
    keyword: '',
    checkIn: '',
    checkOut: ''
  });
  
  // 核心修改：不再用本地静态数据，直接用公共的 HOTEL_DATA
  // 提取酒店基础信息（列表页只展示基础信息，房型在详情页展示）
  const baseHotelList = HOTEL_DATA.map(hotel => ({
    id: hotel.id,
    name: hotel.name,
    address: hotel.address,
    // 列表页展示「最低价格」（取第一个房型的价格，也可以取所有房型的最低价）
    price: hotel.rooms[0].price, 
    score: Math.random() * 0.5 + 4.5, // 模拟评分（可替换为真实数据）
    img: hotel.img
  }));
  
  const [filteredList, setFilteredList] = useState(baseHotelList);

  // 页面加载时获取参数并筛选酒店
  useEffect(() => {
    const params = Taro.getCurrentInstance().router.params;
    setQueryParams(params);
    
    // 深拷贝基础列表，避免修改原数据
    let result = [...baseHotelList];
    
    // 1. 按城市筛选（匹配地址中包含城市名）
    if (params.city) {
      result = result.filter(hotel => 
        hotel.address.toLowerCase().includes(params.city.toLowerCase())
      );
    }
    
    // 2. 按关键词筛选（名称/地址匹配）
    if (params.keyword) {
      const keyword = params.keyword.toLowerCase();
      result = result.filter(hotel => 
        hotel.name.toLowerCase().includes(keyword) || 
        hotel.address.toLowerCase().includes(keyword)
      );
    }
    
    setFilteredList(result);
  }, []);

  return (
    <View className="hotel-list-page">
      {/* 顶部返回+查询条件展示 */}
      <View className="header">
        <Text className="back-btn" onClick={() => Taro.navigateBack()}>←</Text>
        <View className="query-info">
          <Text className="city">{queryParams.city || '全部城市'}</Text>
          <Text className="date">{queryParams.checkIn || '未选择'} 至 {queryParams.checkOut || '未选择'}</Text>
        </View>
      </View>

      {/* 酒店列表（滚动展示） */}
      <ScrollView className="list-container" scrollY>
        {filteredList.length > 0 ? (
          filteredList.map(hotel => (
            <View 
              key={hotel.id}
              className="hotel-card"
              onClick={() => {
                // 跳转详情页时，传递完整参数（含日期）
                Taro.navigateTo({ 
                  url: `/pages/detail/index?id=${hotel.id}&checkIn=${queryParams.checkIn}&checkOut=${queryParams.checkOut}` 
                });
              }}
            >
              <Image src={hotel.img} className="hotel-img" mode="widthFix" />
              <View className="hotel-info">
                <Text className="hotel-name">{hotel.name}</Text>
                <Text className="hotel-address">{hotel.address}</Text>
                <View className="bottom-info">
                  <Text className="score">评分：{hotel.score.toFixed(1)}</Text>
                  <Text className="price">¥{hotel.price}/晚起</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text className="empty-text">暂无符合条件的酒店</Text>
        )}
      </ScrollView>
    </View>
  );
}