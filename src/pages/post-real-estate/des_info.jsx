import React, { useState } from "react";
import "./des_info.css";
import { useForm, useFormContext } from "react-hook-form";
const DesInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [countContent, setCountContent] = useState(3000);
  return (
    <div>
      <div className="describe_info" style={{padding: "28px 0 0 28px", marginTop: "32px"}}>
        <h1 style={{color: "#02AAB0"}}>THÔNG TIN MÔ TẢ</h1>
        <p>
          Giới thiệu homestay <span>*</span>
        </p>
        <textarea
          row="5"
          cols="5"
          {...register("content")}
          maxLength="3000"
          pattern="[A-Za-z0-9_-\s.]{30,99}"
          minLength="30"
          onChange={(e) => {
            setCountContent(3000 - e.target.value.length);
          }}
          placeholder="Giới thiệu chung về homestay của bạn. Ví dụ: Khu nhà có vị trí thuận lợi: gần công viên, gần trường học... Tổng diện tích 52m², đường đi ô tô vào tận cửa"
        ></textarea>
        <span className="count-content">{countContent}</span>
      </div>
    </div>
  );
};

export default DesInfo;
