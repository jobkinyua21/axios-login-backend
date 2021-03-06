let express=require('express');
let mongoose=require('mongoose');
let cors=require('cors');
let bodyParser=require('body-parser');


const userRoute=require('../server/routes/user.routes')

mongoose.Promise=global.Promise;
mongoose.connect(
    `mongodb+srv://root:admin@cluster0.mkpfl.mongodb.net/smrtprk?retryWrites=true&w=majority`,
    
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true 
    }
).then(()=>{
    console.log('Database connected');
});

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());
app.use('/users',userRoute)

const port =process.env.PORT ||4000;
const server=app.listen(port,()=>{
    console.log('connected to port ' +port)
})

//error handling
app.use((req,res,next)=>{
    next(createError(404));
});

app.use(function (err,req,res,next){
    console.error(err.message);
    if (!err.statusCode) err.statusCode =500;
    res.status(err.statusCode).send(err.message);
});