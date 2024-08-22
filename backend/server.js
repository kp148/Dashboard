// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const xlsx = require('xlsx');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const fs = require('fs');

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// const mongoURI = 'mongodb+srv://Admin:admin@excelfile.61ddk.mongodb.net/'; // Replace with your MongoDB URI
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err));

// // Example Schema and Model
// const DataSchema = new mongoose.Schema({
//   data: mongoose.Schema.Types.Mixed,
// });

// const DataModel = mongoose.model('Data', DataSchema);

// // Configure multer for file upload handling
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + '-' + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage: storage });

// // Create uploads directory if it doesn't exist
// if (!fs.existsSync('uploads')) {
//   fs.mkdirSync('uploads');
// }

// // Endpoint to handle file upload and processing
// app.post('/upload', upload.single('file'), async (req, res) => {
//   try {
//     const filePath = req.file.path;
//     const workbook = xlsx.readFile(filePath);
//     const sheetName = workbook.SheetNames[0];
//     const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

//     // Save data to MongoDB
//     const data = new DataModel({ data: sheetData });
//     await data.save();

//     res.json({
//       message: 'File uploaded and data saved to MongoDB successfully!',
//       data: sheetData,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: 'Error processing file',
//       error: error.message,
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });




const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// MongoDB connection
mongoose.connect('mongodb+srv://admin:admin@excel.izizi.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your MongoDB schema and model
const excelSchema = new mongoose.Schema({
  data: Array,
});
const ExcelData = mongoose.model('ExcelData', excelSchema);

const app = express();

// Setup multer for file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Store data in MongoDB
    const excelData = new ExcelData({ data: sheetData });
    await excelData.save();

    // Cleanup: delete the uploaded file after processing
    fs.unlinkSync(filePath);

    res.json(sheetData);
  } catch (error) {
    res.status(500).json({ message: 'Error processing file' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
