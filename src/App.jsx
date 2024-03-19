import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://media.discordapp.net/attachments/864012224237928488/1207700574842130492/unknown.png?ex=660583cf&is=65f30ecf&hm=6ab301866ab46ffc676d1293875f087d9e90c9ae20dda90c858f2b503bd4b8d0&=&format=webp&quality=lossless"  />

        <Title title="Subpawad Sardsanga (job)">
          <h3>ตำแหน่ง : Frontend</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2003/09/11").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66617767108
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202063@ssru.ac.th</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อ: ศุภวัชญ์ ศาสตร์สง่า ชื่อเล่น: จ๊อบ อายุ 21 ปี สามารถเรียนรู้ได้อย่างรวดเร็ว พร้อมที่จะรับรู้และเรียนรู้ประสบการณ์ใหม่ๆ จากผู้อื่น ๆ ครับ</p>
        </Title>

        <Title title="Work Experience">
          <p>สร้างเว็บโดยใช้ Wordpress</p> 
          <p>สร้างเว็บโดยใช้ HTML,CSS</p>
          <p>สร้างเว็บเกี่ยวกับE-Commerce</p>
        </Title>

        <Title title="Skills"> 
          <p>HTML / CSS / JS</p>
          <p>React.js</p>
          <p>Github</p>
          <p>Adobe Premiere pro</p>
          <p>Adobe Photoshop</p>
          <p>Github</p>
        </Title>
      </div>
    </main>
  )
}

export default App
