import React, { useState, Fragment, useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import axios from "axios";
//import arrowDown from "../../assests/image/arrow-down.svg";

import "./basic_info.css";
const BasicInfo = ({ setTypeSelected, totalPrice, setTotalPrice }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);

  const [idCategory, setIdCategory] = useState("");
  const [idCity, setIdCity] = useState("");
  const [idDistrict, setIdDistrict] = useState("");
  const [idWard, setIdWard] = useState("");

  const [unitReal, setUnitReal] = useState("");
  const [priceReal, setPriceReal] = useState("");
  const [areaReal, setAreaReal] = useState("");

  const [styleCate, setStyleCate] = useState("option_disable");
  const [styleType, setStyleType] = useState("option_disable");
  const [styleCity, setStyleCity] = useState("option_disable");
  const [styleDis, setStyleDis] = useState("option_disable");
  const [styleWard, setStyleWard] = useState("option_disable");
  const [styleUnit, setStyleUnit] = useState("option_disable");

  const [stateCate, setStateCate] = useState("");

  const [countTitle, setCountTitle] = useState(99);

  const [address, setAddress] = useState({
    city: "",
    district: "",
    ward: "",
    note: "",
    project: "",
  });

  useEffect(() => {
    setStyleDis("option_disable");
    setStyleWard("option_disable");
    setIdDistrict("");
    document.querySelector(".districtSelect").value = "";
    document.querySelector(".wardSelect").value = "";
    console.log(address);
  }, [idCity]);

  const [detailAddress, setDetailAddress] = useState("");

  useEffect(() => {
    const { city, district, ward, note, project } = address;
    const haveProject = project ? `${project}, ` : "";
    const haveNote = note ? `${note}, ` : "";
    const haveWard = ward ? `${ward}, ` : "";
    const haveDistrict = district ? `${district}, ` : "";
    const haveCity = city ? `${city}.` : "";

    let detail = `${haveNote}${haveWard}${haveDistrict}${haveCity}`;
    let detail2 = `${haveProject}${haveDistrict}${haveCity}`;
    if (haveProject) {
      setDetailAddress(detail2);
    } else {
      setDetailAddress(detail);
    }
  }, [address]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const [price, setPrice] = useState("");
  useEffect(() => {
    if (priceReal * areaReal < 1000000) {
      const kq = priceReal * areaReal;
      setPrice(`${numberWithCommas(kq)}`);
    }
    if (priceReal * areaReal >= 1000000 && priceReal * areaReal <= 999999999) {
      const kq = (priceReal * areaReal) / 1000000;
      setPrice(`${kq} tri???u`);
    }
    if (priceReal * areaReal >= 1000000000) {
      const kq = (priceReal * areaReal) / 1000000000;
      setPrice(`${kq} t???`);
    }
  }, [priceReal, areaReal, unitReal]);

  const handleFetchCategory = async () => {
    if (category.length == 0) {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/categories`
      );
      setCategory(response.data);
    }
  };
  useEffect(() => {
    setStyleType("option_disable");
    setAddress({ ...address, ward: "", note: "", project: "" });
  }, [idCategory]);

  useEffect(() => {
    console.log(address);
  }, [idWard]);
  const handleFetchType = async () => {
    const id = idCategory.split(",")[0];
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/categories/${id}/types`
    );
    setType(response.data);
  };
  const handleFetchCity = async () => {
    if (city.length == 0) {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/address/provinces`
      );
      setCity(response.data);
      console.log(response.data);
    }
  };

  const handleFetchDistrict = async () => {
    const id = idCity.split(",")[0];
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/address/provinces/${id}/districts`
    );
    setDistrict(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    if (idDistrict !== "") {
      setAddress({
        ...address,
        ward: "",
        note: "",
        project: "",
      });
      document.querySelector(".wardSelect").value = "";
      setStyleWard("option_disable");
      handleFetchWard();
      console.log(address);
    }
  }, [idDistrict]);

  const handleFetchWard = async () => {
    if (idDistrict !== "") {
      const id = idDistrict.split(",")[0];
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/address/districts/${id}/wards`
      );
      setWard(response.data);
      console.log(response.data);
    }
  };

  const handleChangeType = (index) => {
    if (index) {
      const selectedType = type[index];
      setTypeSelected(selectedType);
    }
  };

  const handleGetNameCity = (id) => {
    if (id !== "") {
      const citySelected = city.find((item) => item._id === id);
      return citySelected.name;
    }
  };

  const handleGetNameDistrict = (id) => {
    if (id !== "") {
      const districtSelected = district.find((item) => item._id === id);
      return districtSelected.name;
    }
  };

  const handleGetNameWard = (id) => {
    if (id !== "") {
      const wardSelected = ward.find((item) => item._id === id);
      return wardSelected.name;
    }
  };

  const handleGetNameNote = (detail) => {
    const note = detail;
    console.log(detail);
  };
  const handleGetNameProject = (proj) => {
    const project = proj;
    setAddress((prev) => ({
      ...prev,
      project,
    }));
  };

  return (
    <div className="basic_info" style={{padding: "28px 0 28px 28px"}}>
      <h1 style={{color: "#02AAB0"}}>TH??NG TIN C?? B???N</h1>
      <p>
        T??n ch??? ph??ng <span>*</span>
      </p>
      <input
        type="text"
        pattern="[A-Za-z0-9_-\s.]{30,99}"
        placeholder="Nh???p t??n"
        className="input_title"
        {...register("title")}
        maxLength="99"
        minLength="30"
        onChange={(e) => {
          setCountTitle(99 - e.target.value.length);
        }}
      />
      <span className="count-key">{countTitle} </span>
      <p className={errors.title?.message ? "active" : "non-active"}>
        {errors.title?.message}
      </p>
      <div className="select_container">
        <div className="left">
          <p>
            S??? ??i???n tho???i ch??? ph??ng <span>*</span>
          </p>
          <div className="select__items">
          <input
            type="number"
            placeholder="Nh???p ti???n ?????t c???c"
            className="input_items input_price"
            {...register("unitPrice")}
          />
          </div>
          <p className={errors.category?.message ? "active" : "non-active"}>
            {errors.category?.message}
          </p>
        </div>
        <div className="right">
          <p>
            S???c ch???a <span>*</span>
          </p>
          <div className="select__items">
          <input
            type="number"
            placeholder="Nh???p s???c ch???a"
            className="input_items input_price"
            {...register("unitPrice")}
          />
          </div>
          <p className={errors.type?.message ? "active" : "non-active"}>
            {errors.type?.message}
          </p>
        </div>
      </div>
      <div className="select_container">
        <div className="left">
          <p>
            T???nh/Th??nh ph??? <span>*</span>
          </p>
          <div className="select__items">
            <select
              className={`${styleCity}`}
              {...register("province_Id")}
              onClick={() => {
                handleFetchCity();
              }}
              onChange={(e) => {
                setIdCity(e.target.value);

                setAddress({
                  city: handleGetNameCity(e.target.value),
                  district: "",
                  ward: "",
                  note: "",
                  project: "",
                });
                if (e.target.value == "") {
                  setStyleCity("option_disable");
                } else {
                  setStyleCity("option_able");
                }
              }}
            >
              <option value="" className="option_disable">
                Ch???n t???nh/th??nh ph???
              </option>
              <option value="" className="option_disable">
                  Th??nh Ph??? H??? Ch?? Minh
                </option>
                <option value="" className="option_disable">
                  H?? N???i
                </option>
                <option value="" className="option_disable">
                  ???? N???ng
                </option>
              {city &&
                city.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <p className={errors.province_Id?.message ? "active" : "non-active"}>
            {errors.province_Id?.message}
          </p>
        </div>
        <div className="right">
          <p>
            Qu???n/Huy???n <span>*</span>
          </p>
          <div className="select__items">
            <select
              className={`${styleDis} districtSelect`}
              {...register("district_Id")}
              onClick={() => {
                handleFetchDistrict();
              }}
              onChange={(e) => {
                setIdDistrict(e.target.value);
                setAddress({
                  ...address,
                  district: handleGetNameDistrict(e.target.value),
                  ward: "",
                });
                if (e.target.value == "") {
                  setStyleDis("option_disable");
                } else {
                  setStyleDis("option_able");
                }
              }}
            >
              <option value="" className="option_disable">
                Ch???n qu???n/huy???n
              </option>
              <option value="" className="option_disable">
                Qu???n 1
              </option>
              <option value="" className="option_disable">
              Qu???n 2
              </option>
              <option value="" className="option_disable">
              Qu???n 3
              </option>
              {district &&
                district.map((item) => {
                  return (
                    <option key={item._id} value={`${item._id}`}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <p className={errors.district_Id?.message ? "active" : "non-active"}>
            {errors.district_Id?.message}
          </p>
        </div>
      </div>
      {idDistrict !== "" ? (
        <div className="select_container">
          <div className="left">
            <p>
              Ph?????ng x?? <span>*</span>
            </p>
            <div className="select__items">
              <select
                className={`${styleWard} wardSelect`}
                {...register("ward_Id")}
                onClick={() => {
                  handleFetchWard();
                }}
                onChange={(e) => {
                  handleFetchWard();
                  setAddress({
                    ...address,
                    ward: handleGetNameWard(e.target.value),
                  });
                  setIdWard(e.target.value);
                  console.log(address);
                  if (e.target.value == "") {
                    setStyleWard("option_disable");
                  } else {
                    setStyleWard("option_able");
                  }
                }}
              >
                <option value="" className="option_disable">
                  Ch???n ph?????ng/x??
                </option>

                <option value="" className="option_disable">
                  ph?????ng 1
                </option>
                <option value="" className="option_disable">
                ph?????ng 2
                </option>
                <option value="" className="option_disable">
                ph?????ng 3
                </option>
              </select>
            </div>
            <p className={errors.ward_Id?.message ? "active" : "non-active"}>
              {errors.ward_Id?.message}
            </p>
          </div>
          <div className="right">
            <p>
              ???????ng ph??? <span>*</span>
            </p>
            <input
              type="text"
              placeholder="Ch???n ???????ng ph???"
              className="input_items"
              {...register("note")}
              onChange={(e) => {
                handleGetNameNote(e.target.value);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="select_container">
          <div className="left">
            <p>
              Ph?????ng x?? <span>*</span>
            </p>
            <div className="select__items">
              <select
                className="option_disable wardSelect"
                {...register("ward_Id")}
              >
                <option value="" className="option_disable">
                  Ch???n ph?????ng/x??
                </option>
                <option value="" className="option_disable">
                  Ph?????ng 1
                </option>
                <option value="" className="option_disable">
                Ph?????ng 2
                </option>
                <option value="" className="option_disable">
                Ph?????ng 3
                </option>
              </select>
            </div>
            <p className={errors.ward_Id?.message ? "active" : "non-active"}>
              {errors.ward_Id?.message}
            </p>
          </div>
          <div className="right">
            <p>
              ???????ng ph??? <span>*</span>
            </p>
            <input
              type="text"
              placeholder="Ch???n ???????ng ph???"
              className="input_items"
              {...register("note")}
              onChange={(e) => {
                handleGetNameNote(e.target.value);
              }}
            />
          </div>
        </div>
      )}
      <div className="select_container">
        <div className="left">
          <p>Gi?? </p>
          <div className="select__items">
            <input
              {...register("project")}
              placeholder="Nh???p gi?? ph??ng"
              className="input_items"
            />
          </div>
        </div>
        <div className="right">
          <p>
            Di???n t??ch (m <sup>2</sup> )
          </p>
          <input
            type="number"
            placeholder="Nh???p di???n t??ch ph??ng"
            className="input_items"
            {...register("square")}
          />
        </div>
      </div>
      <div className="select_container">
        <div className="left">
          <p>Ti???n ?????t c???c </p>
          <input
            type="number"
            placeholder="Nh???p ti???n ?????t c???c"
            className="input_items input_price"
            {...register("unitPrice")}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
