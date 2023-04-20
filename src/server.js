import { createServer } from 'miragejs'

createServer({
    routes() {
        this.post("/api/lessons", () => {
            return {
                code: 10,
                item: {
                    fName: 'Mustofa',
                    lName: 'Sachi',
                    progress: 21,
                    quiz: [
                        {
                            quiz_id: 1,
                            title: 'แบบทดสอบก่อนเรียน',
                            is_done: true,
                        },
                        {
                            quiz_id: 2,
                            title: 'แบบทดสอบหลังเรียน',
                            is_done: false,
                        },
                    ],
                    lessons: [
                        {
                            lesson_id: 1,
                            title: 'บทที่ 1: บทบัญญัติการแต่งงาน (นิกะฮฺ)',
                            video_path: 'https://www.youtube.com/watch?v=j942wKiXFu8',
                            progress: 100,
                        },
                        {
                            lesson_id: 2,
                            title: 'บทที่ 2: รูก่นนิกะฮฺ',
                            video_path: 'https://www.youtube.com/watch?v=kVeOpcw4GWY',
                            progress: 100,
                        },
                        {
                            lesson_id: 3,
                            title: 'บทที่ 3: สินสอด (มะฮัร)',
                            video_path: 'https://www.youtube.com/watch?v=9D1x7-2FmTA',
                            progress: 80,
                        },
                        {
                            lesson_id: 4,
                            title: 'บทที่ 4: การแต่งงานกับต่างศาสนิก',
                            video_path: 'https://www.youtube.com/watch?v=pnhO8UaCgxg',
                            progress: 20,
                        },
                        {
                            lesson_id: 5,
                            title: 'บทที่ 5: การจัดงานแต่งงาน (วาลีมะห์)',
                            video_path: 'https://www.youtube.com/watch?v=0sSYmRImgRY',
                            progress: 0,
                        },
                        {
                            lesson_id: 6,
                            title: 'บทที่ 5: การมีเพศสัมพันธ์',
                            video_path: 'https://www.youtube.com/watch?v=NbTrGcz4DW8',
                            progress: 0,
                        },
                        {
                            lesson_id: 7,
                            title: 'บทที่ 7: สิทธิหน้าที่ของคู่สามีภรรยา',
                            video_path: 'https://www.youtube.com/watch?v=0XSDAup85SA',
                            progress: 0,
                        },
                        {
                            lesson_id: 8,
                            title: 'บทที่ 8: การให้ปัจจัยยังชีพแก่ภรรยา (นาฟาเกาะห์)',
                            video_path: 'https://www.youtube.com/watch?v=4pO-HcG2igk',
                            progress: 0,
                        },
                        {
                            lesson_id: 9,
                            title: 'บทที่ 9: การหย่า (ตอล๊าก)',
                            video_path: 'https://www.youtube.com/watch?v=rb1GWqCJid4',
                            progress: 0,
                        },
                        {
                            lesson_id: 10,
                            title: 'บทที่ 10: ช่วงเวลาการรอ (อิดดะห์)',
                            video_path: 'https://www.youtube.com/watch?v=tHjxSVaj_wY',
                            progress: 0,
                        },
                        {
                            lesson_id: 11,
                            title: 'บทที่ 11: การคืนดี (รอเญาะ)',
                            video_path: 'https://www.youtube.com/watch?v=PHaECbrKgs0',
                            progress: 0,
                        },
                        {
                            lesson_id: 12,
                            title: 'บทที่ 12: การเปรียบเทียบภรรยากับมารดา (ซิฮาร)',
                            video_path: 'https://www.youtube.com/watch?v=-YpnB-zlkPU',
                            progress: 0,
                        },
                        {
                            lesson_id: 13,
                            title: 'บทที่ 13: คำกล่าวของสามีว่าภรรยามีชู้ (ลิอาน)',
                            video_path: 'https://www.youtube.com/watch?v=CWEOYFzgOJs',
                            progress: 0,
                        },
                        {
                            lesson_id: 14,
                            title: 'บทที่ 14: ค่าทำขวัญ (มัตอะห์)',
                            video_path: 'https://www.youtube.com/watch?v=gv9ugDJ1ynU',
                            progress: 0,
                        },
                        {
                            lesson_id: 15,
                            title: 'บทที่ 15: การบริหารจัดการมรดก (ฟิกห์มะวาริษ)',
                            video_path: 'https://www.youtube.com/watch?v=jQc_bTFZ5_I',
                            progress: 0,
                        },
                    ]
                },
                itemdetail: 'token',
                message: 'get data success!'
            }
        })

        this.post("/api/courses", () => {
            return {
                code: 10,
                item: {
                    username: 'Mustofa',
                    status: 2,
                    videoUrl: 'https://www.youtube.com/watch?v=d0qVXvjV8LM',
                    lecturer: 'ผศ.ดร.อิสมาอีล ราโอบ'
                },
                itemdetail: 'token',
                message: 'Success!'
            }
        })

        this.post('/api/Quiz', () => {
            return {
                code: 10,
                item: {
                    status: 0,
                    score: 8,
                    createAt: '24-Mar-2023 @ 10:30:53',
                    Quiz_Type: 'แบบทดสอบก่อนเรียน (Pretest)',
                    TimeOut: 5,
                    Quiz: [
                        {
                            question_id: 1,
                            title: 'ข้อใดกล่าวถูกต้องเกี่ยวกับบทบัญญัติการแต่งงานในอิสลาม',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก.วายิบ : มูฮำมัดมีความพร้อมและมีความสามารถและไม่มั่นใจว่าจะควบคุมอารมณ์ของตนได้'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ฮาร่อม: อิสมาอีลมั่นใจว่า เมื่อแต่งงานแล้วอาจจะก่อให้เกิดความไม่เป็นธรรมแก่ภรรยา'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. ซุนนะห์ : รอสดีไม่ปรารถนาจะแต่งงานหลายๆ คนได้'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. มักรุฮ์ : มุสลิมมีอารมณ์ที่จะแต่งงานและไม่มีค่าสินสมรส'
                                },
                            ],
                        },
                        {
                            question_id: 2,
                            title: 'รู่กนนีกะห์มีกี่ประการ',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. 3 ประการ'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. 4 ประการ'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. 5 ประการ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. 6 ประการ'
                                },
                            ],
                        },
                        {
                            question_id: 3,
                            title: 'ข้อใดกล่าวถูกต้องเกี่ยวกับทรัพย์สินที่จะมอบเป็นค่าสินสอด (มะฮัร)',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อามีนแอบไปเอาเงินของเพื่อนเพื่อมาเป็นค่าสินสอด'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. อนันขโมยเงินจากที่ทำงานมาเป็นค่าสินสอดในการแต่งงานโดยไม่ได้รับอนุญาต'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. ซัลมานนำเงินเก็บของตัวเองมาเป็นค่าสินสอนในการแต่งงาน'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. นาอีมนำรถของเพื่อนไปขายเพื่อมาเป็นค่าสินสอด'
                                },
                            ],
                        },
                        {
                            question_id: 4,
                            title: '4. ข้อใดกล่าวถูกต้องเกี่ยวกับการแต่งงานของต่างศาสนิก',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. ยาซีรได้กำหนดก่อนแต่งงานว่าจะไม่ให้ค่าสินสอดแก่ดรุณี'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. มุมีนะห์บอกว่าเป็นสาวโสดแต่ที่จริงแล้วเขาเป็นแม่หม้าย'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. รอฮานีได้แต่งงานกับพีรเดชที่เป็นไทยพุทธและได้กล่าวชาฮาดะห์เรียบร้อยแล้ว'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ถูกทุกข้อ'
                                },
                            ],
                        },
                        {
                            question_id: 5,
                            title: 'ข้อใดคือความหมายของคำว่า “วาลีมะห์”',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. ฟิรมันจัดโต๊ะจีนและเรียกเงินจากคนที่มากินในงาน'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. อัครอมได้จัดเลี้ยงอาหารขึ้นในพิธีการสมรส'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. อิหซานจัดเลี้ยงเด็กกำพร้าในมูลนิธิ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. อาอีเซาะห์ชวนเพื่อนมากินข้าวในงานขึ้นบ้านใหม่'
                                },
                            ],
                        },
                        {
                            question_id: 6,
                            title: 'ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับการตอบรับคำเชิญไปร่วมงานวาลีมะห์',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อัฟนานมาเชิญเพื่อนที่โรงเรียนด้วยตนเอง'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ฮิลมีเชิญเพื่อนเฉพาะคนรวยให้มางานแต่ง'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. ลุตฟีเชิญญาติ ๆ และเพื่อนบ้านให้มาร่วมงานแต่ง'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ซัลมาเชิญเพื่อน ๆ และให้แต่งกายให้เรียบร้อยในการมาร่วมงานแต่ง'
                                },
                            ],
                        },
                        {
                            question_id: 7,
                            title: 'ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับการมีเพศสัมพันธ์',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. การมีเพศสัมพันธ์จะต้องให้มีความเหมาะสม และพอดี'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ทั้งสองหาสถานที่และเวลาที่เหมาะสมสำหรับการมีเพศสัมพันธ์'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. ทั้งสองควรหยอกเย้าก่อนจะมีเพศสัมพันธ์เพื่อกระตุ้นอารมณ์ให้ครึกครื้นชุ่มฉ่ำ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. มีเพศสัมพันธ์ในกลางวันของเดือนรอมฎอนแต่ใช้สถานที่มิดชิด'
                                },
                            ],
                        },
                        {
                            question_id: 8,
                            title: 'หน้าที่ร่วมกันของสามีภรรยามีทั้งหมดกี่ประการ',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. 3 ประการ'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. 4 ประการ'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. 5 ประการ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. 6 ประการ'
                                },
                            ],
                        },
                        {
                            question_id: 9,
                            title: 'ข้อใดกล่าวไม่ถูกต้องเกี่ยวกับปัจจัยยังชีพ (นาฟาเกาะห์)',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อามีนชอบซื้อข้าวและอาหารมารับประทานคนเดียว'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. รอกีบซื้อของใช้ภายในบ้านมาให้ภรรยา'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. อามีรไปเที่ยวตลาดเพื่อไปซื้อ เนื้อ ปลา ผัก ให้ภรรยา'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. มะรูดิงชื้อเครื่องนุ่มห่มมาเซอร์ไพรส์ภรรยา'
                                },
                            ],
                        },
                        {
                            question_id: 10,
                            title: 'สาเหตุจากปัจจัยภายในข้อใดที่ทำให้ครอบครัวแตกแยก',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อัลวานีมีคู่ครองที่เหมาะสม'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ฮัฟเซาะห์ไม่มีความบกพร่องทางทางเพศ'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. รอกีเยาะห์โดนกดดันทางจิตใจ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. อาอีซะห์มีนิสัยดี'
                                },
                            ],
                        },
                        {
                            question_id: 11,
                            title: 'ข้อใดคือความหมายที่ถูกต้องของ “อิดดะห์”',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. เป็นช่วงระยะเวลาที่ภรรยาต้องรอคอย'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. เป็นช่วงเวลาทำความสะอาดมดลูกผู้หญิง'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. เพื่อสนองตอบพระบัญชาของพระองค์อัลลอฮ์(ซ.บ)'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ถูกทุกข้อ'
                                },
                            ],
                        },
                        {
                            question_id: 12,
                            title: 'เงื่อนไขของการคืนดี (รอเยาะ) มีกี่ประการ',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. 5 ประการ'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. 6 ประการ'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. 7 ประการ'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. 8 ประการ'
                                },
                            ],
                        },
                        {
                            question_id: 13,
                            title: 'ข้อใดกล่าวถูกต้องเกียวกับซิฮาร',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อบูบักรเปรียบเทียบคนข้างบ้านว่าเหมือนกับน้องสาวตนเอง'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. อูมัรเปรียบเทียบภรรยาของตนเหมือนกับครูที่สอนหนังสือ'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. อุสมานเปรียบเทียบภรรยาของตนเหมือนกับแม่ตนเอง'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. อาลีเปรียบเทียบครูของตนเหมือนกับเพื่อน'
                                },
                            ],
                        },
                        {
                            question_id: 14,
                            title: 'ข้อใดกล่าวถึง “ลิอาน”',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. ถ้อยคำที่กำหนดขึ้นโดยใช้เป็นหลักฐานสำหรับสามีที่กล่าวหาภรรยาว่ามีชู้ และเพื่อปกป้องศักดิ์ศรีของตน'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ถ้อยคำที่กล่าวขึ้นเองโดยสามีที่กล่าวหาภรรยาว่าไม่มีชู้ และเพื่อปกป้องศักดิ์ศรีของตน'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. การที่ผู้ชายคนหนึ่งเปรียบเทียบภรรยาของตน เหมือนกับผู้หญิงที่ห้ามแต่งงานคนใด'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ถ้อยคำที่กำหนดขึ้น โดยไม่ใช้เป็นหลักฐานสำหรับสามีที่กล่าวหาภรรยาว่ามีชู้'
                                },
                            ],
                        },
                        {
                            question_id: 15,
                            title: 'มัตอะห์ (ค่าทำขวัญ) มีความหมายว่าอย่างไร',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. ทรัพย์ที่ภรรยาที่ไม่จำเป็นต้องจ่ายให้กับสามีที่แยกทางกับตนด้วยการหย่า'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. ทรัพย์ที่สามีไม่จำเป็นต้องจ่ายให้กับภรรยาที่แยกทางกับตน'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. ทรัพย์ที่ภรรยาไม่จำเป็นต้องจ่ายให้กับสามีที่แยกทางกับตน'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ทรัพย์ที่สามีจำเป็นต้องจ่ายให้กับภรรยาที่แยกทางกับตนด้วยการหย่า หรือด้วยการแยกทาง'
                                },
                            ],
                        },
                        {
                            question_id: 16,
                            title: 'ข้อใดกล่าวถูกต้องเกี่ยวกับสาเหตุที่ทำให้มีสิทธิในการสืบมรดก',
                            choice: [
                                {
                                    choice_id: 1,
                                    choice_name: 'ก. อามีเนาะมีการสมรสที่ถูกต้องตามนิติบัญญัติอิสลาม มิใช่การสมรสตามกฎหมาย'
                                },
                                {
                                    choice_id: 2,
                                    choice_name: 'ข. อาดีละห์เป็นทายาทที่มีสิทธิรับมรดกในอิสลาม'
                                },
                                {
                                    choice_id: 3,
                                    choice_name: 'ค. อัดนานมีทาสอยู่ในครอบครองแล้วได้ปลดปล่อยทาสให้เป็นอิสระ เมื่อทาสที่เขาปล่อยไปถึงแก่ความตายและไม่มีผู้ใดรับมรดก ผู้ที่ปลดปล่อยเขาก็จะได้มีสิทธิ์รับมรดกของเขาได้'
                                },
                                {
                                    choice_id: 4,
                                    choice_name: 'ง. ถูกทุกข้อ'
                                },
                            ],
                        },
                    ]
                },
                itemdetail: 'token',
                message: 'success!'
            }
        })

        this.post('/api/QuizSubmit', () => {
            return {
                code: 10,
                item: {
                    score: 10,
                    createAt: '28-Mar-2023 @ 14:30:53'
                },
                itemdetail: 'token',
                message
            }
        })
    }
})