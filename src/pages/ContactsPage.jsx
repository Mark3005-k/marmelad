import { useState } from "react"

function ContactsPage() {
  const [form, setForm] = useState({ name: "", mail: "", message: "" })
  const [error, setError] = useState({})
  const [isSent, setIsSent] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target 
    setForm({ ...form, [name]: value })
    }
  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = "Вкажіть ваше ім'я"
    if (!form.mail.includes("@")) newErrors.mail = "Введіть коректну пошту"
    if (form.message.trim().length<10) newErrors.message = "Опишіть задачу детальніше"
    setError(newErrors)
    return Object.keys(newErrors).length==0
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (!validate()) return
    setIsSent(true)
    setForm({ name: "", mail: "", message: "" })
  }

  

  return (
    <section className=" px-8 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-display md:text-4xl text-accent mb-10 font-bold">Зв'яжіться з нами</h1>
        <p className="mb-8 text-dark">Опишіть свою задачу, і ми вирішимо її в найшвидші терміни</p>
        {isSent ? (<div><p>Дякую за звернення</p> <button  onClick={()=>{setIsSent(false)}} className="btn-primary mb-5">Надіслати ще</button></div>) : (<form onSubmit={handleSubmit} className="bg-white space-y-5 p-5 rounded-md shadow-xl" >
          <div>
            <label className="block text-sm font-medium mb-3">Введіть ваше ім'я</label>
            <input
              type="text"
              name="name" 
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 border-2 py-1 rounded-full outline-none  focus:ring-accent transition-colors ${error.name ? 'border-red-500 focus:border-red-500': 'border-dark focus:border-accent focus:ring-2'}`}
            />
            {error.name && <p className="text-red-900 text-sm ">{error.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-3">Введіть вашу пошту</label>
            <input
              type="text"
              name="mail" 
              value={form.mail}
              onChange={handleChange}
              className={`w-full px-4 border-2 py-1 rounded-full outline-none  focus:ring-accent transition-colors ${error.name ? 'border-red-500 focus:border-red-500': 'border-dark focus:border-accent focus:ring-2'}`}            />
            {error.mail && <p className="text-red-900 text-sm ">{error.mail}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-3">Опишіть задачу</label>
            <textarea
              rows="5"
              type="text"
              name="message" 
              value={form.message}
              onChange={handleChange}
              className={`w-full resize-none px-4 border-2 py-1 rounded-sm outline-none  focus:ring-accent transition-colors ${error.name ? 'border-red-500 focus:border-red-500': 'border-dark focus:border-accent focus:ring-2'}`}            />
             {error.message && <p className="text-red-900  text-sm ">{error.message}</p>}
          </div>
          <button type="submit" className="btn-primary hover:scale-105 ">Відправити заявку</button>
        </form>)}
        
      </div>
    </section>
  )
}
 
export default ContactsPage