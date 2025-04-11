import { EventEmitter } from 'events';

const emitter = new EventEmitter ();
emitter.on{'send_email', (email_address)=>(
    console.info('Email Berhasil dikirim ke alamat: ' + email_address);
})

function forgetPassword() {

}