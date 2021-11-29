import {CardBlog, MainCardBlog} from "../../components";
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
            title: "Kinh nghiệm tìm phòng homestay: bẫy lừa đảo khi thuê phòng sinh viên cần chú ý",
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
            title: "Kinh nghiệm tìm phòng homestay: Sinh viên nên tìm phòng homestay qua kênh nào",
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
            title: "Kinh nghiệm tìm phòng homestay: Đi xem homestay nên xem gì?",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "393px",
                margin: "2.5rem 2.5rem"
            }
        }
    ]
    return (
        <div style={{display: 'flex', flexWrap: "wrap"}}>
            <MainCardBlog
                //srcImg= "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
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
                        srcImg={blog.img}
                        dateAgo={blog.dateAgo}
                        timeReading={blog.timeReading}
                        styleCard={blog.style}
                        />
                    )
                })
            }
        </div>
    );
}