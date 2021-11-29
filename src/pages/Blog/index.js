import {CardBlog} from "../../components"
export default function Blog() {
    const blogs = [
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng trọ: bẫy lừa đảo khi thuê phòng sinh viên cần chú ý",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "390px",
                margin: "0 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng trọ: Sinh viên nên tìm phòng trọ qua kênh nào",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "390px",
                margin: "0 2.5rem"
            }
        },
        {
            img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: "Kinh nghiệm tìm phòng trọ: Đi xem trọ nên xem gì?",
            dateAgo: "a year ago",
            timeReading: "3 mins read",
            style: {
                width: "319px",
                height: "390px",
                margin: "0 2.5rem"
            }
        }
    ]
    return (
        <div>
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