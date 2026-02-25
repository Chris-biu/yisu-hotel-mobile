import Taro from '@tarojs/taro';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, View as ScrollView } from '@tarojs/components';
import './index.scss';

export default function HotelList() {
  // 接收首页传递的参数
  const [queryParams, setQueryParams] = useState({
    city: '',
    keyword: '',
    checkIn: '',
    checkOut: ''
  });
  // 酒店列表数据（复用首页数据，后续替换为接口请求）
  const hotelList = [
    { id: 1, name: "易宿精品酒店（市中心店）", address: "武汉市XX区解放大道88号", price: 228, score: 4.8, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/易宿精品酒店" },
    { id: 2, name: "星辰酒店（高铁站店）", address: "武汉市XX区高铁站东路12号", price: 188, score: 4.6, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/星辰酒店" },
    { id: 3, name: "悦居酒店（景区店）", address: "武汉市XX区西湖路66号", price: 268, score: 4.9, img: "https://placeholder.pics/svg/100x100/F5F5F5/999999/悦居酒店" }
  ];
  const [filteredList, setFilteredList] = useState(hotelList);

  // 页面加载时获取参数
  useEffect(() => {
    const params = Taro.getCurrentInstance().router.params;
    setQueryParams(params);
    // 根据参数筛选酒店（简单版：关键词匹配）
    if (params.keyword) {
      const result = hotelList.filter(hotel => 
        hotel.name.toLowerCase().includes(params.keyword.toLowerCase()) || 
        hotel.address.toLowerCase().includes(params.keyword.toLowerCase())
      );
      setFilteredList(result);
    }
  }, []);

  return (
    <View className="hotel-list-page">
      {/* 顶部返回+查询条件展示 */}
      <View className="header">
        <Text className="back-btn" onClick={() => Taro.navigateBack()}>←</Text>
        <View className="query-info">
          <Text className="city">{queryParams.city}</Text>
          <Text className="date">{queryParams.checkIn} 至 {queryParams.checkOut}</Text>
        </View>
      </View>

      {/* 酒店列表（滚动展示） */}
      <ScrollView className="list-container" scrollY>
        {filteredList.length > 0 ? (
          filteredList.map(hotel => (
            <View 
              key={hotel.id}
              className="hotel-card"
              onClick={() => Taro.navigateTo({ url: `/pages/detail/index?id=${hotel.id}` })}
            >
              <Image src={hotel.img} className="hotel-img" />
              <View className="hotel-info">
                <Text className="hotel-name">{hotel.name}</Text>
                <Text className="hotel-address">{hotel.address}</Text>
                <View className="bottom-info">
                  <Text className="score">评分：{hotel.score}</Text>
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