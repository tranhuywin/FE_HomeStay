import Styles from './blog-detail.module.scss';
import { ButtonBlog } from '../../components';
import UpArrow from '../../assets/images/icons/Up Arrow.png';
import Facebook from '../../assets/images/icons/Facebook.png';
import Twitter from '../../assets/images/icons/Twitter.png';
import { HeaderLogo } from "../../components/";
export default function BlogDetail() {
    return (
        <div>
            <header>
            <HeaderLogo></HeaderLogo>
        </header>
            <img src="https://blog.ohanaliving.vn/content/images/size/w2000/2020/08/neonbrand-ZqqwJA71Ke4-unsplash.jpg"
                alt="banner"
                className={Styles.Banner}
            >
            </img>
            <div className={Styles.Container}>
                <div className={Styles.Content}>
                    <div className={Styles.ContentTitle}>
                        <h2>Kinh nghiệm tìm phòng trọ: Sinh viên nên tìm phòng trọ qua kênh nào</h2>
                        <span className={Styles.ContentTitleTime}>Aug 26, 2020</span>
                    </div>
                    <div className={Styles.ContentBody}>
                        <p>Thị trường phòng trọ phát triển, các bạn sinh viên sẽ có thể dễ dàng tìm phòng hơn với vô vàng kênh tìm phòng. Tuy nhiên, không phải kênh tìm phòng nào cũng tốt, vậy hãy cùng Ohana tìm hiểu xem đâu là những kênh tìm phòng hiệu quả mà các bạn sinh viên có thể hướng đến nhé.</p>
                        <br /><br />
                        <h3>1. Người thân, bạn bè và các anh chị khóa trên</h3>
                        <p>Đây là kênh tìm phòng đáng tin cậy nhất và nên là kênh tìm phòng đầu tiên của các bạn sinh viên. Họ là người hiểu rõ được nhu cầu của bạn và có thể đưa ra cho bạn những lời khuyên bổ ích để giúp bạn tìm được căn phòng ưng ý. Họ cũng sẽ là người hỗ trợ bạn trong quá trình tìm phòng. Không những vậy, với sự giúp đỡ của các bạn sinh viên khóa trên, các bạn sẽ có một người hỗ trợ để tránh gặp phải lừa đảo và những căn phòng kém chất lượng. Tuy nhiên, kênh tìm phòng này sẽ chỉ có thể đưa ra cho bạn những lời khuyên bổ ích nhưng số lượng phòng ở nguồn này khá giới hạn thế nên sẽ khó để bạn có thể tìm ra được phòng ưng ý từ đây.</p>
                        <br /><br />
                        <h3>2. Các nhóm đáng tin cậy</h3>
                        <p>Kênh tiếp theo các bạn tìm phòng có thể hướng đến chính là các ứng dụng tìm phòng đáng tin cậy, những ứng dụng đáng tin cậy có thể kể đến ở đây đó là Ohana, chợ tốt, batdongsan, … Ở đây sẽ có số lượng phòng lớn, giúp cho các bạn sinh viên có nhiều lựa chọn hơn, tuy nhiên vấn đề ở đây lại nằm ở độ tin cậy và chất lượng của phòng trọ. Các phòng trọ ở các ứng dụng thường có kiểm duyệt nhưng không chắc chắn hoàn toàn về chất lượng. Nhưng các bạn thuê rọ không phải quá lo lắng khi nếu tìm đến Ohana, Ohana sẽ có lập một danh sách phòng “xác thực” do Ohana xác thực để giúp các bạn thuê phòng sẽ không phải quá lo lắng về chất lượng phòng trọ và lừa đảo khi tìm kiếm phòng trọ cho mình.</p>
                        <br /><br />
                        <h3>4. Các trang web tìm phòng</h3>
                        <p>Các trang web tìm phòng sẽ nên là lựa chọn cuối cùng khi tìm phòng của các bạn tìm trọ, do đây là kênh chưa được kiểm chứng rõ rang, dễ tìm phải lừa đảo. Thế nên các bạn tìm phòng chỉ nên tìm đến những kênh này khi không tìm được phòng ở những kênh kể trên. Ở các trang web tìm phòng, nguồn phòng sẽ cực kỳ đa dạng, nhưng độ tin cậy khá thấp, các bạn sẽ có thể gặp phải phòng kém chất lượng hay thậm chí cả lừa đảo trong quá trình tìm phòng.
                        </p>
                        <p>
                            Để tìm được nhà trọ như ý muốn các bạn nên tìm đến những nguồn đáng tin cậy như bạn bè người thân, các hội nhóm đáng tin. Nếu quyết định tìm kiếm nhà trọ trên mạng, nên tìm đến những trang mạng hoặc ứng dụng đáng tin cậy. Với nguồn nhà trọ chính thống và đã qua kiểm duyệt, Ohana sẽ luôn là một điểm đến đáng tin cậy đối với các bạn mới bắt đầu tìm phòng trọ với danh sách phòng “xác thực” được cập nhập hằng ngày. Chúc các bạn sớm tìm được phòng như ý nhé.
                        </p>
                        <p>
                            Tải app ngay để tìm phòng dễ dàng và có được những thông tin phòng trọ bổ ích nhé!!!
                        </p>
                        <p>
                            Cho Android: http://bit.ly/Ohana-Airdroid
                        </p>
                        <p>
                            Cho iOS: http://bit.ly/Ohana-IOS
                        </p>
                    </div>
                    <div className={Styles.ContentActor}>
                        <div className={Styles.ContentActorAvatar}></div>
                        <p className={Styles.ContentActorName}>Quang Nguyen</p>
                    </div>
                </div>
                <div className={Styles.Buttons}>
                    <div className={Styles.ButtonsSticky}>
                        <div className={Styles.ButtonsButton}>
                            <ButtonBlog icon={UpArrow} />
                        </div>
                        <div className={Styles.ButtonsButton}>
                            <ButtonBlog icon={Facebook} href={"https://www.facebook.com/"} />
                        </div>
                        <div className={Styles.ButtonsButton}>
                            <ButtonBlog icon={Twitter} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}