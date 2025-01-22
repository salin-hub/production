import { Box, Typography, Grid, Stack, Divider, IconButton } from '@mui/material';
import telephone from '../assets/images/telephone.png';
import dolar from '../assets/images/dolar.png';
import write from '../assets/images/write.png';
import edit from '../assets/images/edit.png';
import titok from '../assets/images/tik-tok.png';
import facebook from '../assets/images/facebookk.png'
const Footer = () => {
    const contactItems = [
        { img: telephone, text: 'លេខទូរស័ព្ទ (+885) 863 106 78' },
        { img: dolar, text: 'គោលនយោបាយលក់' },
        { img: write, text: 'គោលនយោបាយប្រើប្រាស់' },
        { img: edit, text: 'គោលការណ៍ភាពឯកជន' },
    ];

    return (
        <Box
            sx={{
                bgcolor: '#f9f9f9',
                padding: {
                    xs: '20px 10px',
                    sm: '40px 20px',
                    md: '60px 40px',
                },
                marginTop: {
                    xs: '10px',
                    sm: '20px',
                    md: '30px',
                },
                textAlign: 'center',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                borderRadius: '8px',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    marginBottom: '20px',
                    fontWeight: 'bold',
                    color: '#333',
                }}
            >
                CONTACT US
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {contactItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} className='controller_contact'>
                        <Stack
                            direction="column"
                            alignItems="center"
                            spacing={1.5}
                        >
                            <Box
                                component="img"
                                src={item.img}
                                alt="contact-icon"
                                sx={{ width: 20, height: 20 }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: {
                                        xs: '0.8rem',
                                        sm: '1rem',
                                    },
                                    color: '#555',
                                    fontFamily: 'Battambang, serif',
                                    textAlign: 'center',
                                }}
                            >
                                {item.text}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>

            <Divider />

            <Stack direction="row" justifyContent="center" spacing={2} marginBottom="20px">
                <IconButton
                    component="a"
                    href="https://www.facebook.com/share/1951hnQYC1/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#3b5998' }}
                >
                     <Box
                        component="img"
                        src={facebook}
                        alt="TikTok"
                        sx={{ width: 24, height: 24 }}
                    />
                    
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#000000' }}
                >
                    <Box
                        component="img"
                        src={titok}
                        alt="TikTok"
                        sx={{ width: 24, height: 24 }}
                    />
                </IconButton>
            </Stack>

            <Typography
                variant="body2"
                sx={{ color: '#888', fontSize: '0.9rem', marginBottom: '50px' }}
            >
            
            </Typography>
        </Box>
    );
};

export default Footer;
