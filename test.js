import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Atur jumlah "user" (Virtual Users) dan durasi serangan/tes
  vus: 10000,          
  duration: '59m',  
};

export default function () {
  // Ganti URL di bawah ini dengan URL web kamu
  http.get('https://presensi.sage.my.id');
  sleep(0); // Jeda sangat singkat agar request terus menerus
}
