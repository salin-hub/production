
import { Container, Typography, Box, Button, } from '@mui/material';
import image from '../assets/images/p1.jpg';
import { useNavigate } from "react-router-dom"; // Import useNavigate
const NoniGiaComponent = () => {
    const navigate = useNavigate();
    const clickBack = () => {
        navigate("/");
    }
    return (
        <Container>
            <Box
                sx={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                }}
            >
                <Typography variant="h4" gutterBottom fontFamily={"Battambang, serif"} color='red' textAlign={"center"}>
                    សូមអគុណ!!
                </Typography>
                <Typography variant="h4" gutterBottom fontFamily={"Battambang, serif"} color='red'>
                    សម្រាប់ការជឿជាក់លើយើងខ្ញុំ
                </Typography>

                <Typography variant="body1" gutterBottom fontFamily={"Battambang, serif"}>
                    នាយកដ្ឋានសេវាកម្មអតិជនរបស់យើងនឹងទាក់ទងអ្នកក្នុងក្នុងពេលឆាប់ៗ
                    នេះដើម្បីបញ្ជាក់ការបញ្ជាទិញរបស់អ្នក។
                </Typography>
                <img
                    src={image}
                    alt="Noni Gia Product"
                    style={{ width: '100%', maxWidth: '400px', marginTop: '20px', borderRadius: "12px" }}
                />
                <Typography variant="body1" gutterBottom fontFamily={"Battambang, serif"} fontSize={"20px"} margin={"12px"} fontWeight={"bold"}>
                    ដើម្បីមើលផលិតផ្សេងទៀតសូមចុចនៅទីនេះ
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: '20px', fontSize: '16px' }}
                    onClick={clickBack}
                >
                    Click Here
                </Button>
            </Box>
        </Container>
    );
};

export default NoniGiaComponent;