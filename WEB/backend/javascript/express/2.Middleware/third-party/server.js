const morgan = require('morgan');
app.use(morgan('dev')); // or 'combined' for detailed logs

const cors = require('cors');
app.use(cors()); // Enable CORS for all routes

const helmet = require('helmet');
app.use(helmet());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const session = require('express-session');
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors.array());
    res.send('User registered');
  });




const compression = require('compression');
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
morgan — logging

cors — CORS support

helmet — security headers

cookie-parser — cookies

express-session — sessions

passport — authentication

multer — file uploads

express-validator — validation

compression — compression

body-parser (built-in now) — request parsing
*/