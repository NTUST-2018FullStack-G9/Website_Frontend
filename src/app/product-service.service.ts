import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = [
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: '亞歷山大氣泡酒',
      Image: '../../assets/images/t_item13.jpg',
      Price: 81000, // 價格
      AfterPrice: 81, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 90,
      Type: 'brand'
    },
    {
      Name: '你媽的酒',
      Image: '../../assets/images/t_item2.jpg',
      Price: 666, // 價格
      AfterPrice: 666, // 折扣後的價格
      Discount: false, // 是否減價 1,0
      Dp : 0, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    },
    {
      Name: 'ABERFELDY艾柏迪艾柏迪12年單ㄧ純麥威士忌',
      Image: '../../assets/images/t_item1.jpg',
      Price: 100, // 價格
      AfterPrice: 90, // 折扣後的價格
      Discount: true, // 是否減價 1,0
      Dp : 10, // 折扣百分比
      Type: 'wisky'
    }
  ];
  carts = [
    {
      Name : '123',
      price : 20,
      num : 0,
      Image : '../../assets/images/t_item1.jpg',
      Type : 'Wisky'
    }








];
  constructor() { }
}
