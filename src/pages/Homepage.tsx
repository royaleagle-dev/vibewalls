import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'
import HomepageContent from '../contents/HomepageContent'


const Homepage = () => {
    return (
        <div>
            <HeaderComponent />
            <HomepageContent />
            <FooterComponent />
        </div>
    )
}

export default Homepage