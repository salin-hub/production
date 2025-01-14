import { useState } from "react";
import { Box, Button, TextField, Grid, RadioGroup, FormControlLabel, Radio, InputAdornment } from "@mui/material";
import { Phone, Person, LocationOn } from "@mui/icons-material";
import axios from "axios"; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate
const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    product: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate(); // Initialize useNavigate
  const handleSubmit = async (e) => {
    e.preventDefault();
    const botToken = "7977278535:AAFs_8Im3OERsDHGcsQEeQRt-SQu62g7oV0"; // Your Telegram Bot Token
    const chatId = "6259623604";
    const message = `
📝 **New Order Submission** 📝
- 📛 Name: ${formData.name}
- 📞 Phone: ${formData.phone}
- 📍 Address: ${formData.address}
- 📦 Product: ${formData.product}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {

      await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      });

      navigate("/success"); // Navigate to the success page
    } catch (error) {
      console.error("Error submitting form to Telegram:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Box sx={{ borderRadius: "10px" }} className="card_item">
      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="លេខទូរស័ព្ទ"
              name="phone"
              placeholder="លេខទូរស័ព្ទ(*)"
              value={formData.phone}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="ឈ្មោះ"
              name="name"
              placeholder="ឈ្មោះ(*)"
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="អាស័យដ្ឋាន"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="បញ្ចូលអាស័យដ្ឋាន(*)"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              name="product"
              value={formData.product}
              onChange={handleChange}
            >
              <FormControlLabel
                sx={{ fontFamily: "'Battambang', serif" }}  // Add font here
                value="NONI GIA មួយប្រអប់"
                control={<Radio color="error" />}
                label={<span style={{ fontFamily: "'Battambang', serif" }}>NONI GIA មួយប្រអប់</span>}
              />

              <FormControlLabel
                value="NONI GIA ពីរប្រអប់"
                control={<Radio color="error" />}
                label={<span style={{ fontFamily: "'Battambang', serif" }}>NONI GIA ពីរប្រអប់</span>}
              />
              <FormControlLabel
                value="NONI GIA បីប្រអប់"
                control={<Radio color="error" />}
                label={<span style={{ fontFamily: "'Battambang', serif" }}>NONI GIA បីប្រអប់</span>}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "red", color: "white", fontSize: "20px", fontFamily: "Bayon, serif" }}
            >
              បញ្ជាទិញ
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SubmitForm;
