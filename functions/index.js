const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'hanzgrrr@gmail.com',
        pass: '123456'
    }
})


exports.sendEmail = functions.firestore
.document('messages/{msgId}')
.onCreate((snapshot, context)=>{

    const mailOptions = {
        from:'annamarandola@gmail.com',
        to:'annamarandola@gmail.com',
        subject:'ReactReview site new message',
        html:`
            <h1>You receiver a new message</h1>
            <p>
                <b>name:</b> ${snapshot.data().name }<br>
                <b>Email:</b> ${snapshot.data().email }<br>
                <b>MSG:</b> ${snapshot.data().message }<br>
            </p>
        `
    }


    return transporter.sendMail(mailOptions,(error,data)=>{
        if(error){
            console.log(error);
            return false
        }
        console.log('SENT !!')
    })
})
