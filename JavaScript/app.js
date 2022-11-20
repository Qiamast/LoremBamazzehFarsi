let paragraphCountInput = document.querySelector(".input-paragraph-count")
let textarea = document.querySelector("#textarea")

let initialParagraph = `لورم بامزه یک متن یکم چرت اما کاربردی در صنعت چاپ و وب است.از این متن برای پر کردن جا خالی های موجود در  فضای بول شیت خالی طراحی استفاده میشود طراحان گشاد برای اینکه خود را زحمت ندهند چند خط پاراگراف بنویسند از لورم ساز بامزه فارسی استفاده میکنند تا طراحی خود را ماک کنند و در ماتحت کارفرما فرو کنند من هم مثل شما دارم تلاش میکنم یک پاراگراف چیزشعر بنویسم تا کپی پیست را تا تحت شعای پشت شما هدایت کنم صادقم ولی نیستم زیبا کلام و اینک این متن در اینجا به پایان میرسد.`

paragraphCountInput.addEventListener("change", (event) => {
  textarea.innerHTML = BamazzehLoremGenerator(event.target.value)
})

function BamazzehLoremGenerator(paragraphCount) {
  let paragraph = ''
  for (let i = 0; i < paragraphCount; i++){
    paragraph += initialParagraph.trim()
  
  }
  return paragraph
  
}