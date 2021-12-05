import {CardBlog, MainCardBlog} from "../../components";
import BannerSignUp from '../../components/banner/bannerSignUp';

export default function Blog() {
    const blogs = [
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng homestay: bẫy lừa đảo khi thuê phòng sinh viên cần chú ý",
            mainTitle: "“Phòng xác thực”: Lựa chọn an toàn cho người thuê HomeStay",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm homestay: Sinh viên nên tìm homestay qua kênh nào",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm homestay: Đi xem  nên xem gì?",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Danh sách nhà homestay xác thực khu vực Đà Lạt",
            dateAgo: "a year ago",
            timeReading: "5 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Danh sách homestay xác thực khu vực Vũng tàu",
            dateAgo: "a year ago",
            timeReading: "7 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Danh sách nhà  homestay xác thực Đà Nẵng",
            dateAgo: "a year ago",
            timeReading: "2 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Danh sách nhà  homestay xác thực Hải Châu",
            dateAgo: "a year ago",
            timeReading: "7 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm homestay: Cần tìm hiểu những gì trước khi tìm homestay ?",
            dateAgo: "a year ago",
            timeReading: "5 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng homestay: Nên ở homestay với ai ?",
            dateAgo: "a year ago",
            timeReading: "7 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng homestay: Các bước tìm homestay từ A đến Z",
            dateAgo: "a year ago",
            timeReading: "9 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        }
    ]
    return (
        <>
        <BannerSignUp />
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            <MainCardBlog
                title="Homestay xác thực”: Lựa chọn an toàn cho người thuê homestay"
                dateAgo= "a year ago"
                timeReading= "3 mins read"
                styleCard= {{
                    width: "688px",
                    height: "390px",
                    margin: "2.5rem 2.5rem",
                    backgroundImage:' url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            />
            {
                blogs.map((blog, index) => {
                    return (
                        <CardBlog  key={index}
                        title={blog.title}
                        to='/home/blog/detail'
                        srcImg={blog.img}
                        dateAgo={blog.dateAgo}
                        timeReading={blog.timeReading}
                        styleCard={blog.style}
                        />
                    )
                })
            }
        </div>
        </>
    );
}