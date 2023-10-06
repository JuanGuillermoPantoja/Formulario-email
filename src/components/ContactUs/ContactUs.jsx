import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export const ContactUs = () => {

    const reForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = 'service_wlxdwhp';
        const templateId = 'template_dj0djo9'

        const apikey = 'UMh2PbMSBDgInrtGh'

        emailjs.sendForm(serviceId, templateId, reForm.current, apikey)
        .then( result => console.log(result.text) )
        .catch ( error => console.error(error) ) 
    }
  return (
    <>
        <form ref={reForm} action="" onSubmit={handleSubmit} className='flex items-center flex-col border-solid border-2 w-[320px]'>
            <div className=''>
                <h2>Contact Us</h2>
                <p>Please fill this form</p>
            </div>
            <fieldset className='w-11/12 border-solid border-2 mb-2 p-2 flex flex-col justify-center items-center'>
                <label htmlFor="">Name</label>
                <input className="w-11/12 pl-2" name="username" type="text" placeholder='Ejem: Pepito Perez' required/>
            </fieldset>
            <fieldset className='w-11/12 border-solid border-2 mb-2 p-2 flex flex-col justify-center items-center'>
                <label name='email'>Email</label>
                <input className="w-11/12 pl-2" name="email" type="email" placeholder='Ejem: pepitoPerez@gmail.com' required/>
            </fieldset>
            <fieldset className='flex justify-center w-11/12 border-solid border-2 p-2 mb-2'>
                <label htmlFor=""></label>
                <textarea className="w-11/12 pl-2" maxLength="500" placeholder='type you message' name='message' rows="5"></textarea>
            </fieldset>
            <button className='mb-2'>Send</button>
        </form>
    </>
  )
}
