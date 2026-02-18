
import React from 'react';
import { AnalysisType, PersonalityProfile, SynergyContent } from './types';

export const BRAND_NAME = "MigiJames";
export const AUTHOR = "ครูเด่น มาสเตอร์ฟา";

// Using the provided photo of Migi and James
export const COUPLE_IMAGE = "https://raw.githubusercontent.com/tardgon/image/main/migi_james.jpg";
// Placeholder for individual high-end shots until actual ones are provided (using themed images)
export const JAMES_HERO = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
export const MIGI_HERO = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800";

export const MIGI_PROFILE: PersonalityProfile = {
  name: "น้องมิกิ",
  year: "2569",
  imageUrl: MIGI_HERO,
  decoding: [
    {
      title: "Step 1: วิเคราะห์ต้นเหตุและบริบท (The Decoding)",
      items: [
        "ปีนี้โดดเด่นเรื่อง 'กัมมะ' (งาน) และ 'ลาภะ' (โชคลาภ) - งานนำมาซึ่งชื่อเสียงที่ยิ่งใหญ่",
        "พลังธะนัง (1) -> สหัชชะ (1) -> ศุภะ (1): การสื่อสารและการพบปะผู้คนคือบ่อเกิดแห่งความสำเร็จ",
        "มหาภูติจร: ดาว 1 ตก 'โลกาวินาศ' - ช่วงแรกอาจวุ่นวายใจ แต่มี 'เดช' ช่วยให้สง่างามและเฉียบขาด",
        "ฐานที่ 4: ดาว 1 สถิตบนเลข 15 (กำลังพระจันทร์) - เสน่ห์เมตตามหานิยมสูงมาก (คู่เสน่ห์ 2/15)"
      ]
    },
    {
      title: "Step 2: วิเคราะห์ผลลัพธ์ (Future Projection)",
      items: [
        "ฐานที่ 8: 'สิทธิโชค' - โอกาสพิเศษแบบไม่คาดฝัน รางวัลที่คนอื่นแย่งชิงได้ยาก",
        "ฐานที่ 9: 'ญาติ' - ธุรกิจจะขยายตัวจนลูกค้าเกิดความเชื่อใจและผูกพันเหมือนคนในครอบครัว"
      ]
    }
  ],
  strategy: [
    {
      title: "กลยุทธ์แก้เกม (The Matrix Solution)",
      items: [
        "เร่งความสำเร็จ: เชื่อมสู่ฐานที่ 7 ดาว 2 (พระจันทร์) - เน้นการบริการที่ 'ดูแลหัวใจ' (Service Mind)",
        "Action: การออกแบบอิง 'Emotional Connection' และการแก้ปัญหาด้วยความอ่อนโยนคือรายได้มหาศาล"
      ]
    }
  ],
  astral: {
    planet: "The Sun (1) & Venus (6)",
    sign: "Fire & Earth (Leo-Virgo Blend)",
    house: "10th & 11th House (Career & Network)",
    visualization: "ขับเคลื่อนงานด้วยความมั่นใจแบบราศีสิงห์ แต่ละเอียดประณีตแบบราศีกันย์"
  },
  jewelryAdvice: [
    {
      title: "รหัสสีและอัญมณีเปิดสวิตช์พลังงาน (Energy Activation)",
      items: [
        "พลังแห่ง 'ศรี' (เมตตา/เงิน): มุก (Pearl), มูนสโตน, เพชรน้ำงามประกายขาวนวล",
        "พลังแห่ง 'เดช' (อำนาจ/บารมี): ทับทิม (Ruby), โกเมน, ตัวเรือนทองคำแท้",
        "Astral Jewelry Design: ใช้ทับทิมเป็น Center โอบล้อมด้วยเพชร บนตัวเรือนทองคำ",
        "ข้อควรระวัง: เลี่ยงอัญมณีสีเหลืองหรือบุษราคัมชั่วคราว (ดาว 5 เป็นกาลกิณีจร)"
      ]
    }
  ],
  missionAdvice: [
    {
      title: "พันธกิจ 'The Wounded Healer' (แหล่งเรียนรู้)",
      items: [
        "บทเรียนชีวิต: เปลี่ยน 'บาดแผล' เป็น 'ประทีปส่องทาง' ให้คนสับสนในชีวิต",
        "Learning Center: บรรยากาศต้องเหมือนบ้าน (Cancer) แต่มีปัญญาดั่งวิหาร (Sagittarius)",
        "Action: ใช้ 'ศิลปะและอัญมณี' เป็นสื่อกลางในการสอนแบบ Storytelling",
        "Synergy: ครูเด่นจะช่วยออกแบบ Flow Learning ที่เน้นความรู้สึกและประสบการณ์"
      ]
    }
  ],
  wisdom: "วาจาสิทธิ์คืออาวุธ มนตราคืออัญมณี - คอนเทนต์ที่พูดถึงพลังอัญมณีที่เปลี่ยนชีวิตคนจะสร้างความมั่งคั่งทันที"
};

