import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Star, Wifi, Shield, Utensils } from 'lucide-react';

export default function NhaTroLinhQuy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:0909666174';
  };

  const handleZalo = () => {
    window.location.href = 'https://zalo.me/0909666174';
  };

  const rooms = [
    {
      name: 'Phòng Đơn',
      capacity: '1-2 người',
      price: '750k - 950k',
      features: ['Wifi miễn phí', 'Bồn bếp', 'Camera an ninh'],
      highlight: false
    },
    {
      name: 'Phòng Thông',
      capacity: '2-3 người',
      price: '1.100k - 1.300k',
      features: ['2 phòng nối nhau', 'Wifi miễn phí', 'Bồn bếp', 'Camera an ninh'],
      highlight: false
    },
    {
      name: 'Phòng VIP',
      capacity: '2-3 người',
      price: '1.300k - 1.500k',
      features: ['Mới xây', 'Máy lạnh riêng', 'Wifi miễn phí', 'Bồn bếp', 'Camera an ninh'],
      highlight: true
    }
  ];

  const amenities = [
    { icon: Wifi, name: 'Wifi Miễn Phí' },
    { icon: Utensils, name: 'Bồn Bếp & Lavabo' },
    { icon: Shield, name: 'Camera An Ninh' },
    { icon: MapPin, name: 'Chỗ Để Xe' },
  ];

  const reviews = [
    {
      name: 'Anh Minh',
      rating: 5,
      text: 'Phòng sạch sẽ, tiện nghi, môi trường yên tĩnh. Rất hài lòng với dịch vụ!'
    },
    {
      name: 'Chị Linh',
      rating: 5,
      text: 'Địa điểm tuyệt vời, gần chợ và khu công nghiệp. Chủ nhà rất thân thiện.'
    },
    {
      name: 'Anh Hùng',
      rating: 5,
      text: 'Giá rẻ mà chất lượng tốt. Đặc biệt là an ninh rất an tâm với camera 24/7.'
    },
    {
      name: 'Em Trang',
      rating: 5,
      text: 'Sân rộng, có ghế đá để thư giãn. Wifi mạnh, nước nóng lạnh đầy đủ.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Sticky CTA Button */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 py-3 shadow-lg z-40 animate-bounce">
          <div className="container mx-auto px-4 flex justify-center gap-3">
            <button
              onClick={handleCall}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 flex items-center gap-2"
            >
              <Phone size={20} /> Gọi Ngay
            </button>
            <button
              onClick={handleZalo}
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100"
            >
              Chat Zalo
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Nhà Trọ Linh Quy</h1>
          <div className="hidden md:flex gap-6">
            <a href="#gioi-thieu" className="text-gray-700 hover:text-blue-600 font-semibold">Giới Thiệu</a>
            <a href="#phong" className="text-gray-700 hover:text-blue-600 font-semibold">Phòng</a>
            <a href="#tiennghi" className="text-gray-700 hover:text-blue-600 font-semibold">Tiện Nghi</a>
            <a href="#lienhe" className="text-gray-700 hover:text-blue-600 font-semibold">Liên Hệ</a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-blue-50 py-4 px-4 space-y-2">
            <a href="#gioi-thieu" className="block text-gray-700 hover:text-blue-600 py-2">Giới Thiệu</a>
            <a href="#phong" className="block text-gray-700 hover:text-blue-600 py-2">Phòng</a>
            <a href="#tiennghi" className="block text-gray-700 hover:text-blue-600 py-2">Tiện Nghi</a>
            <a href="#lienhe" className="block text-gray-700 hover:text-blue-600 py-2">Liên Hệ</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                Tìm Phòng Trọ Sạch Sẽ & An Ninh?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Nhà trọ Linh Quy - Sạch sẽ - Tiện nghi - An ninh
              </p>
              <p className="text-lg mb-8 opacity-85">
                Phòng luôn full! Chỉ còn vài phòng trống. Gọi ngay để giữ phòng!
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleCall}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
                >
                  <Phone size={20} /> Gọi Ngay
                </button>
                <button
                  onClick={handleZalo}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition shadow-lg"
                >
                  Chat Zalo
                </button>
              </div>
            </div>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipM93JpkDUM_i9B_WdTmUWQWBNZHljE2Tvum71c2=s1360-w1360-h1020-rw"
              alt="Nhà trọ Linh Quy"
              className="w-full h-96 object-cover rounded-lg border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Giới Thiệu */}
      <section id="gioi-thieu" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Về Nhà Trọ Linh Quy
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Nhà trọ Linh Quy là lựa chọn lý tưởng cho công nhân, dân văn phòng muốn tìm phòng trọ chất lượng cao với giá phải chăng.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Chúng tôi cung cấp:
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Phòng luôn sạch sẽ, thoáng mát</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Tiện nghi đầy đủ (wifi, bồn bếp, lavabo)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>An ninh 24/7 với camera giám sát</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Giá rẻ, hợp lý cho bất kỳ ai</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center border-4 border-blue-200 shadow-lg">
              <span className="text-gray-600 text-2xl font-bold">Ảnh Giới Thiệu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Loại Phòng */}
      <section id="phong" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Loại Phòng Trọ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  room.highlight
                    ? 'border-4 border-blue-600 bg-blue-50 ring-4 ring-yellow-300'
                    : 'border border-gray-200'
                }`}
              >
                {room.highlight && (
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 font-bold">
                    ⭐ PHÒNG NỔI BẬT ⭐
                  </div>
                )}
                <div className="bg-gray-300 h-48 flex items-center justify-center">
                  <span className="text-gray-600 font-bold">Ảnh {room.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">Sức chứa: {room.capacity}</p>
                  <p className="text-3xl font-bold text-green-600 mb-6">{room.price}</p>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-gray-700">
                        <span className="text-blue-600">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleCall}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                  >
                    Liên Hệ Ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiện Nghi */}
      <section id="tiennghi" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Tiện Nghi Đầy Đủ
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
                >
                  <Icon size={48} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800">{amenity.name}</h3>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🏡 Không Gian Chung</h3>
              <p className="text-gray-700">Sân rộng phù hợp cho trẻ em vui chơi, có ghế đá để thư giãn</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">⛩️ Không Gian Tâm Linh</h3>
              <p className="text-gray-700">Có đền Đức Mẹ để cầu nguyện, tìm tòi bình yên</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Hình Ảnh & Gallery
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="bg-gray-300 h-48 rounded-lg flex items-center justify-center border-2 border-gray-400 hover:shadow-lg transition"
              >
                <span className="text-gray-600 font-bold text-lg">Ảnh {num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vị Trí & Bản Đồ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Vị Trí & Bản Đồ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Địa Chỉ</h3>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Ấp An Hoà, Khu 3 Bàu Xéo, Tây Hoà, Hưng Thịnh, Đồng Nai</strong>
              </p>
              <h3 className="text-xl font-bold text-blue-600 mb-4">Lợi Thế Vị Trí</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Gần khu công nghiệp Bàu Xéo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Gần chợ Bàu Xéo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Thuận tiện đi làm</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Gần trường học và các dịch vụ tiện ích</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                src="https://www.google.com/maps?q=Bàu+Xéo+Đồng+Nai&output=embed"
                title="Vị trí Nhà trọ Linh Quy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
            Review Từ Khách Hàng
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ⏰ Chỉ Còn Vài Phòng Trống!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Phòng luôn full - Gọi ngay để giữ chỗ của bạn
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={24} /> Gọi Ngay: 0909666174
            </button>
            <button
              onClick={handleZalo}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition shadow-lg"
            >
              Chat Zalo: 0909666174
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Nhà Trọ Linh Quy</h3>
              <p className="text-gray-300">
                Sạch sẽ - Tiện nghi - An ninh
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liên Hệ</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2 items-center">
                  <Phone size={18} className="text-blue-400" />
                  <span>0909666174</span>
                </li>
                <li className="flex gap-2 items-center">
                  <MapPin size={18} className="text-blue-400" />
                  <span>Ấp An Hoà, Bàu Xéo, Đồng Nai</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Giờ Mở Cửa</h3>
              <p className="text-gray-300">Thứ 2 - Chủ Nhật: 06:00 - 22:00</p>
              <p className="text-gray-300 mt-2">Liên hệ 24/7 qua Zalo</p>
            </div>
          </div>
          <hr className="border-gray-700 mb-8" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Nhà Trọ Linh Quy. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
