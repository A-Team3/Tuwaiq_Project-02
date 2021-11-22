import './footer.css'
import{Image} from "react-bootstrap"
import {Link} from 'react-router-dom'
function Footer(){
    return(
        <footer className='fotr'>
          <div>
  <h1>Connect with us

</h1> 
  <Link to="/">Wteen@example.com</Link>
  <Image style={{width:"80px",height:"80px"}} src="https://play-lh.googleusercontent.com/hcA5UwVcIVIR3nxiAAl5tXMElHSqeoCJiqtMg8IbHDH5WC2ag5MAs40hUuHcyNC2u08" />
  <Image style={{width:"80px",height:"80px"}} src="https://www.almrsal.com/wp-content/uploads/2021/02/Depositphotos_127186948_s-2019.jpg" />
  <p>مؤسسة وتين الوقفية

رقم السجل : 
1010627625
الرقم الضريبي : 310406758300003

العنوان : الرياض - حي الورود - طريق العليا

ص.ب. 2609 رمز بريدي 12251
© 2021 كل الحقوق محفوظة لمبادرة وتين
وتين هي مبادرة مدعومة من وزارة الصحة.</p>
</div>
</footer>

        
    );
}
export default Footer;