export const JAMES_PROFILE: PersonalityProfile = {
  name: "น้องเจมส์",
  year: "2569",
  imageUrl: JAMES_HERO,
  decoding: [
    {
      title: "Step 1: วิเคราะห์ต้นเหตุและบริบท (Cause & Context)",
      items: [
        "เส้นทางดาว: อัตตะ (6) -> ปุตตะ (6) -> พยายะ (6) - พรสวรรค์สร้างสรรค์จากการแก้ปัญหาซับซ้อน",
        "มหาภูติจร: ดาว 6 เป็น 'ราชา' - มุ่งมั่นสร้างอาณาจักร ไม่กลัวความลำบาก",
        "ทักษาจร: ดาว 6 เป็น 'ศรี' - ปีแห่งโชคลาภและความเป็นสิริมงคลสูงสุด"
      ]
    },
    {
      title: "Step 2: วิเคราะห์ผลลัพธ์ปลายทาง (Outcome)",
      items: [
        "ฐานที่ 8: 'สิทธิโชค' - โอกาสพิเศษที่คนอื่นแย่งชิงยาก เป็นรางวัลจากอำนาจที่มองไม่เห็น",
        "ฐานที่ 9: 'ธะนัง' - การสร้างกระแสการเงินที่มั่นคง มั่งคั่งจากความสามารถเฉพาะตัว"
      ]
    }
  ],
  strategy: [
    {
      title: "กลยุทธ์แก้เกม (The Matrix Solution)",
      items: [
        "เร่งความสำเร็จ: ใช้ความเด็ดเดี่ยวและ 'ความรู้จริง' (Technical Knowledge)",
        "Action: ให้ข้อมูลเชิงลึกที่ลูกค้าปฏิเสธไม่ได้ ใช้ 'Storytelling by Star Power'"
      ]
    }
  ],
  astral: {
    planet: "Venus (6) & Moon (2)",
    sign: "Leo (Fire) & Taurus (Earth)",
    house: "1st & 2nd Houses",
    visualization: "ดาวศุกร์สว่างไสวในราศีสิงห์ - ผู้นำเทรนด์ที่เปี่ยมบารมีแต่มีจิตใจอ่อนโยน"
  },
  jewelryAdvice: [
    {
      title: "รหัสเพชรและอัญมณีคู่บุญ (The Emperor's Aura)",
      items: [
        "Primary Stone: เพชรน้ำงาม หรือ ไวท์แซฟไฟร์ (พลังดาว 6 ศรีจร) ปัดเป่าอุปสรรค",
        "Secondary Stone: อัญมณีสีเหลืองทอง (Yellow Sapphire/Citrine) ช่วยปิดการขายชิ้นใหญ่",
        "Weight & Carat: ควรมีเลข 6, 5 และ 1 หรือรวมแล้วได้ 15 (กำลังพระจันทร์)"
      ]
    }
  ],
  investmentAdvice: [
    {
      title: "กลยุทธ์การลงทุนหุ้น (Investment Blueprint)",
      items: [
        "Style: Value Investor (VI) หรือ DCA ในหุ้น Blue Chip พื้นฐานแกร่ง",
        "Sector: พลังงาน/เทคโนโลยี (ดาว 1) และ สินค้าพรีเมียม/ความงาม (ดาว 6)",
        "Checklist: เช็คสภาวะใจ (ไม่ Panic), เช็คความคุ้มค่า (ระยะยาว), เช็คพลังงานศรี"
      ]
    }
  ],
  wisdom: "คนชนะในตลาดหุ้น ไม่ใช่คนที่ฉลาดที่สุด แต่คือคนที่ 'นิ่ง' ที่สุดในจังหวะที่คนอื่นว้าวุ่น"
};

export const SYNERGY_DATA: SynergyContent = {
  connectionType: "Soulmate Connection (Friday-Friday)",
  description: "ทั้งคู่เกิดวันศุกร์เหมือนกัน (ดาว 6) ทำให้สื่อสารกันได้อย่างลึกซึ้ง มีรสนิยมสอดคล้องกันอย่างน่าอัศจรรย์ ส่งผลให้แบรนด์ MigiJames มีอัตลักษณ์ที่แข็งแกร่งและทรงพลังที่สุด",
  steps: [
    {
      title: "The Synergetic Flow (2569)",
      items: [
        "Migi is Sri for James: การฟังไอเดียและให้มิกิเป็นหน้าตาของแบรนด์จะนำโชคลาภมหาศาลมาให้เจมส์",
        "James is Utsaha for Migi: เจมส์จะเป็นแรงขับเคลื่อนและฐานรากที่มั่นคง ทำให้มิกิทำงานได้อย่างลื่นไหล",
        "Matrix Solution: เมื่อ 'ปัญญา' (เจมส์-5) ผสมกับ 'สุนทรียภาพ' (มิกิ-6) ผลลัพธ์คือความสำเร็จระดับจักรพรรดิ"
      ]
    }
  ],
  diamondAlchemy: {
    title: "The Diamond Alchemy Process",
    steps: [
      {
        title: "สกัดมวลสาร (Extraction)",
        description: "เปลี่ยน 'บาดแผล' ในอดีต (ดาว 7 เสาร์) ให้กลายเป็นทรัพยากรล้ำค่า",
        subItems: ["Deep Listening (ดาว 4) เข้าถึง Pain Point", "Perspective Shift เปลี่ยนมุมมองความทุกข์ให้เป็นบทเรียน"]
      },
      {
        title: "เจียระไน (The Faceting)",
        description: "เปลี่ยนความเจ็บปวด (ดาว 3 อังคาร) ให้กลายเป็นกระบวนการเรียนรู้ (ดาว 5 พฤหัส)",
        subItems: ["Human Communication 4 Levels", "จาก Self Healing สู่ Social Value"]
      },
      {
        title: "ขัดเงา (The Brilliance)",
        description: "ผลลัพธ์คือหลักสูตรที่ฮีลใจและสร้างความมั่งคั่ง (โสฬสมงคล 16)",
        subItems: ["เปลี่ยนถ่านให้เป็นเพชรยอดมงกุฎ", "ความสมดุลระหว่างโลกภายในและความมั่งคั่งภายนอก"]
      }
    ]
  },
  dualPower: {
    migi: "Storytelling, Energy Activation & Brand Face",
    james: "Business Structure, Technical Logic & Numerical Codes",
    result: "MigiJames: The Ultimate Amulet Jewelry Empire"
  }
};
