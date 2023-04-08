import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import { Container } from "reactstrap";

const BlogsPage = () => {
    return (
        <Container>
            <Header />
            <SubHeader current='BlogsPage' />
            
            <Footer />
        </Container>
    );
};

export default BlogsPage;