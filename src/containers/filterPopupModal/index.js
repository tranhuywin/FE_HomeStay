import Numericupdown from "../../components/filterPopup/numericupdown";
import MultiCheckbox from "../../components/filterPopup/multiCheckbox";
import Styles from './filterPopupModal.module.scss'
export default function FilterPopupModal() {
    return (
        <div className={Styles.Wrapper}>
            <label className={Styles.WrapperTitleNumberic}>Phòng và giường ngủ</label>
            <div className={Styles.WrapperNumberic}>
                <Numericupdown title="Giường"></Numericupdown>
            </div>
            <div className={Styles.WrapperNumberic}>
                <Numericupdown title="Phòng ngủ"></Numericupdown>
            </div>
            <div className={Styles.WrapperNumberic}>
                <Numericupdown title="Phòng tắm"></Numericupdown>
            </div>
            <MultiCheckbox name="Tiện ích chung"
                checkboxs={['Thang máy', 'Thang bộ', 'Phòng họp', 'Khu vực đổ rác']}
            ></MultiCheckbox>
            <MultiCheckbox name="Tiện ích giải trí"
                checkboxs={['Billiard', 'Bóng bàn', 'Câu cá', 'Sân tennis']}
            ></MultiCheckbox>
            <MultiCheckbox name='Chăm sóc sức khỏe và làm đẹp'
                checkboxs={['Gym', 'Yoga', 'Sauna', 'Spa']}
            ></MultiCheckbox>
            <MultiCheckbox name='Mua sắm và ăn uống'
                checkboxs={['Quán cafe', 'Bar', 'Nhà hàng', 'Trung tâm thương mại', 'Cửa hàng lưu niệm']}
            ></MultiCheckbox>

            <div className={Styles.WrapperFilterFooter}>
                <button className={Styles.WrapperFilterFooterDelete}>Xóa</button>
                <button className={Styles.WrapperFilterFooterApply}>Áp dụng</button>
            </div>
        </div>
    )
}
