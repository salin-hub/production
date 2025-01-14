
import { Box } from '@mui/material';
import telephone from '../assets/images/telephone.png'
import dolar from '../assets/images/dolar.png'
import write from '../assets/images/write.png'
import edit from '../assets/images/edit.png'
const Footer = () => {
    return (
        <Box
        sx={{
            marginBottom: {
              xs: '50px', 
              sm: '100px', 
              md: '150px', 
            },
            marginTop: {
              xs: '10px',  
              sm: '20px',  
              md: '30px',  
            },
          }}
            className="card_item"
        >
            <div className="container">
                <h1>CONTACT US</h1>
                <div className="phone">
                    <div className="phone_img">
                    <img src={telephone} alt=""/>
                    </div>
                    <h1>លេខទូរស័ព្ទ (+885) 863 106 78</h1>
                </div>
                <h1>គោលនយោបាយលក់</h1>
                <div className="phone">
                    <div className="phone_img">
                    <img src={dolar} alt=""/>
                    </div>
                    <h1>គោលនយោបាយត្រឡប់មកវិញ</h1>
                </div>
                <div className="phone">
                    <div className="phone_img">
                    <img src={write} alt=""/>
                    </div>
                    <h1>គោលនយោបាយប្រើប្រាស់</h1>
                </div>
                <div className="phone">
                    <div className="phone_img">
                    <img src={edit} alt=""/>
                    </div>
                    <h1>គោលការណ៍ភាពឯកជន</h1>
                </div>
            </div>
        </Box>
    );
};

export default Footer;