import React, { Component } from "react";
<link rel="stylesheet" href="css/style.css"></link>;
class HomePage extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-8 md-secondary images">
            <img src="https://tongdaidatve.vn/wp-content/uploads/2019/09/banner-ve-xe-khach.jpg"></img>
          </div>
        </div>
        <article>
          <h3>ĐẶT VÉ TRỰC TUYẾN</h3>
          <div class="new_list">
            <div class="new_item">
              <h4> VÉ HÀ NỘI-HẢI PHÒNG </h4>
              <div class="content">
                Huy Hoàng xe ĐỎ chạy quốc lộ 5A - tần suất 20 phút/ chuyến. Huy
                Hoang Express khai thác trên cao tốc 5B - "NÓI KHÔNG VỚI BẤT BẮT
                KHÁCH DỌC ĐƯỜNG".
              </div>
            </div>
            <div class="new_item">
              <h4> VÉ CÁT BÀ</h4>

              <div class="content">
                Hình thức Liên vận Oto - tàu cao tốc. Tần suất 4 chuyến/ngày
                (ngày Lễ- Tết có lịch trình cụ thể riêng).
              </div>
            </div>
            <div class="new_item">
              <h4> THANH TOÁN TẠI CỬA HÀNG TIỆN ÍCH VINMART+ </h4>

              <div class="content">
                Đặt vé trên http://huyhoangasia.com - Thanh toán tại Bất kì cửa
                hàng VInmart+ gần nhất. Tại sao không?
              </div>
            </div>
          </div>
        </article>

        <article>
          <h3>TIN TỨC SỰ KIỆN</h3>
          <div class="new_list">
            <div class="new_item">
              <h4>
                5 ĐIỂM MỚI CỦA DỰ LUẬT ĐẢM BẢO TRẬT TỰ ÂN TOÀN GIAO THÔNG{" "}
              </h4>
            </div>
            <div class="new_item">
              <h4> BÃO SAUDEL GIẢM HAI CẤP</h4>
            </div>
            <div class="new_item">
              <h4>
                {" "}
                BỘ GIAO THÔNG VẬN TẢI YÊU CẦU HÀNH KHÁCH VẪN PHẢI ĐEO KHẨU TRANG
                TRONG SUỐT THỜI GIAN DI CHUYỂN{" "}
              </h4>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default HomePage;
