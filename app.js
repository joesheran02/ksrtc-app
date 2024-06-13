const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcryptjs")
const { loginmodel } = require("./models/login")
const { busmodel } = require("./models/bus")
const jwt = require("jsonwebtoken")

const app = express()
app.use(cors())
app.use(express.json())

const encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

mongoose.connect("mongodb+srv://joesheran:jjs2002j@cluster0.yf75nyn.mongodb.net/ksrtcDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/view",(request,response) => {
    let token = request.headers["token"]
    jwt.verify(token,"ksrtc-app",(error,decoded)=>{
        if (error) {
            response.json({"status":"Unauthorised Access"})
        } else {
            if(decoded)
                {
                    loginmodel.find().then(
                        (data) => {
                            response.json(data)
                        }
                    ).catch()
                }
                }
            
    })
   
})


app.post("/signIn", (request, response) => {
    let input = request.body
    loginmodel.find({ "email": request.body.email }).then(
        (data) => {
            if (data.length > 0) {
                let dbPassword = data[0].password
                // console.log(dbPassword)
                bcrypt.compare(input.password, dbPassword, (error, isMatch) => {
                    if (isMatch) {
                        jwt.sign({ email: input.email }, "ksrtc-app", { expiresIn: "1d" }, (error, token) => {
                            if (error) {
                                response.json({ "status": "Unable to create Token" })
                            } else {
                                response.json({ "status": "Success", "user ID": data[0]._id, "token": token })
                            }
                        })
                    } else {
                        response.json({ "status": "incorrect password" })
                    }
                })
            } else {
                response.json({ "status": "User Not Found !!!" })
            }
        }
    ).catch()
})


app.post("/signUp", async (request, response) => {
    let input = request.body
    let hashedpass = await encryptPass(input.password)
    console.log(hashedpass)
    input.password = hashedpass
    let login = new loginmodel(input)
    login.save()
    response.json({ "status": "success" })
})

app.post("/delete" ,(req,res)=>{
    let input = req.body
    busmodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({"status":"success"})
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})


app.post("/search" ,(req,res)=>{
    let input = req.body
    busmodel.find(input).then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})

app.get("/view" ,(req,res)=>{
    busmodel.find().then(
        (data)=>{
            res.send(data)
        }
    ).catch(
        (error)=>{
            res.send(error)
        }
    )
})

app.post("/add",(req,res)=>{
    let input= req.body
    let bus = new coursemodel(input)
    bus.save()
    res.json({"status":"success"})
}
)




app.listen(8080, () => {
    console.log("Server is Running")
})