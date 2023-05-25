import { Container } from "react-bootstrap"

const Header = (props: {bgImage: String, title: String}) => {
    const {bgImage, title} = props
    return(
        <Container fluid className="site-blocks-cover overlay" style={{backgroundImage: `url(${bgImage})`}}>
            <Container>
                <div className="row align-items-center justify-content-start">
                    <div className="col-md-6 text-center text-md-left">
                        <h1 className="bg-black" style={{width:"50%", color:"white"}}>{title}</h1>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Header